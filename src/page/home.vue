<template>
  <div class="home-wrap">
    <ArticalCard v-for="(item,index) in [{name:1},{name:2},{name:3}]" :key="index" :data="item" />
    <el-pagination class="pagination"  background layout="prev, pager, next" :total="100"></el-pagination>
  </div>
</template>

<script>
import ArticalCard from "@/components/home/articalCard";
export default {
  components: {
    ArticalCard
  }
};
</script>

<style lang="less" scoped>
// @media screen and(min-width: 544px) {
//   .home-wrap {
//     width: 90%;
//     margin: 0 auto;
//   }
// }
// @media screen and(min-width: 768px) {
//   .home-wrap {
//     width: 70%;
//     margin: 0 auto;
//   }
// }
// @media screen and(min-width: 1024px) {
//   .home-wrap {
//     width: 60%;
//     margin: 0 auto;
//   }
// }
.home-wrap {
  padding-top: 2.5rem;
  .pagination {
    border-top: 1px solid rgb(231, 230, 230);
    margin-bottom: 3.75rem;
  }
}
</style>
