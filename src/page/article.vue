<template>
  <div class="article-wrap">
    <article>
      <header>
        <h1>vue-manage-system 后台管理系统开发总结</h1>
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
      </header>
      <section></section>
    </article>

    <div :class="{likeBtn:true,likeBtnActive:true}">
      <i class="el-icon-star-off"></i>
      <span class="ml5">喜欢</span>
      <span class="ml5 mr5">|</span>
      <span>123</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped >
@import "~@/global.less";
.article-wrap {
  padding-top: 4rem;
  header {
    text-align: center;
    h1 {
      font-size: 1.625rem;
      font-weight: 400;
      color: @font-primary-color;
    }
    ul {
      display: flex;
      padding: 0;
      justify-content: center;
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
  }

  .likeBtn {
    border-radius: 2.5rem;
    width: 10rem;
    height: 4rem;
    border: 1px solid #ea6f5a;
    color: #ea6f5a;
    text-align: center;
    line-height: 4rem;
    font-size: 1.14rem;
    margin: 0 auto;
  }
  .likeBtnActive {
    border-radius: 2.5rem;
    width: 10rem;
    height: 4rem;
    border: 1px solid #ea6f5a;
    color: white;
    background: #ea6f5a;
    text-align: center;
    line-height: 4rem;
    font-size: 1.14rem;
  }
}
</style>
