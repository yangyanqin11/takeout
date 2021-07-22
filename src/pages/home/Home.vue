<template>
  <div class="wrap">
    <!-- 头部 -->
    <home-header></home-header>
    <!-- 输入框 -->
    <home-search @search="search"></home-search>
    <!-- 导航条 -->
    <div class="nav-box">
      <ul class="nav">
        <li class="nav-item" :class="{ current: current == 0 }">
          <img :src="imgs.src5" alt="" />
          <p @click="changeType($event, 0)">北京料理</p>
        </li>
        <li class="nav-item" :class="{ current: current == 1 }">
          <img :src="imgs.src6" alt="" />
          <p @click="changeType($event, 1)">台湾料理</p>
        </li>
        <li class="nav-item" :class="{ current: current == 2 }">
          <img :src="imgs.src7" alt="" />
          <p @click="changeType($event, 2)">上海料理</p>
        </li>
        <li class="nav-item" :class="{ current: current == 3 }">
          <img :src="imgs.src8" alt="" />
          <p @click="changeType($event, 3)">广东料理</p>
        </li>
        <li class="nav-item" :class="{ current: current == 4 }">
          <img :src="imgs.src9" alt="" />
          <p @click="changeType($event, 4)">福建料理</p>
        </li>
      </ul>
    </div>
    <!-- 精选好店 -->
    <div class="good-store">
      <div>
        <div class="title-left">精选好店</div>
      </div>
      <div class="food-box">
        <ul class="food-list">
          <li class="food-item">
            <img :src="imgs.src10" alt="" />
            <div class="mask">
              <h5>汉斯的汉堡店</h5>
              <div class="des">
                <span>30KM | 月售326</span><img :src="imgs.src12" alt="" />
              </div>
            </div>
          </li>
          <li class="food-item">
            <img :src="imgs.src10" alt="" />
            <div class="mask">
              <h5>汉斯的汉堡店</h5>
              <div class="des">
                <span>30KM | 月售326</span><img :src="imgs.src12" alt="" />
              </div>
            </div>
          </li>
          <li class="food-item">
            <img :src="imgs.src10" alt="" />
            <div class="mask">
              <h5>汉斯的汉堡店</h5>
              <div class="des">
                <span>30KM | 月售326</span><img :src="imgs.src12" alt="" />
              </div>
            </div>
          </li>
          <li class="food-item">
            <img :src="imgs.src10" alt="" />
            <div class="mask">
              <h5>汉斯的汉堡店</h5>
              <div class="des">
                <span>30KM | 月售326</span><img :src="imgs.src12" alt="" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 店铺区域 -->
    <home-good-list :show="show" ></home-good-list>

    <!-- 遮罩层区域 -->
    <van-overlay
      :show="show"
      @click="show = false"
      @touchmove.prevent
      @mousewheel.prevent
    >
      <div class="wrapper" @click.stop>
        <!-- 头部区域 -->
        <home-header></home-header>
        <!-- 输入框 ，当弹出此页面的时候输入框自动聚焦-->
        <home-search autofocus></home-search>
        <van-dropdown-menu active-color="#01AC73" :overlay=false>
          <van-dropdown-item v-model="value1" :options="option1" class="on"/>
          <van-dropdown-item v-model="value2" :options="option2" class="on"/>
          <van-dropdown-item v-model="value3" :options="option3" class="on"/>
        </van-dropdown-menu>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import HomeHeader from "../../components/Home/HomeHeader/HomeHeader.vue";
import HomeSearch from "../../components/Home/HomeSearch/HomeSearch.vue";
import HomeGoodList from "../../components/Home/HomeGoodList/HomeGoodList.vue";
export default {
  data() {
    return {
      imgs: {
        src5: require("../../assets/imgs/sy_bjfood_icon.png"),
        src6: require("../../assets/imgs/sy_twfood_icon.png"),
        src7: require("../../assets/imgs/sy_shfood_icon.png"),
        src8: require("../../assets/imgs/sy_gdfood_icon.png"),
        src9: require("../../assets/imgs/sy_fjfood_icon.png"),
        src10: require("../../assets/imgs/hutongxiaochuan.png"),
        src12: require("../../assets/imgs/shoucang.png"),
        src16: require("../../assets/imgs/sy_shuaixuan1.png"),
      },
      current: 0,
      show: false,
      value1: 0,
      value2: 0,
      value3: 0,
      switch1: false,
      switch2: false,
      option1: [
        { text: '全部美食', value: 0 },
        { text: '北京料理', value: 1 },
        { text: '四川料理', value: 2 },
        { text: '上海料理', value: 3 },
        { text: '广东料理', value: 4 },
        { text: '云南料理', value: 5 },
        { text: '湖南料理', value: 6 },
        { text: '西北料理', value: 7 },
        { text: '福建料理', value: 8 },
        { text: '台湾料理', value: 9 },
      ],
         option2: [
        { text: '附近店铺(智能范围)', value: 0 },
        { text: '500米', value: 1 },
        { text: '1000米', value: 2 },
        { text: '2000米', value: 3 },
        { text: '5000米', value: 4 },
      ],
         option3: [
        { text: '智能排序', value: 0 },
        { text: '距离优先', value: 1 },
      ],
    };
  },
  methods: {
    changeType(e, index) {
      console.log(e, index);
      this.current = index;
    },
    search() {
      // 当点击搜索的时候，遮罩层显示
      this.show = true;
    }
  },
  components: {
    HomeHeader,
    HomeSearch,
    HomeGoodList,
  },
};
</script>

<style scoped>
.wrap {
  padding-top: 0.5rem;
}

.nav-box {
  padding-left: .26rem;
  padding-right: 0;
  overflow-x: scroll;
  overflow-y: hidden;
}
.nav-box .nav {
  white-space: nowrap;
  width: 10000%;
  font-size: 0.14rem;
  color: #3f3c3c;
}
.nav-item {
  text-align: center;
  float: left;
  padding-right: 0.24rem;
}
.nav img {
  width: 0.42rem;
  height: 0.36rem;
  padding-bottom: 0.15rem;
}
.good-store {
  padding-left: .26rem;
  margin-top: 0.3rem;
  font-size: 0.16rem;
  color: #3f3c3c;
}
.title-left {
  padding-left: 0.1rem;
  border-left: 0.05rem solid #00cb88;
}
.food-box {
  width: 100%;
  margin-top: 0.15rem;
  overflow-x: scroll;
  overflow-y: hidden;
}
.food-list {
  width: 10000%;
}
.food-item {
  float: left;
  margin-right: 0.15rem;
  position: relative;
  width: 1.88rem;
  height: 2.18rem;
}
.food-item img {
  width: 100%;
  height: 100%;
}
.food-item .mask {
  position: absolute;
  bottom: 0.24rem;
  left: 0.26rem;
}
.mask {
  font-size: 0.11rem;
  color: #979797;
  /* background-color: red; */
}
.mask h5 {
  font-size: 0.12rem;
  color: white;
  padding-bottom: 0.1rem;
}
.mask img {
  margin-left: 0.3rem;
  width: 0.18rem;
  height: 0.18rem;
}

.current {
  border-bottom: 3px solid #00cb88;
  padding-bottom: 0.05rem;
  border-radius: 0.015rem;
}

.wrapper {
  background-color: white;
  padding-top: 0.5rem;
  margin-bottom: .5rem;
}
.wrap>>>.van-overlay{
height: calc(100% - .45rem);
}
.wrap>>>van-dropdown-menu>>>.van-dropdown-menu__bar--opened{
   z-index:12

}
</style>