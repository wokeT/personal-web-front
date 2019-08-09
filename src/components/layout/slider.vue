<template>
  <div class="wrap">
    <div>
      <img :src="getUser && getUser.avatar_url" alt />
      <h3>{{getUser && getUser.name || ''}}</h3>
      <ul class="tags">
        <li>
          <h4>{{getUser && getUser.articleNum || 0}}</h4>
          <h5>文章</h5>
        </li>
        <li>
          <h4>{{getUser &&getUser.classifyNum || 0}}</h4>
          <h5>分类</h5>
        </li>
        <li>
          <h4>{{getUser && getUser.tagNum || 0}}</h4>
          <h5>标签</h5>
        </li>
      </ul>
      <div class="link">
        <a target="_blank" href="https://github.com/wokeT">
          <svg class="rootLinkIcon" aria-hidden="true">
            <use xlink:href="#icon-github1" />
          </svg>
          <span class="ml5">Github</span>
        </a>
        <a target="_blank" href="https://www.zhihu.com/people/milanxiao-tie-jiang-68/activities">
          <svg class="rootLinkIcon" aria-hidden="true">
            <use xlink:href="#icon-zhihu" />
          </svg>
          <span class="ml5">知乎</span>
        </a>
        <a>
          <svg class="rootLinkIcon" aria-hidden="true">
            <use xlink:href="#icon-fenlei" />
          </svg>
          <span class="ml5">SegmentFault</span>
        </a>
        <a target="_blank" href="https://juejin.im/user/5c4806405188252410608e08">
          <svg class="rootLinkIcon" aria-hidden="true">
            <use xlink:href="#icon-xiala" />
          </svg>
          <span class="ml5">掘金</span>
        </a>
        <a target="_blank" href="https://me.csdn.net/qq_32899575">
          <svg class="rootLinkIcon" aria-hidden="true">
            <use xlink:href="#icon-csdn" />
          </svg>
          <span class="ml5">CSDN</span>
        </a>
        <a>
          <svg class="rootLinkIcon" aria-hidden="true">
            <use xlink:href="#icon-weibo" />
          </svg>
          <span class="ml5">微博</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  computed: {
    getUser: function() {
      return this.$store.state.users;
    }
  }
};
</script>

<style lang="less" scoped >
@import "~@/global.less";
.wrap {
  padding: 20px 5px 10px 5px;
  text-align: center;
  img {
    width: 80px;
    height: 80px;
    border: 2px solid rgb(63, 44, 44);
  }
  h3 {
    margin-top: 5px;
    color: white;
    font-weight: 400;
  }
  .tags {
    display: flex;
    justify-content: center;
    padding: 0;
    li:nth-child(1) {
      border: none;
    }
    li {
      padding: 0;
      list-style: none;
      text-align: center;
      border-left: 1px solid rgb(59, 56, 71);
      width: 60px;
      color: #999;
      h4 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        line-height: 30px;
      }
      h5 {
        margin: 0;
        font-size: 13px;
        font-weight: 400;
      }
    }
  }
  .link {
    a {
      margin-left: 10px;
      text-decoration: underline;
      color: #999;
      font-size: 12px;
      list-style: none;
      line-height: 30px;
      .rootLinkIcon {
        width: 14px;
        height: 14px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
    }
  }
}
</style>
