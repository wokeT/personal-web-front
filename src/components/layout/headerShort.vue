<template>
  <div class="header-wrap">
    <span class="ml10">woke的博客</span>
    <i @click="toggle" class="el-icon-s-grid iconMenu"></i>
    <transition name="slide">
      <div v-show="visible" class="menu">
        <ul>
          <router-link tag="li" to="/home">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-home" />
            </svg>
            <span class="ml10">首页</span>
          </router-link>
          <router-link tag="li" to="/classify">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fenlei" />
            </svg>
            <span class="ml10">分类</span>
          </router-link>

          <router-link tag="li" to="/archives/article/all">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-guidangicon" />
            </svg>
            <span class="ml10">归档</span>
          </router-link>

          <router-link tag="li" to="/tag">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-biaoqian" />
            </svg>
            <span class="ml10">标签</span>
          </router-link>
          <router-link tag="li" to="/gplProject">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-github1" />
            </svg>
            <span class="ml10">开源</span>
          </router-link>
          <router-link tag="li" to="/about">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-guanyuwomen" />
            </svg>
            <span class="ml10">关于</span>
          </router-link>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      visible: false
    };
  },

  methods: {
    toggle: function() {
      this.visible = !this.visible;
    }
  }
};
</script>

<style lang="less" scoped >
@import "~@/global.less";

@media screen and(min-width: 1024px) {
  .header-wrap {
    display: none;
  }
}
.iconMenu {
  float: right;
  line-height: 3.56rem;
}
.header-wrap {
  background: @primary-color;
  min-height: 3.56rem;
  line-height: 3.56rem;
  color: white;
  font-size: 1.375rem;
  font-weight: bolder;
  padding: 0 1rem;
  .menu {
    background: @primary-color;
    border-top: 1px solid white;
    width: 100%;
    ul {
      margin: 0;
      padding: 1rem 0;
      li {
        border-radius: 5px;
        font-size: 1.2rem;
        line-height: 1.2rem;
        // height: 1.2rem;
        padding: 0.2rem 1rem;
        .icon {
          width: 0.87rem;
          height: 0.87rem;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
        }
        &:hover {
          background: #fff;
          color: black;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
