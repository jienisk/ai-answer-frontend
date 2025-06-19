<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";



const route = useRoute();

/**
 *  全局初始化函数，有全局单次调用的代码，都可以写在这里
 */

 const doInit = () => {
  console.log("你好 欢迎来到杰尼SK的项目");
 }

 onMounted(() => {
  doInit();
 })


</script>

<style scoped></style>
