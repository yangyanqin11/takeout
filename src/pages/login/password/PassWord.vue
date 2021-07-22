<template>
  <div>
    <!-- 头部组件 -->
    <v-header :title="title" @goback='goback'></v-header>
    <!-- 主体区域 -->
    <div class="main">
      <ul class="list">
        <!-- 手机号码区域 -->
        <li class="item">
          <p>手机</p>
          <div class="item-type">
              <p>CN+86 ></p>
              <input type="text" >
          </div>
        </li>
        <!-- 验证码 -->
         <li class="item">
          <p>验证码</p>
          <div class="item-type">
              <input type="text" placeholder="请输入验证码">
              <div class="getCode">获取验证码</div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 箭头 -->
    <div class="arrow" @click="goNext">
        <img :src="imgs.src1" alt="箭头">
    </div>
  </div>
</template>

<script>
import vHeader from "../../../components/Header/Header.vue";
export default {
  data() {
    return {
      title: "忘记密码",
      imgs:{
          src1:require('../../../assets/imgs/nextB.png')
      }
    };
  },
  components: {
    vHeader,
  },
  methods: {
     goNext(){
         this.$router.push('/settingpassword')
     },
     goback(){
       this.$router.back()
     }
  },
};
</script>

<style scoped>
.main {
  margin-left: 0.32rem;
  margin-right: 0.32rem;
}
.item {
  margin-top: 0.3rem;
  color: #3f3c3c;
  font-size: 0.16rem;
  border-bottom: 1px solid #E8EEEC;
}
.item-type{
    display: flex;
    align-items: center;
    padding-top:.2rem;
    padding-bottom: .2rem;

} 
.item-type input{
    flex: 1;
    outline: none;
    border:0
}
.item-type .getCode{
    color: white;
    font-size: .15rem;
    padding:.06rem .11rem;
    background-color: #00CB88;
    align-self: flex-end;
}
.arrow{
    position: fixed;
    top:3.72rem;
    right: .25rem;
}
.arrow img{
    width: .68rem;
    height: .68rem;
}
</style>