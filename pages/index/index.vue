<script setup lang="ts">
import type { RootObject } from '~/types/video'
const list = ref<RootObject[]>([]);
const loading = ref(false);
const finished = ref(false);
// 异步更新数据
// setTimeout 仅做示例，真实场景中一般为 ajax 请求
let page = 1
let pageSize = 20
const onLoad = () => {
    loading.value = false;
    const data = videoList.value?.slice((page - 1) * pageSize, page * pageSize) as RootObject[]
    list.value.push(...data)
    page++
    if (videoList.value?.length === list.value.length) {
        finished.value = true
    } else {
        finished.value = false
    }
};
const { data: channelList } = await useFetch('/api/channel')

const { data: videoList } = await useFetch('/api/video')
onLoad()
</script>

<template>
    <!-- 公共头部 -->
    <AppHeader />
    <!-- 频道模块 -->
    <van-tabs>
        <van-tab v-for="item in channelList!.channel" :key="item.id" :title="item.name" />
    </van-tabs>
    <!-- 视频列表 -->

    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="video-list">
            <AppVideo v-for="item in videoList" :key="item.aid" :item="item" />
        </div>
    </van-list>

</template>

<style lang="scss">
// 公共头部

// 视频列表
.video-list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 5px;
}


</style>