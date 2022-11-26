<template>
  <div class="flex-col group_3">
  <div class="flex-col space-y-76 section_2">
    <div class="flex-row space-x-58 group_4">
      <img
        class="img_7"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674899797479895389.png"
      />
      <div class="flex-col items-start space-y-24 group_5">
        <span class="font_3 span_5"> 福州大学计算机与大数据学院院庆 </span>
        <span class="font_4 span_7">双一流大学 | 2021-2022下学期</span>
      </div>
    </div>
    <div class="flex-col space-y-40 group_9">
      <div class="flex-row justify-between">
        <div class="flex-row space-x-240">
          <span class="font_5">3254</span>
          <span class="font_5">{{this.dataList[0]}}</span>
        </div>
        <div class="flex-row space-x-260 group_10">
          <span class="font_5">{{this.dataList[1]}}</span>
          <span class="font_5">{{this.dataList[2]}}</span>
        </div>
      </div>
      <div class="flex-row justify-between group_11">
        <span class="font_4">校友人数</span>
        <span class="font_4">已经注册人数</span>
        <span class="font_4">待审核祝福数</span>
        <span class="font_4">活动数</span>
      </div>
    </div>
  </div>
  <div class="flex-col space-y-27 section_4">
    <div class="flex-row space-x-40">
      <div class="flex-row justify-between group_12">
        <div style="display:flex;flex-direction:column;">
          <div class="flex-col items-center img-wrapper"  @click="changetoxueyuan">
          <img
            class="img_15"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674899797721454888.png"
           
          />
          </div>
          <span style="margin-top:20px;font-size: 20px;">学院风采</span>
        </div>
        <div style="display:flex;flex-direction:column;">
          <div class="flex-col items-center img-wrapper_2" @click="changetohuodong">
          <img
            class="img_16"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674899797767166472.png"
            
          />
        </div>
        <span style="margin-top:20px;font-size: 20px;">活动管理</span>
        </div>
        <div>
          <div class="flex-col items-center img-wrapper_3" @click="changetouser" style="margin-bottom:20px;">
          <img
            class="img_19"
            
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674899797779357538.png"
          />
        </div>
        <span style="margin-top:20px;font-size: 20px;">校友管理</span>
        </div>
        <div >
          <div class="flex-col items-center img-wrapper_4" @click="changetozhufu" style="margin-bottom:20px;">
          <img
            class="img_20"
            
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674899797797868328.png"
          />
        </div>
        <span style="margin-top:20px;font-size: 20px;">祝福审核</span>
        </div>
        <div>
          <div class="flex-col items-center img-wrapper_5" @click="changetobk" style="margin-bottom:20px;">
          <img
            class="img_17"
            
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674899797802287687.png"
          />
        </div>
        <span style="margin-top:20px;font-size: 20px;">虚拟背景管理</span>
        </div>
        
      </div>
      <div>
        <div class="flex-col items-center img-wrapper_6" @click="changetoxy" style="margin-bottom:20px;">
        <img
          class="img_18"
          
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674899797814654839.png"
        />
       </div>
       <span style="margin-top:20px;font-size: 20px;">校友风采</span>
      </div>
     
    </div>
  </div>
  <!-- <div class="flex-row space-x-9 group_16">
    <div class="flex-col section_5">
      <div class="flex-row justify-between">
        <span class="font_2 span_16">活跃学员</span>
        <div class="flex-row space-x-8 group_17">
          <span class="span_17">日期</span>
          <div class="flex-row space-x-26 section_7">
            <span class="font_7 span_18">2020-09-05</span>
            <img
              class="img_23"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674747150143545016.png"
            />
          </div>
        </div>
      </div>
      <div class="flex-row justify-between group_18 div_2">
        <div class="flex-row space-x-15">
          <img
            class="img_24"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674747150257521396.png"
          />
          <div class="flex-col items-start space-y-11 group_20">
            <span class="font_8">小仓鼠的老房子</span>
            <span class="font_7 span_19">学号：207HHM6</span>
          </div>
          <div class="flex-col items-end space-y-6 group_22">
            <span class="font_7">95%</span>
            <img
              class="img_26"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/74d6bf7a5e1af671f949c777574b8325.png"
            />
          </div>
        </div>
        <div class="flex-row group_19">
          <img
            class="img_24"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674747151269505058.png"
          />
          <div class="flex-col items-start space-y-11 group_21">
            <span class="font_8">松狸奶芙</span>
            <span class="font_7 span_20">学号：207HHM6</span>
          </div>
          <div class="flex-col items-end space-y-6 group_23">
            <span class="font_7">50%</span>
            <img
              class="img_26 img_27"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/17476e875a80bea73ca369af916cbf70.png"
            />
          </div>
        </div>
      </div>
      <div class="flex-row justify-between group_18 div_3">
        <div class="flex-row">
          <img
            class="img_24"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674747150547229351.png"
          />
          <div class="flex-col items-start space-y-11 group_24">
            <span class="font_8">是个勇士</span>
            <span class="font_7 span_19">学号：207HHM6</span>
          </div>
          <div class="flex-col items-end space-y-6 group_25">
            <span class="font_7">88%</span>
            <img
              class="img_26"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/0df59e590b17c439f07da78a2d1bfd88.png"
            />
          </div>
        </div>
        <div class="flex-row group_19">
          <img
            class="img_24"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674747152034238733.png"
          />
          <div class="flex-col items-start space-y-11 group_21">
            <span class="font_8">南方有佳木</span>
            <span class="font_7 span_20">学号：207HHM6</span>
          </div>
          <div class="flex-col items-end space-y-4 group_23">
            <span class="font_7">45%</span>
            <img
              class="img_29"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/dfe2795654d7a4628a1358be4d738a13.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col items-center section_6">
      <img src="../../assets/images/huoyue.png" alt="">
    </div>
  </div> -->
</div>
</template>
<script>
// import * as echarts from 'echarts'
import http from '../../utils/requset'
export default {
  name: 'Home',
  data(){
    return{
      dataList:[]
    }
  },
  mounted () {
        this.getList()
    },
  methods:{
    getList() {
            http({
                method:'get',
                url:'/user/selectCount',
            }).then(res=>{
                console.log('shouye',res.data)
                this.dataList=res.data.data
            }).catch(() => {
                this.$message({
                    type: 'error',
                    message: '服务器错误！'
                });
                })
        },
    changetoxueyuan(){
      this.$router.push({
        name: "page1"
      })
    },
    changetohuodong(){
      this.$router.push({
        name: "huodong"
      })
    },
    changetozhufu(){
      this.$router.push({
        name: "zhufu"
      })
    },
    changetobk(){
      this.$router.push({
        name: "bkground"
      })
    },
    changetoxy(){
      this.$router.push({
        name: "page2"
      })
    },
    changetouser(){
      this.$router.push({
        name: "user"
      })
    },
  }
}
</script>
<style lang="less" scoped>


body {
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
}

div,
img,
span {
  box-sizing: border-box;
  flex-shrink: 0;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  justify-content: flex-start;
}

.justify-center {
  justify-content: center;
}

.justify-end {
  justify-content: flex-end;
}

.justify-evenly {
  justify-content: space-evenly;
}

.justify-around {
  justify-content: space-around;
}

.justify-between {
  justify-content: space-between;
}

.items-start {
  align-items: flex-start;
}

.items-center {
  align-items: center;
}

.items-end {
  align-items: flex-end;
}
.group_3 {
  flex: 1 1 auto;
  .space-y-76 {
    & > div:not(:first-child),
    & > span:not(:first-child),
    & > img:not(:first-child) {
      margin-top: 29.69px;
    }
    .space-x-58 {
      & > div:not(:first-child),
      & > span:not(:first-child),
      & > img:not(:first-child) {
        margin-left:45px;
      }
      .img_7 {
        flex-shrink: 0;
        width: 115px;
        height: 116px;
      }
      .group_5 {
        margin-top: 34px;
        flex: 1 1 auto;
      }
    }
    .group_4 {
      align-self: flex-start;
      width: 720px;
    }
    .space-y-40 {
      & > div:not(:first-child),
      & > span:not(:first-child),
      & > img:not(:first-child) {
        margin-top: 30px;
      }
      .space-x-240 {
        & > div:not(:first-child),
        & > span:not(:first-child),
        & > img:not(:first-child) {
          margin-left: 180px;
        }
      }
      .space-x-260 {
        & > div:not(:first-child),
        & > span:not(:first-child),
        & > img:not(:first-child) {
          margin-left: 200px;
        }
      }
      .group_10 {
        margin-right: 15px;
      }
      .font_5 {
        font-size: 38px;
        font-family: Oswald;
        line-height: 30px;
        color: #2c2d36;
      }
      .group_11 {
        padding-left: 3px;
      }
    }
    .group_9 {
      align-self: center;
      width: 850px;
    }
    .font_4 {
      font-size: 14px;
      font-family: SourceHanSansCN;
      line-height: 13px;
      color: #9b9da3;
    }
  }
  .section_2 {
    padding: 26px 62px 34px;
    background-color: #ffffff;
  }
  .space-y-27 {
    & > div:not(:first-child),
    & > span:not(:first-child),
    & > img:not(:first-child) {
      margin-top: 20px;
    }
    .space-x-40 {
      & > div:not(:first-child),
      & > span:not(:first-child),
      & > img:not(:first-child) {
        margin-left: 130px;
      }
      .group_12 {
       
        flex: 1 1 auto;
        .img-wrapper {
          padding: 20px 0 19px;
          background: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674899811797883389.png');
          background-position: 0% 0%;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 90px;
          height: 90px;
          .img_15 {
            width: 42px;
            height: 42px;
          }
        }
        .img-wrapper_2 {
          padding: 20px 0;
          background: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674899812062835049.png');
          background-position: 0% 0%;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 92px;
          height: 92px;
          .img_16 {
            width: 46px;
            height: 46px;
          }
        }
        .img-wrapper_3 {
          padding: 25px 0 22px;
          background: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674899797770613942.png');
          background-position: 0% 0%;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 92px;
          height: 92px;
          .img_19 {
            width: 50px;
            height: 44px;
          }
        }
        .img-wrapper_4 {
          padding: 24px 0 25px;
          background: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674899797788313828.png');
          background-position: 0% 0%;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 92px;
          height: 92px;
          .img_20 {
            width: 50px;
            height: 42px;
          }
        }
        .img-wrapper_5 {
          padding: 22px 0;
          background: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674899812526163135.png');
          background-position: 0% 0%;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width:92px;
          height: 92x;
          .img_17 {
            width: 44px;
            height: 50px;
          }
        }
      }
      .img-wrapper_6 {
        padding: 20px 0;
        background: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674899812968995041.png');
        background-position: 0% 0%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 92px;
        height: 92px;
        .img_18 {
          width: 50px;
          height: 50px;
        }
      }
    }
    .group_15 {
      padding-left: 20px;
      padding-right: 17px;
      .font_6 {
        font-size: 14px;
        font-family: SourceHanSansCN;
        line-height: 13px;
        color: #2c2d36;
      }
      .space-x-168 {
        & > div:not(:first-child),
        & > span:not(:first-child),
        & > img:not(:first-child) {
          margin-left: 130px;
        }
      }
    }
  }
  .section_4 {
    margin-top: 20px;
    padding: 48px 42px 60px 88px;
    background-color: #ffffff;
    border-radius: 30px;
  }
  .space-x-9 {
    & > div:not(:first-child),
    & > span:not(:first-child),
    & > img:not(:first-child) {
      margin-left: 7px;
    }
    .section_5 {
      padding: 20px 48px 5px 50px;
      flex: 1 1 auto;
      background-color: #ffffff;
      border-radius: 4px 4px 0 0;
      box-shadow: 0px 0px 3px #f0f4f5;
      height: 220x;
      border: solid 0.8px #f4f5f9;
      .font_2 {
        font-size: 15px;
        font-family: SourceHanSansCN;
        line-height: 15px;
      }
      .span_16 {
        margin: 5px 0 3px;
        color: #2c2d36;
      }
      .space-x-8 {
        & > div:not(:first-child),
        & > span:not(:first-child),
        & > img:not(:first-child) {
          margin-left: 6px;
        }
        .span_17 {
          margin-top: 11px;
          color: #666666;
          font-size: 9px;
          font-family: SourceHanSansCN;
          line-height: 9px;
        }
        .space-x-26 {
          & > div:not(:first-child),
          & > span:not(:first-child),
          & > img:not(:first-child) {
            margin-left: 20px;
          }
          .span_18 {
            margin-top: 6px;
            color: #666666;
          }
          .img_23 {
            margin-bottom: 2.5px;
            flex-shrink: 0;
            width: 11px;
            height: 11px;
          }
        }
        .section_7 {
          padding: 5px 8px 3px 11px;
          flex-shrink: 0;
          border-radius: 4px;
          height: 22px;
          border: solid 1px #b8c4d1;
        }
      }
      .group_17 {
        margin-right: 9px;
      }
      .group_18 {
        padding: 0 20px;
        .space-x-15 {
          & > div:not(:first-child),
          & > span:not(:first-child),
          & > img:not(:first-child) {
            margin-left: 12px;
          }
          .group_20 {
            margin-top: 13px;
          }
          .group_22 {
            align-self: center;
          }
        }
        .group_19 {
          margin-right: 41px;
          .group_21 {
            margin-left: 13px;
            margin-top: 13px;
          }
          .group_23 {
            margin-left: 23px;
            align-self: center;
          }
        }
        .img_24 {
          border-radius: 7px;
          width: 40px;
          height: 40px;
        }
        .space-y-11 {
          & > div:not(:first-child),
          & > span:not(:first-child),
          & > img:not(:first-child) {
            margin-top: 9px;
          }
          .span_19 {
            font-size: 9px;
            line-height: 8px;
          }
          .span_20 {
            font-size: 9px;
            line-height: 8px;
          }
        }
        .space-y-6 {
          & > div:not(:first-child),
          & > span:not(:first-child),
          & > img:not(:first-child) {
            margin-top: 5px;
          }
          .img_26 {
            margin-right: 2px;
            border-radius: 2px;
            width: 95px;
            height: 3px;
          }
          .img_27 {
            margin-right: 0;
          }
        }
        .group_24 {
          margin-left: 13px;
          margin-top: 13px;
        }
        .group_25 {
          margin-left: 22px;
          align-self: center;
        }
      }
      .div_2 {
        margin-top: 50px;
      }
      .font_7 {
        font-size: 10px;
        font-family: SourceHanSansCN;
        line-height: 7px;
        color: #999999;
      }
      .div_3 {
        margin-top: 44px;
      }
    }
    .section_6 {
      margin-top: 3px;
      padding-top: 64px;
      flex-shrink: 0;
      background-color: #ffffff;
      border-radius: 7px 7px 0 0;
      overflow: hidden;
      width: 480px;
      height: 300px;
      .section_8 {
        padding: 42px 0;
        background: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674899810618562292.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 340x;
        position: relative;
        .img_25 {
          width: 150px;
          height: 75px;
        }
        .section_9 {
          background: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674899810707668595.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 340x;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          position: absolute;
          .section_10 {
            background: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674899811155585050.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            width: 340x;
            .section_11 {
              padding: 60px 50px 70px;
              background: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674747155240549549.png');
              background-size: 100% 100%;
              background-repeat: no-repeat;
              width: 340x;
            }
          }
        }
      }
    }
    .space-y-4 {
      & > div:not(:first-child),
      & > span:not(:first-child),
      & > img:not(:first-child) {
        margin-top: 3px;
      }
      .img_29 {
        width: 92px;
        height: 5px;
      }
      .img_28 {
        align-self: flex-start;
        border-radius: 3px;
        width: 46px;
        height: 46px;
      }
      .span_21 {
        align-self: center;
        color: #3563f8;
        line-height: 30px;
      }
    }
    .font_8 {
      font-size: 11px;
      font-family: SourceHanSansCN;
      line-height: 10px;
      color: #333333;
    }
  }
  .group_16 {
    padding-left: 2px;
    padding-top: 11px;
  }
  .space-y-24 {
    & > div:not(:first-child),
    & > span:not(:first-child),
    & > img:not(:first-child) {
      margin-top: 20px;
    }
    .font_3 {
      font-size: 35px;
      font-family: SourceHanSansCN;
    }
    .span_5 {
      color: #2c2d36;
      line-height: 35px;
    }
    .span_7 {
      line-height: 16px;
    }
    .span_22 {
      align-self: center;
      color: #9b9da3;
    }
  }
}
</style>
