<template>
  <div class="root-wrap">
    <div :class="{rootLeft:true, rootMove:visible}">
      <Header id="header" />
      <HeaderShort id="header" />
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
import HeaderShort from "@/components/layout/headerShort";
import Footer from "@/components/layout/footer";
import Slider from "@/components/layout/slider";
import config from "@/api/interface.js";
export default {
  name: "layout",
  components: {
    Header,
    HeaderShort,
    Footer,
    Slider
  },
  data: () => {
    return {
      visible: false,
      iconType: "menu"
    };
  },
  async mounted() {
    //设置content最小高度
    let headerHeight = document.getElementById("header").clientHeight;
    let footerHeight = document.getElementById("footer").clientHeight;
    let pageHeight = document.body.clientHeight;
    let contentDom = document.getElementById("content");
    contentDom.style.minHeight =
      pageHeight - headerHeight - footerHeight + "px";

    const userInfo = sessionStorage.getItem("userInfo");

    //获取用户信息
    if (!("name" in this.$store.state.users)) {
      await this.getUserData();
    }
  },
  methods: {
    toggle: function() {
      this.visible = !this.visible;
    },
    //改变iconType
    changeIcon: function(type) {
      this.iconType = type;
    },
    //获取用户信息
    async getUserData() {
      try {
        let res = await this.axios.get(
          `${config.user.apiUser}/5d4a9ac833697815981e0920`
        );

        this.$store.dispatch("setUsers", res.data);
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

<style lang="less">
body,
html {
  margin: 0;
  font-size: 16px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.root-wrap {
  width: 100%;
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
    width: 300px !important;
    transform: translate(-300px, 0);
    transition: all 0.3s;
  }
  .rootRight {
    overflow: hidden;
    width: 0px;
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

@media screen and(max-width: 1024px) {
  .rootBtn {
    display: none;
  }
}

@media screen and(max-width: 544px) {
  html {
    font-size: 12px;
  }
  .root-content {
    width: 90%;
    margin: 0 auto;
  }
}
@media screen and(min-width: 544px) {
  html {
    font-size: 13px;
  }
  .root-content {
    width: 90%;
    margin: 0 auto;
  }
}
@media screen and(min-width: 768px) {
  html {
    font-size: 14px;
  }
  .root-content {
    width: 70%;
    margin: 0 auto;
  }
}
@media screen and(min-width: 1024px) {
  html {
    font-size: 16px;
  }
  .root-content {
    width: 60%;
    margin: 0 auto;
  }
}
.root-content {
  box-sizing: border-box;
  padding: 0 1rem 7rem 1rem;
}
</style>
