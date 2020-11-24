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
    <recommend></recommend>
  </div>
</template>

<script>
import HomeHeader from "views/home/childComponents/Header";
import HomeSwiper from "views/home/childComponents/Swiper";
import HomeIcon from "views/home/childComponents/Icon";
import Recommend from "views/home/childComponents/Recommend";

import {getHomeMulidata} from "network/home";

export default {
  data() {
    return {};
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    Recommend
  },
  mounted() {
     getHomeMulidata().then((value,err) => {
       console.log(value);
     })
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>