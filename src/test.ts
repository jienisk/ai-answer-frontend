import { ref } from "vue";
import { userLoginUsingPost } from "./api/userController";
import { useLoginUserStore } from "./store/userStore";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";


const form =  ref({
    userAccount: "",
    userPassword: ""
}as API.UserLoginRequest);

const loginUserStore = useLoginUserStore();
const router = useRouter();

const handleSubmit = async () => {
    console.log(form.value);
    const res = await userLoginUsingPost(form.value);
    if(res.data.code === 200){
        await loginUserStore.fetchLoginUser();
        message.success("登录成功");
        router.push({
            path: "/home",
            replace: true
        });
    }else{
        message.error("登录失败" + res.data.message);
    }
}


