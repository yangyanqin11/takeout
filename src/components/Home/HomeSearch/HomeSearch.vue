<template>
  <div class="search-box">
    <div class="search">
      <img :src="imgs.src3" alt="" />
      <input type="text"
        placeholder="请输入店铺 / 菜品"
        :value="keyWord"
        @click="search"
      />
    </div>
    <div class="erweima"><img :src="imgs.src4" alt="" /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: {
        src3: require("../../../assets/imgs/cy_chaozhao_icon.png"),
        src4: require("../../../assets/imgs/saoerweima.png"),
      },
       keyWord:''
    };
  },
  methods:{
      search(){
         this.$emit('search')
      }
  }
};
</script>

<style scoped>
.search-box {
  /* padding-right: 0.26rem; */
  padding-left: .26rem;
  font-size: .14rem;
  height: 1rem;
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search {
  height: 0.6rem;
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 0.1rem;
}
.search input {
  flex: 1;
  background-color: #f9f9f9;
  
  height: 0.6rem;
  outline: none;
  border: 0;
  border-radius: 0.1rem;
}
.search-box .search img {
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  width: 0.19rem;
  height: 0.19rem;
}
.search-box .erweima img {
  width: 0.74rem;
  height: 0.95rem;
}
</style>