<template>
  <header>
    <div class="l-content">
        <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
        <!-- <span style="color:#fff">首页</span> -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="item in tags"  :key="item.path" :to="{path:item.path}">{{item.label}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
       

    <div class="r-content">
        <el-dropdown trigger="click" size="mini">
            <span class="el-dropdown-link">
                <img class="user" src="../assets/avater.png" >
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="changetoshouye">管理中心</el-dropdown-item>
                <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
            </el-dropdown-menu>

        </el-dropdown>
    </div>
  </header>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'CommonHeader',
  date () {
    return {
      userImg: require('../assets/images/user.png')
    }
  },
  methods: {
    changetoshouye(){
      this.$router.push({
        name: "home"
      })
    },
    handleMenu () {
      this.$store.commit('CollapseMenu')
    },
    logout(){
      this.$store.commit('clearMenu')
      this.$store.commit('clearToken')
      this.$router.push({name:'login'})
    }
  },
  computed:{
    ...mapState({
      tags:state=>state.tab.tabsList
    })
  }
}
</script>

<style lang="less" scoped>
header
{
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items:center;
}
.l-content
{
    display: flex;
    align-items: center;
    .el-button
    {
        margin-right: 10px;
    }
    /deep/.el-breadcrumb__item{
      .el-breadcrumb__inner{
        font-weight: normal;
        &.is-link{
          color:#666
        }
      }
      &:last-child{
        .el-breadcrumb__inner{
          color:white
        }
      }
    }
}
.r-content
{
    .user
    {
        width: 40px;
        height: 40px;
        border-radius:50%;
    }
}
</style>
