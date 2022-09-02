<template>
  <el-form
  :model="form"
  status-icon
  :rules="rules"
  ref="form"
  label-width="100px"
  class="login-content"
  >
    <h3 class="header">系统登入</h3>
    <el-form-item label="用户名" prop="username" label-width="80px" class="username">
        <el-input type="input" placeholder="请输入用户名" v-model="form.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" label-width="80px" prop="password" class="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item class="submit">
        <el-button type="primary" @click="login" >提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import Mock from 'mockjs'
import {getMenu} from '@/api/data'
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
            // console.log(res)
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
        const token=Mock.Random.guid()
        this.$store.commit('setToken',token)
        this.$router.push({name:'home'})
    }
  }
}
</script>
<style lang="less" scoped>
.login-content{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    padding: 15px;
}
.header{
    text-align: center;
    margin: 10px auto 20px auto;
    font-size: 20px;
    font-weight: bold;
}
.submit{
    margin: auto 30px
}
</style>