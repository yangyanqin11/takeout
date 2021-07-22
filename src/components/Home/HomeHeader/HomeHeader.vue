<template>
  <header>
    <div class="left">
      <img :src="imgs.src1" alt="定位" />
      <p>天府三街福年广场</p>
    </div>
    <div class="right">
      <img :src="imgs.src2" alt="消息" />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      imgs: {
        src1: require("../../../assets/imgs/dp_dizhi_icon.png"),
        src2: require("../../../assets/imgs/sy_xiaoxi_icon.png"),
      },
    };
  },
};
</script>

<style scoped>
header {
  padding-right: .26rem;
  padding-left: .26rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header .left {
  display: flex;
  font-weight: 600;
  color: #3f3c3c;
  font-size: 0.17rem;
}
header .left img {
  width: 0.15rem;
  height: 0.18rem;
  padding-right: 0.1rem;
}
header .right {
  display: flex;
}
header .right img {
  width: 0.17rem;
  height: 0.21rem;
}
</style>