<template>
  <div class="wrap">
    <ArticalCard />
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
@media screen and(min-width: 544px) {
  .wrap {
    width: 95%;
    margin: 0 auto;
  }
}
@media screen and(min-width: 768px) {
  .wrap {
    width: 90%;
    margin: 0 auto;
  }
}
@media screen and(min-width: 1024px) {
  .wrap {
    width: 80%;
    margin: 0 auto;
  }
}

</style>
