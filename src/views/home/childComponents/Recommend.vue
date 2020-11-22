<template>
  <div class="recommend">
    <div class="recommend-title"><i class="iconfont icon-xin"></i>猜你喜欢</div>
    <div class="recommend-list">
      <div class="recommend-img">
        <img
          src="http://img1.qunarzz.com/sight/p0/1507/52/0e7cb0d161c785b41bab3664bf8c692a.water.jpg_200x200_e3f7a99e.jpg"
          alt=""
        />
      </div>
      <div class="recommend-detail">
        <p>水濂山乐民游艺园</p>
        <div>
          <span class="iconfont icon-pingfen" v-for="i of 5" :key="i"></span>
          <span class="pinglun">{{ num }}条评论</span>
        </div>
        <div class="message">
          <span class="price">￥250</span>
          <span class="site">广州长隆</span>
        </div>
        <div class="decription">
          爱挑战的你怎能错过垂直过山车
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 100,
    };
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

  .recommend-list {
    display: flex;
    margin-left: 0.75rem;
    padding: .625rem 0;
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
      .iconfont {
        color: #ffb436;
      }
      .pinglun {
        margin-left: .75rem;
        font-size: 0.75rem;
      }
      .message {
        display: flex;
      }

      .price{
        color: rgb(245, 118, 15);
        flex: 1;
        margin-right: auto;
      }

      .site{
        font-size: .75rem;
      }

      .decription {
        color: #ff5555;
        font-size: .75rem;
      }
    }
  }
}
</style>