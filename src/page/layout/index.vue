<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
export default {
  name: "layout",
  components: {
    Header,Footer
  }
}
</script>

<style lang="less">
  body,html {
    margin: 0;
    font-size: 16px;
  }
</style>
