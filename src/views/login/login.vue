<template>
  <div class="container" style=" background-repeat:no-repeat ;background-size:100% 100%;
background-attachment: fixed;">
    <el-form
  :model="form"
  status-icon
  :rules="rules"
  ref="form"
  label-width="100px"
  class="login-content"
  >
    <div class="header">
        <img class="fzu" src="https://img.js.design/assets/img/63549d400dbc9d402e4c43b0.png#e1b5aade7e79ad18395c556765ad3cc4" style="width:45px;height:45px">
        <h3 >院庆后台管理系统</h3>
    </div>
    <el-form-item label="用户名"  label-width="80px" class="username">
        <el-input type="input" placeholder="请输入用户名" v-model="form.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" label-width="80px"  class="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item class="submit">
        <el-button type="succes" size="medium" @click="login" >提交</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
import Mock from 'mockjs'
import {getMenu} from '@/api'
export default {
  name: 'login',
  data () {
    return {
        form:{
            username:"",
            password:""
        },
        rules:{
            username:[{
                require:true,message:"请输入用户名",trigger:"blur"
            },
            {
                min:3,message:'用户名长度不能小于3',trigger:"blur"
            }],
            password:[{
                require:true,message:"请输入密码",trigger:"blur"
            }]

        }
    }
  },
  methods:{
    login(){
        getMenu(this.form).then(({data:res})=>{
            console.log(res)
            if(res.code==20000){
                this.$store.commit('clearMenu')
                this.$store.commit('setMenu',res.data.menu)
                this.$store.commit('setToken',res.data.token)
                this.$store.commit('addMenu',this.$router)
                this.$router.push({name:'home'})
            }else{
                this.$message.warning(res.data.message)
            }
        })
        // const token=Mock.Random.guid()
        // this.$store.commit('setToken',token)
        // this.$router.push({name:'home'})
    }
  }
}
</script>
<style lang="less" scoped>
.container{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 1;
    overflow-y: auto;
    z-index: 0;
    background: url(https://img.js.design/assets/img/635b92c3129575f7fb05103f.jpg#45e4649c5cf004164548367021eb64d0);

}
.login-content{
    display: flex;
    flex-direction: column;
    opacity: 0.92;
    border-radius: 15px;
    background-clip: padding-box;
    margin: 220px auto;
    width: 400px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    padding: 15px;
}
.header{
    opacity: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom:7px;
    h3{
    color: rgba(230, 100, 83, 1);
    font-size: 25px;
    font-weight: bold;
    margin-right:50px ;
    }
    
}
.submit{
    margin: auto 50px
}
</style>