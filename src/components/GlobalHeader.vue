<template>
    <a-row id="globalHeader" align="center" :wrap="false">
        <a-col flex="auto">
            <a-menu mode="horizontal" theme="dark" :selected-keys="selectedKeys" @menu-item-click="doMenuClick">
                <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
                    <div class="titleBar">
                        <img src="../assets/logo.png" class="logo">
                        <div class="title">AI 答题平台</div>
                    </div>
                </a-menu-item>
                <a-menu-item v-for="item in visibleRoutes" :key="item.path">
                    {{ item.name }}
                </a-menu-item>
            </a-menu>
        </a-col>
        <a-col flex="100px">
            <div v-if="loginUserStore.loginUser.id">
                {{ loginUserStore.loginUser.userName ?? "匿名用户" }}
            </div>
            <div v-else>
                <a-button type="primary" href="/user/login">登录</a-button>
            </div>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import checkAccess from '@/access/checkAccess';
import { routes } from '@/router/routes';
import { useLoginUserStore } from '@/store/userStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const loginUserStore = useLoginUserStore();

const router = useRouter();

const selectedKeys = ref(["/"]);
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

const visibleRoutes = routes.filter((item) =>{
    if(item.meta?.hideInMenu){
        return false;
    }
    // 根据权限过滤菜单
    if (!checkAccess(loginUserStore.loginUser, item.meta?.access as string)){
        return false;
    }
    return true;
})


const doMenuClick =(key : string) => {
    router.push({
        path: key,
    })
}

</script>

<style scoped>
#globalHeader {
    background-color: #001529;
}

.titleBar {
    display: flex;
    align-items: center;
}

.title {
    color: white;
    margin-left: 16px;
}

.logo {
    height: 48px;
}
</style>