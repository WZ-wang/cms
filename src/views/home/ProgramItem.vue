<template>
  <div>
    <div class="main">
      <div class="wrapper">
        <!-- 项目头部简介 -->
        <header>
          <div class="left">
            <h3>课程名字总长度实训项目</h3>
            <p>项目简介项目简介项目简介项目简介项项目简介项目简介项目简介项目简介项项目简介项目简介项目简介项目简介项项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介</p>
            <span>所属机构：XXX公司或者学校</span>
            <span style="padding:0 20px">负责人：XXX公司或者学校</span>
            <span>项目信息：XXX公司或者学校</span>
            <div class="icon">
              <div>
                <i class="iconfont icon-dianzan"></i>
                <span style="margin-right:40px">1.4万</span>
                <i class="iconfont icon-danseshixintubiao-"></i>
                <span>6693</span>
              </div>
              <div class="rate">
                <span>评分</span>
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>
              </div>
            </div>
          </div>
          <div class="right">
            <video
              id="video"
              poster="../../assets/program.jpg"
              ref="myVideo"
              width="340"
              height="190"
              controls
            >
              <source
                src="http://192.168.1.48:9000/static/video/7edbe29f-a4e1-4f5d-adff-05f70d65a602demo.mp4"
                type="video/mp4"
              />
            </video>
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
            <div v-if="currentIndex == 0">
              <div class="pIndex">
                <iframe
                  src="http://192.168.1.48:9000/static/picture/9d62ac8b-8af7-4245-aada-3bc8539d00c1qwer.pdf"
                  width="100%"
                  height="700px"
                >
                  This browser does not support PDFs. Please download the PDF to view it:
                  <a
                    href="http://192.168.1.48:9000/static/picture/9d62ac8b-8af7-4245-aada-3bc8539d00c1qwer.pdf"
                    rel="external nofollow"
                  >Download PDF</a>
                </iframe>
              </div>
              <!-- <NullShow></NullShow> -->
            </div>
            <!-- 课程下载 -->
            <div v-else-if="currentIndex == 1">
              <NullShow></NullShow>
            </div>
            <!-- 实验步骤 -->
            <div class="procedures" v-else-if="currentIndex == 2">
              <div class="left">
                <div class="select">
                  <h3
                    v-for="(item,index) in ProceduresNav"
                    @click="pCurrentIndex = index"
                    :key="index"
                    :class="pCurrentIndex===index?'selected':''"
                  >{{item}}</h3>
                </div>
              </div>
              <div class="right">
                <!-- 实验准备 -->
                <div v-if="pCurrentIndex==0">
                  <div>
                    <iframe
                      src="http://192.168.1.48:9000/static/picture/9d62ac8b-8af7-4245-aada-3bc8539d00c1qwer.pdf"
                      width="100%"
                      height="700px"
                    >
                      This browser does not support PDFs. Please download the PDF to view it:
                      <a
                        href="http://192.168.1.48:9000/static/picture/9d62ac8b-8af7-4245-aada-3bc8539d00c1qwer.pdf"
                        rel="external nofollow"
                      >Download PDF</a>
                    </iframe>
                  </div>
                  <!-- <NullShow></NullShow> -->
                </div>
                <!-- 操作流程 -->
                <div v-else-if="pCurrentIndex==1">
                  <div>
                    <iframe
                      src="http://192.168.1.48:9000/static/picture/9d62ac8b-8af7-4245-aada-3bc8539d00c1qwer.pdf"
                      width="100%"
                      height="700px"
                    >
                      This browser does not support PDFs. Please download the PDF to view it:
                      <a
                        href="http://192.168.1.48:9000/static/picture/9d62ac8b-8af7-4245-aada-3bc8539d00c1qwer.pdf"
                        rel="external nofollow"
                      >Download PDF</a>
                    </iframe>
                  </div>
                  <!-- <NullShow></NullShow> -->
                </div>
                <!-- 操作视频 -->
                <div v-else-if="pCurrentIndex==2">
                  <NullShow></NullShow>
                </div>
                <!-- 使用说明 -->
                <div v-else-if="pCurrentIndex==3">
                  <div>
                    <iframe
                      src="http://192.168.1.48:9000/static/picture/9d62ac8b-8af7-4245-aada-3bc8539d00c1qwer.pdf"
                      width="100%"
                      height="700px"
                    >
                      This browser does not support PDFs. Please download the PDF to view it:
                      <a
                        href="http://192.168.1.48:9000/static/picture/9d62ac8b-8af7-4245-aada-3bc8539d00c1qwer.pdf"
                        rel="external nofollow"
                      >Download PDF</a>
                    </iframe>
                  </div>
                  <!-- <NullShow></NullShow> -->
                </div>
                <div v-else>
                  <NullShow></NullShow>
                </div>
              </div>
            </div>
            <!-- 信息统计 -->
            <div v-show="currentIndex == 3">
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
          </div>
          <!-- <div class="noPeople">
            暂无评论
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import NullShow from "../../components/null";
export default {
  data() {
    return {
      programItem: ["项目介绍", "课程下载", "实验操作", "信息统计"],
      ProceduresNav: ["实验准备", "操作流程", "操作视频", "使用说明"],
      currentIndex: 0,
      pCurrentIndex: 0,
      imgUrl: "../../assets/program.jpg",
      comment: "",
      value: 3.8, //评分
      timeValue: "一周内",
      options: ["一周内", "一个月内", "三个月内", "全部"],
      recomment:false
    };
  },
  created() {},
  mounted() {
    this.drawChart();
  },
  methods: {
    changeNav(index) {
      this.currentIndex = index;
    },
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
    }
  },
  components: { NullShow }
};
</script>

<style lang="stylus" scoped>
.main {
  background-color: #f5f5f5;
  width: 100%;
  padding-top: 10px;

  .wrapper {
    width: 1190px;
    margin: 20px auto 80px;

    header {
      height: 270px;
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
        }

        p {
          margin-top: 20px;
          margin-bottom: 24px;
          width: 400px;
        }
      }

      .right {
        flex: 1;
        margin: 40px 30px;
        margin-left: 100px;
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
}
</style>