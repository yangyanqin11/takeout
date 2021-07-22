<template>
  <div class="header">
    <div @click="goback()" class='back'><img :src="imgs.src1" alt="返回箭头"/></div>
    <p class="title">{{ title }}</p>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: {
        src1: require("../../assets/imgs/go_back_black.png"),
      },
    };
  },
  props: {
    title: {
      type: String,
      default: "登录",
    },
  },
  methods: {
    goback(){
      this.$emit('goback')
    }
  },
};
</script>

<style scoped>
.header {
  padding-top: 0.56rem;
  display: flex;
  justify-content: space-between;
  padding-left: 0.32rem;
  padding-right: 0.32rem;
}
.back {
  width: 0.2rem;
  height: 0.2rem;
  display: flex;
  align-items: center;
  }
.back img{
  position: absolute;
  width: 0.16rem;
  height: 0.13rem;
}
.title {
  font-size: 0.17rem;
  color: #333;
  font-weight: 600;
}
</style>