<template>
  <div class="card-wrap">
    <div class="left">
      <router-link tag="h2" :to="`/article/${data._id}`">{{data && data.title}}</router-link>
      <ul>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili" />
          </svg>
          <span class="ml5">
            <span class="toggleHide">发表于</span>
            {{data.createDate | formatDate}}
          </span>
        </li>
        <span class="shortLine">|</span>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huaban" />
          </svg>
          <span class="ml5">
            <span class="toggleHide">分类于</span>
            {{getClassify}}
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
      <router-link tag="div" :to="`/article/${data._id}`" class="btn">阅读全文</router-link>
    </div>
    <div class="right">
      <img :src="data.cover_url" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  filters: {
    formatDate (date) {
      if (!date) return;
      let time = new Date(date);
      return `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`;
    }
  },
  computed: {
    getClassify: function () {
      let list = this.$store.state.users.classify;
      let id = this.$props.data.classify;
      if (id && list.length > 0) {
        return list.find((item, index) => item._id === id).name;
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/global.less';
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
        content: '';
        display: block;
        height: 2px;
        width: 0;
        position: absolute;
        background: black;
        opacity: 0;
        transition: all 0.3s;
      }
      &:hover::after {
        content: '';
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
    text-align: center;
    img {
      width: 100%;
      max-height: 200px;
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
