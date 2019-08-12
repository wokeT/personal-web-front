<template>
  <div class="tag-wrap">
    <h4>分类（{{classifyList.length}}）</h4>
    <el-tag class="tag" v-for="item in classifyList" :key="item._id">{{item.name}}</el-tag>
  </div>
</template>

<script>
export default {
  computed: {
    classifyList: function() {
      return this.$store.state.users.classify;
    }
  }
};
</script>

<style lang="less" scoped>
.tag-wrap {
  padding: 50px 0;
  text-align: center;

  h4 {
    margin-bottom: 2rem;
  }
  .tag {
    margin-right: 2rem;
    cursor: pointer;
  }
}
</style>