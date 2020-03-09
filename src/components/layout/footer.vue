<template>
  <div class="wrap">
    <span>©2019</span>
    <a href="http://www.beian.miit.gov.cn" class="ml10">蜀ICP备 18039672号</a>
    <a href="http://www.beian.gov.cn/portal/registerSystemInfo" class="ml10 bottom">
      <img src="@/assets/images/beian.png" />川公网安备 51010702001398号
    </a>
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
a {
  color: #ffffff;
}
.bottom {
  img {
    vertical-align: -0.3em;
  }
}
</style>
