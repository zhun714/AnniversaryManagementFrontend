<template>
  <el-row class="home" :gutter="20">
    <el-col span="8" style="margin-top:20px">
      <el-card :shadow="hover">
        <div class="user">
          <img :src="user"  />
          <div class="userinfo">
          <p>Admin</p>
          <p>高级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>登入时间：<span>{{Date()}}</span></p>
          <p>登入地点：<span>福州</span></p>
        </div>
      </el-card>
      <el-card style="margin-top:20px height:460px">
        <el-table :data="tableData">
          <el-table-column
          v-for="(val,key) in tableLabel"
          :prop="key"
          :key="key"
          :label="val">

          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col span="16" style="margin-top:20px">
      <div class="num">
        <el-card v-for="item in countData" :key="item" :body-style="{display:'flex',padding:0}">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
          <div class="det">
            <p class="num">💴{{item.value}}</p>
            <p class="txt">{{item.name}}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height:280px">
        <div style="height:280px" ref="echarts"></div>
      </el-card>
      <div class="gra">
        <el-card>
          <div style="height:260px" ref="echart1"></div>
        </el-card>
        <el-card>
          <div style="height:260px" ref="echart2"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import {getData} from '../../api'
import * as echarts from 'echarts'
export default {
  name: 'Home',
  data () {
    return {
      user: require('@/assets/images/user.png'),
      tableData: [
        
      ],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        }
      ]
    }
  },
  mounted () {
    getData().then(res=>{
      const {code,data} =res.data
      if(code==20000){
        this.tableData = data.tableData
        const order=data.orderData
        const xdata = order.date
        const keyarrary=Object.keys(order.data[0])
        const series = []
        keyarrary.forEach(key=>{
          series.push({
            name:key,
            data:order.data.map(item=>item[key]),
            type:'line'
          })
        })
        const op = {
          xAxis: {
            data:xdata
          },
          yAxis:{},
          legend:{
            data:keyarrary
          },
          series
        }
        const E = echarts.init(this.$refs.echarts)
        E.setOption(op)
         const userOprion = {
          legend: {
            // 图例文字颜色
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          // 提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", // 类目轴
            data: data.userData.map(item => item.date),
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [
            {
              name:'新增用户',
              data:data.userData.map(item => item.new),
              type:"bar"
            },
            {
              name:'活跃用户',
              data:data.userData.map(item => item.active),
              type:'bar'
            }
          ],
        }
        const U = echarts.init(this.$refs.echart1)
        U.setOption(userOprion)
        const videoOption = 
         {
          tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [
            {
              data:data.videoData,
              type:'pie'
            }
          ],
         }
         const V =  echarts.init(this.$refs.echart2)
          V.setOption(videoOption)
        
      }
     
      console.log(res)
    })
  }
}
</script>
<style lang="less" scoped>
.det{
  margin-left: 25px;
  .num{
  font-size: 30px;
  margin-top: 10px;
}
.txt{
  font-size: 16px;
  margin-top:10px;
}
}
.gra{
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  .el-card{
        width: 49%;
        height: 260px;
  }
}

</style>
