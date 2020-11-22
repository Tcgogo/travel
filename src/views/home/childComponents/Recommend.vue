<template>
  <div class="recommend-title"><i class="iconfont icon-xin"></i>热销推荐</div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.recommend-title {
  padding: 0.8rem;
  background: rgb(238, 238, 238);
  //文本首行缩进
  text-indent: 0.2rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  .iconfont {
    color: red;
    font-size: 2rem;
  }
}
</style>