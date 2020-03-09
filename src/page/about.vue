<template>
  <p class="wrap" v-html="user.info" />
</template>

<script>
import config from "@/api/interface";
export default {
  data: function() {
    return {
      user: {}
    }
  },
  async mounted() {
    await this.getPage();
  },
  methods: {
    async getPage() {
      try {
        let res = await this.axios.get(
          `${config.user.apiUser}/5d4a9ac833697815981e0920?fields=info`
        );
        this.user = res.data;

      } catch (e) {
        this.$notify.error({
          title: "出错了",
          message: e.message
        });
      }
    },
    pageChange: function(page) {
      this.getPage(page);
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  padding: 1rem 0;
}
.wrap /deep/ img {
  width: 100%;
}
</style>