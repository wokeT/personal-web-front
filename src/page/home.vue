<template>
  <div class="home-wrap">
    <ArticalCard v-for="(item,index) in list" :key="index" :data="item" />
    <el-pagination class="pagination" background layout="prev, pager, next" :total="100"></el-pagination>
  </div>
</template>

<script>
import ArticalCard from "@/components/home/articalCard";
import config from "@/api/interface";
import { stringify } from "querystring";
export default {
  data: function() {
    return {
      list: []
    };
  },
  components: {
    ArticalCard
  },
  async mounted() {
    await this.getPage();
  },
  methods: {
    async getPage(pageNum = 1, pageSize = 10) {
      let params = { pageNum, pageSize };
      try {
        let res = await this.axios.get(
          `${config.blogs.apiBlog}?${stringify(params)}`
        );
        this.list = res.data;
         
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

<style lang="less" scoped>
.home-wrap {
  padding-top: 2.5rem;
  .pagination {
    border-top: 1px solid rgb(231, 230, 230);
    margin-bottom: 3.75rem;
  }
}
</style>
