<template>
  <div class="wrap">
    <div class="left">
      <h2>vue-manage-system 后台管理系统开发总结</h2>
      <ul>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili" />
          </svg>
          <span class="ml5">
            <span class="toggleHide">发表于</span> 2018-09-12
          </span>
        </li>
        <span class="shortLine">|</span>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huaban" />
          </svg>
          <span class="ml5">
            <span class="toggleHide">分类于</span> vue
          </span>
        </li>
        <span class="shortLine">|</span>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yanjing" />
          </svg>
          <span class="ml5">
            <span class="toggleHide">阅读数</span>7200
          </span>
        </li>
        <span class="shortLine">|</span>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xihuan" />
          </svg>
          <span class="ml5">
            <span class="toggleHide">喜欢数</span>142
          </span>
        </li>
      </ul>
      <p>vue-manage-system，一个基于 Vue.js 和 element-ui 的后台管理系统模板，从2016年年底第一个commit，到现在差不多两年了，GitHub上也有了 5k star，也是这些让我有了持续更新的动力，其中也踩了很多坑，在这总结一下。</p>
      <div class="btn">阅读全文</div>
    </div>
    <div class="right">
      <img src="http://www.woke20.com/static/slider3.510ca3b8.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~@/global.less";
.wrap {
  width: 100%;
  display: flex;
  .left {
    width: 100%;
    color: @font-primary-color;
    h2 {
      position: relative;
      font-weight: 400;
      display: inline;
      font-size: 1.53rem;
      margin: 0;
      cursor: pointer;
      &::after {
        content: "";
        display: block;
        height: 2px;
        width: 0;
        position: absolute;
        background: black;
        opacity: 0;
        transition: all 0.3s;
      }
      &:hover::after {
        content: "";
        display: block;
        height: 2px;
        width: 100%;
        position: absolute;
        background: black;
        transition: all 0.3s;
        opacity: 1;
      }
    }

    ul {
      display: flex;
      padding: 0;
      .shortLine {
        margin: 0 0.3rem;
        line-height: 0.8rem;
        font-size: 0.7rem;
      }
      li {
        color: #999;
        font-size: 0.75rem;
        line-height: 0.75rem;
        .icon {
          width: 1rem;
          height: 1rem;
          vertical-align: -0.2rem;
          fill: currentColor;
          overflow: hidden;
        }
        @media screen and(max-width:1024px) {
          .toggleHide {
            display: none;
          }
        }
      }
    }

    .btn {
      background: @primary-color;
    }
  }
  .right {
    margin-left: 1rem;
    width: 200px;
    img {
      width: 200px;
      height: 200px;
    }
  }
  @media screen and(max-width: 768px) {
    .right {
      display: none;
    }
  }
}
</style>
