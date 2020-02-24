<template>
  <div class="home">
    <div :id="isShow||isPasswordShow ? 'open':''"></div>
    <!-- 导航 -->
    <header>
      <div class="hLeft">
        <img style="width:210px;height:50px" src="../assets/logo.png" alt />
      </div>
      <div>
        <ul class="nav">
          <li v-for="(item,index) in nav" :key="index" @click="navIndex = index">
            <router-link :active-class="index==navIndex?'isSelect':''" :to="item.url">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
      <div class="hRight">
        <span v-if="!isLogin">
          <span @click="login">登录</span>/
          <span @click="register">注册</span>
        </span>
        <!-- 个人信息弹窗 -->
        <span class="username" v-else>
          <el-dropdown trigger="click" @command="setDialogInfo">
            <span class="el-dropdown-link">
              <span>欢迎，{{phone}}</span>
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="info">个人信息</el-dropdown-item>
              <el-dropdown-item command="password">修改密码</el-dropdown-item>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
        <span class="connet">联系我们</span>
      </div>
    </header>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <footer>
      <p class="cell">
        联系我们
        <span>电话：0101-2656526</span>邮箱：bjcssads@163.com
      </p>
      <p>dffdsd北京蔚来高科技术有限公司北京蔚来高科技术有限公司北京蔚来高科技术有限公司</p>
    </footer>
    <!-- 弹出框登录注册 -->
    <div class="dialog" v-if="isShow">
      <div class="select" v-if="!passwordShow">
        <span
          v-for="(item,index) in loginStyle"
          @click="currentIndex = index"
          :key="index"
          :class="currentIndex===index?'selected':''"
        >{{item}}</span>
      </div>
      <div class="select" v-else>
        <span
          style="font-weight: bold;display:flex;justify-content:center"
        >{{registerShow?'注册':'密码找回'}}</span>
      </div>
      <div class="line"></div>
      <el-form
        :model="loginUser"
        ref="loginForm"
        class="loginForm"
        label-width="70px"
        style="margin-top:30px;width:290px;margin-left:30px"
      >
        <el-input
          :input="isClickPhone()"
          v-show="!nextPasswordShow"
          v-model="loginUser.phone"
          placeholder="请输入手机号"
        ></el-input>
        <span>
          <el-input
            v-show="registerShow"
            style="margin-top: 20px;"
            v-model="loginUser.password"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </span>
        <span>
          <el-input
            v-show="registerShow"
            style="margin-top: 20px;"
            v-model="loginUser.password2"
            placeholder="请再次输入密码"
            type="password"
          ></el-input>
        </span>
        <el-input
          :input="isClickPhone()"
          style="margin: 20px 0;backColor:blue"
          v-model="loginUser.password"
          placeholder="请输入密码"
          show-password
          type="password"
          v-if="currentIndex == 0"
        ></el-input>
        <div v-else>
          <div v-if="!nextPasswordShow">
            <el-input
              style="margin: 20px 20px 20px 0px;width:155px"
              v-model="loginUser.verifyCode"
              placeholder="请输入验证码"
              type="text"
            ></el-input>
            <el-button v-if="!disabled" type="primary" @click="getVerifyCode">发送验证码</el-button>
            <span v-else>{{btnTitle}}</span>
          </div>
          <div v-else>
            <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
            <el-input
              style="margin: 20px 0"
              v-model="password2"
              placeholder="请输入密码"
              type="password"
            ></el-input>
          </div>
        </div>
        <div v-if="!passwordShow">
          <el-button
            style="width:290px;margin-left:-1px"
            :type="!isClick?'primary':'info'"
            @click="submitForm('loginForm',1)"
            class="submit_btn"
            :disabled="isClick"
          >登录</el-button>
          <!-- <el-button
            style="width:130px;margin-left:30px"
            :type="!isClick?'primary':'info'"
            @click="submitForm('loginForm',2)"
            class="submit_btn"
            :disabled="isClick"
          >专业用户</el-button>-->
          <div class="tiparea">
            <el-checkbox v-model="checked">记住密码</el-checkbox>
            <p>
              <span @click="noPassword">忘记密码</span> |
              <span @click="register">注册</span>
            </p>
          </div>
        </div>
        <div v-else-if="registerShow">
          <div class="tiparea" style="margin:0 0 20px ">
            <el-checkbox v-model="checked">
              <p style="color:#000">
                我已阅读并接受
                <span style="color:red">用户协议</span> 和
                <span style="color:red">隐私政策</span>
              </p>
            </el-checkbox>
          </div>
          <el-button
            style="width:290px;margin-left:-1px"
            type="primary"
            @click="toRegister('loginForm')"
            class="submit_btn"
          >注 册</el-button>
        </div>
        <el-button
          v-else-if="!nextPasswordShow"
          style="width:290px;margin-left:-1px"
          type="primary"
          @click="nextPassword('loginForm')"
          class="submit_btn"
        >下一步</el-button>
        <el-button
          v-else
          style="width:290px;margin-left:-1px"
          type="primary"
          @click="editPassword('loginForm')"
          class="submit_btn"
        >确定</el-button>

        <div class="canel" @click="cancel">取消</div>
      </el-form>
    </div>
    <!-- 修改密码 -->
    <div class="dialog" v-if="isPasswordShow">
      <div class="select">
        <span style="font-weight: bold;display:flex;justify-content:center">密码修改</span>
      </div>
      <div class="line"></div>
      <el-form
        :model="newPassword"
        ref="passwordForm"
        class="loginForm"
        label-width="70px"
        style="margin-top:30px;width:290px;margin-left:30px"
      >
        <el-input
          type="password"
          v-model="newPassword.oldPassword"
          show-password
          placeholder="请输入原密码"
        ></el-input>
        <span>
          <el-input
            style="margin-top: 20px;"
            v-model="newPassword.password"
            placeholder="请输入新密码"
            show-password
            type="password"
          ></el-input>
        </span>
        <span>
          <el-input
            style="margin-top: 20px;"
            v-model="newPassword.password2"
            placeholder="请再次输入新密码"
            show-password
            type="password"
          ></el-input>
        </span>

        <el-button
          style="width:290px;margin-left:-1px;margin-top: 20px;"
          type="primary"
          @click="editNewPassword('passwordForm')"
          class="submit_btn"
        >确定</el-button>

        <div class="canel" @click="cancel">取消</div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    var checkphone = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入手机号"));
      } else if (!this.isCellPhone(value)) {
        //引入methods中封装的检查手机格式的方法
        callback(new Error("请输入正确的手机号!"));
      } else {
        callback();
      }
    };
    return {
      isShow: false,
      isPasswordShow: false,
      passwordShow: false,
      currentIndex: 0,
      navIndex: 0,
      nextPasswordShow: false,
      registerShow: false,
      password: "",
      password2: "",
      loginUser: {
        phone: "",
        password: "",
        password2: "",
        verifyCode: ""
      },
      newPassword: {
        oldPassword: "",
        password: "",
        password2: ""
      },
      btnTitle: "",
      disabled: false,
      checked: false,
      loginStyle: ["密码登录", "短信登录"],
      visible: false,
      isClick: false,
      userInfo: {},
      isLogin: false,
      nav: [
        { title: "主页", url: "/main" },
        { title: "实训项目", url: "/program" },
        { title: "热度排行", url: "/heat" }
      ],
      phone: ""
      // rules: {
      //   phone: [{ required: true, validator: checkphone, trigger: "blur" }],
      //   password: [
      //     { required: true, message: "密码不能为空", trigger: "blur" },
      //     { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" }
      //   ],
      //   verifyCode: [
      //     { required: true, message: "验证码不能为空", trigger: "blur" },
      //     { min: 6, max: 6, message: "验证码输入有误", trigger: "blur" }
      //   ]
      // }
    };
  },
  computed: {},
  created() {
    this.getInfo();
  },
  mounted() {
    this.getCookie();
  },
  methods: {
    // 登录样式
    isClickPhone() {
      if (!this.loginUser.phone || !this.loginUser.password) {
        this.isClick = true;
      } else {
        this.isClick = false;
      }
    },
    // 注册样式
    // isClickRegister() {
    //   if (
    //     !this.loginUser.phone ||
    //     !this.loginUser.password ||
    //     !this.loginUser.password2 ||
    //     !this.loginUser.verifyCode
    //   ) {
    //     this.isClick = true;
    //   } else {
    //     this.isClick = false;
    //   }
    // },
    //获取用户信息和是否登录
    getInfo() {
      this.$store.commit("checkToken");
      this.isLogin = this.$store.state.isLogin;
      this.userInfo = this.$store.state.userInfo;
      this.phone = this.userInfo.phone.replace(
        this.userInfo.phone.substring(3, 7),
        "****"
      );
    },
    //登录
    submitForm(loginForm, index) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          let loginInfo = new FormData();
          loginInfo.append("phone", this.loginUser.phone);
          loginInfo.append("password", this.loginUser.password);
          // if (index == 1) {
          this.$axios.post("/api/note/wllogin", loginInfo).then(res => {
            if (res.data.code == "OK") {
              if (this.checked) {
                //传入账号名，密码，和保存天数3个参数
                this.setCookie(this.loginUser.phone, this.loginUser.password);
              } else {
                this.clearCookie();
              }
              console.log(res);
              localStorage.setItem("Token", res.data.wuser.token);
              this.$store.commit("getUser", res.data.wuser);
              this.getInfo();
              this.cancel();
            } else {
              this.$message({
                type: "error",
                message: res.data.msg
              });
            }
          });
          // } else {
          //   this.$axios.post("/api/user/pulogins", loginInfo).then(res => {
          //     if (res.data.code.code == "OK") {
          //       if (this.checked) {
          //         //传入账号名，密码，和保存天数3个参数
          //         this.setCookie(
          //           this.loginUser.phone,
          //           this.loginUser.password,
          //           7
          //         );
          //       } else {
          //         this.clearCookie();
          //       }
          //       localStorage.setItem("Token", res.data.u.token);
          //       this.$store.commit("getUser", res.data.u);
          //       this.getInfo();
          //       this.cancel();
          //     } else {
          //       this.$message({
          //         type: "error",
          //         message: res.data.msg
          //       });
          //     }
          //   });
          // }
        } else {
          return false;
        }
      });
    },
    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    // 删除cookie
    clearCookie() {
      this.setCookie("", "", -1);
    },
    // 获取cookie
    getCookie() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "userName") {
            this.loginUser.phone = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "userPwd") {
            this.loginUser.password = arr2[1];
          }
        }
      }
    },
    //忘记密码
    noPassword() {
      this.passwordShow = true;
      this.currentIndex = 1;
      this.isShow = true;
    },
    //密码下一步
    nextPassword(loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          let nextPasswordInfo = new FormData();
          nextPasswordInfo.append("phone", this.loginUser.phone);
          nextPasswordInfo.append("mobile_code", this.loginUser.verifyCode);
          this.$axios
            .post("/api/note/noteverify", nextPasswordInfo)
            .then(res => {
              // console.log(res);
              if (res.data.code == "OK") {
                this.nextPasswordShow = true;
              } else {
                this.$message({
                  type: "error",
                  message: res.data.msg
                });
              }
            });
        } else {
          return false;
        }
      });
    },
    //修改密码
    editPassword(loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          if (this.password === this.password2) {
            let editPasswordInfo = new FormData();
            editPasswordInfo.append("phone", this.loginUser.phone);
            editPasswordInfo.append("password", this.password);
            this.$axios.post("/api/note/upnote", editPasswordInfo).then(res => {
              this.$message({
                type: "success",
                message: "修改成功"
              });
              this.cancel();
            });
          } else {
            this.$message({
              type: "warning",
              message: "密码不一致"
            });
          }
        } else {
          return false;
        }
      });
    },
    editNewPassword(passwordFrom) {
      this.$refs[passwordFrom].validate(valid => {
        if (valid) {
          if (this.newPassword.oldPassword == this.userInfo.password) {
            if (this.newPassword.password == this.newPassword.password2) {
              let editPasswordInfo = new FormData();
              editPasswordInfo.append("phone", this.userInfo.phone);
              editPasswordInfo.append("password", this.newPassword.password);
              this.$axios
                .post("/api/note/upnote", editPasswordInfo)
                .then(res => {
                  this.$message({
                    type: "success",
                    message: "修改成功"
                  });
                  this.cancel();
                });
            } else {
              this.$message({
                type: "warning",
                message: "两次密码不一致"
              });
            }
          } else {
            this.$message({
              type: "error",
              message: "密码有误"
            });
          }
        } else {
          return false;
        }
      });
    },
    //注册页面显示
    register() {
      this.isShow = true;
      this.currentIndex = 9;
      this.passwordShow = true;
      this.registerShow = true;
    },
    //登录页面
    login() {
      this.isShow = true;
    },
    //注册
    toRegister(loginForm) {
      if (this.isVerifyCode(this.loginUser.verifyCode)) {
        this.$refs[loginForm].validate(valid => {
          if (valid) {
            if (this.loginUser.password === this.loginUser.password2) {
              if (this.checked) {
                let registerInfo = new FormData();
                registerInfo.append("phone", this.loginUser.phone);
                registerInfo.append("password", this.loginUser.password);
                registerInfo.append("mobile_code", this.loginUser.verifyCode);
                this.$axios.post("/api/note/wladd", registerInfo).then(res => {
                  console.log(res);
                  if (res.data.code == "OK") {
                    this.$message({
                      type: "success",
                      message: "注册成功"
                    });
                    (this.loginUser = {
                      phone: "",
                      password: "",
                      password2: "",
                      verifyCode: ""
                    }),
                      (this.nextPasswordShow = false);
                    this.passwordShow = false;
                    this.registerShow = false;
                    this.currentIndex = 0;
                    this.checked = false;
                  } else {
                    this.$message({
                      type: "error",
                      message: res.data.msg
                    });
                  }
                });
              } else {
                this.$message({
                  type: "warning",
                  message: "请勾选用户协议"
                });
              }
            } else {
              this.$message({
                type: "warning",
                message: "密码不一致"
              });
            }
          } else {
            return false;
          }
        });
      } else {
        this.$message({
          type: "warning",
          message: "验证码格式有误"
        });
      }
    },
    //取消
    cancel() {
      this.checked = false;
      this.passShow = false;
      this.loginUser = {
        phone: "",
        password: "",
        password2: "",
        verifyCode: ""
      };
      this.newPassword = {
        oldPassword: "",
        password: "",
        password2: ""
      };
      this.isShow = false;
      this.nextPasswordShow = false;
      this.passwordShow = false;
      this.registerShow = false;
      this.currentIndex = 0;
      this.isPasswordShow = false;
    },
    // 获取验证码
    getVerifyCode() {
      if (this.isCellPhone(this.loginUser.phone)) {
        this.validateBtn();
        // 发送网络请求
        let verifyCode = new FormData();
        verifyCode.append("phone", this.loginUser.phone);
        if (!this.registerShow) {
          this.$axios.post("/api/note/finn_back", verifyCode).then(res => {
            console.log(res);
          });
        } else {
          this.$axios.post("/api/note/getnote", verifyCode).then(res => {
            console.log(res);
          });
        }
      } else {
        this.$message({
          type: "warning",
          message: "手机号有误"
        });
      }
    },
    //倒计时
    validateBtn() {
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.disabled = false;
        } else {
          // 倒计时
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      }, 1000);
    },
    //验证手机号格式
    isCellPhone(val) {
      if (!/^1(3|4|5|6|7|8)\d{9}$/.test(val)) {
        return false;
      } else {
        return true;
      }
    },
    //验证验证码
    isVerifyCode(val) {
      if (!/\d{6}$/.test(val) || val.length !== 6) {
        return false;
      } else {
        return true;
      }
    },
    setDialogInfo(cmditem) {
      if (!cmditem) {
        this.$message("菜单选项缺少command属性");
        return;
      }
      switch (cmditem) {
        case "info":
          this.showInfoList();
          break;
        case "password":
          this.editPass();
          break;
        case "logout":
          this.logout();
          break;
      }
    },
    editPass() {
      this.isPasswordShow = true;
    },
    showInfoList() {
      // 个人信息
      this.$router.push("/userInfo");
    },
    //退出登录
    logout() {
      // 清除token
      localStorage.removeItem("Token");
      this.getInfo();
      // this.$store.dispatch("clearCurrentState");
      // // 页面跳转
      this.getCookie();
      this.$router.push("/main");
    }
  },
  components: {},
  computed: {}
};
</script>
<style lang="stylus" scoped>
#open {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  z-index: 3;
}

#passeye {
  color: #4aaffc;
}

.info {
  margin-left: 30px;
  line-height: 2;

  h2 {
    font-size: 16px;
    color: #333333;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    color: #666;
  }

  .line {
    width: 130px;
    height: 2px;
    margin-left: -20px;
    background-color: #555;
  }
}

.home {
  header {
    width: 1190px;
    height: 80px;
    background-color: #fff;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    line-height: 80px;

    .hLeft {
      margin: 15px 80px 15px 30px;
    }

    .hRight {
      margin-right: 30px;
      font-size: 14px;
      color: #333333;
    }

    .nav {
      display: flex;
      margin-left: -350px;

      li {
        margin-left: 50px;

        .isSelect {
          border-bottom: 3px solid #4ccaff;
          width: 60px;
          padding-bottom: 25px;
        }

        a {
          font-size: 16px;
          color: #333333;
          width: 60px;
          font-weight: bold;
          padding-bottom: 25px;
        }
      }
    }

    .hRight {
      .connet {
        margin-left: 30px;
      }
    }
  }

  footer {
    height: 90px;
    width: 100%;
    margin-top: -80px;
    background-color: #fff;

    .cell {
      padding-top: 30px;
      margin: 0 0 20px;
    }

    p {
      text-align: center;

      span {
        margin: 0 30px 0 40px;
      }
    }
  }

  .dialog {
    width: 350px;
    height: 460px;
    background-color: #fff;
    position: absolute;
    border-radius: 5px;
    top: 25%;
    left: 35%;
    z-index: 20;
    font-size: 14px;
    color: #666;

    .select {
      margin: 30px 0 0 30px;
      font-size: 16px;
      color: #333;

      span {
        margin-right: 20px;
      }

      .selected {
        border-bottom: 3px solid #4ccaff;
        padding-bottom: 15px;
        font-weight: bold;
      }
    }

    .line {
      margin: 0 auto;
      margin-top: 20px;
      width: 290px;
      height: 2px;
      background-color: #eee;
    }

    .tiparea {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }

    .canel {
      position: absolute;
      bottom: 20px;
      right: 30px;
    }
  }
}
</style>