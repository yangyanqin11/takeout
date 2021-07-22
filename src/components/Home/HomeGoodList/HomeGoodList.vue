<template>
  <!-- 店铺列表 -->
  <div class="store">
    <ul class="store-title">
      <li
        class="title-item"
        :class="{ active: isactive == 0 }"
        @click="changeIndex($event, 0)"
      >
        全部美食
        <img :src="imgs.src13" alt="" />
      </li>
      <li
        class="title-item"
        :class="{ active: isactive == 1 }"
        @click="changeIndex($event, 1)"
      >
        附近店铺
        <img :src="imgs.src13" alt="" />
      </li>
      <li
        class="title-item"
        :class="{ active: isactive == 2 }"
        @click="changeIndex($event, 2)"
      >
        智能排序
        <img :src="imgs.src13" alt="" />
      </li>
    </ul>
    <div>
      <ul class="store-list" v-if="isactive == 0">
        <li class="store-item" @click="toDetail">
          <img :src="imgs.src14" alt="" />
          <div class="content">
            <h4>金寿司</h4>
            <p>日本料理 110/人</p>
            <p>成华区玉双路难一段 | 3.1KM</p>
          </div>
          <img :src="imgs.src15" alt="" class="phone" />
        </li>
        <li class="store-item" @click="toDetail">
          <img :src="imgs.src14" alt="" />
          <div class="content">
            <h4>金寿司</h4>
            <p>日本料理 110/人</p>
            <p>成华区玉双路难一段 | 3.1KM</p>
          </div>
          <img :src="imgs.src15" alt="" class="phone" />
        </li>
        <li class="store-item" @click="toDetail">
          <img :src="imgs.src14" alt="" />
          <div class="content">
            <h4>金寿司</h4>
            <p>日本料理 110/人</p>
            <p>成华区玉双路难一段 | 3.1KM</p>
          </div>
          <img :src="imgs.src15" alt="" class="phone" />
        </li>
        <li class="store-item" @click="toDetail">
          <img :src="imgs.src14" alt="" />
          <div class="content">
            <h4>金寿司</h4>
            <p>日本料理 110/人</p>
            <p>成华区玉双路难一段 | 3.1KM</p>
          </div>
          <img :src="imgs.src15" alt="" class="phone" />
        </li>
      </ul>
      <ul class="store-list" v-if="isactive == 1">
        <li class="store-item" @click="toDetail">
          <img :src="imgs.src14" alt="" />
          <div class="content">
            <h4>金寿司</h4>
            <p>日本料理 110/人</p>
            <p>成华区玉双路难一段 | 3.1KM</p>
          </div>
          <img :src="imgs.src15" alt="" class="phone" />
        </li>
        <li class="store-item" @click="toDetail">
          <img :src="imgs.src14" alt="" />
          <div class="content">
            <h4>金寿司</h4>
            <p>日本料理 110/人</p>
            <p>成华区玉双路难一段 | 3.1KM</p>
          </div>
          <img :src="imgs.src15" alt="" class="phone" />
        </li>
        <li class="store-item" @click="toDetail">
          <img :src="imgs.src14" alt="" />
          <div class="content">
            <h4>金寿司</h4>
            <p>日本料理 110/人</p>
            <p>成华区玉双路难一段 | 3.1KM</p>
          </div>
          <img :src="imgs.src15" alt="" class="phone" />
        </li>
        <li class="store-item" @click="toDetail">
          <img :src="imgs.src14" alt="" />
          <div class="content">
            <h4>金寿司</h4>
            <p>日本料理 110/人</p>
            <p>成华区玉双路难一段 | 3.1KM</p>
          </div>
          <img :src="imgs.src15" alt="" class="phone" />
        </li>
      </ul>
      <ul class="store-list" v-if="isactive == 2">
        <li class="store-item" @click="toDetail">
          <img :src="imgs.src14" alt="" />
          <div class="content">
            <h4>金寿司</h4>
            <p>日本料理 110/人</p>
            <p>成华区玉双路难一段 | 3.1KM</p>
          </div>
          <img :src="imgs.src15" alt="" class="phone" />
        </li>
        <li class="store-item" @click="toDetail">
          <img :src="imgs.src14" alt="" />
          <div class="content">
            <h4>金寿司</h4>
            <p>日本料理 110/人</p>
            <p>成华区玉双路难一段 | 3.1KM</p>
          </div>
          <img :src="imgs.src15" alt="" class="phone" />
        </li>
        <li class="store-item" @click="toDetail">
          <img :src="imgs.src14" alt="" />
          <div class="content">
            <h4>金寿司</h4>
            <p>日本料理 110/人</p>
            <p>成华区玉双路难一段 | 3.1KM</p>
          </div>
          <img :src="imgs.src15" alt="" class="phone" />
        </li>
        <li class="store-item" @click="toDetail">
          <img :src="imgs.src14" alt="" />
          <div class="content">
            <h4>金寿司</h4>
            <p>日本料理 110/人</p>
            <p>成华区玉双路难一段 | 3.1KM</p>
          </div>
          <img :src="imgs.src15" alt="" class="phone" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: {
        src13: require("../../../assets/imgs/sy_shuaixuan.png"),
        src14: require("../../../assets/imgs/dianpu.png"),
        src15: require("../../../assets/imgs/sy_dianhua_icon.png"),
      },
      isactive: 0,
    };
  },
  methods: {
    changeIndex(e, index) {
      this.isactive = index;
    },
    toDetail(){
       this.$router.push('/shopdetail')
    }
  },
  props: {
    //从父页面接收
  },
};
</script>

<style scoped>
.store {
  margin-top: 0.3rem;
  padding-right: 0.26rem;
  padding-left: 0.26rem;
  padding-bottom: 0.45rem;
}
.store-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.15rem;
  color: #888;
}
.store-title img {
  width: 0.1rem;
  height: 0.08rem;
}
.store-item {
  position: relative;
  display: flex;
  border-bottom: 1px dotted #e8eeec;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  color: #5d5757;
  font-size: 0.13rem;
}
.store-item img {
  border-radius: 0.1rem;
  width: 0.9rem;
  height: 0.9rem;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 0.05rem;
}
.content h4 {
  font-size: 0.16rem;
  color: #3f3c3c;
}
.phone {
  position: absolute;
  right: -20px;
  top: 0.1rem;
  width: 0.31rem;
  height: 0.31rem;
}
.store-title .active {
  font-weight: 600;
  color: #3f3c3c;
}
.overlay {
  height: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>