<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <weekend-item
      v-for="item of weekend"
      :key="item.id"
      :weekend="item"
    ></weekend-item>
  </div>
</template>

<script>
import WeekendItem from "@/components/content/recommend/WeekendItem";

export default {
  data() {
    return {
    };
  },
  props: {
    weekend: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    WeekendItem,
  },
};
</script>
<style lang="less" scoped>
.weekend {
  background: rgb(255, 255, 255);
  .weekend-title {
    height: 2.5rem;
    display: flex;
    align-items: center;
    padding-left: 0.81rem;
    background:rgb(238, 238, 238);
  }
  
}
</style>