<template>
  <div>
    <div class="main">
      <div class="wrapper">
        <div class="left">
          <div class="select">
            <h3
              v-for="(item,index) in heatNav"
              @click="heatCurrentIndex = index"
              :key="index"
              :class="heatCurrentIndex===index?'selected':''"
            >
              <div class="el-icon-download" style="margin-right:15px;font-size:20px"></div>
              {{item}}
            </h3>
          </div>
        </div>
        <div class="right">
          <div class="title">本排行以"以总浏览器——评价数量"为标准排行</div>
          <div class="people">
            <el-table
              ref="singleTable"
              :data="tableData"
              highlight-current-row
              @current-change="handleCurrentChange"
              style="width: 100%;"
            >
              <el-table-column type="index" align="center" width="50"></el-table-column>
              <el-table-column
                property="programName"
                label="项目名称"
                width="420"
                show-overflow-tooltip
              ></el-table-column>
              <el-table-column property="name" align="center" label="负责人" width="120"></el-table-column>
              <el-table-column
                property="school"
                align="center"
                label="所属院校"
                width="220"
                show-overflow-tooltip
              ></el-table-column>
              <el-table-column property="clickTime" align="center" label="点击量(次)"></el-table-column>
            </el-table>
          </div>
          <div class="page">
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "欧阳负责人",
          programName:
            "实验名称实验名称实验名称实验名称实验名称实验名称实验名称实验名称",
          school: "x学校x学校x学校x学校x学校x学校",
          clickTime: 999999
        },
        {
          name: "欧阳负责人",
          programName:
            "实验名称实验名称实验名称实验名称实验名称实验名称实验名称实验名称",
          school: "x学校x学校x学校x学校x学校x学校",
          clickTime: 999999
        },
        {
          name: "欧阳负责人",
          programName:
            "实验名称实验名称实验名称实验名称实验名称实验名称实验名称实验名称",
          school: "x学校x学校x学校x学校x学校x学校",
          clickTime: 999999
        },
        {
          name: "欧阳负责人",
          programName:
            "实验名称实验名称实验名称实验名称实验名称实验名称实验名称实验名称",
          school: "x学校x学校x学校x学校x学校x学校",
          clickTime: 999999
        },
        {
          name: "欧阳负责人",
          programName:
            "实验名称实验名称实验名称实验名称实验名称实验名称实验名称实验名称",
          school: "x学校x学校x学校x学校x学校x学校",
          clickTime: 999999
        },
        {
          name: "欧阳负责人",
          programName:
            "实验名称实验名称实验名称实验名称实验名称实验名称实验名称实验名称",
          school: "x学校x学校x学校x学校x学校x学校",
          clickTime: 999999
        },
        {
          name: "欧阳负责人",
          programName:
            "实验名称实验名称实验名称实验名称实验名称实验名称实验名称实验名称",
          school: "x学校x学校x学校x学校x学校x学校",
          clickTime: 999999
        },
        {
          name: "欧阳负责人",
          programName:
            "实验名称实验名称实验名称实验名称实验名称实验名称实验名称实验名称",
          school: "x学校x学校x学校x学校x学校x学校",
          clickTime: 999999
        },
        {
          name: "欧阳负责人",
          programName:
            "实验名称实验名称实验名称实验名称实验名称实验名称实验名称实验名称",
          school: "x学校x学校x学校x学校x学校x学校",
          clickTime: 999999
        },
        {
          name: "欧阳负责人",
          programName:
            "实验名称实验名称实验名称实验名称实验名称实验名称实验名称实验名称",
          school: "x学校x学校x学校x学校x学校x学校",
          clickTime: 999999
        }
      ],
      heatNav: ["人气排行", "下载排行", "热度排行"],
      heatCurrentIndex: 0
    };
  },
  methods: {
    // 选中哪一行
    handleCurrentChange(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="stylus" scoped>
.main {
  background-color: #f5f5f5;
  width: 100%;
  margin-bottom: 80px;
  padding-bottom: 80px;
  

  .wrapper {
    width: 1190px;
    margin: 0 auto;
    padding-top: 40px;
    display: flex;

    .left {
      width: 240px;
      border-radius: 5px;
      background-color: #fff;
      height: 180px;

      .select {
        font-size: 16px;
        color: #333;

        h3 {
          height: 60px;
          line-height: 60px;
          padding-left: 40px;
        }

        .selected {
          color: #4ccaff;
          background-color: #ededed;
          border-left: 6px #4ccaff solid;
        }
      }
    }

    .right {
      width: 910px;
      border-radius: 5px;
      background-color: #fff;
      margin-left: 20px;

      .title {
        width: 830px;
        margin: 10px auto;
        height: 30px;
        border-radius: 5px;
        background-color: #f5f5f5;
        line-height: 30px;
        padding-left: 10px;
      }

      .page {
        width: 400px;
        margin: 40px auto 0;
        padding-bottom: 50px;
      }
    }
  }
}
</style>