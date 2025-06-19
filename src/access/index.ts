import router from "@/router";
import { useLoginUserStore } from "@/store/userStore";
import ACCESS_ENUM from "./accessEnum";
import checkAccess from "./checkAccess";



//进入页面前，进行权限校验
router.beforeEach(async (to, from, next) => {
    // 获取当前登录用户
    const loginUserStore = useLoginUserStore();
    let loginUser = loginUserStore.loginUser;

    // 如果之前没有尝试获取登录用户信息，才能自动登录
    if(!loginUser || !loginUser.userRole){
        await loginUserStore.fetchLoginUser();
        loginUser = loginUserStore.loginUser;
    }

    // 当前页面需要的权限
    const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
    // 要跳转的页面必须登录
    if (needAccess !== ACCESS_ENUM.NOT_LOGIN){
        // 如果当前用户没有登录，则跳转到登录页面
        if(
            loginUser.userRole === ACCESS_ENUM.NOT_LOGIN ||
        !loginUser.userRole || !loginUser
        ){
            next(`user/login?redirect=${to.fullPath}`);
        }
        if(!checkAccess(loginUser, needAccess)){
            next("/noAuth")
            return;
        }
    }
    next();

})