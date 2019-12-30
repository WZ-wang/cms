<template>
  <div>
    <div class="program">
      <div class="main">
        <div class="nav">
          <div class="list">
            <div class="tit">专业大类：</div>
            <ul>
              <li>全部(1080)</li>
              <li class="isSelect">中医(1080)</li>
              <li>专业(1080)</li>
              <li>专业(1080)</li>
              <li>专业(1080)</li>
            </ul>
          </div>
          <div class="list">
            <div class="tit">专业大类：</div>
            <ul>
              <li>全部(1080)</li>
              <li>中医(1080)</li>
              <li>专业(1080)</li>
              <li>专业(1080)</li>
              <li>专业(1080)</li>
            </ul>
          </div>
          <div class="list">
            <div class="tit">专业大类：</div>
            <ul>
              <li>全部(1080)</li>
              <li>中医(1080)</li>
              <li>专业(1080)</li>
              <li>专业(1080)</li>
              <li>专业(1080)</li>
            </ul>
          </div>
          <div class="list">
            <div class="tit">关键词：</div>
            <!-- <el-input class="inp" v-model="input" placeholder="请输入内容"></el-input>
            <el-input class="inp" v-model="input" placeholder="请输入内容"></el-input>
            <el-input class="inp" v-model="input" placeholder="请输入内容"></el-input>-->
            <el-button class="inp" style="width:80px" type="primary">搜索</el-button>
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
export default {};
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
            margin-left: 30px;
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
        padding: 0 20px;
      }
    }

    .showProgram {
      width: 1190px;
      margin: 0 auto;
      margin-top: 40px;
      background-color: pink;

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
              background-color: #000000;
              opacity: 0.5;
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