<template>
  <div class="archives-wrap">
    <el-timeline v-for="(value,key) in groupData" :key="key">
      <el-timeline-item placement="top">
        <h1 v-show="type === 'article'">{{key.replace(/YEAR/g,'')}}</h1>
        <h1 v-show="type !== 'article'">
          {{title}}
          <span class="subTitle">分类</span>
        </h1>
      </el-timeline-item>
      <el-timeline-item
        v-for="(item,index) in value"
        :key="index"
        :timestamp="$moment(item.updateDate).format('YYYY-MM-DD')"
        placement="top"
      >
        <el-card shadow="hover" body-style="padding:5px 5px 5px 20px">
          <router-link tag="h4" :to="`/article/${item._id}`">{{item.title}}</router-link>
        </el-card>
      </el-timeline-item>

      <div v-show="!value.length>0" class="noData">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-kong" />
        </svg>
      </div>
    </el-timeline>
  </div>
</template>

<script>
import config from "@/api/interface";
export default {
  data: function() {
    return {
      groupData: {},
      loading: false,
      type: "article",
      id: ""
    };
  },

  computed: {
    title: function() {
      const { tags, classify } = this.$store.state.users;
      if (this.type === "tag") {
        return tags.find((item, index) => item._id === this.id)
          ? tags.find((item, index) => item._id === this.id).name
          : "";
      } else {
        return classify.find((item, index) => item._id === this.id)
          ? classify.find((item, index) => item._id === this.id).name
          : "";
      }
    }
  },

  async mounted() {
    this.initParams();
    await this.getPage();
  },

  methods: {
    initParams: function() {
      const { type, id } = this.$router.history.current.params;
      this.type = type;
      this.id = id;
    },

    async getPage() {
      this.loading = true;
      try {
        let res = await this.axios.get(
          `${config.blogs.apiBlog}/group/${this.type}?id=${this.id}`
        );
        this.groupData = res.data;
           
      } catch (e) {
        this.$notify.error({
          title: "出错了",
          message: e.message
        });
      } finally {
        this.loading = false;
      }
    }
  },

  watch: {
    async $route(to, from) {
      this.initParams();
      await this.getPage();
    }
  }
};
</script>

<style lang="less" scoped>
.archives-wrap {
  padding-top: 4rem;
  h4 {
    cursor: pointer;
  }
  .subTitle {
    margin-left: 0.2rem;
    font-size: 1.3rem;
    color: rgb(170, 167, 167);
  }
  .noData {
    text-align: center;
    margin-top: 2rem;
    .icon {
      width: 4rem;
      height: 4rem;
      fill: rgb(161, 157, 157);
    }
  }
}
</style>
