<template>
  <div class="programUpload">
    <div class="upload" v-if="userInfo.dentity == '注册用户'">
      <el-form ref="form" :model="programData" label-width="80px" style="margin:20px">
        <p>(按要求上传且都是必填项，否则上传容易失败)</p>
        <h1>基本信息</h1>
        <el-form-item
          label="课程名称"
          prop="name"
          :rules="{
          required: true, message: '课程名称不能为空', trigger: 'blur'}"
        >
          <el-input v-model="programData.name" style="width: 400px;" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="课程摘要"
          prop="brief"
          :rules="{
      required: true, message: '课程摘要不能为空', trigger: 'blur'
     }"
        >
          <el-input
            :autosize="{ minRows: 4, maxRows: 5}"
            type="textarea"
            style="width: 400px;"
            maxlength="200"
            show-word-limit
            v-model="programData.brief"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="专业类别"
          prop="organ"
          :rules="{
      required: true, message: '专业类别必选', trigger: 'blur'
     }"
        >
          <el-select v-model="programData.organ" placeholder="请选择专业">
            <el-option
              v-for="(item,index) in organ"
              :key="index"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="对应专业"
          prop="wheel"
          :rules="{
      required: true, message: '对应专业必选', trigger: 'blur'
     }"
        >
          <el-select v-model="programData.wheel" placeholder="请选择专业">
            <el-option
              v-for="(item,index) in wheel"
              :key="index"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="所属机构"
          prop="item"
          :rules="{
      required: true, message: '所属机构不能为空', trigger: 'blur'
     }"
        >
          <el-input v-model="programData.item" style="width: 400px;" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目封面">
          <el-upload
            class="upload-demo"
            action="/api/user/pict"
            ref="pictUpload"
            :limit="1"
            :auto-upload="false"
            :before-upload="pictbeforeAvatarUpload"
            :on-change="picthandleChange"
            :file-list="pictfileList"
            :data="da"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">图片格式：png/jpg，且不超过10M</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="介绍视频" prop="iduce">
          <el-upload
            ref="videoUpload"
            :limit="1"
            :auto-upload="false"
            :before-upload="videobeforeAvatarUpload"
            action="/api/user/intvideo"
            list-type="picture-card"
            :on-change="videohandleChange"
            :file-list="videofileList"
            :data="da"
          >
            <!-- class="upload-demo" -->
            <i class="el-icon-plus"></i>
          </el-upload>
          <span>视频格式：mp4,且不超过500M</span>
        </el-form-item>
        <el-form-item label="课程介绍" prop="dload">
          <el-upload
            ref="dUpload"
            :limit="1"
            :before-upload="dloadbeforeAvatarUpload"
            :auto-upload="false"
            class="upload-demo"
            action="/api/user/dload"
            :on-change="dhandleChange"
            :file-list="dfileList"
            :data="da"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传pdf文件，且不超过5M</div>
          </el-upload>
        </el-form-item>
        <div class="line"></div>
        <h1>课程上传</h1>
        <!-- <el-form-item
          label="课程名称"
          prop="cuploadName"
          :rules="{
      required: true, message: '文件名称不能为空', trigger: 'blur'
     }"
        >
          <el-input v-model="programData.cuploadName" style="width: 400px;" autocomplete="off"></el-input>
        </el-form-item>-->
        <el-form-item label="课程上传">
          <el-upload
            ref="wjUpload"
            :limit="1"
            :before-upload="cuploadbeforeAvatarUpload"
            action="/api/user/cupload"
            list-type="picture-card"
            :auto-upload="false"
            :on-change="cuploadhandleChange"
            :file-list="cuploadfileList"
            :data="da"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <span>文件格式：zip,且不超过1500M</span>
        </el-form-item>
        <el-form-item label="下载说明" prop="ement">
          <el-upload
            ref="ementUpload"
            :limit="1"
            :before-upload="ementbeforeAvatarUpload"
            :auto-upload="false"
            class="upload-demo"
            action="/api/user/ement"
            :on-change="ementhandleChange"
            :file-list="ementfileList"
            :data="da"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传pdf文件，且不超过5M</div>
          </el-upload>
        </el-form-item>
        <div class="line"></div>
        <h1>实验操作</h1>
        <el-form-item label="实验准备" prop="oation">
          <el-upload
            ref="oationUpload"
            :limit="1"
            :before-upload="oationbeforeAvatarUpload"
            :auto-upload="false"
            class="upload-demo"
            action="/api/user/oation"
            :on-change="oationhandleChange"
            :file-list="oationfileList"
            :data="da"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传pdf文件，且不超过5M</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="操作流程" prop="ictions">
          <el-upload
            ref="ictionsUpload"
            :limit="1"
            :before-upload="ictionsbeforeAvatarUpload"
            :auto-upload="false"
            class="upload-demo"
            action="/api/user/ictions"
            :on-change="ictionshandleChange"
            :file-list="ictionsfileList"
            :data="da"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传pdf文件，且不超过5M</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="操作视频" prop="makevideo">
          <el-upload
            ref="makevideoUpload"
            :auto-upload="false"
            :limit="1"
            :before-upload="makevideobeforeAvatarUpload"
            action="/api/user/makevideo"
            list-type="picture-card"
            :on-change="makevideohandleChange"
            :file-list="makevideofileList"
            :data="da"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <span>视频格式：mp4,且不超过500M</span>
        </el-form-item>
        <el-form-item
          label="视频简述"
          prop="maketext"
          :rules="{
      required: true, message: '视频简述不能为空', trigger: 'blur'
     }"
        >
          <el-input
            :autosize="{ minRows: 4, maxRows: 5}"
            type="textarea"
            style="width: 400px;"
            maxlength="200"
            show-word-limit
            v-model="programData.maketext"
          ></el-input>
        </el-form-item>
        <el-form-item label="使用说明" prop="llzdsg">
          <el-upload
            ref="llzdsgUpload"
            :limit="1"
            :before-upload="llzdsgbeforeAvatarUpload"
            :auto-upload="false"
            class="upload-demo"
            action="/api/user/llzdsg"
            :on-change="llzdsghandleChange"
            :file-list="llzdsgfileList"
            :data="da"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传pdf文件，且不超过5M</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <div class="btn">
            <el-button type="primary" @click="submitForm('form')">确认上传</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="content" v-else>
      <p style="margin-bottom:100px">
        上传项目需成为项目负责人，如果你已申请，点击查看
        <span>申请进度</span>
      </p>
      <p>如果你想要上传项目，请按步骤申请成为项目负责人</p>
      <p style="margin:20px 0">
        1)完善
        <span @click="$router.push('/personInfo')">个人信息</span>
      </p>
      <p>
        2)阅读安全条例
        <span>《条例》</span>
      </p>
      <div class="btn">
        <el-checkbox v-model="checked">我已阅读安全条例</el-checkbox>
      </div>
      <div style="text-align:center">
        <el-button type="primary" :disabled="!checked">立即申请</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      programData: {
        name: "",
        brief: "",
        organ: "",
        wheel: "",
        item: "",
        iduce: "",
        dload: "",
        ement: "",
        oation: "",
        ictions: "",
        llzdsg: "",
        maketext: "",
        makevideo: "",

      },
      da: { phone: "" },
      dfileList: [],
      oationfileList: [],
      ementfileList: [],
      ictionsfileList: [],
      llzdsgfileList: [],
      videofileList: [],
      makevideofileList: [],
      cuploadfileList: [],
      pictfileList: [],
      organ: [],
      wheel: [],
      userInfo: {}
    };
  },
  created() {
    this.getOrgan();
    this.userInfo = this.$store.state.userInfo;
    this.da.phone = this.$store.state.userInfo.phone;
  },
  methods: {
    submitForm(from) {
      const vm = this;
      this.$refs[from].validate(valid => {
        if (valid) {
          this.da.pid = Date.now();
          vm.$refs.videoUpload.submit();
          vm.$refs.dUpload.submit();
          vm.$refs.ictionsUpload.submit();
          vm.$refs.oationUpload.submit();
          vm.$refs.makevideoUpload.submit();
          vm.$refs.ementUpload.submit();
          vm.$refs.wjUpload.submit();
          vm.$refs.llzdsgUpload.submit();
          vm.$refs.pictUpload.submit();
          if (this.pictfileList.length == 0) {
            this.$message({
              type: "warning",
              message: "项目图片上传未完成"
            });
            this.dfileList = [];
            this.oationfileList = [];
            this.ementfileList = [];
            this.ictionsfileList = [];
            this.llzdsgfileList = [];
            this.videofileList = [];
            this.makevideofileList = [];
            this.cuploadfileList = [];
            this.pictfileList = [];
            return false;
          }
          if (this.videofileList.length == 0) {
            this.$message({
              type: "warning",
              message: "介绍视频未上传"
            });
            this.dfileList = [];
            this.oationfileList = [];
            this.ementfileList = [];
            this.ictionsfileList = [];
            this.llzdsgfileList = [];
            this.videofileList = [];
            this.makevideofileList = [];
            this.cuploadfileList = [];
            this.pictfileList = [];
            return false;
          }
          if (this.dfileList.length == 0) {
            this.$message({
              type: "warning",
              message: "课程介绍未上传"
            });
            this.dfileList = [];
            this.oationfileList = [];
            this.ementfileList = [];
            this.ictionsfileList = [];
            this.llzdsgfileList = [];
            this.videofileList = [];
            this.makevideofileList = [];
            this.cuploadfileList = [];
            this.pictfileList = [];
            return false;
          }
          if (this.ementfileList.length == 0) {
            this.$message({
              type: "warning",
              message: "下载说明未上传"
            });
            this.dfileList = [];
            this.oationfileList = [];
            this.ementfileList = [];
            this.ictionsfileList = [];
            this.llzdsgfileList = [];
            this.videofileList = [];
            this.makevideofileList = [];
            this.cuploadfileList = [];
            this.pictfileList = [];
            return false;
          }
          if (this.oationfileList.length == 0) {
            this.$message({
              type: "warning",
              message: "实验准备未上传"
            });
            this.dfileList = [];
            this.oationfileList = [];
            this.ementfileList = [];
            this.ictionsfileList = [];
            this.llzdsgfileList = [];
            this.videofileList = [];
            this.makevideofileList = [];
            this.cuploadfileList = [];
            this.pictfileList = [];
            return false;
          }
          if (this.ictionsfileList.length == 0) {
            this.$message({
              type: "warning",
              message: "操作流程未上传"
            });
            this.dfileList = [];
            this.oationfileList = [];
            this.ementfileList = [];
            this.ictionsfileList = [];
            this.llzdsgfileList = [];
            this.videofileList = [];
            this.makevideofileList = [];
            this.cuploadfileList = [];
            this.pictfileList = [];
            return false;
          }
          if (this.llzdsgfileList.length == 0) {
            this.$message({
              type: "warning",
              message: "使用说明未上传"
            });
            this.dfileList = [];
            this.oationfileList = [];
            this.ementfileList = [];
            this.ictionsfileList = [];
            this.llzdsgfileList = [];
            this.videofileList = [];
            this.makevideofileList = [];
            this.cuploadfileList = [];
            this.pictfileList = [];
            return false;
          }
          if (this.makevideofileList.length == 0) {
            this.$message({
              type: "warning",
              message: "操作视频未上传"
            });
            this.dfileList = [];
            this.oationfileList = [];
            this.ementfileList = [];
            this.ictionsfileList = [];
            this.llzdsgfileList = [];
            this.videofileList = [];
            this.makevideofileList = [];
            this.cuploadfileList = [];
            this.pictfileList = [];
            return false;
          }
          if (this.cuploadfileList.length == 0) {
            this.$message({
              type: "warning",
              message: "课程上传未完成"
            });
            this.dfileList = [];
            this.oationfileList = [];
            this.ementfileList = [];
            this.ictionsfileList = [];
            this.llzdsgfileList = [];
            this.videofileList = [];
            this.makevideofileList = [];
            this.cuploadfileList = [];
            this.pictfileList = [];
            return false;
          }

          let programInfo = new FormData();
          programInfo.append("name", this.programData.name);
          programInfo.append("brief", this.programData.brief);
          programInfo.append("organ", this.programData.organ);
          programInfo.append("wheel", this.programData.wheel);
          programInfo.append("item", this.programData.item);
          programInfo.append("maketext", this.programData.maketext);
          programInfo.append("iduce", this.userInfo.name);
          programInfo.append("phone", this.da.phone);
          programInfo.append("pid", this.da.pid);
          this.$axios.post("/api/user/cmgement", programInfo).then(res => {
            if (res.data.code == "OK") {
              this.$message({
                type: "success",
                message: "添加成功"
              });
              this.programData = {
                name: "",
                brief: "",
                organ: "",
                wheel: "",
                item: "",
                iduce: "",
                dload: "",
                ement: "",
                oation: "",
                ictions: "",
                llzdsg: "",
                iduce: "",
                maketext: "",
                makevideo: ""
              };
              // this.dfileList = [];
              // this.oationfileList = [];
              // this.ementfileList = [];
              // this.ictionsfileList = [];
              // this.llzdsgfileList = [];
              // this.videofileList = [];
              // this.makevideofileList = [];
              // this.cuploadfileList = [];
              // this.pictfileList = [];
            } else {
              this.$message({
                type: "error",
                message: "添加失败"
              });
            }
          });
        }
      });
    },
    // 获取所属专业
    getOrgan() {
      this.$axios.post("/api/user/organ").then(res => {
        this.organ = res.data;
      });
      this.$axios.post("/api/user/wheel").then(res => {
        this.wheel = res.data;
      });
    },
    isUpload() {
      if (
        this.dfileList.length > 0 &&
        this.oationfileList.length > 0 &&
        this.ementfileList.length > 0 &&
        this.ictionsfileList.length > 0 &&
        this.videofileList.length > 0 &&
        this.llzdsgfileList.length > 0 &&
        this.cuploadfileList.length > 0 &&
        this.pictfileList.length > 0 &&
        this.makevideofileList.length > 0
      ) {
        return true;
      } else {
        return false;
      }
    },
    pictbeforeAvatarUpload(file) {
      return new Promise((resolve, reject) => {
        if (this.isUpload()) {
          resolve();
        } else {
          reject();
        }
      });
    },
    videobeforeAvatarUpload(file) {
      return new Promise((resolve, reject) => {
        if (this.isUpload()) {
          resolve();
        } else {
          reject();
        }
      });
    },
    dloadbeforeAvatarUpload(file) {
      return new Promise((resolve, reject) => {
        if (this.isUpload()) {
          resolve();
        } else {
          reject();
        }
      });
    },
    ementbeforeAvatarUpload(file) {
      return new Promise((resolve, reject) => {
        if (this.isUpload()) {
          resolve();
        } else {
          reject();
        }
      });
    },
    oationbeforeAvatarUpload(file) {
      return new Promise((resolve, reject) => {
        if (this.isUpload()) {
          resolve();
        } else {
          reject();
        }
      });
    },
    ictionsbeforeAvatarUpload(file) {
      return new Promise((resolve, reject) => {
        if (this.isUpload()) {
          resolve();
        } else {
          reject();
        }
      });
    },
    llzdsgbeforeAvatarUpload(file) {
      return new Promise((resolve, reject) => {
        if (this.isUpload()) {
          resolve();
        } else {
          reject();
        }
      });
    },
    makevideobeforeAvatarUpload(file) {
      return new Promise((resolve, reject) => {
        if (this.isUpload()) {
          resolve();
        } else {
          reject();
        }
      });
    },
    cuploadbeforeAvatarUpload(file) {
      return new Promise((resolve, reject) => {
        if (this.isUpload()) {
          resolve();
        } else {
          reject();
        }
      });
    },
    ementhandleChange(file, fileList) {
      const isJPG = file.raw.type === "application/pdf";
      const isLt2M = file.raw.size / 1024 / 1024 < 5;
      if (!isJPG) {
        this.$message.error("下载说明文档只能是 PDF 格式!");
      }
      if (!isLt2M) {
        this.$message.error("文档大小不能超过 5MB!");
      }
      if (!isJPG || !isLt2M) {
        this.ementfileList = [];
      } else {
        this.ementfileList = fileList.slice(-3);
      }
    },
    picthandleChange(file, fileList) {
      const isJPG = file.raw.type === "image/png" || "image/jpg";
      const isLt2M = file.raw.size / 1024 / 1024 < 10;
      if (!isJPG) {
        this.$message.error("项目封面图片只能是 png/jpg 格式!");
      }
      if (!isLt2M) {
        this.$message.error("项目封面不能超过 10MB!");
      }
      if (!isJPG || !isLt2M) {
        this.pictfileList = [];
      } else {
        this.pictfileList = fileList.slice(-3);
      }
    },
    dhandleChange(file, fileList) {
      const isJPG = file.raw.type === "application/pdf";
      const isLt2M = file.raw.size / 1024 / 1024 < 5;
      if (!isJPG) {
        this.$message.error("课程介绍文档只能是 PDF 格式!");
      }
      if (!isLt2M) {
        this.$message.error("文档大小不能超过 5MB!");
      }
      if (!isLt2M || !isJPG) {
        this.dfileList = [];
      } else {
        this.dfileList = fileList.slice(-3);
      }
    },
    ictionshandleChange(file, fileList) {
      const isJPG = file.raw.type === "application/pdf";
      const isLt2M = file.raw.size / 1024 / 1024 < 5;
      if (!isJPG) {
        this.$message.error("操作流程文档只能是 PDF 格式!");
      }
      if (!isLt2M) {
        this.$message.error("文档大小不能超过 5MB!");
      }
      if (!isJPG || !isLt2M) {
        this.ictionsfileList = [];
      } else {
        this.ictionsfileList = fileList.slice(-3);
      }
    },
    oationhandleChange(file, fileList) {
      const isJPG = file.raw.type === "application/pdf";
      const isLt2M = file.raw.size / 1024 / 1024 < 5;
      if (!isJPG) {
        this.$message.error("实验准备只能是 PDF 格式!");
      }
      if (!isLt2M) {
        this.$message.error("文档大小不能超过 5MB!");
      }
      if (!isJPG || !isLt2M) {
        this.oationfileList = [];
      } else {
        this.oationfileList = fileList.slice(-3);
      }
    },
    llzdsghandleChange(file, fileList) {
      const isJPG = file.raw.type === "application/pdf";
      const isLt2M = file.raw.size / 1024 / 1024 < 5;
      if (!isJPG) {
        this.$message.error("使用说明文档只能是 PDF 格式!");
      }
      if (!isLt2M) {
        this.$message.error("文档大小不能超过 5MB!");
      }
      if (!isJPG || !isLt2M) {
        this.llzdsgfileList = [];
      } else {
        this.llzdsgfileList = fileList.slice(-3);
      }
    },
    videohandleChange(file, fileList) {
      const isJPG = file.raw.type === "video/mp4";
      const isLt2M = file.raw.size / 1024 / 1024 < 2000;
      if (!isJPG) {
        this.$message.error("介绍视频只能是 mp4 格式!");
      }
      if (!isLt2M) {
        this.$message.error("视频大小不能超过 2000MB!");
      }
      if (!isJPG || !isLt2M) {
        this.videofileList = [];
      } else {
        this.videofileList = fileList.slice(-3);
      }
    },
    cuploadhandleChange(file, fileList) {
      const isJPG = file.raw.type === "application/x-zip-compressed";
      const isLt2M = file.raw.size / 1024 / 1024 < 2000;
      if (!isJPG) {
        this.$message.error("课程上传文件只能是 ZIP 格式!");
      }
      if (!isLt2M) {
        this.$message.error("文件大小不能超过 2000MB!");
      }
      if (!isJPG || !isLt2M) {
        this.cuploadfileList = [];
      } else {
        this.cuploadfileList = fileList.slice(-3);
      }
    },
    makevideohandleChange(file, fileList) {
      const isJPG = file.raw.type === "video/mp4";
      const isLt2M = file.raw.size / 1024 / 1024 < 2000;
      if (!isJPG) {
        this.$message.error("操作视频只能是 mp4 格式!");
      }
      if (!isLt2M) {
        this.$message.error("视频大小不能超过 2000MB!");
      }
      if (!isJPG || !isLt2M) {
        this.makevideofileList = [];
      } else {
        this.makevideofileList = fileList.slice(-3);
      }
    }
  },
  components: {}
};
</script>
<style lang="stylus" scoped>
.programUpload {
  width: 900px;

  .upload {
    h1 {
      font-weight: bold;
      font-size: 16px;
      color: #333;
      margin-top: 30px;
      margin-bottom: 20px;
    }

    .line {
      width: 100%;
      height: 2px;
      background-color: #eee;
      margin: 0 auto;
    }

    .btn {
      text-align: center;
      margin-bottom: 20px;
    }
  }

  .content {
    padding: 40px 80px 100px;
    font-size: 16px;
    color: #333;

    p {
      span {
        color: #4aaffc;
      }
    }

    .btn {
      font-size: 16px;
      margin: 60px 0 20px;
      text-align: center;
    }
  }
}
</style>