<template>
  <div>
    <div class="main">
      <div class="wrapper">
        <!-- 项目头部简介 -->
        <header>
          <div class="left">
            <h3>{{programData.name}}</h3>
            <p style="text-indent:2em;line-height:1.5;margin-bottom:15px;">{{programData.brief}}</p>
            <span>所属专业类：{{programData.organ}}</span>
            <span style="margin:0 40px">对应专业：{{programData.wheel}}</span>
            <span>所属机构：{{programData.item}}</span>
            <p>
              <span>项目负责人：{{programData.iduce}}</span>
              <span style="margin:0 40px">联系方式：{{programData.phone}}</span>
            </p>
            <div class="icon">
              <div>
                <el-link :href="programData.cupload" :underline="false" style="margin-right:40px;">
                  <el-button type="primary">我要做实验</el-button>
                </el-link>
              </div>
              <div :class="iconStatus.isGood?'add':''">
                <i @click="good" class="iconfont icon-dianzan"></i>
                <span style="margin-right:40px">{{programData.record}}</span>
              </div>
              <div v-if="!iconStatus.isCollection" style="width:90px">
                <i @click="collection" class="iconfont icon-danseshixintubiao-"></i>
                <span>收藏</span>
              </div>
              <div v-else class="add" style="width:90px">
                <i @click="collection" class="iconfont icon-danseshixintubiao-"></i>
                <span>已收藏</span>
              </div>
              <div class="rate">
                <span>个人评分</span>
                <el-rate
                  @change="rate"
                  v-model="iconStatus.rate"
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="rate">{{programData.rate}}</div>
            <div>
              <video
                id="video"
                :poster="programData.pict"
                ref="myVideo"
                width="340"
                height="190"
                controls
              >
                <source type="video/mp4" />
              </video>
            </div>
          </div>
        </header>
        <!-- 项目的详细介绍 -->
        <div class="program">
          <div class="select">
            <span
              v-for="(item,index) in programItem"
              @click="changeNav(index)"
              :key="index"
              :class="currentIndex===index?'selected':''"
            >{{item}}</span>
          </div>
          <div class="line"></div>
          <div class="content">
            <!-- <NullShow></NullShow> -->
            <!-- 项目介绍 -->
            <div v-show="currentIndex == 0">
              <div v-if="programData.dload" class="pIndex">
                <iframe :src="programData.dload" width="100%" height="700px">
                  This browser does not support PDFs. Please download the PDF to view it:
                  <!-- <el-link :href="programData.dload">文档下载</el-link> -->
                </iframe>
              </div>
              <NullShow v-else></NullShow>
            </div>
            <!-- 课程下载 -->
            <!-- <div v-else-if="currentIndex == 1">
              <NullShow></NullShow>
            </div>-->
            <!-- 实验步骤 -->
            <div class="procedures" v-if="currentIndex == 1">
              <div class="left">
                <div class="select">
                  <h3
                    v-for="(item,index) in ProceduresNav"
                    @click="pchangeNav(index)"
                    :key="index"
                    :class="pCurrentIndex===index?'selected':''"
                  >{{item}}</h3>
                </div>
              </div>
              <div class="right">
                <!-- 实验准备 -->
                <div v-show="pCurrentIndex==0">
                  <div v-if="programData.oation">
                    <iframe
                      :src="programData.oation"
                      width="100%"
                      height="700px"
                    >This browser does not support PDFs. Please download the PDF to view it:</iframe>
                  </div>
                  <NullShow v-else></NullShow>
                </div>
                <!-- 操作流程 -->
                <div v-show="pCurrentIndex==1">
                  <div v-if="programData.ictions">
                    <iframe
                      :src="programData.ictions"
                      width="100%"
                      height="700px"
                    >This browser does not support PDFs. Please download the PDF to view it:</iframe>
                  </div>
                  <NullShow v-else></NullShow>
                </div>
                <!-- 操作视频 -->
                <div v-show="pCurrentIndex==2">
                  <div class="makeVideo">
                    <h3>{{programData.maketext}}</h3>
                    <video ref="makeVideo" width="340" height="190" controls>
                      <source type="video/mp4" />
                    </video>
                  </div>
                  <!-- <NullShow></NullShow> -->
                </div>
                <!-- 使用说明 -->
                <div v-show="pCurrentIndex==3">
                  <div v-if="programData.llzdsg">
                    <iframe
                      :src="programData.llzdsg"
                      width="100%"
                      height="700px"
                    >This browser does not support PDFs. Please download the PDF to view it:</iframe>
                  </div>
                  <NullShow v-else></NullShow>
                </div>
              </div>
            </div>
            <!-- 信息统计 -->
            <div v-show="currentIndex == 2">
              <div class="wrapper">
                <h3>近7日访问人数</h3>
                <div id="line1"></div>
                <div class="line"></div>
                <h3>软件使用情况</h3>
                <div class="time">
                  <el-select v-model="timeValue">
                    <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
                  </el-select>
                </div>
                <div id="line2"></div>
                <div class="line"></div>
                <h3 style="margin-bottom:30px">使用评价</h3>
                <div id="pie" style="width: 600px;height:400px;"></div>
              </div>
              <!-- <NullShow></NullShow> -->
            </div>
          </div>
        </div>
        <!-- 评论模块 -->
        <div class="comment">
          <div class="sub">
            <h3>课程交流（20）</h3>
            <el-input
              :autosize="{ minRows: 6, maxRows: 6}"
              type="textarea"
              style="width: 1130px;"
              placeholder="发表言论"
              v-model="comment"
            ></el-input>
            <el-button type="primary" class="btn">发表评论</el-button>
          </div>
          <div class="line"></div>
          <div class="commentContent">
            <div class="contentItem">
              <h3>李亮名字</h3>
              <p>dfafafafadasdsadas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafadasdsadas撒电脑就暗示法dfafafafadasdsadas撒电脑就暗示法叫你啥of就大概就是发动机群殴if啊</p>
              <p class="time">2012-12-24</p>
              <div v-if="!recomment">
                <p class="ret" @click="recomment = true">回复</p>
              </div>
              <div v-else>
                <p class="ret" style="margin-left:1030px" @click="recomment = false">收起回复</p>
                <div class="sub" style="margin-top:20px">
                  <el-input
                    :autosize="{ minRows: 4, maxRows: 4}"
                    type="textarea"
                    placeholder="说点什么吧"
                    style="width: 1030px;margin-left:30px"
                    v-model="comment"
                  ></el-input>
                  <el-button type="primary" class="btn">回复</el-button>
                </div>
              </div>
              <div class="item">
                <div>
                  <h3>李亮名字</h3>
                  <p>dfafafafadasdsadas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafadasdsadas撒电脑就暗示法dfafafafadasdsadas撒电脑就暗示法叫你啥of就大概就是发动机群殴if啊</p>
                  <p class="time">2012-12-24</p>
                </div>
                <div class="line"></div>
                <div>
                  <h3>李亮名字</h3>
                  <p>dfafafafadasdsadas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafadasdsadas撒电脑就暗示法dfafafafadasdsadas撒电脑就暗示法叫你啥of就大概就是发动机群殴if啊</p>
                  <p class="time">2012-12-24</p>
                </div>
                <div class="line"></div>
                <div>
                  <h3>李亮名字</h3>
                  <p>dfafafafadasdsadas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafadasdsadas撒电脑就暗示法dfafafafadasdsadas撒电脑就暗示法叫你啥of就大概就是发动机群殴if啊</p>
                  <p class="time">2012-12-24</p>
                </div>
                <div class="page">
                  <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
                </div>
              </div>
            </div>
            <div class="line"></div>
            <div class="contentItem">
              <h3>李亮名字</h3>
              <p>dfafafafadasdsadas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafadasdsadas撒电脑就暗示法dfafafafadasdsadas撒电脑就暗示法叫你啥of就大概就是发动机群殴if啊</p>
              <p class="time">2012-12-24</p>
              <p class="ret">回复</p>
              <div class="item">
                <h3>李亮名字</h3>
                <p>dfafafafadasdsadas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafas撒电脑就暗示法dfafafafadasdsadas撒电脑就暗示法dfafafafadasdsadas撒电脑就暗示法叫你啥of就大概就是发动机群殴if啊</p>
                <p class="time">2012-12-24</p>
              </div>
            </div>
            <div class="page">
              <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
            </div>
          </div>
          <!-- <div class="noPeople">
            暂无评论
          </div>-->
        </div>
      </div>
    </div>
    <button ref="top" @click="goTop" style="position:fixed;right:0;bottom:0">回到顶部</button>
  </div>
</template>

<script>
import echarts from "echarts";
import NullShow from "../../components/null";
import "../../../public/css/reset.css";
export default {
  data() {
    return {
      programItem: ["项目介绍", "实验操作", "信息统计"],
      ProceduresNav: ["实验准备", "操作流程", "操作视频", "使用说明"],
      currentIndex: 0,
      pCurrentIndex: 0,
      comment: "",
      timeValue: "一周内",
      options: ["一周内", "一个月内", "三个月内", "全部"],
      recomment: false,
      programData: {},
      allProgramData: {},
      iconStatus: {
        isCollection: false,
        rate: 0,
        isGood: false
      },
      userInfo: {}
    };
  },
  created() {
    this.userInfo = this.$store.state.userInfo;
    this.getData();
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
    this.drawChart();
    this.loading();
  },
  methods: {
    getData() {
      let programDetail = new FormData();
      programDetail.append("id", this.$route.params.id);
      programDetail.append("phone", this.userInfo.phone);
      //我的学习
      this.$axios.post("/api/note/browse", programDetail).then(res => {
        // console.log(res)
      });
      this.$axios.post("/api/note/course", programDetail).then(res => {
        console.log(res);
        this.allProgramData = res.data;
        this.programData = res.data.gement;
        this.programData.rate = Number(this.programData.rate);
        if (this.programData.dload) {
          this.programData.dload =
            "http://192.168.1.48:9000/" + this.programData.dload;
        }
        if (this.programData.makevideo) {
          this.programData.makevideo =
            "http://192.168.1.48:9000/" + this.programData.makevideo;
        }
        if (this.programData.intvideo) {
          this.programData.intvideo =
            "http://192.168.1.48:9000/" + this.programData.intvideo;
        }
        if (this.programData.cupload) {
          this.programData.cupload =
            "http://192.168.1.48:9000/" + this.programData.cupload;
        }
        if (this.programData.llzdsg) {
          this.programData.llzdsg =
            "http://192.168.1.48:9000/" + this.programData.llzdsg;
        }
        if (this.programData.ement) {
          this.programData.ement =
            "http://192.168.1.48:9000/" + this.programData.ement;
        }
        if (this.programData.ictions) {
          this.programData.ictions =
            "http://192.168.1.48:9000/" + this.programData.ictions;
        }
        if (this.programData.oation) {
          this.programData.oation =
            "http://192.168.1.48:9000/" + this.programData.oation;
        }
        if (this.programData.pict) {
          this.programData.pict =
            "http://192.168.1.48:9000/" + this.programData.pict;
        }
        this.$refs.myVideo.src = this.programData.intvideo;
        if (this.allProgramData.rate) {
          this.iconStatus.rate = this.allProgramData.rate.likes;
        } else {
          this.iconStatus.rate = 0;
        }
        if (this.allProgramData.record) {
          this.iconStatus.isGood = true;
        } else {
          this.iconStatus.isGood = false;
        }
        if (this.allProgramData.collect) {
          this.iconStatus.isCollection = true;
        } else {
          this.iconStatus.isCollection = false;
        }
      });
    },
    // 点赞
    good() {
      this.iconStatus.isGood = !this.iconStatus.isGood;
      if (this.iconStatus.isGood) {
        this.programData.record++;
      } else {
        this.programData.record--;
      }
      let goodData = new FormData();
      goodData.append("id", this.programData.id);
      goodData.append("phone", this.programData.phone);
      goodData.append("likes", 1);
      this.$axios.post("/api/note/record", goodData).then(res => {
        // console.log(res);
      });
    },
    // 收藏
    collection() {
      this.iconStatus.isCollection = !this.iconStatus.isCollection;
      let collectionData = new FormData();
      collectionData.append("id", this.programData.id);
      collectionData.append("phone", this.programData.phone);
      collectionData.append("likes", 1);
      this.$axios.post("/api/note/collect", collectionData).then(res => {
        // console.log(res);
      });
    },
    // 评价
    rate() {
      let rateData = new FormData();
      rateData.append("id", this.programData.id);
      rateData.append("phone", this.programData.phone);
      rateData.append("likes", this.iconStatus.rate);
      this.$axios.post("/api/note/rate", rateData).then(res => {
        console.log(res);
      });
    },
    changeNav(index) {
      // this.loading();
      this.currentIndex = index;
    },
    pchangeNav(index) {
      // this.loading();
      this.pCurrentIndex = index;
      if (index == 2) {
        this.$refs.makeVideo.src = this.programData.makevideo;
      }
    },
    // 数据统计图
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(document.getElementById("line1"));
      let myChart2 = this.$echarts.init(document.getElementById("line2"));
      let myChart = this.$echarts.init(document.getElementById("pie"));
      let option1 = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      };
      let option2 = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      };
      // 饼状图
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "30",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChart1.setOption(option1);
      myChart2.setOption(option2);
      myChart.setOption(option);
    },
    // 滑动时触发
    scrollToTop() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let browserHeight = window.outerHeight; //浏览器页面高度
      if (scrollTop > browserHeight) {
        this.$refs.top.style.display = "block";
      } else {
        this.$refs.top.style.display = "none";
      }
    },
    //返回顶部
    goTop() {
      window.scrollTo(0, 0);
    },
    loading() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
      }, 1000);
    }
  },

  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  components: { NullShow }
};
</script>

<style lang="stylus" scoped>
.main {
  background-color: #f5f5f5;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 80px;

  .wrapper {
    width: 1190px;
    margin: 20px auto 80px;

    header {
      background-color: #fff;
      display: flex;
      justify-content: space-between;

      .left {
        flex: 2;
        margin-left: 30px;
        padding-top: 40px;
        color: #333;

        .icon {
          height: 70px;
          line-height: 70px;
          font-size: 14px;
          display: flex;

          .add {
            color: #4ccaff;
          }

          .rate {
            margin-top: 5px;
            margin-left: 70px;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
              margin-right: 10px;
            }
          }

          i {
            font-size: 24px;
            margin-top: 5px;
            margin-right: 10px;
          }
        }

        h3 {
          font-size: 16px;
          font-weight: bolder;
        }

        p {
          font-size: 14px;
          margin-top: 10px;
          width: 600px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          line-clamp: 5;
          -webkit-box-orient: vertical;
        }

        span {
          font-size: 14px;
        }
      }

      .right {
        flex: 1;
        margin: 40px 30px;
        margin-left: 0;
        display: flex;

        .rate {
          width: 70px;
          height: 93px;
          background: url('../../assets/rate.png');
          background-repeat: no-repeat;
          font-size: 24px;
          color: #002b6e;
          padding-top: 24px;
          text-align: center;
          margin-right: 75px;
        }
      }
    }

    .program {
      margin: 20px auto;
      padding-bottom: 20px;

      .select {
        padding-left: 30px;
        font-size: 14px;
        color: #333;
        height: 54px;
        background-color: #fff;
        line-height: 54px;
        margin-bottom: 4px;

        span {
          margin-right: 40px;
        }

        .selected {
          border-bottom: 3px solid #4ccaff;
          padding-bottom: 15px;
        }
      }

      .line {
        height: 2px;
        background-color: #eee;
      }

      .content {
        .procedures {
          display: flex;

          .left {
            width: 120px;
            background-color: #fff;
            height: 180px;
            margin-right: 10px;

            .select {
              padding-top: 10px;
              font-size: 14px;
              color: #333;

              h3 {
                height: 40px;
                line-height: 40px;
                width: 100px;
                border-radius: 3px;
                text-align: center;
                margin-left: -20px;
              }

              .selected {
                background-color: #4ccaff;
                height: 26px;
                color: #ffffff;
              }
            }
          }

          .right {
            flex: 1;

            .makeVideo {
              width: 1060px;
              background-color: #fff;
              text-align: center;
              padding-bottom: 50px;

              h3 {
                font-size: 16px;
                height: 80px;
                line-height: 80px;
              }
            }
          }
        }

        .wrapper {
          width: 100%;
          background-color: #fff;
          margin-top: -1px;
          margin-bottom: -1px;

          h3 {
            font-size: 18px;
            color: #333;
            margin-left: 30px;
            margin-bottom: -20px;
            padding-top: 20px;
          }

          .time {
            margin: 30px;
            margin-top: 40px;
            margin-bottom: -20px;
          }

          #line1 {
            width: 1190px;
            height: 400px;
          }

          #line2 {
            width: 1190px;
            height: 400px;
          }

          .line {
            height: 2px;
            background-color: #ccc;
            width: 90%;
            margin: 0 auto;
          }
        }
      }
    }

    .comment {
      margin-top: 20px;
      border-radius: 5px;
      background-color: #fff;

      .sub {
        margin-left: 30px;

        h3 {
          padding-top: 40px;
          margin-bottom: 20px;
          font-size: 16px;
        }

        .btn {
          margin: 20px;
          margin-left: 1030px;
        }
      }

      .line {
        height: 2px;
        background-color: #eee;
        width: 96%;
        margin: 0 auto;
      }

      .commentContent {
        margin-left: 30px;
        margin-right: 60px;
        font-size: 14px;

        .contentItem {
          margin-top: 20px;
          margin-bottom: 20px;

          h3 {
            margin-bottom: 20px;
          }

          p {
            margin-left: 60px;
            line-height: 1.5;
            margin-bottom: 5px;
          }

          .time {
            margin-left: 1020px;
          }

          .ret {
            margin-left: 1070px;
          }

          .btn {
            margin: 20px;
            margin-left: 1000px;
          }

          .item {
            margin-left: 60px;
            border: 2px solid #ccc;
            padding: 0px 0px 0 20px;

            h3 {
              margin-bottom: 20px;
              padding-top: 20px;
            }

            p {
              margin-left: 12px;
              line-height: 1.5;
              margin-bottom: 5px;
            }

            .time {
              margin-left: 900px;
            }

            .ret {
              margin-left: 950px;
            }
          }
        }

        .line {
          height: 2px;
          background-color: #eee;
          width: 98%;
          margin: 0 auto;
        }
      }

      .noPeople {
        font-size: 16px;
        text-align: center;
        margin-top: 30px;
      }
    }
  }

  .page {
    width: 400px;
    margin: 40px auto 0;
    padding-bottom: 60px;
  }
}
</style>