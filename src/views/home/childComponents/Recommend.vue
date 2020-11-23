<template>
  <div class="recommend">
    <div class="recommend-title"><i class="iconfont icon-xin"></i>猜你喜欢</div>
    <recommend-item
      v-for="item of recommendList"
      :key="item.id"
      :recommend="item"
    ></recommend-item>
  </div>
</template>

<script>
import RecommendItem from "@/components/content/recommend/RecommendItem";

export default {
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          title: "水濂山乐民游艺园",
          pinglun: "11245",
          price: 250,
          site: "长隆",
          decription: "爱挑战的你怎能错过垂直过山车",
        },
        {
          id: "0001",
          title: "水濂山乐民游艺园",
          pinglun: "11245",
          price: 250,
          site: "长隆",
          decription: "爱挑战的你怎能错过垂直过山车",
        },
        {
          id: "0001",
          title: "水濂山乐民游艺园",
          pinglun: "11245",
          price: 250,
          site: "长隆",
          decription: "爱挑战的你怎能错过垂直过山车",
        },
      ],
    };
  },
  components: {
    RecommendItem,
  },
};
</script>
<style lang="less" scoped>
.recommend {
  background: rgb(255, 255, 255);
  margin-top: 0.5rem;
  .recommend-title {
    padding: 1.2rem;
    .iconfont {
      color: red;
      font-size: 1.3rem;
    }
  }
}
</style>