<template>
  <div class="weekend-item">
    <div class="weekend-img"><img :src="weekend.img" alt="" /></div>
    <div class="weekend-message">
      <p>{{ weekend.title }}</p>
      <p>{{ weekend.decription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    weekend: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="less" scoped>
.weekend-item {
  .weekend-img {
    height: 7.54rem;
    img {
      height: 100%;
    }
  }
  .weekend-message {
    padding: 0.44rem 0.63rem 0.63rem;
    p {
      height: 1.5rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    p:nth-of-type(1) {
      font-size: 0.857rem;
    }
    p:nth-of-type(2) {
      font-size: 0.75rem;
      color: #616161;
    }
  }
}
</style>