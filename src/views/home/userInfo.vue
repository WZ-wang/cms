<template>
  <div class="main">
    <div class="wrapper">
      <div class="left">
        <ul class="nav">
          <li v-for="(item,index) in nav" :key="index" @click="navIndex = index">
            <router-link :active-class="index==navIndex?'selected':''" :to="item.url">
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
      userData: { sex: "男" },
      isShow: false,
      editData: {},
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
      navIndex: 0
    };
  },
  created() {
    this.editData = this.$store.state.userInfo;
  },
  methods: {
    editInfo() {
      this.isShow = true;
    },
    edit() {
      let userInfo = new FormData();
      userInfo.append("name", this.editData.name);
      userInfo.append("sex", this.editData.sex);
      userInfo.append("account", this.editData.account);
      userInfo.append("phone", this.editData.phone);
      userInfo.append("dentity", this.editData.dentity);
      userInfo.append("contact", this.editData.contact);
      userInfo.append("clazz", this.editData.clazz);
      userInfo.append("faculty", this.editData.faculty);
      userInfo.append("pfession", this.editData.pfession);
      userInfo.append("school", this.editData.school);
      userInfo.append("id", this.editData.id);
      this.$axios.post("/api/note/upnotewluser", userInfo).then(res => {
        if (res.data.code == "OK") {
          this.$store.commit("getUser", this.editData);
          this.isShow = false;
        } else {
          this.$message({
            type: "error",
            message: "编辑失败"
          });
        }
      });
    }
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