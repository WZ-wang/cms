<template>
  <div>
    <div class="main">
      <div class="showProgram">
        <ul>
          <li v-for="(item,index) in programData" :key="index" @click="programDetail(item,index)">
            <div class="wrapper">
              <img src="../../assets/program.jpg" alt />
              <div class="pInfo">
                <h3>{{item.name}}</h3>
                <p>{{item.content}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="news">
        <ul class="snav">
          <li v-for="(item,index) in nav" :key="index" @click="currentIndex = index">
            <span :class="currentIndex == index?'isSelect':''">
              <img :src="currentIndex == index?require('../../assets/'+item.url+'.png'):require('../../assets/'+item.surl+'.png')" alt />
              <h3>{{item.title}}</h3>
            </span>
          </li>
        </ul>
        <div class="newsList">
          <div class="wrapper">
            <div class="item">
              <div class="left">
                <h3>9999人</h3>
                <div class="line"></div>
                <p>19/06/12</p>
              </div>
              <div class="right">
                <h3>公告名称</h3>
                <p>公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介</p>
              </div>
            </div>
            <div class="line"></div>
            <div class="item">
              <div class="left">
                <h3>9999人</h3>
                <div class="line"></div>
                <p>19/06/12</p>
              </div>
              <div class="right">
                <h3>公告名称</h3>
                <p>公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介</p>
              </div>
            </div>
            <div class="line"></div>
            <div class="item">
              <div class="left">
                <h3>9999人</h3>
                <div class="line"></div>
                <p>19/06/12</p>
              </div>
              <div class="right">
                <h3>公告名称</h3>
                <p>公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介</p>
              </div>
            </div>
            <div class="line"></div>
            <div class="item">
              <div class="left">
                <h3>9999人</h3>
                <div class="line"></div>
                <p>19/06/12</p>
              </div>
              <div class="right">
                <h3>公告名称</h3>
                <p>公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介</p>
              </div>
            </div>
            <div class="line"></div>
            <div class="item">
              <div class="left">
                <h3>9999人</h3>
                <div class="line"></div>
                <p>19/06/12</p>
              </div>
              <div class="right">
                <h3>公告名称</h3>
                <p>公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介</p>
              </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="item">
              <div class="left">
                <h3>9999人</h3>
                <div class="line"></div>
                <p>19/06/12</p>
              </div>
              <div class="right">
                <h3>公告名称</h3>
                <p>公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介</p>
              </div>
            </div>
            <div class="line"></div>
            <div class="item">
              <div class="left">
                <h3>9999人</h3>
                <div class="line"></div>
                <p>19/06/12</p>
              </div>
              <div class="right">
                <h3>公告名称</h3>
                <p>公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介</p>
              </div>
            </div>
            <div class="line"></div>
            <div class="item">
              <div class="left">
                <h3>9999人</h3>
                <div class="line"></div>
                <p>19/06/12</p>
              </div>
              <div class="right">
                <h3>公告名称</h3>
                <p>公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介</p>
              </div>
            </div>
            <div class="line"></div>
            <div class="item">
              <div class="left">
                <h3>9999人</h3>
                <div class="line"></div>
                <p>19/06/12</p>
              </div>
              <div class="right">
                <h3>公告名称</h3>
                <p>公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介</p>
              </div>
            </div>
            <div class="line"></div>
            <div class="item">
              <div class="left">
                <h3>9999人</h3>
                <div class="line"></div>
                <p>19/06/12</p>
              </div>
              <div class="right">
                <h3>公告名称</h3>
                <p>公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介公告简介</p>
              </div>
            </div>
          </div>
        </div>
        <div class="getMore">
          <span>查看更多</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      programData:[
        {url:"../../assets/program.jpg",name:"项目名称",content:"项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述"},
        {url:"../../assets/program.jpg",name:"项目名称",content:"项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述"},
        {url:"../../assets/program.jpg",name:"项目名称",content:"项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述"},
        {url:"../../assets/program.jpg",name:"项目名称",content:"项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述"},
        {url:"../../assets/program.jpg",name:"项目名称",content:"项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述"},
        {url:"../../assets/program.jpg",name:"项目名称",content:"项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述"},
        {url:"../../assets/program.jpg",name:"项目名称",content:"项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述"},
        {url:"../../assets/program.jpg",name:"项目名称",content:"项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述"},
        {url:"../../assets/program.jpg",name:"项目名称",content:"项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述"},
        {url:"../../assets/program.jpg",name:"项目名称",content:"项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述"},
      ],
      currentIndex:0,
      nav:[
        {title:"通知公告",url:"gg_x",surl:"gg_m"},
        {title:"新闻动态",url:"xw_x",surl:"xw_m"},
        {title:"热度排行",url:"ph_x",surl:"ph_m"},
        ]
    }
  },
  methods:{
    programDetail(item,index){
      this.$router.push("/programItem")
    }
  }
}
</script>
<style lang="stylus" scoped>
.main {
    background-color: #f5f5f5;
    width: 100%;
    padding-top: 10px;

    .showProgram {
      width: 1190px;
      margin: 0 auto;

      ul {
        display: flex;
        flex-wrap: wrap;

        li {
          .wrapper {
            width: 224px;
            height: 280px;
            position: relative;
            margin: 0 7px;
            margin-bottom: 20px;

            img {
              width: 222px;
              height: 280px;
              border-radius: 3px;
            }

            .pInfo {
              position: absolute;
              width: 100%;
              border-radius: 3px;
              background-color: #ccc;
              bottom: 0;
              color: #ffffff;

              h3 {
                font-size: 16px;
                font-weight: bolder;
                margin: 20px;
              }

              p {
                font-size: 14px;
                margin: 20px;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
              }
            }
          }
        }
      }
    }

    .news {
      width: 1190px;
      margin: 20px auto 80px;
      padding-bottom 1px
      .snav {
        display: flex;
        justify-content: center;

        li {
          .isSelect {
            background-color: #4ccaff;
            color: #ffffff;
          }

          span {
            font-size: 16px;
            color: #333333;
            width: 150px;
            margin: 0 0 10px 10px;
            height: 100px;
            border-radius: 6px;
            display: flex;
            background-color: #fff;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            img {
              margin-top 15px
            }

            h3 {
              line-height: 2.5;
            }
          }
        }
      }

      .newsList {
        width: 100%;
        height: 450px;
        display: flex;

        .wrapper {
          width: 590px;
          height: 450px;
          background-color: #fff;
          margin: 0 5px;

          .item {
            height: 90px;
            display: flex;

            .left {
              text-align: center;
              margin: 0 30px;
              margin-top: 15px;
              line-height: 2;

              h3 {
                color: #4ccaff;
              }

              .line {
                background-color: #4ccaff;
                width: 54px;
                height: 3px;
              }
            }

            .right {
              margin-top: 10px;
              margin-right: 30px;

              h3 {
                font-size: 14px;
                font-weight: bolder;
                color: #333333;
                line-height: 2.5;
              }

              p {
                color: #666666;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
              }
            }
          }

          .line {
            width: 530px;
            height: 2px;
            background-color: #ccc;
            margin: 0 auto;
          }
        }
      }
       .getMore {
      width: 120px;
      height: 42px;
      background-color: #fff;
      margin: 20px auto 80px;
      text-align: center;
      span {
        line-height: 42px;
        font-size: 16px;
        color: #333333;
      }
    }
    }

   
  }
</style>