<template>
  <div class="gpl-wrap" >
    <div class="loading" v-loading="loading" />
    <div class="card" v-for="item in list" :key="item.id">
      <div class="cover">
        <a target="blank" :href="item.html_url">{{item.name}}</a>
      </div>
      <div class="tools">
        <el-tag>
          <i class="el-icon-star-on"></i>
          <b>Star</b>
          {{item.stargazers_count}}
        </el-tag>
        <el-tag style="marginLeft:1rem">
          <i class="el-icon-share"></i>
          <b>Fork</b>
          {{item.watchers_count}}
        </el-tag>
      </div>
      <p class="info">{{item.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    loading: Boolean,
  }
};
</script>

<style lang="less" scoped>
.gpl-wrap {
  overflow: hidden;
  padding: 40px;

  .loading {
    position: fixed;
    width: 100%;
    top: 40%;
    left: 0;
    background: red; 
  }
  .card {
    margin-top: 2rem;
    float: left;
    width: 45%;
    height: 21rem;
    border: 1px solid rgb(212, 210, 210);
    text-align: center;
    padding: 0.3rem;
    box-sizing: border-box;
    a {
      color: inherit;
    }
    &:hover {
      box-shadow: 0 0 1px 1px rgb(238, 230, 230);
      cursor: pointer;
    }

    .cover {
      height: 8.75rem;
      line-height: 8rem;
      font-size: 1.4rem;
      color: #333;
      width: 100%;
      background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 60%, #fff),
        linear-gradient(70deg, #dbedff 32%, #ebfff0);
    }
    .tools {
      font-size: 1rem;
    }
    .info {
      margin-top: 2rem;
      color: #787878;
    }
  }
  .card:nth-child(2n) {
    float: right;
  }

  @media screen and(max-width: 768px) {
    .card {
      width: 100%;
    }
  }
}
</style>