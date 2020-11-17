<!-- 首页 -->
<template>
  <div id="home">
    <home-header>
      <template v-slot:left>
        <img src="~assets/images/home/back.svg" alt="">
      </template>
      <template v-slot:middle>
        <input type="text">
      </template>
      <template v-slot:right>
        下拉
        <img src="~assets/images/home/arrow.svg" alt="">
      </template>
    </home-header>
  </div>
</template>

<script>
import HomeHeader from "views/home/childComponents/Header";

export default {
  data() {
    return {};
  },
  components: {
    HomeHeader,
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>