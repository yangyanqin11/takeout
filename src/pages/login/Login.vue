<template>
  <div class="wrap">
    <!-- 头部 -->
    <v-header :title="title"></v-header>
    <div class="logo-box">
      <img class="logo" :src="imgs.src2" alt="logo" />
    </div>
    <ul class="msg-list">
      <!-- 输入手机或者邮箱 -->
      <li class="msg-item">
        <img :src="imgs.src3" alt="头像" />
        <input type="text" placeholder="请输入手机或者邮箱" class="ipt" />
      </li>
      <!-- 输入密码 -->
      <li class="msg-item">
        <img :src="imgs.src4" alt="密码" />
        <input type="text" placeholder="请输入密码" class="ipt" />
      </li>
    </ul>
    <!-- 记住我 -->
    <div class="remember">
      <img :src="imgs.src5" alt="记住我" v-if="select" @click="select = false">
      <img :src="imgs.src6" alt="记住我" v-else @click="select = true">
      记住我
    </div>
    <!-- 登录 -->
    <div class="login">登录</div>
    <!-- 忘记密码 -->
    <div class="forget" @click="goPassWord()">
      <span>忘记密码?</span>
    </div>
    <ul class="other-type">
      <li><img :src="imgs.src7" alt="apple"></li>
      <li><img :src="imgs.src8" alt=""></li>
      <li><img :src="imgs.src9" alt=""></li>
    </ul>
    <div class="account">
      <p>还没有账号?</p>
      <span>立即注册</span>
    </div>
  </div>

</template>

<script>
import vHeader from "../../components/Header/Header.vue";
export default {
  data() {
    return {
      imgs: {
        src1: require("../../assets/imgs/go_back_black.png"),
        src2: require("../../assets/imgs/qbay_logo.png"),
        src3: require("../../assets/imgs/dl_youxiangshouji_icon.png"),
        src4: require("../../assets/imgs/password.png"),
        src5: require("../../assets/imgs/yyqh_weixuanzhong.png"),
        src6: require("../../assets/imgs/yyqh_xuanzhong.png"),
        src7: require("../../assets/imgs/zc_apple_button.png"),
        src8: require("../../assets/imgs/zc_google_button.png"),
        src9: require("../../assets/imgs/zc_line_button.png"),
      },
      select:false,
      title:'登录'
    };
  },
  components: {
    vHeader,
  },
  methods:{
    goPassWord(){
      this.$router.push('/password')
    }
  }
};
</script>

<style scoped>
.wrap {
  flex: 1;
  background-color: #eee;
}
.logo-box {
  text-align: center;
}
.logo {
  width: 0.79rem;
  height: 0.4rem;
}
.msg-list,.remember,.login,.forget,.other-type{
  margin-top: 0.3rem;
  margin-left: .32rem;
  margin-right: .32rem;
}
.msg-item {
  display: flex;
  align-items: center;
  margin-top: 0.4rem;
  background: white;
  height: 0.62rem;
  font-size: 0.16rem;
  color: #bababa;
  border-radius: 0.1rem;
}
.msg-item .ipt {
  /* height: 100%; */
  outline: none;
  border: 0;
}
.msg-item img {
  width: 0.17rem;
  height: 0.22rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
.remember {
  display: flex;
  align-items: center;
  font-size: .13rem;
  color: #5D5757;
}
.remember img{
  margin-right: .1rem;
  width:.18rem;
  height:.18rem
}
.login{
  height: .6rem;
  background-color: #00CB88;
  font-size: .16rem;
  text-align: center;
  line-height: .6rem;
  border-radius: .1rem;
  color: white;
}
.forget{
  color: #5D5757;
  font-size: .14rem;
  height: .14rem;
  text-align: center;
}
.forget span{
  padding-bottom: .02rem;
  border-bottom:1px solid #707070;
}
.other-type{
  display: flex;
  justify-content: space-around;
}
.other-type img{
  width: 1rem;
  height: 1rem;
}
.account{
  color:#9c9c9c;
  font-size: .15rem;
  display: flex;
  justify-content: center;
  padding-bottom: .5rem;
}
.account span{
  color: #01AC73;
  border-bottom: 1px solid #01AC73;
}
</style>