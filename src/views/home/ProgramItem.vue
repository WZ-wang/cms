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
                    <video
                      :poster="programData.pict"
                      ref="makeVideo"
                      width="340"
                      height="190"
                      controls
                    >
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
                <h3>访问人数统计</h3>
                <div class="time">
                  <el-select v-model="timeValue" @change="timeChange">
                    <el-option
                      v-for="item in options"
                      :key="item.title"
                      :label="item.title"
                      :value="item.content"
                    ></el-option>
                  </el-select>
                </div>
                <div id="line1"></div>
                <div class="line"></div>
                <h3>软件使用统计</h3>
                <div class="time">
                  <el-select v-model="rtimeValue" @change="rtimeChange">
                    <el-option
                      v-for="item in roptions"
                      :key="item.title"
                      :label="item.title"
                      :value="item.content"
                    ></el-option>
                  </el-select>
                </div>
                <div id="line2"></div>
                <div class="line"></div>
                <h3 style="margin-bottom:30px">
                  使用评价（共
                  <span style="color:red">{{people.rate}}</span>人参与评价）
                </h3>
                <div id="pie" style="width: 600px;height:400px;margin-left:200px"></div>
              </div>
              <!-- <NullShow></NullShow> -->
            </div>
          </div>
        </div>
        <!-- 评论模块 -->
        <div class="comment">
          <div class="sub">
            <h3>
              评论（
              <span style="color:red">{{howMonyName.length}}</span>人参与，
              <span style="color:red">{{paginations.total}}</span>条评论）
            </h3>
            <el-input
              :autosize="{ minRows: 4, maxRows: 4}"
              type="textarea"
              style="width: 1130px;"
              placeholder="发表言论"
              v-model="comment"
            ></el-input>
            <el-button type="primary" @click="allReply" class="btn">发表评论</el-button>
          </div>
          <div class="line"></div>
          <div class="commentContent">
            <div v-for="(item,index) in allCommentData" :key="index">
              <div class="contentItem">
                <h3 style="color:#4accff">{{item.name}}:</h3>
                <p>{{item.leaves}}</p>
                <p class="time">
                  {{item.letime}}
                  <span
                    class="relpy"
                    v-if="!recomment||recommentIndex!==index"
                    @click="showComment(item,index)"
                  >回复({{item.xid}})</span>
                  <span
                    class="relpy"
                    v-else
                    style="margin-left: 10px;"
                    @click="recomment = false"
                  >收起回复</span>
                </p>
                <div v-show="recomment&&recommentIndex==index">
                  <div class="item">
                    <div v-for="(sitem,sindex) in someCommentData" :key="sindex">
                      <h3>
                        <span>{{sitem.name}}:</span>
                        {{sitem.hf}}
                        <span>{{sitem.hname}}</span>
                        {{sitem.leaves}}
                      </h3>
                      <p class="time">
                        {{sitem.letime}}
                        <span style="margin-left:15px" @click="reply(sitem)">回复</span>
                      </p>
                    </div>
                    <div v-show="item.xid" class="commentpage">
                      <el-pagination
                        layout="prev, pager, next"
                        :page-size="spaginations.page_size"
                        @current-change="shandleCurrentChange($event,item)"
                        :total="spaginations.total"
                      ></el-pagination>
                      <el-button @click="showTalk" style="margin-right:30px" size="small">我也说一句</el-button>
                    </div>
                    <div class="sub" v-show="showInput||item.xid==0">
                      <el-input
                        :autosize="{ minRows: 3, maxRows: 3}"
                        type="textarea"
                        placeholder="说点什么吧"
                        style="width: 950px;margin-left:-30px"
                        v-model="pcomment"
                      ></el-input>
                      <el-button type="primary" @click="someReply(item)" class="btn">回复</el-button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="line"></div>
            </div>
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
        </div>
      </div>
    </div>
    <div
      class="mtop"
      ref="top"
      @click="goTop"
      style="width:32px;height:32px;position:fixed;right:30px;bottom:60px;border:1px solid #ccc;border-radius:50%;"
    >
      <i class="el-icon-caret-top" style="font-size:22px;color:#4ccaff;margin: 4px 6px; "></i>
    </div>
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
      pcomment: "",
      timeValue: "天",
      options: [
        { title: "当天", content: "天" },
        { title: "近一周", content: "周" },
        { title: "近一个月", content: "月" },
        { title: "近三个月", content: "季" },
        { title: "全部", content: "全" }
      ],
      rtimeValue: "天",
      roptions: [
        { title: "当天", content: "天" },
        { title: "近一周", content: "周" },
        { title: "近一个月", content: "月" },
        { title: "近三个月", content: "季" },
        { title: "全部", content: "全" }
      ],
      recomment: false,
      recommentIndex: -1,
      programData: {},
      allProgramData: {},
      iconStatus: {
        isCollection: false,
        rate: 0,
        isGood: false
      },
      userInfo: {},
      showInput: false,
      //需要给分页组件传的信息
      paginations: {
        page_index: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 5, // 1页显示多少条
        layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
      },
      spaginations: {
        page_index: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 5, // 1页显示多少条
        layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
      },
      allCommentData: [],
      someCommentData: [],
      currentName: [],
      howMonyName: [],
      people: { rate: 0 }
    };
  },
  activated() {
    this.userInfo = this.$store.state.userInfo;
    this.getData();
    this.getComment();
    window.scrollTo(0, 0);
    this.spaginations = {
      page_index: 1, // 当前位于哪页
      total: 0, // 总数
      page_size: 10, // 1页显示多少条
      layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
    };
    this.someCommentData = [];
    this.recomment = false;
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
    this.getPeople();
    this.drawChart();
    this.getRate();
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
    // 总评论
    getComment() {
      let allComment = new FormData();
      allComment.append("page", this.paginations.page_index);
      allComment.append("sids", this.$route.params.id);
      allComment.append("rows", this.paginations.page_size);
      this.$axios.post("/api/note/selectone", allComment).then(res => {
        this.paginations.total = res.data.total;
        this.allCommentData = res.data.rows;
        this.allCommentData.forEach(s => {
          this.howMonyName.push(s.name);
        });
        this.howMonyName = Array.from(new Set(this.howMonyName));
      });
    },
    // 子评论
    getSomeComment(item) {
      let someComment = new FormData();
      someComment.append("page", this.spaginations.page_index);
      someComment.append("sids", item.id);
      someComment.append("school", this.$route.params.id);
      someComment.append("rows", this.spaginations.page_size);
      this.$axios.post("/api/note/selectoneleaves", someComment).then(res => {
        // console.log(res);
        this.spaginations.total = res.data.total;
        this.someCommentData = res.data.rows;
        this.someCommentData.forEach(s => {
          this.currentName.push(s.name);
        });
        this.currentName = Array.from(new Set(this.currentName));
        this.someCommentData.map(one => {
          this.currentName.forEach(tf => {
            if (one.leaves.includes(tf)) {
              one.hname = tf;
              one.hf = one.leaves.split(tf + ":")[0];
              one.leaves = ":" + one.leaves.split(tf + ":")[1];
            }
          });
        });
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
        console.log(res);
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
        console.log(res);
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
    // 切换选项
    changeNav(index) {
      // this.loading();
      this.currentIndex = index;
    },
    // 实验操作里切换选项
    pchangeNav(index) {
      // this.loading();
      this.pCurrentIndex = index;
      if (index == 2) {
        this.$refs.makeVideo.src = this.programData.makevideo;
      }
    },
    // 软件使用情况切换
    rtimeChange() {
      this.drawChart();
    },
    // 软件使用情况
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart2 = this.$echarts.init(document.getElementById("line2"));
      let people = new FormData();
      people.append("view", this.rtimeValue);
      this.$axios.post("/api/note/loadlist", people).then(res => {
        myChart2.setOption({
          title: {},
          tooltip: {
            trigger: "axis"
          },
          xAxis: {
            data: res.data.map(item => {
              if (this.rtimeValue == "天") {
                return item.times.substring(11);
              } else {
                return item.times
              }
            })
          },
          yAxis: {
            splitLine: {
              show: false
            }
          },
          toolbox: {
            left: "center",
            feature: {
              dataZoom: {
                yAxisIndex: "none"
              },
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: [
            {
              startValue: "00"
            },
            {
              type: "inside"
            }
          ],
          visualMap: {
            top: 10,
            right: 0,
            pieces: [
              {
                gt: 0,
                lte: 50,
                color: "#096"
              },
              {
                gt: 50,
                lte: 100,
                color: "#ffde33"
              },
              {
                gt: 100,
                lte: 150,
                color: "#ff9933"
              },
              {
                gt: 150,
                lte: 200,
                color: "#cc0033"
              },
              {
                gt: 200,
                lte: 300,
                color: "#660099"
              },
              {
                gt: 300,
                color: "#7e0023"
              }
            ],
            outOfRange: {
              color: "#4caaff"
            }
          },
          series: {
            name: "软件使用人数",
            type: "line",
            data: res.data.map(item => {
              return item.counts;
            }),
            markLine: {
              silent: true,
              data: [
                {
                  yAxis: 50
                },
                {
                  yAxis: 100
                },
                {
                  yAxis: 150
                },
                {
                  yAxis: 200
                },
                {
                  yAxis: 300
                }
              ]
            }
          }
        });
      });
    },
    // 访问人数切换
    timeChange() {
      this.getPeople();
    },
    // 访问人数
    getPeople() {
      let myChart1 = this.$echarts.init(document.getElementById("line1"));
      let people = new FormData();
      people.append("view", this.timeValue);
      this.$axios.post("/api/note/viewlist", people).then(res => {
        myChart1.setOption({
          title: {},
          tooltip: {
            trigger: "axis"
          },
          xAxis: {
            data: res.data.map(item => {
              if (this.timeValue == "天") {
                return item.times.substring(11);
              } else {
                return item.times.substring(0, 10);
              }
            })
          },
          yAxis: {
            splitLine: {
              show: false
            }
          },
          toolbox: {
            left: "center",
            feature: {
              dataZoom: {
                yAxisIndex: "none"
              },
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: [
            {
              startValue: "00"
            },
            {
              type: "inside"
            }
          ],
          visualMap: {
            top: 10,
            right: 0,
            pieces: [
              {
                gt: 0,
                lte: 50,
                color: "#096"
              },
              {
                gt: 50,
                lte: 100,
                color: "#ffde33"
              },
              {
                gt: 100,
                lte: 150,
                color: "#ff9933"
              },
              {
                gt: 150,
                lte: 200,
                color: "#cc0033"
              },
              {
                gt: 200,
                lte: 300,
                color: "#660099"
              },
              {
                gt: 300,
                color: "#7e0023"
              }
            ],
            outOfRange: {
              color: "#4caaff"
            }
          },
          series: {
            name: "访问人数",
            type: "line",
            data: res.data.map(item => {
              return item.counts;
            }),
            markLine: {
              silent: true,
              data: [
                {
                  yAxis: 50
                },
                {
                  yAxis: 100
                },
                {
                  yAxis: 150
                },
                {
                  yAxis: 200
                },
                {
                  yAxis: 300
                }
              ]
            }
          }
        });
      });
    },
    // 使用评价
    getRate() {
      let myChart = this.$echarts.init(document.getElementById("pie"));
      this.$axios.post("/api/note/rateListcount").then(res => {
        res.data.forEach(item => {
          this.people.rate += item;
        });
        myChart.setOption({
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: "vertical",
            left: "60",
            data: ["1星好评", "2星好评", "3星好评", "4星好评", "5星好评"]
          },
          series: [
            {
              name: "使用评价",
              type: "pie",
              radius: "55%",
              center: ["60%", "60%"],
              data: res.data.map((item, index) => {
                let obj = {};
                obj.value = item;
                obj.name = index + 1 + "星好评";
                return obj;
              }),
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
            }
          ]
        });
      });
    },
    // 滑动时触发
    scrollToTop() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let browserHeight = window.outerHeight; //浏览器页面高度
      if (scrollTop > browserHeight) {
        this.$refs.top.style.display = "bl.ock";
      } else {
        this.$refs.top.style.display = "none";
      }
    },
    //返回顶部
    goTop() {
      window.scrollTo(0, 0);
    },
    // 加载动画
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
    },
    // 发表言论
    allReply() {
      if (this.comment) {
        let allReplyData = new FormData();
        allReplyData.append("name", this.userInfo.name);
        allReplyData.append("leaves", this.comment);
        allReplyData.append("cid", this.$route.params.id);
        this.$axios.post("/api/note/leaves", allReplyData).then(res => {
          if (res.data.code == "OK") {
            this.comment = "";
            this.recomment = false;
            this.getComment();
          } else {
            this.$message({
              type: "error",
              message: "发帖失败"
            });
          }
        });
      } else {
        this.$message.warning("内容不能为空");
      }
    },
    // 发表内部言论
    someReply(item) {
      if (this.pcomment) {
        let someReplyData = new FormData();
        someReplyData.append("name", this.userInfo.name);
        someReplyData.append("leaves", this.pcomment);
        someReplyData.append("cid", item.id);
        someReplyData.append("xid", this.$route.params.id);
        this.$axios.post("/api/note/oneleaves", someReplyData).then(res => {
          if (res.data.code == "OK") {
            this.getComment();
            // 获取当前时间
            function getNowFormatDate() {
              var date = new Date();
              var seperator1 = "-";
              var seperator2 = ":";
              var month = date.getMonth() + 1;
              var strDate = date.getDate();
              if (month >= 1 && month <= 9) {
                month = "0" + month;
              }
              if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
              }
              var currentdate =
                date.getFullYear() +
                seperator1 +
                month +
                seperator1 +
                strDate +
                " " +
                date.getHours() +
                seperator2 +
                date.getMinutes() +
                seperator2 +
                date.getSeconds();
              return currentdate;
            }
            // 避免加载
            let obj = {
              name: this.userInfo.name,
              letime: getNowFormatDate(),
              leaves: this.pcomment
            };
            this.currentName.forEach(tf => {
              if (this.pcomment.includes(tf)) {
                obj.hname = tf;
                obj.hf = this.pcomment.split(tf + ":")[0];
                obj.leaves = ":" + this.pcomment.split(tf + ":")[1];
              }
            });
            this.someCommentData.unshift(obj);
            if (this.someCommentData.length == 6) {
              this.someCommentData.pop();
            }
            this.pcomment = "";
            this.someTime = setInterval(() => {
              this.getSomeComment(item);
            }, 3000);
          } else {
            this.$message({
              type: "error",
              message: "回复失败"
            });
          }
        });
      } else {
        this.$message.warning("内容不能为空");
      }
    },
    //点击回复
    reply(sitem) {
      this.showInput = true;
      this.pcomment = "回复" + sitem.name + ":";
    },
    // 回复框显示
    showTalk() {
      this.showInput = !this.showInput;
      this.pcomment = "";
    },
    //
    handleCurrentChange(val) {
      this.paginations.page_index = val;
      this.getComment();
    },
    shandleCurrentChange(val, item) {
      this.spaginations.page_index = val;
      this.getSomeComment(item);
    },
    // 第一层收起回复
    showComment(item, index) {
      this.recomment = true;
      this.recommentIndex = index;
      this.spaginations = {
        page_index: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 5, // 1页显示多少条
        layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
      };
      this.someCommentData = [];
      clearInterval(this.someTime);
      if (item.xid) {
        this.getSomeComment(item);
      }
    }
  },
  //退出时移除事件
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
    clearInterval(this.someTime);
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

  .mtop {
    border-radius: 50%;
    border: 1px solid #ccc;
    width: 150px;
    height: 150px;
  }

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
            margin-left: 880px;

            .relpy {
              margin-left: 20px;
              color: #4ccaff;
            }
          }

          .ret {
            margin-left: 1050px;
          }

          .btn {
            margin: 20px;
            margin-left: 850px;
          }

          .item {
            margin-left: 60px;
            padding-left: 50px;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding-top: 30px;

            h3 {
              margin-bottom: 10px;
              line-height: 1.5;

              span {
                color: #4ccaff;
              }
            }

            .time {
              margin-left: 785px;
              margin-bottom: 20px;

              span {
                color: #4ccaff;
              }
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
    }
  }

  .commentpage {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .page {
    width: 400px;
    margin: 40px auto 0;
    padding-bottom: 60px;
  }
}
</style>