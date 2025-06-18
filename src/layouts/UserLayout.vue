<template>
    <div id="userLayout">
        <a-layout style="height: 100vh;">
            <a-layout-header class="header">
                <a-space>
                    <img src="../assets/logo.png" alt="" class="logo">
                    <div>AI 答题平台</div>
                </a-space>
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


</script>

<style scoped>
#userLayout {
    text-align: center;
    /* background: url("https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png") 0% 0% / 100% 100%; */
    background: url("../assets/bg.JPG") 0% 0% / 100% 100%;
}

#userLayout .logo {
    height: 48px;
}

#userLayout .header {
    margin-top: 16px;
    font-size: 21px;
}


.content {
    margin-bottom: 28px;
    padding: 20px;
}

.footer {
    background-color: #efefef;
    text-align: center;
    padding: 16px;
}
</style>