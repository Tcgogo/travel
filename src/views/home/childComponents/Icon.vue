<!--  -->
<template>
  <div >
    <swiper>
      <swiper-slide class="icon" v-for="(items, index) of pages" :key="index">
        <div class="icon-item" v-for="item of items" :key="item.id">
          <img :src="item.imgurl" alt="" />
          <p>{{ item.message }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconList: [
        {
          id: "001",
          imgurl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
          message: "酒店",
        },
        {
          id: "002",
          imgurl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          message: "机票",
        },
        {
          id: "003",
          imgurl: "//s.qunarzz.com/homenode/images/touchheader/train.png",
          message: "火车票",
        },
        {
          id: "004",
          imgurl: "//s.qunarzz.com/homenode/images/touchheader/package.png",
          message: "度假",
        },
        {
          id: "005",
          imgurl: "//s.qunarzz.com/homenode/images/touchheader/piao.png",
          message: "景点门票",
        },
        {
          id: "006",
          imgurl:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          message: "海外酒店",
        },
        {
          id: "007",
          imgurl:
            "https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png",
          message: "低价机票",
        },
        {
          id: "008",
          imgurl:
            "https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png",
          message: "汽车票",
        },
        {
          id: "009",
          imgurl:
            "https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png",
          message: "自由行",
        },
        {
          id: "010",
          imgurl:
            "https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png",
          message: "攻略",
        },
        {
          id: "012",
          imgurl:
            "https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png",
          message: "攻略",
        },
        {
          id: "011",
          imgurl:
            "https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png",
          message: "攻略",
        },
      ],
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 10);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });

      return pages;
    },
  },
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.icon {
  /deep/ .swiper-container {
    width: 100%;
  }
  /deep/ p {
    font-size: .8rem;
  }
  margin-top: .3rem;
  width: 100vw;
  height: 50vw;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  .icon-item {
    img {
        max-width: 80%;
      }
  }
  
}
</style>