<template>
    <div class="tabs">
        <el-tag
        v-for="(tag,index) in tags"
        :key="tag.item"
        :closable="tag.name!='home'"
        :effect="$route.name === tag.name ? 'dark' : 'plain'"
        @click="changeMenu(tag)"
        @close="handleClose(tag,index)">
        {{tag.label}}
        </el-tag>
    </div>
</template>
<script>
import  {mapState,mapMutations } from 'vuex'
export default {
    name: 'CommonTag',
    data(){
        return{

        }
    },
    methods:{
        ...mapMutations({
            closeTag:'closeTag'
        }),
        handleClose(tag,index){
            const len=this.tags.length-1
            this.closeTag(tag)
             if(tag.name != this.$route.name){
                    return;
                }
                if(index == len)
                {
                    this.$router.push({
                        name:this.tags[index-1].name
                    })
                }else
                {
                    this.$router.push({
                        name:this.tags[index].name
                    })
                }
                
    
        },
        changeMenu(tag){
            this.$router.push({
                name:tag.name
            })
        }
    },
    computed:{
        ...mapState({
            tags:state=>state.tab.tabList
        })
    }
}
</script>
<style lang="less" scoped>
.tabs{
    padding: 20px;
    .el-tag{
        margin-right:20px ;
        cursor: pointer;
    }
}
</style>