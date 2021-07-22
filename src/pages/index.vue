<template>
  <div class="wrap">
    <!-- 二级路由出口 -->
    <router-view></router-view>
    <!-- 页面布局 -->
    <!-- 动态类名的绑定，{}代表的是里面写对象，键值对组成 -->
    <ul class="footer">
      <li
        class="footer-item"
        :class="{ on: '/home' === $route.path }"
        @click="goTo('/home')"
      >
        <span
          class="iconfont icon-biaoqianA01_shouye-76"
          :class="{ on: '/home' == $route.path }"
        ></span>
        <p>首页</p>
      </li>
      <li
        class="footer-item"
        :class="{ on: '/order' === $route.path }"
        @click="goTo('/order')"
      >
        <span
          class="iconfont icon-dingdan"
          :class="{ on: '/order' == $route.path }"
        ></span>
        <p>订单</p>
      </li>
      <li
        class="footer-item"
        :class="{ on: '/mime' === $route.path }"
        @click="goTo('/mime')"
      >
        <span
          class="iconfont icon-wode"
          :class="{ on: '/mime' == $route.path }"
        ></span>
        <p>我的</p>
      </li>
    </ul>
    <div style="height: 0.5rem"></div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      this.$router.replace(path);
    },
  },
};
</script>

<style scoped>
.wrap {
  height: 100vh;
}
.footer {
  /* 弹性布局 */
  display: flex;
  /* 定位 */
  position: fixed;
  bottom:-0.05rem;
  left: 0;

  border-top: 1px solid #ccc;
  width: 100vw;
  height: 0.5rem;
  background-color: white;
}
.footer-item {
  padding-top: 0.1rem;
  flex: 1;
  text-align: center;
  font-size: 0.1rem;
  color: #a8a8a8;
}
.iconfont {
  font-size: 0.2rem;
  color: #a8a8a8;
}
.on {
  color: #00cb88;
}
</style>