<template>
    <div id="basicLayout">
        <a-layout style="height: 100vh;">
            <a-layout-header class="header">
                <GlobalHeader />
            </a-layout-header>
            <a-layout-content class="content">
                <router-view />
            </a-layout-content>
            <a-layout-footer class="footer">
                <a href="https://github.com/jienisk" target="_blank">jienisk</a>
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue';


</script>

<style scoped>
#basicLayout {
    
}

#basicLayout .header {
    margin-bottom: 16px;
    box-shadow: #000000 1px 1px 5px;
    color: white;
}

.content {
    max-width: 1200px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    background-color: linear-gradient(to right, #fefefe, #fff);
    margin-bottom: 28px;
    padding: 20px;
}

.footer {
    background-color: #000000;
    text-align: center;
    padding: 16px;
    font-size: 20px;
    box-shadow: #000000 1px 1px 10px;
}

.footer a {
    color: white;
    text-decoration: none;
}
</style>