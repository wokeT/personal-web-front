<template>
  <div class="wrap">
    <div class="header">
      <ul class="fr menu">
        <router-link tag="li" to="/home">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-home" />
          </svg>
          <span class="ml5">首页</span>
        </router-link>

        <router-link tag="li" to="/classify">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenlei" />
          </svg>
          <span class="ml5">分类</span>
        </router-link>

        <router-link tag="li" to="/archives/article">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-guidangicon" />
          </svg>
          <span class="ml5">归档</span>
        </router-link>

        <router-link tag="li" to="tag">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-biaoqian" />
          </svg>
          <span class="ml5">标签</span>
        </router-link>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github1" />
          </svg>
          <span class="ml5">开源</span>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-guanyuwomen" />
          </svg>
          <span class="ml5">关于</span>
        </li>
      </ul>
      <h3>woke的博客</h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped >
@import "~@/global.less";
@media screen and(max-width: 1024px) {
  .wrap {
    display: none;
  }
}
.wrap {
  background: @primary-color;
  .header {
    width: 60%;
    margin: 0 auto;
    color: white;
    padding: 20px 10px 10px 10px;

    .menu {
      font-size: 0.81rem;
      display: flex;
      width: 26.34rem;
      li {
        width: 4.38rem;
        height: 1.6rem;
        line-height: 1.6rem;
        text-align: center;
        .icon {
          width: 1rem;
          height: 1rem;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
        }

        &:hover {
          background: rgb(219, 213, 213);
          color: black;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
