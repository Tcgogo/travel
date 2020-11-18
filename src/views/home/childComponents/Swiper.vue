<!--  -->
<template>
  <div class="swiper">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide class="swiper-item" v-for="item of swiperList" :key="item.id"><img :src="item.imgurl" alt="" /></swiper-slide>
      <div
        class="swiper-pagination swiper-pagination-white"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
      },
      swiperList: [
        {
          id: "0001",
          imgurl:
            "https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fd456c89fc78e611aa3425ad87df066b.jpg_r_640x290x70_b1e45e32.jpg",
        },
        {
          id: "0002",
          imgurl:
            "https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/38f99d2aa3877cc71306360aa5cd2c4b.jpg_r_640x290x70_4aa8bfa7.jpg",
        },
        {
          id: "0003",
          imgurl:
            "https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/4e452b53c701ff229870a013861f648b.jpg_r_640x290x70_2814bb0a.jpg",
        },
        {
          id: "0004",
          imgurl:
            "https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/ea8eff677034434fa5f25a70152d2721.jpg_r_640x290x70_a13d0533.jpg",
        },
        {
          id: "0005",
          imgurl:
            "https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/87e7140a3ba24b1a4e7ff3260865638d.jpg_r_640x290x70_593cf6ad.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.swiper {
  // /deep/ .swiper-pagination-bullet-active {
  //   // background: rgb(255, 255, 255);
  // }
  .swiper-item {
    width: 100vw;
    height: 45.3vw;
    img {
      height: 100%;
      width: 100%;
      z-index: -1;
    }
  }
}
</style>