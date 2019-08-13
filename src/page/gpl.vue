<template>
  <div>
    <GplCard :list="list" :loading='loading' />
  </div>
</template>

<script>
import GplCard from "@/components/gpl/gplCard";
export default {
  data: function() {
    return {
      list: [],
      loading: false,
    };
  },
  components: {
    GplCard
  },
  methods: {
    async getPage() {
      this.loading = true;
      try {
        let res = await this.axios.get('/gpl/users/wokeT/repos');
        this.list = res.data;
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
  async mounted() {
    await this.getPage();
  }
};
</script>

<style>
</style>