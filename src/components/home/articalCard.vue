<template>
  <div class="card-wrap">
    <div class="left">
      <h2>{{data && data.title}}</h2>
      <ul>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili" />
          </svg>
          <span class="ml5">
            <span class="toggleHide">发表于</span>
            {{data && getDate}}
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
            <span class="toggleHide">阅读数</span>
            {{data && data.readCount}}
          </span>
        </li>
        <span class="shortLine">|</span>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xihuan" />
          </svg>
          <span class="ml5">
            <span class="toggleHide">喜欢数</span>
            {{data && data.star}}
          </span>
        </li>
      </ul>
      <p class="mt20 content">{{data && data.info}}</p>
      <div class="btn">阅读全文</div>
    </div>
    <div class="right">
      <img :src="data.cover_url" alt />
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    data: Object
  },
  computed: {
    getDate: ()=> {
      // return moment(date).format("YYYY-MM-DD");
      // return this.props.data
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/global.less";
.card-wrap {
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 6rem;
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

    .content {
      font-size: 0.97rem;
      line-height: 2;
    }

    .btn {
      background: @primary-color;
      width: 5.5rem;
      height: 2.13rem;
      line-height: 2.13rem;
      text-align: center;
      color: white;
      font-size: 0.85rem;
      &:hover {
        cursor: pointer;
        opacity: 0.9;
      }
    }
  }
  .right {
    margin-left: 1rem;
    width: 200px;
    height: 200px;
    overflow: hidden;
    img {
      width: 200px;
      height: 200px;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.2);
        transition: all 0.3s;
      }
    }
  }
  @media screen and(max-width: 768px) {
    .right {
      display: none;
    }
  }
}
</style>
