<template>
  <div>
    <div class="bg">
      <img :src="imgs.src1" class="img" />
    </div>
    <!-- 优惠券 -->
    <div class="coupon">
      <h5>优惠券现实抢</h5>
      <div class="go">立刻前往 ></div>
    </div>
    <ul class="list">
     <li class="item">
         <div class="right">
          <img :src="imgs.src3" alt="积分兑换" class="icon">
         <p>积分兑换</p>
         </div>
         <img :src="imgs.src6" alt="更多" class="more">
     </li>
      <li class="item">
         <div class="right">
          <img :src="imgs.src3" alt="积分兑换" class="icon">
         <p>积分兑换</p>
         </div>
         <img :src="imgs.src6" alt="更多" class="more">
     </li>
      <li class="item">
         <div class="right">
          <img :src="imgs.src3" alt="积分兑换" class="icon">
         <p>积分兑换</p>
         </div>
         <img :src="imgs.src6" alt="更多" class="more">
     </li>
      <li class="item">
         <div class="right">
          <img :src="imgs.src3" alt="积分兑换" class="icon">
         <p>积分兑换</p>
         </div>
         <img :src="imgs.src6" alt="更多" class="more">
     </li>
     
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: {
        src1: require("../../assets/imgs/gr_mrtx.png"),
        src2: require("../../assets/imgs/gr_youhuiquan_banner.png"),
        src3: require("../../assets/imgs/gr_jfrh_icon.png"),
        src4: require("../../assets/imgs/gr_wdsc_icon.png"),
        src4: require("../../assets/imgs/gr_wdzj_icon.png"),
        src5: require("../../assets/imgs/gr_sz_icon.png"),
        src6: require("../../assets/imgs/gr_gengduo_icon.png"),
      },
    };
  },
};
</script>

<style scoped>
.bg {
  display: flex;
  justify-content: center;
  height: 2.8rem;
  background-image: url("../../assets/imgs/gr_nj.png");
  background-size: 100% 2.8rem;
  background-repeat: no-repeat;
}
.img {
  margin-top: 0.47rem;
  width: 1.15rem;
  height: 1.15rem;
}
.coupon {
  position: relative;
  height: 1.18rem;
  /* 背景图片 */
  background-image: url("../../assets/imgs/gr_youhuiquan_banner.png");
  background-size: 3.25rem 1.18rem;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: -1rem;
}
.coupon h5 {
  position: absolute;
  top: 0.3rem;
  left: 0.4rem;
  color: #fff;
  font-size: 0.19rem;
  font-weight: normal;
}
.coupon .go {
  position: absolute;
  top: 0.6rem;
  left: 0.4rem;
  color: #78470f;
  font-size: 0.13rem;
  background-color: #ffc72d;
  padding: 0.05rem 0.13rem;
  border-radius: .1rem;
}
.list{
    margin:0 .26rem;
}
.list .item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E8EEEC;
    height:.6rem ;
    font-size: .16rem;
    color: #3F3C3C;
}
.list .icon{
    width: .21rem;
    height: .21rem;
}
.list .more{
    width: .07rem;
    height:.11rem
}
.item .right{
    display: flex;
}
.item .icon{
    margin-right: .09rem;
}
</style>