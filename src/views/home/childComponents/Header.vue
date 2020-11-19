<!--  -->
<template>
  <div class="header">
    <div class="left"><slot name="left"></slot></div>
    <div class="middle"><slot name="middle"></slot></div>
    <div class="right " :class="{ rotateStart: isClick, rotateEnd: !isClick }" @click="imgRotate"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClick: false,
    };
  },
  methods: {
    imgRotate() {
      this.isClick = !this.isClick;
    }
  }
};
</script>
<style lang="less" scoped>

.header {
  width: 100vw;
  display: flex;
  height: 3.29rem;
  background-color: rgb(50, 177, 250);
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 4.57rem;
    img {
      max-width: 80%;
      max-height: 60%;
    }
  }
  .middle {
    flex: 1;
    display: flex;
    justify-content: start;
    align-items: center;
    input {
      width: 90%;
      height: 70%;
      border: none;
      outline: none;
      border-radius: 5px;
    }
  }
  .right {
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 4.29rem;
    img{
      max-width: 40%;
      transform: rotate(-90deg);
    } 
  }
}

@keyframes rotateStart{
  0% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes rotateEnd{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-90deg);
  }
}

.rotateStart>img{
  animation: rotateStart .5s forwards;
}

.rotateEnd>img {
  animation: rotateEnd .5s forwards;
}
</style>