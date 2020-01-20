<template>
  <div>
    <!-- <div  v-for="i in numPages" :key="i">
      <pdf class="wrapper" :src="src" :page="i"></pdf>
    </div> -->
    <!-- <div class="test">
      4.9
    </div> -->
    
  </div>
  <!-- <div id="app">
    5544545
    <div class="pdf" style="width: 600px;height:1400px;">
      <pdf v-for="i in numPages" :key="i" :src="src" :page="i"></pdf>
    </div>
    <div id="pie" style="width: 600px;height:400px;"></div>
    <div id="line1" style="width: 600px;height:400px;"></div>
    <el-upload
      action="/api/upload"
      list-type="picture-card"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <iframe
      src="http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf"
      width="100%"
      height="100%"
    >
      This browser does not support PDFs. Please download the PDF to view it:
      <a
        href="/test.pdf"
        rel="external nofollow"
      >Download PDF</a>
    </iframe>
  </div>-->
</template>
<script>
import pdf from "vue-pdf";
var loadingTask = pdf.createLoadingTask(
  "/api/static/picture/9d62ac8b-8af7-4245-aada-3bc8539d00c1qwer.pdf"
);
export default {
  components: {
    pdf
  },
  data() {
    return {
      src: loadingTask,
      numPages: undefined
    };
  },
  mounted() {
    this.src.then(pdf => {
      this.numPages = pdf.numPages;
    });
  }
};
// import pdf from "vue-pdf";
// import echarts from "echarts";
// var loadingTask = pdf.createLoadingTask(
//   "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf"
// );
// export default {
//   name: "app",
//   data() {
//     return {
//       src: loadingTask,
//       numPages: undefined
//     };
//   },
//   mounted() {
//     this.drawChart();
//     this.src.then(pdf => {
//       this.numPages = pdf.numPages;
//     });
//   },
//   methods: {
//     drawChart() {
//       // 基于准备好的dom，初始化echarts实例
//       let myChart1 = this.$echarts.init(document.getElementById("pie"));
//       let myChart2 = this.$echarts.init(document.getElementById("line1"));
//       // 饼状图
//       let option1 = {
//         title: {
//           text: "某站点用户访问来源",
//           subtext: "纯属虚构",
//           x: "center"
//         },
//         tooltip: {
//           trigger: "item",
//           formatter: "{a} <br/>{b} : {c} ({d}%)"
//         },
//         legend: {
//           orient: "vertical",
//           left: "left",
//           data: ["直接访问 10", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
//         },
//         series: [
//           {
//             name: "访问来源",
//             type: "pie",
//             radius: "55%",
//             center: ["50%", "60%"],
//             data: [
//               { value: 335, name: "直接访问 10" },
//               { value: 310, name: "邮件营销" },
//               { value: 234, name: "联盟广告" },
//               { value: 135, name: "视频广告" },
//               { value: 1548, name: "搜索引擎" }
//             ],
//             itemStyle: {
//               emphasis: {
//                 shadowBlur: 10,
//                 shadowOffsetX: 0,
//                 shadowColor: "rgba(0, 0, 0, 0.5)"
//               }
//             }
//           }
//         ]
//       };
//       let option2 = {
//         tooltip: {
//           trigger: "axis",
//           axisPointer: {
//             type: "cross"
//           }
//         },
//         xAxis: {
//           type: "category",
//           data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
//         },
//         yAxis: {
//           type: "value"
//         },
//         series: [
//           {
//             data: [820, 932, 901, 934, 1290, 1330, 1320],
//             type: "line"
//           }
//         ]
//       };
//       // 使用刚指定的配置项和数据显示图表。
//       myChart1.setOption(option1);
//       myChart2.setOption(option2);
//     }
//   },
//   components: {
//     pdf
//   }
// };
//
</script>

<style lang="stylus" scoped>
.wrapper {
  height: 1400px;
  width: 60%;
  margin: 0px auto;
  margin-top -350px
}
.test{
  width:70px
  height 93px
  background url("../assets/rate.png")
  background-repeat: no-repeat
  font-size 20px
  color #ffffff
  padding-top 24px
  text-align center
}
</style>
