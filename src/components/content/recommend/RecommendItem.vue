<!--  -->
<template>
  <div class="recommend-list">
    <div class="recommend-img">
      <img
        :src="recommend.img"
        alt=""
      />
    </div>
    <div class="recommend-detail">
      <p>{{ recommend.title }}</p>
      <div>
        <span class="iconfont icon-pingfen" v-for="i of 5" :key="i"></span>
        <span class="pinglun">{{ recommend.pinglun }}条评论</span>
      </div>
      <div class="message">
        <span class="price">{{ recommend.price | price }}</span>
        <span class="site">{{ recommend.site }}</span>
      </div>
      <div class="decription">{{ recommend.decription }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    recommend: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    price(num) {
      if(!isNaN(Number(num))){
        return "￥" + num;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.recommend-list {
  display: flex;
  margin-left: 0.75rem;
  padding: 0.625rem 0;
  .recommend-img {
    width: 6.25rem;
    img {
      width: 100%;
    }
  }

  .recommend-detail {
    padding-left: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .iconfont {
      color: #ffb436;
    }
    .pinglun {
      margin-left: 0.75rem;
      font-size: 0.75rem;
    }

    .price {
      color: rgb(245, 118, 15);
    }

    .site {
      font-size: 0.75rem;
      position: absolute;
      right: 0.63rem;
      margin-top: .2rem;
    }

    .decription {
      color: #ff5555;
      font-size: 0.75rem;
    }
  }
}
</style>