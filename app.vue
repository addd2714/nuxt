<script setup lang="ts">
useSeoMeta({
  title: '哔哩哔哩',
  description: '官方',   // 页面描述
  keywords: 'bilibili,哔哩哔哩,视频', // 页面关键词
})

</script>

<template>
  <!-- 基于文件的路由系统 -->

  <!-- 首页路由 index/index.vue -->
  <NuxtLink to="/">首页</NuxtLink>
  <!-- 视频页路由 video/index.vue -->
  <NuxtLink to="/video">视频页</NuxtLink>
  <!-- 页面路由 -->
  <NuxtPage />
</template>


<style>
:root {
  /* css 变量设置组件库主题 */
  --van-primary-color: #FB7299 !important; /* 主要颜色 */
}
</style>
