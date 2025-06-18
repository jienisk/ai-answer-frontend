<template>
  <div id="home">
    {{ a }}
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

const a = 123123;
</script>

<style scoped>
#home {
  background-color: aliceblue;
}
</style>
