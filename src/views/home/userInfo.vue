<template>
  <div class="main">
    <div class="wrapper">
      <div class="left">
        <ul class="nav">
          <li v-for="(item,index) in nav"  :key="index" >
            <router-link active-class="selected" :to="item.url">
              <i :class="item.icon" style="margin-right:5px;font-size:20px;"></i>
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nav: [
        { title: "我的信息", url: "/personInfo", icon: "iconfont icon-yonghu" },
        { title: "我的收藏", url: "/mylove", icon: "iconfont icon-shoucang" },
        { title: "我的评价", url: "/myRate", icon: "iconfont icon-pingjia" },
        {
          title: "我的学习",
          url: "/myStudy",
          icon: "iconfont icon-xinbaniconshangchuan-"
        },
        {
          title: "我的项目",
          url: "/myProgram",
          icon: "iconfont icon-iconzhengli_xiangmu"
        },
        {
          title: "上传项目",
          url: "/programUpload",
          icon: "iconfont icon-shangchuan"
        }
      ],
    };
  },
  created() {
  },
  methods: {
  }
};
</script>

<style lang="stylus" scoped>
.main {
  background-color: #f5f5f5;
  width: 100%;
  margin-bottom: 80px;
  padding-bottom: 80px;

  .selected {
    color: #4ccaff;
  }

  .wrapper {
    width: 1190px;
    margin: 0 auto;
    padding-top: 40px;
    display: flex;

    .left {
      width: 200px;
      border-radius: 5px;
      background-color: #fff;
      height: 360px;
      margin-left: 70px;

      ul {
        li {
          height: 60px;
          line-height: 60px;
          font-size: 14px;
          margin-left: 40px;
        }
      }
    }

    .right {
      width: 910px;
      border-radius: 5px;
      background-color: #fff;
      margin-left: 20px;
    }
  }
}
</style>