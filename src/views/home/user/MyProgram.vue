<template>
  <div v-if="paginations.total" class="myProgram">
    <div v-if="true">
      <!-- 搜索框 -->
      <div class="search">
        <el-input
          @change="search"
          placeholder="输入关键词"
          suffix-icon="el-icon-search"
          v-model="keyword"
        ></el-input>
      </div>
      <div class="content">
        <div class="wrapper" v-for="(item,index) in myProgramData" :key="index">
          <div class="left" >
            <img @click="toProgramDetail(item)" src="../../../assets/program.jpg" alt />
            <div class="center">
              <h3 class="name">{{item.name}}</h3>
              <p class="status">{{item.status==1?'审核通过':'正在审核'}}</p>
              <p>上传时间：{{item.uploadtime}}</p>
              <div class="icon">
                <div>
                  <i class="iconfont icon-dianzan"></i>
                  <span style="margin-right:30px">{{item.record}}</span>
                </div>
                <div>
                  <i class="iconfont icon-pinglun"></i>
                  <span>{{item.critic}}</span>
                </div>
                <div style="margin:0 30px">
                  <i class="iconfont icon-danseshixintubiao-"></i>
                  <span>{{item.collect}}</span>
                </div>
                <div>
                  <i class="el-icon-download"></i>
                  <span>{{item.lower}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <el-button type="primary" @click="handleEdit(item)" style="margin-right:10px">编辑</el-button>
            <el-button @click="del(item)">删除</el-button>
          </div>
        </div>
      </div>
      <!-- 分页 -->
      <div class="page">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="paginations.page_index"
          :page-size="paginations.page_size"
          layout="prev, pager, next, jumper"
          :total="paginations.total"
        ></el-pagination>
      </div>
    </div>
    <div v-else>
      <NullShow></NullShow>
    </div>
    <!-- 修改框 -->
    <el-dialog title="课程信息" :visible.sync="isShow">
      <el-form ref="form" :model="programData" label-width="80px" style="margin:20px">
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
        <el-form-item label="介绍视频" prop="iduce">
          <el-upload
            ref="videoUpload"
            :limit="1"
            :auto-upload="false"
            :before-upload="videobeforeAvatarUpload"
            action="/api/user/intvideo"
            list-type="picture-card"
            :data="da"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <span>视频格式：mp4</span>
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
        <el-form-item label="课程上传">
          <el-upload
            ref="wjUpload"
            :limit="1"
            :before-upload="cuploadbeforeAvatarUpload"
            action="/api/user/cupload"
            list-type="picture-card"
            :auto-upload="false"
            :data="da"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <span>单个文件上传不超过1500M</span>
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
            :data="da"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <span>视频格式：mp4</span>
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="edit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
  <div v-else>
    <NullShow></NullShow>
  </div>
</template>
<script>
import NullShow from "../../../components/null";
import moment from "moment";
export default {
  data() {
    return {
      isShow: false,
      programData: {},
      da: { phone: "" },
      dfileList: [],
      oationfileList: [],
      ementfileList: [],
      ictionsfileList: [],
      llzdsgfileList: [],
      organ: [],
      wheel: [],
      userInfo: {},
      yzfile: {
        iduce: false,
        dload: false,
        ement: false,
        oation: false,
        ictions: false,
        llzdsg: false,
        makevideo: false,
        cupload: false
      },
      keyword: "",
      userInfo: {},
      myProgramData: [],
      //需要给分页组件传的信息
      paginations: {
        page_index: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 3, // 1页显示多少条
        layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
      }
    };
  },
  created() {
    this.userInfo = this.$store.state.userInfo;
    this.getData();
  },
  methods: {
    // 获取数据
    getData() {
      let needProgram = new FormData();
      needProgram.append("page", this.paginations.page_index);
      needProgram.append("rows", this.paginations.page_size);
      needProgram.append("sids", this.userInfo.phone);
      if(this.keyword){
        needProgram.append("keyword", this.keyword);
      }
      this.$axios.post("/api/note/courselist", needProgram).then(res => {
        // console.log(res);
        this.myProgramData = res.data.rows;
        this.myProgramData.map(item => {
          item.uploadtime = moment(item.uploadtime).format("YYYY-MM-DD");
        });
        this.paginations.total = res.data.total;
      });
    },
    // 删除
    del(item) {
      console.log(item)
      let pData = new FormData();
      pData.append("id", item.id);
      this.$axios.post("/api/note/delcourse", pData).then(res => {
        console.log(res);
        this.getData();
      });
    },
    //编辑
    handleEdit(item) {
      // console.log(item);
      this.programData = item;
      this.da.pid = item.pid;
      this.isShow = true;
    },
    //确定编辑
    edit() {
      if (!this.programData.name) {
        this.$message.warning("课程名称不能为空");
        return false;
      }
      if (!this.programData.brief) {
        this.$message.warning("课程摘要不能为空");
        return false;
      }
      if (!this.programData.organ) {
        this.$message.warning("专业类别不能为空");
        return false;
      }
      if (!this.programData.wheel) {
        this.$message.warning("所属专业不能为空");
        return false;
      }
      if (!this.programData.item) {
        this.$message.warning("所属机构不能为空");
        return false;
      }
      if (!this.programData.maketext) {
        this.$message.warning("视频简述不能为空");
        return false;
      }
      this.$refs.videoUpload.submit();
      this.$refs.dUpload.submit();
      this.$refs.wjUpload.submit();
      this.$refs.ementUpload.submit();
      this.$refs.oationUpload.submit();
      this.$refs.ictionsUpload.submit();
      this.$refs.makevideoUpload.submit();
      this.$refs.llzdsgUpload.submit();
      let programInfo = new FormData();
      programInfo.append("name", this.programData.name);
      programInfo.append("brief", this.programData.brief);
      programInfo.append("organ", this.programData.organ);
      programInfo.append("wheel", this.programData.wheel);
      programInfo.append("item", this.programData.item);
      programInfo.append("iduce", this.programData.iduce);
      programInfo.append("maketext", this.programData.maketext);
      programInfo.append("phone", this.da.phone);
      programInfo.append("pid", this.programData.pid);
      this.$axios.post("/api/user/cmgement", programInfo).then(res => {
        console.log(res);
        if (res.data.code == "OK") {
          this.$message({
            type: "success",
            message: "编辑成功"
          });
          this.isShow = false;
          this.getData();
        } else {
          this.$message({
            type: "error",
            message: "编辑失败"
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
    //搜索
    search() {
      this.getData()
    },
    // 跳转到项目详情
    toProgramDetail(item) {
      this.$router.push(`/programItem/${item.id}`);
    },
    //表单验证
    videobeforeAvatarUpload(file) {
      //   const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2000;
      //   if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 格式!');
      //   }
      if (!isLt2M) {
        this.$message.error("视频大小不能超过 2000MB!");
      } else {
        this.yzfile.iduce = true;
      }
      return isLt2M;
      // return isJPG && isLt2M;
      // }
    },
    dloadbeforeAvatarUpload(file) {
      //   const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 5;
      //   if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 格式!');
      //   }
      if (!isLt2M) {
        this.$message.error("文档大小不能超过 5MB!");
      } else {
        this.yzfile.dload = true;
      }
      return isLt2M;
      // return isJPG && isLt2M;
      // }
    },
    ementbeforeAvatarUpload(file) {
      //   const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 5;
      //   if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 格式!');
      //   }
      if (!isLt2M) {
        this.$message.error("文档大小不能超过 5MB!");
      } else {
        this.yzfile.ement = true;
      }
      return isLt2M;
      // return isJPG && isLt2M;
      // }
    },
    oationbeforeAvatarUpload(file) {
      //   const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 5;
      //   if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 格式!');
      //   }
      if (!isLt2M) {
        this.$message.error("文档大小不能超过 5MB!");
      } else {
        this.yzfile.oation = true;
      }
      return isLt2M;
      // return isJPG && isLt2M;
      // }
    },
    ictionsbeforeAvatarUpload(file) {
      //   const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 5;
      //   if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 格式!');
      //   }
      if (!isLt2M) {
        this.$message.error("文档大小不能超过 5MB!");
      } else {
        this.yzfile.ictions = true;
      }
      return isLt2M;
      // return isJPG && isLt2M;
      // }
    },
    llzdsgbeforeAvatarUpload(file) {
      //   const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 5;
      //   if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 格式!');
      //   }
      if (!isLt2M) {
        this.$message.error("文档大小不能超过 5MB!");
      } else {
        this.yzfile.llzdsg = true;
      }
      return isLt2M;
      // return isJPG && isLt2M;
      // }
    },
    makevideobeforeAvatarUpload(file) {
      //   const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2000;
      //   if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 格式!');
      //   }
      if (!isLt2M) {
        this.$message.error("视频大小不能超过 2000MB!");
      } else {
        this.yzfile.makevideo = true;
      }
      return isLt2M;
      // return isJPG && isLt2M;
      // }
    },
    cuploadbeforeAvatarUpload(file) {
      //   const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2000;
      //   if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 格式!');
      //   }
      if (!isLt2M) {
        this.$message.error("文件大小不能超过 2000MB!");
      } else {
        this.yzfile.cupload = true;
      }
      return isLt2M;
      // return isJPG && isLt2M;
      // }
    },
    ementhandleChange(file, fileList) {
      this.ementfileList = fileList.slice(-3);
    },
    dhandleChange(file, fileList) {
      this.dfileList = fileList.slice(-3);
    },
    ictionshandleChange(file, fileList) {
      this.ictionsfileList = fileList.slice(-3);
    },
    oationhandleChange(file, fileList) {
      this.oationfileList = fileList.slice(-3);
    },
    llzdsghandleChange(file, fileList) {
      this.llzdsgfileList = fileList.slice(-3);
    },
    //   分页
    handleCurrentChange(val) {
      this.paginations.page_index = val;
      this.getData();
    }
  },
  components: {
    NullShow
  }
};
</script>
<style lang="stylus" scoped>
.myProgram {
  position: relative;
  width: 900px;
  .search {
    width: 200px;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .content {
    width: 900px;
    padding-top: 80px;

    .wrapper {
      width: 820px;
      height: 160px;
      margin: 0 auto;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 20px;
      display: flex;
      justify-content: space-between;

      .left {
        display: flex;

        img {
          width: 180px;
          height: 126px;
          margin-top: 20px;
          margin-right: 20px;
        }

        .center {
          margin-top: 20px;
          font-size: 14px;
          color: #666;

          .name {
            font-size: 16px;
            width: 300px;
            color: #000;
            line-height: 1.4;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .status {
            color: red;
            margin: 10px 0;
          }

          .icon {
            height: 60px;
            line-height: 60px;
            display: flex;

            .add {
              color: #666;
            }

            i {
              font-size: 20px;
              margin-top: 5px;
              margin-right: 10px;
            }
          }
        }
      }

      .right {
        margin-top: 60px;
      }
    }
  }

  .page {
    width: 400px;
    margin: 40px auto 0;
    padding-bottom: 40px;
  }

  h1 {
    font-weight: bold;
    font-size: 16px;
    color: #333;
    margin-top: -20px;
    margin-bottom: 20px;
  }

  .line {
    width: 100%;
    height: 2px;
    background-color: #eee;
    margin: 0 auto;
  }
}
</style>