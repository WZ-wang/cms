<template>
  <div class="userInfo">
    <div>
      <img style="height:300px" src="../../assets/userbg.png" alt />
    </div>
    <div class="main">
      <div class="card">
        <h3>基本信息</h3>
        <p>
          <span class="content">姓名</span>
          <span>{{editData.name}}</span>
        </p>
        <p>
          <span class="content">性别</span>
          <span>{{editData.sex}}</span>
        </p>
      </div>
      <div class="card">
        <h3>联系方式</h3>
        <p>
          <span class="content">手机</span>
          <span>{{editData.phone}}</span>
        </p>
        <p>
          <span class="content">邮箱</span>
          <span>{{editData.contact}}</span>
        </p>
      </div>
      <div class="card">
        <h3>所属院校</h3>
        <p>
          <span class="content">学校</span>
          <span>{{editData.school}}</span>
        </p>
        <p>
          <span class="content">院系</span>
          <span>{{editData.pfession}}</span>
        </p>
        <p>
          <span class="content">专业</span>
          <span>{{editData.faculty}}</span>
        </p>
        <p>
          <span class="content">班级</span>
          <span>{{editData.clazz}}</span>
        </p>
        <p>
          <span class="content">学号</span>
          <span>{{editData.account}}</span>
        </p>
        <p>
          <span class="content">角色</span>
          <span>{{editData.dentity}}</span>
        </p>
      </div>
      <div v-if="editData.dentity=='注册用户'" style="margin:30px 260px">
        <el-button @click="editInfo" type="info">完善个人信息</el-button>
      </div>
    </div>
    <!-- 修改框 -->
    <el-dialog title="用户信息" :visible.sync="isShow">
      <el-form :model="editData" label-width="80px" style="margin:20px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="editData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio v-model="editData.sex" label="男">男</el-radio>
          <el-radio v-model="editData.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="学号" prop="account">
          <el-input v-model="editData.account"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="editData.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="contact">
          <el-input v-model="editData.contact"></el-input>
        </el-form-item>
        <el-form-item label="学校" prop="school">
          <el-input v-model="editData.school"></el-input>
        </el-form-item>
        <el-form-item label="学院" prop="pfession">
          <el-input v-model="editData.pfession"></el-input>
        </el-form-item>
        <el-form-item label="专业" prop="faculty">
          <el-input v-model="editData.faculty"></el-input>
        </el-form-item>
        <el-form-item label="班级" prop="clazz">
          <el-input v-model="editData.clazz"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="edit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userData: { sex: "男" },
      isShow: false,
      editData: {}
    };
  },
  created(){
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
.userInfo {
  width: 100%;
  background-color: #f5f5f5;
  margin-bottom: 80px;
  padding-bottom: 60px;

  .main {
    width: 1190px;
    height: 760px;
    background-color: #fff;
    margin: 20px auto;

    .card {
      margin-left: 260px;
      padding-top: 40px;

      h3 {
        font-size: 16px;
        color: #333;
      }

      p {
        font-size: 14px;
        color: #000;
        padding-top: 30px;

        .content {
          color: #666;
          margin: 30px;
        }
      }
    }
  }
}
</style>