<template>
  <div class="wrap">
    <span>©2019</span>
    <span class="ml10">蜀ICP备 18039672号</span>
    <span class="ml10 bottom">
      <img src="@/assets/images/beian.png" />川公网安备 51010702001398号
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import '~@/global.less';
.wrap {
  background: @primary-color;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  color: white;
  text-align: center;
  font-size: 0.8rem;
  vertical-align: baseline;
}
.bottom {
  img {
    vertical-align: -0.5em;
  }
}
</style>
