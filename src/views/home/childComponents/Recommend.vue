<template>
  <div class="recommend">
    <div class="recommend-title"><i class="iconfont icon-xin"></i>猜你喜欢</div>
    <recommend-item
      v-for="item of recommend"
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
    };
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
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