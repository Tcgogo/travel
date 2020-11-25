<!-- 首页 -->
<template>
  <div id="home">
    <home-header>
      <template v-slot:left>
        <img src="~assets/images/home/back.svg" alt="" />
      </template>
      <template v-slot:middle>
        <input type="text" />
      </template>
      <template v-slot:right>
        下拉
        <img src="~assets/images/home/arrow.svg" alt="" />
      </template>
    </home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <recommend :recommend="recommend"></recommend>
    <weekend :weekend="weekend"></weekend>
  </div>
</template>

<script>
import HomeHeader from "views/home/childComponents/Header";
import HomeSwiper from "views/home/childComponents/Swiper";
import HomeIcon from "views/home/childComponents/Icon";
import Recommend from "views/home/childComponents/Recommend";
import Weekend from "views/home/childComponents/Weekend";

import { getHomeMulidata } from "network/home";

export default {
  data() {
    return {
      recommend: null,
      weekend: null,
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    Recommend,
    Weekend,
  },
  mounted() {
    getHomeMulidata().then((value) => {
      this.recommend = value.data.data.recommendList;
      this.weekend = value.data.data.weekend;
      console.log(this.weekend);
    });
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>