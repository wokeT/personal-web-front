<template>
  <div class="archives-wrap">
    <el-timeline v-for="(value,key) in groupData" :key="key">
      <el-timeline-item placement="top">
        <h1>{{key.replace(/[a-zA-Z]+/g,'')}}</h1>
      </el-timeline-item>
      <el-timeline-item
        v-for="(item,index) in value"
        :key="index"
        :timestamp="$moment(item.updateDate).format('YYYY-MM-DD')"
        placement="top"
      >
        <el-card body-style="padding:5px 5px 5px 20px">
          <h4>{{item.title}}</h4>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import config from "@/api/interface";
export default {
  data: function() {
    return {
      groupData: {},
      loading: false
    };
  },

  async mounted() {
    await this.getPage();
  },

  methods: {
    async getPage() {
      this.loading = true;
      try {
        let res = await this.axios.get(
          `${config.blogs.apiBlog}/group/${this.$router.history.current.params.type}`
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
  }
};
</script>

<style lang="less" scoped>
.archives-wrap {
  padding-top: 4rem;
}
</style>
