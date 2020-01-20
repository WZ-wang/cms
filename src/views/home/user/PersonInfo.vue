<template>
  <div class="personInfo">
    <div class="main">
      <div class="card">
        <h3>基本信息</h3>
        <div class="connect">
          <p style="width:300px">
            <span style="margin-left:58px" class="content">姓名</span>
            <span>{{editData.name}}</span>
          </p>
          <p>
            <span style="margin-left:58px" class="content">性别</span>
            <span>{{editData.sex}}</span>
          </p>
        </div>
        <div class="connect">
          <p style="width:300px">
            <span class="content">出生年月</span>
            <span>{{editData.datefb}}</span>
          </p>
            <p >
            <span style="margin-left:57px" class="content">邮箱</span>
            <span>{{editData.contact}}</span>
          </p>
         
        </div>
        <div class="connect">
          <p style="width:300px">
            <span style="margin-left:58px" class="content">学历</span>
            <span>{{editData.ebackground}}</span>
          </p>
          <p >
            <span style="margin-left:58px" class="content">专业</span>
            <span>{{editData.faculty}}</span>
          </p>
        </div>
        <div class="connect">
          <p style="width:300px">
            <span class="content">毕业院校</span>
            <span>{{editData.school}}</span>
          </p>
           <p >
            <span class="content">联系地址</span>
            <span>{{editData.caddress}}</span>
          </p>
        </div>
        <p>
          <span class="content">个人简历</span>
          <span style="line-height:1.5">{{editData.iresume}}</span>
        </p>
        <p>
          <span class="content">工作机构</span>
          <span>{{editData. organization}}</span>
        </p>
        <p>
          <span style="margin-left:22px" class="content">院系/部门</span>
          <span>{{editData.pfession}}</span>
        </p>
        <p>
          <span style="margin-left:57px" class="content">职业</span>
          <span>{{editData.career}}</span>
        </p>
      </div>
      <div class="card">
        <h3>学业成果</h3>
        <p>
          <span class="content">教学科研课题</span>
          <span>{{editData.task}}</span>
        </p>
        <p>
          <span class="content">教学相关文章</span>
          <span>{{editData.article}}</span>
        </p>
        <p>
          <span class="content">教学相关研究</span>
          <span>{{editData.study}}</span>
        </p>
        <p>
          <span class="content">学术研究课题</span>
          <span>{{editData.academic}}</span>
        </p>
        <p>
          <span class="content">发表学术文章</span>
          <span>{{editData.publish}}</span>
        </p>
        <p>
          <span style="margin-left:58px" class="content">学术成果</span>
          <span>{{editData.achievement}}</span>
        </p>
      </div>
      <div style="margin:60px 400px">
        <el-button @click="editInfo" type="primary">编辑个人信息</el-button>
      </div>
    </div>
    <!-- 修改框 -->
    <el-dialog title="用户信息" :visible.sync="isShow">
      <el-form :model="editData" ref="ruleForm" label-width="120px" style="margin:20px">
        <el-form-item
          label="姓名"
          prop="name"
          :rules="{
      required: true, message: '姓名不能为空', trigger: 'blur'
    }"
        >
          <el-input v-model="editData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="性别"
          prop="sex"
          :rules="{
      required: true, message: '性别不能为空', trigger: 'blur'
    }"
        >
          <el-radio v-model="editData.sex" label="男">男</el-radio>
          <el-radio v-model="editData.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item
          label="出生年月"
          prop="datefb"
          :rules="{
      required: true, message: '出生年月不能为空', trigger: 'blur'
    }"
        >
          <el-date-picker v-model="editData.datefb" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item
          label="联系地址"
          prop="caddress"
          :rules="{
      required: true, message: '联系地址不能为空', trigger: 'blur'
    }"
        >
          <el-input v-model="editData.caddress"></el-input>
        </el-form-item>
        <el-form-item
          label="邮箱"
          prop="contact"
          :rules="{
      required: true, message: '邮箱不能为空', trigger: 'blur'
    }"
        >
          <el-input v-model="editData.contact"></el-input>
        </el-form-item>
        <el-form-item
          label="毕业院校"
          prop="school"
          :rules="{
      required: true, message: '毕业院校不能为空', trigger: 'blur'
    }"
        >
          <el-input v-model="editData.school"></el-input>
        </el-form-item>
        <el-form-item
          label="学历"
          prop="ebackground"
          :rules="{
      required: true, message: '学历不能为空', trigger: 'blur'
    }"
        >
          <el-input v-model="editData.ebackground"></el-input>
        </el-form-item>
        <el-form-item
          label="专业"
          prop="faculty"
          :rules="{
      required: true, message: '专业不能为空', trigger: 'blur'
    }"
        >
          <el-input v-model="editData.faculty"></el-input>
        </el-form-item>
        <el-form-item
          label="个人简历"
          prop="iresume"
          :rules="{
      required: true, message: '个人简历不能为空', trigger: 'blur'
    }"
        >
          <el-input v-model="editData.iresume"></el-input>
        </el-form-item>
        <el-form-item
          label="工作机构"
          prop="organization"
          :rules="{
      required: true, message: '工作机构不能为空', trigger: 'blur'
    }"
        >
          <el-input v-model="editData.organization"></el-input>
        </el-form-item>
        <el-form-item
          label="院系/部门"
          prop="pfession"
          :rules="{
      required: true, message: '院系/部门不能为空', trigger: 'blur'
    }"
        >
          <el-input v-model="editData.pfession"></el-input>
        </el-form-item>
        <el-form-item
          label="职业"
          prop="career"
          :rules="{
      required: true, message: '职业不能为空', trigger: 'blur'
    }"
        >
          <el-input v-model="editData.career"></el-input>
        </el-form-item>
        <el-form-item label="教学科院课题">
          <el-input v-model="editData.task"></el-input>
        </el-form-item>
        <el-form-item label="教学相关文章">
          <el-input v-model="editData.article"></el-input>
        </el-form-item>
        <el-form-item label="教学相关研究">
          <el-input v-model="editData.study"></el-input>
        </el-form-item>
        <el-form-item label="学术研究课题">
          <el-input v-model="editData.academic"></el-input>
        </el-form-item>
        <el-form-item label="发表学术文章">
          <el-input v-model="editData.publish"></el-input>
        </el-form-item>
        <el-form-item label="学术成果">
          <el-input type="textarea" v-model="editData.achievement"></el-input>
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
import moment from "moment";
export default {
  data() {
    return {
      editData: {},
      isShow: false
    };
  },
  created() {
    // console.log( this.$store.state.userInfo)
    this.editData = this.$store.state.userInfo;
    // this.editData.datefb = moment(this.editData.datefb).format('YYYY-MM-DD')
  },
  methods: {
    editInfo() {
      this.isShow = true;
    },
    edit() {
      if (
        this.editData.name &&
        this.editData.sex &&
        this.editData.datefb &&
        this.editData.caddress &&
        this.editData.contact &&
        this.editData.school &&
        this.editData.faculty &&
        this.editData.pfession &&
        this.editData.ebackground &&
        this.editData.organization &&
        this.editData.iresume &&
        this.editData.career
      ) {
        let userInfo = new FormData();
        userInfo.append("name", this.editData.name);
        userInfo.append("sex", this.editData.sex);
        userInfo.append("datefb", this.editData.datefb);
        userInfo.append("caddress", this.editData.caddress);
        userInfo.append("contact", this.editData.contact);
        userInfo.append("school", this.editData.school);
        userInfo.append("faculty", this.editData.faculty);
        userInfo.append("pfession", this.editData.pfession);
        userInfo.append("ebackground", this.editData.ebackground);
        userInfo.append("organization", this.editData.organization);
        userInfo.append("iresume", this.editData.iresume);
        userInfo.append("career", this.editData.career);
        userInfo.append("task", this.editData.task);
        userInfo.append("article", this.editData.article);
        userInfo.append("study", this.editData.study);
        userInfo.append("academic", this.editData.academic);
        userInfo.append("publish", this.editData.publish);
        userInfo.append("achievement", this.editData.achievement);
        userInfo.append("id", this.editData.id);
        this.$axios.post("/api/note/upnotewluser", userInfo).then(res => {
          if (res.data.code == "OK") {
            this.editData.datefb = moment(this.editData.datefb).format(
              "YYYY-MM-DD"
            );
            this.$store.commit("getUser", this.editData);
            this.isShow = false;
          } else {
            this.$message({
              type: "error",
              message: "编辑失败"
            });
            this.editData = this.$store.state.userInfo;
          }
        });
      } else {
        this.$message.warning("有必填项未填");
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.personInfo {
  .main {
    width: 900px;
    margin: 20px auto;

    .connect {
      display: flex;
    }

    .card {
      margin-left: 100px;
      padding-top: 40px;

      h3 {
        font-size: 16px;
        color: #000;
      }

      p {
        font-size: 14px;
        color: #333;
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