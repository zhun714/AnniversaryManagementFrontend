
<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c64" text-color="white" active-text-color="#ffd04b" :collapse="isCollapse">
      <h3>{{isCollapse?'后台':'校庆后台管理系统'}}</h3>
   <el-menu-item @click="clickmenu(item)" v-for="item in nochildren" :index="item.path" :key="item.path">
    <i :class="'el-icon-'+item.icon"></i>
    <span slot="title">{{item.label}}</span>
  </el-menu-item>
  <el-submenu v-for="item in haschildren" :index="item.path" :key="item.path">
    <template slot="title">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </template>
    <el-menu-item-group v-for="(subitem,subindex) in item.children" :key="subitem.path">
      <el-menu-item @click="clickmenu(subitem)" :index="subindex">{{subitem.label}}</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</el-menu>
</template>
<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu{
    height: 100%;
    background: rgba(32, 39, 65, 1);
    border: none;
    h3{
      text-align: center;
      color: white;
      line-height: 48px;
    }
  }
</style>

<script>
export default {
  name:'CommonAside',
  data () {
    return {
      menu: [
        // {
        //   path: '/',
        //   name: 'home',
        //   label: '首页',
        //   icon: 's-home',
        //   url: 'Home/home'
        // },
        // {
        //   path: '/mall',
        //   name: 'mall',
        //   label: '商品管理',
        //   icon: 'video-play',
        //   url: 'MallManage/MallManage'
        // },
        // {
        //   path: '/user',
        //   name: 'user',
        //   label: '用户管理',
        //   icon: 'user',
        //   url: 'UserManage/UserManage'
        // },
        // {
        //   label: '其他',
        //   icon: 'location',
        //   children: [
        //     {
        //       path: '/page1',
        //       name: 'page1',
        //       label: '页面1',
        //       icon: 'setting',
        //       url: 'Other/Page1'
        //     },
        //     {
        //       path: '/page2',
        //       name: 'page2',
        //       label: '页面2',
        //       icon: 'setting',
        //       url: 'Other/Page2'
        //     }
        //   ]
        // }
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    clickmenu (item) {
      this.$router.push({
        name: item.name
      }),
      this.$store.commit('selectMenu',item)
    }
  },
  computed: {
    nochildren () {
      return this.asyncMenu.filter(item => !item.children)
    },
    haschildren () {
      return this.asyncMenu.filter(item => item.children)
    },
    isCollapse () {
      return this.$store.state.tab.isCollapse
    },
    asyncMenu(){
      return this.$store.state.tab.menu
    }
  }
}
</script>
