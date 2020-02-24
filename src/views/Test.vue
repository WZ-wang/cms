<template>
  <div>
    <video controls width="700" height="300" id="video"></video>
    <img ref="myVideo" id="output" alt />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    let _this = this;
    this.$nextTick(() => {
      let video = document.getElementById("video");
      let source = document.createElement("source");
      source.src ="https://vdept.bdstatic.com/6b72704b524574736a634756505a3177/764758584c6c7a52/171a52b66dc3eb45a8db0dc4dc1ff934fd1b568025d5f90189ef8db17da5c902382a4f78f1379897b49d56261cdfa4f2.mp4?auth_key=1579521973-0-0-6eccabf4123af557d33a3489947ac9d4"
      source.type = "video/mp4";
      video.appendChild(source);
      video.addEventListener("loadeddata", function() {
        var canvas = document.createElement("canvas");
        canvas.width = "320";
        canvas.height = "320";
        canvas
          .getContext("2d")
          .drawImage(video, 0, 0, canvas.width, canvas.width);
        var img = document.createElement("output");
        let imgsrc = canvas.toDataURL("image/png");
        console.log(imgsrc)
        _this.$refs.myVideo.src = imgsrc
      });
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
  margin-top: -350px;
}

.test {
  width: 70px;
  height: 93px;
  background: url('../assets/rate.png');
  background-repeat: no-repeat;
  font-size: 20px;
  color: #ffffff;
  padding-top: 24px;
  text-align: center;
}
</style>
