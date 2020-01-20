<template>
  <div v-if="paginations.total" class="love">
    <!-- 搜索框 -->
    <div class="search">
      <el-input @change="search" placeholder="输入关键词" suffix-icon="el-icon-search" v-model="keyword"></el-input>
    </div>
    <!-- 我的评价 -->
    <div class="content">
      <ul>
        <li v-for="(item,index) in programData" :key="index" >
          <div class="wrapper">
            <img src="../../../assets/program.jpg" @click="programDetail(item)" alt />
            <div class="pInfo">
              <h3>{{item.name}}</h3>
              <el-rate
                v-model="item.rate"
                disabled
                score-template="{value}"
              ></el-rate>
              <!-- <span>5</span> -->
              <div class="date">
                <p>评价时间:{{item.dates}}</p>
                <p @click.stop="del(item)">删除</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
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
    <Null></Null>
  </div>
</template>
<script>
import moment from "moment";
import Null from "../../../components/null"
export default {
  data() {
    return {
      programData: [],
      keyword: "",
      //需要给分页组件传的信息
      paginations: {
        page_index: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 12, // 1页显示多少条
        layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    // 获取数据
    getData() {
      let programDetail = new FormData();
      programDetail.append("sids", this.$store.state.userInfo.phone);
      programDetail.append("page", this.paginations.page_index);
      programDetail.append("rows", this.paginations.page_size);
      if(this.keyword){
        programDetail.append("keyword", this.keyword);
      }
      this.$axios.post("/api/note/rateList", programDetail).then(res => {
        // console.log(res)
        this.programData = res.data.rows;
        this.programData.map(item => {
          item.uploadtime = moment(item.uploadtime).format("YYYY-MM-DD");
          item.dates = moment(item.dates).format(
            "YYYY-MM-DD"
          );
          // item.rate = item.rate.substring(0,item.rate.length-1)
          item.rate = Number(item.rate)
        });
        this.paginations.total = res.data.total;
      });
    },
    // 搜索
    search() {
      this.getData()
    },
    // 进入项目详情
    programDetail(item) {
      this.$router.push(`/programItem/${item.id}`);
    },
    // 删除
    del(item) {
      let rateData = new FormData();
      rateData.append("id", item.id);
      rateData.append("phone", item.phone);
      this.$axios.post("/api/note/delrate", rateData).then(res => {
        console.log(res);
        this.getData()
      });
    },
    //   分页
    handleCurrentChange(val) {
      this.paginations.page_index = val;
      this.getData();
    }
  },
  components:{
    Null
  }
};
</script>
<style lang="stylus" scoped>
.love {
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

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        .wrapper {
          width: 200px;
          margin-bottom: 20px;
          margin-left: 13px;
          margin-right: 12px;

          img {
            width: 200px;
            height: 140px;
            border-radius: 3px;
          }

          .pInfo {
            h3 {
              font-size: 14px;
              color: #333;
              line-height: 1.3;
              margin-top: 10px;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              -webkit-box-orient: vertical;
            }

            .date {
              font-size: 14px;
              color: #666;
              display: flex;
              line-height: 30px;
              justify-content: space-between;
            }
          }
        }
      }
    }
  }

  .page {
    width: 400px;
    margin: 40px auto 0;
    padding-bottom: 40px;
  }
}
</style>

