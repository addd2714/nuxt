<script setup lang="ts">
useSeoMeta({
  title: '哔哩哔哩',
  description: '官方',   // 页面描述
  keywords: 'bilibili,哔哩哔哩,视频', // 页面关键词
  // referrer: 'no-referrer', // 设置页面的 referrer 策略
})

</script>

<template>
  <!-- 缓存10级页面 提升用户体验。 -->
  <NuxtPage :keepalive="{ max: 10 }" />
</template>


<style lang="scss">
@use "@/assets/styles/base.scss" as *;
@use "@/assets/styles/iconfont.scss" as *;

:root {
  /* css 变量设置组件库主题 */
  --van-primary-color: #2d161c !important;
  /* 主要颜色 */
}
</style>
