<script setup lang="ts">
const { params } = useRoute()
console.log(params);

const { data: detail } = useFetch(`/api/video/${params.id}`)
const barrageList = ref([
    { id: 100, text: '轻量' },
    { id: 101, text: '可定制的' },
    { id: 102, text: '移动端' },
    { id: 103, text: 'Vue' },
    { id: 104, text: '组件库' },
    { id: 105, text: 'VantUI' },
    { id: 106, text: '666' },
])
const barrageRef =ref()
const onPlay = () => {
    // 播放时发送弹幕
 barrageRef.value?.play()
}

const onPause = () => {
    // 播放时发送弹幕
 barrageRef.value?.onPause()
}
//SEO 优化
useSeoMeta({
    title: `${detail.value?.title || '视频详情'}--bilibili`,
})
console.log(detail.value);

</script>

<template>
    <!-- Sticky 粘性布局 -->
    <van-sticky>
        <!-- 头部 -->
        <AppHeader />
        <!-- 弹幕 -->
        <van-barrage v-model="barrageList" :auto-play="false" ref="barrageRef">
            <!-- 视频 -->
            <video controls class="video-play" ref="videoRef" :poster="detail?.pic" @play="onPlay" @pause="onPause"
                src="https://video.pearvideo.com/mp4/third/20230706/cont-1784445-12033417-151259-hd.mp4"></video>
        </van-barrage>
    </van-sticky>
    <!-- 标题作者信息 -->
    <div class="info">
        <h1 class="title-text">{{ detail?.title }}</h1>
        <div class="body">
            <div class="author">
                <img class="avatar" :src="detail?.author.face" />
                <span class="name">{{ detail?.author.name }}</span>
            </div>
        </div>
    </div>
    <!-- 相关推荐 -->
    <div class="relate">
        <h3 class="relate-title">相关推荐</h3>
        <div class="relate-list">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.video-play {
    width: 100vw;
    height: auto;
    object-fit: contain;
    background-color: #fff;
}

.info {
    padding: 10px;
    border-bottom: 1px solid #eee;

    .title-text {
        font-size: 16px;
        font-weight: normal;
    }

    .body {
        display: flex;
        margin-top: 20px;
        justify-content: space-between;
        align-items: center;
    }

    .author {
        display: flex;
        align-items: center;

        .avatar {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: 1px solid #ccc;
        }

        .name {
            margin-left: 10px;
            font-size: 14px;
        }
    }
}

.relate {
    .relate-title {
        height: 32px;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: normal;
        padding: 0 10px;
        color: #333;
    }

    .relate-list {
        display: flex;
        flex-wrap: wrap;
        padding: 0 5px;
    }
}
</style>