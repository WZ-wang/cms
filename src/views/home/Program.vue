<template>
  <div>
    <div class="program">
      <div class="main">
        <div class="nav">
          <div class="list">
            <div class="tit">专业大类：</div>
            <ul>
              <li
                @click="selectOrgan(item,index)"
                v-for="(item,index) in organ"
                :key="index"
                :class="organIndex==index?'isSelect':''"
              >{{item.name}}</li>
            </ul>
          </div>
          <div class="list">
            <div class="tit">专业分类：</div>
            <ul>
              <li
                @click="selectWheel(item,index)"
                v-for="(item,index) in wheel"
                :key="index"
                :class="wheelIndex==index?'isSelect':''"
              >{{item.name}}</li>
            </ul>
          </div>
          <div class="list">
            <div class="tit" style="margin-top: -10px">关键词：</div>
            <el-input class="inp" v-model="keyword.pName" placeholder="项目名称"></el-input>
            <el-input class="inp" v-model="keyword.sName" placeholder="学校名称"></el-input>
            <el-input class="inp" v-model="keyword.fName" placeholder="负责人姓名"></el-input>
            <el-button class="inp" style="width:80px" type="primary">搜索</el-button>
          </div>
          <div class="list">
            <div class="tit">排序：</div>
            <ul>
              <li
                @click="selectIndex(item,index)"
                v-for="(item,index) in sortList"
                :key="index"
                :class="sortIndex==index?'isSelect':''"
                style="margin-right:10px"
              >
                {{item.name}}
                <div class="sort">
                  <div :style="item.tb ? 'color:#333':''" class="el-icon-caret-top ileft"></div>
                  <div :style="item.tb ? '':'color:#333'" class="el-icon-caret-bottom iright"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="showProgram">
          <ul>
            <li>
              <div class="wrapper">
                <img src="../../assets/program.jpg" alt />
                <div class="pInfo">
                  <h3>项目名称el-icon-view</h3>
                  <div class="eye">
                    <div class="el-icon-view"></div>
                    <span>256</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="wrapper">
                <img src="../../assets/program.jpg" alt />
                <div class="pInfo"></div>
              </div>
            </li>
            <li>
              <div class="wrapper">
                <img src="../../assets/program.jpg" alt />
                <div class="pInfo"></div>
              </div>
            </li>
            <li>
              <div class="wrapper">
                <img src="../../assets/program.jpg" alt />
                <div class="pInfo"></div>
              </div>
            </li>
            <li>
              <div class="wrapper">
                <img src="../../assets/program.jpg" alt />
                <div class="pInfo"></div>
              </div>
            </li>
            <li>
              <div class="wrapper">
                <img src="../../assets/program.jpg" alt />
                <div class="pInfo"></div>
              </div>
            </li>
            <li>
              <div class="wrapper">
                <img src="../../assets/program.jpg" alt />
                <div class="pInfo"></div>
              </div>
            </li>
            <li>
              <div class="wrapper">
                <img src="../../assets/program.jpg" alt />
                <div class="pInfo"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="page">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: {
        pName: "",
        sName: "",
        fName: ""
      },
      // heatNav: [{name:"人气排行",icon:"iconfont icon-hot"}, {name:"下载排行",icon:"el-icon-download"}, {name:"上新排行",icon:"iconfont icon-shangchuan"}],
      sortList: [
        { name: "最新", tb: false },
        { name: "评分", tb: false },
        { name: "收藏", tb: false },
        { name: "点赞", tb: false }
      ],
      sortIndex: 0,
      organIndex: 0,
      wheelIndex: 0,
      organ: [],
      wheel: []
    };
  },
  created() {
    this.getOrgan();
    this.getData()
  },
  methods: {
    // 获取数据
    getData(){
      let programData = new FormData()
      programData.append()
    },
    // 排序
    selectIndex(item, index) {
      this.sortIndex = index;
      item.tb = !item.tb;
      if(index == 0){
        console.log("最新")
      }else if(index==1){
        console.log("评分")
      }else if(index == 2){
        console.log("收藏")
      }else if(index==3){
        console.log("点赞")
      }
    },
    // 选择专业类
    selectOrgan(item, index) {
      this.organIndex = index;
    },
    // 选择对应专业
    selectWheel(item, index) {
      this.wheelIndex = index;
    },
    // 获取所属专业和专业类
    getOrgan() {
      this.$axios.post("/api/user/organ").then(res => {
        this.organ = res.data;
      });
      this.$axios.post("/api/user/wheel").then(res => {
        this.wheel = res.data;
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.program {
  width: 100%;
  background-color: #f5f5f5;
  margin-bottom: 80px;

  .main {
    width: 1190px;
    margin: 0 auto;

    .nav {
      .list {
        padding-top: 40px;
        display: flex;
        font-size: 16px;
        height: 30px;
        line-height: 30px;
        color: #333333;

        .tit {
          padding-left: 30px;
        }

        ul {
          display: flex;

          li {
            display: flex;
            margin-left: 30px;

            .sort {
              margin-left: 2px;
              font-size: 12px;
              position: absolute;

              .ileft {
                position: relative;
                top: -3px;
                left: 31px;
              }

              .iright {
                position: relative;
                top: 4px;
                left: 19px;
              }
            }
          }
        }

        .inp {
          width: 150px;
          margin: -10px -20px 0 30px;
        }
      }

      .isSelect {
        background-color: #4ccaff;
        color: #ffffff;
        border-radius: 5px;
        margin-top: 1px;
        padding: 0 20px;
      }
    }

    .showProgram {
      width: 1190px;
      margin: 0 auto;
      margin-top: 40px;

      ul {
        display: flex;
        flex-wrap: wrap;

        li {
          .wrapper {
            width: 380px;
            height: 230px;
            position: relative;
            margin: 0 8px;
            margin-bottom: 20px;

            img {
              width: 380px;
              height: 230px;
              border-radius: 6px;
            }

            .pInfo {
              position: absolute;
              width: 100%;
              border-radius: 5px;
              height: 50px;
              background-color: #333;
              opacity: 0.2;
              bottom: 0;
              color: #ffffff;
              display: flex;
              justify-content: space-between;

              h3 {
                font-size: 16px;
                font-weight: bolder;
                line-height: 50px;
                margin-left: 30px;
              }

              .eye {
                line-height: 50px;
                margin-right: 30px;
                font-size: 14px;
                display: flex;

                div {
                  margin: 17px 10px;
                }
              }
            }
          }
        }
      }
    }
  }

  .page {
    width: 400px;
    margin: 40px auto 0;
    padding-bottom: 100px;
  }
}
</style>