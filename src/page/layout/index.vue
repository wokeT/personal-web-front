<template>
  <div class="root-wrap">
    <div :class="{rootLeft:true, rootMove:visible}">
      <Header id="header" />
      <div id="content" class="root-content">
        <router-view></router-view>
      </div>
      <Footer id="footer" />
    </div>
    <div :class="{rootRight:true,rootMoveSlide:visible}">
      <Slider />
    </div>
    <div
      @mouseenter="changeIcon('left')"
      @mouseleave="changeIcon('menu')"
      @click="toggle"
      class="rootBtn"
    >
      <svg v-show="iconType === 'menu' && !visible " class="rootIconShow" aria-hidden="true">
        <use xlink:href="#icon-icon-test" />
      </svg>
      <svg v-show="iconType === 'left' && !visible" class="rootIconShow" aria-hidden="true">
        <use xlink:href="#icon-zuojiantou" />
      </svg>
      <svg v-show="visible" class="rootIconShow" aria-hidden="true">
        <use xlink:href="#icon-guanbi1" />
      </svg>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Slider from "@/components/layout/slider";
export default {
  name: "layout",
  components: {
    Header,
    Footer,
    Slider
  },
  data: () => {
    return {
      visible: false,
      iconType: "menu"
    };
  },
  mounted() {
    //设置content最小高度
    let headerHeight = document.getElementById('header').clientHeight;
    let footerHeight = document.getElementById('footer').clientHeight;
    let pageHeight = document.body.clientHeight;
    let contentDom = document.getElementById('content');
    contentDom.style.minHeight =  pageHeight-headerHeight-footerHeight+'px';
    
  },
  methods: {
    toggle: function() {
      this.visible = !this.visible;
    },
    //改变iconType
    changeIcon: function(type) {
      this.iconType = type;
    }
  }
};
</script>

<style lang="less">
body,
html {
  margin: 0;
  font-size: 16px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.root-wrap {
  width: 100vw;
  overflow: hidden;
  display: flex;

  .rootLeft {
    width: 100vw;
    transition: all 0.3s;
  }
  .rootMove {
    transform: translate(-150px, 0);
    transition: all 0.3s;
  }
  .rootMoveSlide {
    transform: translate(-300px, 0);
    transition: all 0.3s;
  }
  .rootRight {
    width: 300px;
    height: 100vh;
    background: #1d2935;
    transition: all 3s;
    position: absolute;
    right: -300px;
    transition: all 0.3s;
  }
  .rootBtn {
    position: fixed;
    right: 50px;
    bottom: 50px;
    background: #1d2935;
    padding: 1px;
    cursor: pointer;

    .rootIconShow {
      width: 20px;
      height: 20px;
      vertical-align: -0.2rem;
      fill: white;
      overflow: hidden;
    }
  }
}

@media screen and(min-width: 544px) {
  .root-content {
    width: 90%;
    margin: 0 auto;
  }
}
@media screen and(min-width: 768px) {
  .root-content {
    width: 70%;
    margin: 0 auto;
  }
}
@media screen and(min-width: 1024px) {
  .root-content {
    width: 60%;
    margin: 0 auto;
  }
}

</style>
