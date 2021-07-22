<template>
  <div>
    <v-header :title="title" @goback='goback'></v-header>
    <div class="main">
      <ul class="list">
        <li class="item">
          <p>设置新密码</p>
          <div class="item-type">
            <!-- 输入框数据的双向绑定 -->
            <input
              v-if="!toggle"
              type="password"
              placeholder="再次输入密码"
              v-model="password"
            />
              <input
              v-else
              type="text"
              placeholder="再次输入密码"
              v-model="password"
            />
            <!-- 错号 -->
            <div @click="clearInpt()" class="cha-box">
              <img :src="imgs.src4" class="cha" v-if="password" />
            </div>
            <!-- 查看输入的密码 -->
            <div @click="changeImage($event,false)" v-if="toggle" class="eye-box">
              <img :src="imgs.src2" class="eye" />
            </div>
            <div @click="changeImage($event,true)" v-else class="eye-box"><img :src="imgs.src3" class="eye" /></div>
          </div>
        </li>
        <li class="item">
          <p>再次输入密码</p>
         <div class="item-type">
            <!-- 输入框数据的双向绑定 -->
            <input
            v-if="!toggle1"
              type="password"
              placeholder="设置新密码"
              v-model="repeatPassword"
            />
              <input
              v-else
              type="text"
              placeholder="设置新密码"
              v-model="repeatPassword"
            />
            <!-- 错号 -->
            <div @click="clearInpt1()" class="cha-box">
              <img :src="imgs.src4" class="cha" v-if="repeatPassword" />
            </div>
            <!-- 查看输入的密码 -->
            <div @click="changeImage1($event,false)" v-if="toggle1" class="eye-box">
              <img :src="imgs.src2" class="eye" />
            </div>
            <div @click="changeImage1($event,true)" v-else class="eye-box"><img :src="imgs.src3" class="eye" /></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="arrow">
      <img :src="imgs.src1" alt="箭头" />
    </div>
  </div>
</template>

<script>
import vHeader from "../../../components/Header/Header.vue";
export default {
  data() {
    return {
      title: "设置新密码",
      toggle: false,
      password: "",
      toggle1:false,
      repeatPassword:'',

      imgs: {
        src1: require("../../../assets/imgs/nextA.png"),
        src2: require("../../../assets/imgs/zc_yanjing1.png"),
        src3: require("../../../assets/imgs/zc_yanjing2.png"),
        src4: require("../../../assets/imgs/zc_cha.png"),
      },
    };
  },
  components: {
    vHeader,
  },
  methods: {
    
    // 查看密码的切换
    changeImage(e,status) {
      console.log(e,status);
      this.toggle = status;
    },
    // 点击❌，清空输入框
    clearInpt(){
        this.password = ''
    },
    changeImage1(e,status) {
      console.log(e,status);
      this.toggle1 = status;
    },
    // 点击❌，清空输入框
    clearInpt1(){
        this.repeatPassword = ''
    },
    goback(){
        // this.$router.back();
        this.$router.back();
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
  border-bottom: 1px solid #e8eeec;
}
.item-type {
  display: flex;
  align-items: center;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}
.item-type input {
  flex: 1;
  outline: none;
  border: 0;
}
.item-type .cha-box,.eye-box{
    display: flex;
    justify-content: center;
    align-items: center;
    width: .4rem;
    height: .4rem;
    
}
.item-type .cha {
 
  width: 0.14rem;
  height: 0.14rem;
}
.item-type .eye {
  width: 0.22rem;
  height: 0.12rem;
}
.arrow {
  position: fixed;
  top: 3.72rem;
  right: 0.25rem;
}
.arrow img {
  width: 0.68rem;
  height: 0.68rem;
}
</style>