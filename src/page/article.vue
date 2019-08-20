<template>
  <div class="article-wrap">
    <article v-show="!loading">
      <header>
        <h1>{{data.title}}</h1>
        <ul>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-rili" />
            </svg>
            <span class="ml5">
              <span class="toggleHide">发表于</span>
              {{data && $moment(data.updateDate).format('YYYY-MM-DD')}}
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
      </header>
      <section class="section" v-html="data.content"></section>
    </article>

    <div @click="starHandle" v-show="!loading" :class="{likeBtn:true,likeBtnActive:star}">
      <i class="el-icon-star-off"></i>
      <span class="ml5">喜欢</span>
      <span class="ml5 mr5">|</span>
      <span>{{data.star}}</span>
    </div>
  </div>
</template>

<script>
import config from "@/api/interface";
export default {
  data: () => ({
    data: {},
    loading: false,
    star: false
  }),

  async mounted() {
    await this.getData();
  },

  computed: {
    getClassify: function() {
      let list = this.$store.state.users.classify;
      let id = this.data.classify;
      if ("_id" in this.data && list.length > 0) {
        return list.find(item => item._id === id).name;
      } else {
        return "";
      }
    }
  },

  methods: {
    async getData() {
      this.loading = true;
      try {
        let res = await this.axios.get(
          `${config.blogs.apiBlog}/${this.$router.history.current.params.id}`
        );
        this.data = res.data;
      } catch (e) {
        this.$notify.error({
          title: "出错了",
          message: e.message
        });
      } finally {
        this.loading = false;
      }
    },

    async starHandle() {
      if (this.star) return;
      try {
        await this.axios.patch(
          `${config.blogs.apiBlog}/${this.$router.history.current.params.id}/star`
        );
        this.star = true;
        this.data.star++;
      } catch (e) {
        this.$notify.error({
          title: "出错了",
          message: e.message
        });
      }
    }
  }
};
</script>

<style lang='less' scoped >
@import "~@/global.less";
.article-wrap {
  padding-top: 4rem;
  width: 100%;
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

  .section {
    margin-top: 50px;
    margin-bottom: 50px;
    :global {
      .image-wrap {
        width: 200px !important;
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
    cursor: pointer;
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
    cursor: default;
  }
}
</style>
<style  scoped>
  .section>>> img {
    max-width: 100%;
  }
</style>
