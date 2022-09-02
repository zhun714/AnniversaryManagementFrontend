<template>
    <div class="common-table">
        <el-table :data="tableData" style="height: 90%" stripe>
            <el-table-column
                show-overflow-tooltip
                v-for="item in tableLabel"
                :key="item.prop"
                :label="item.label"
                :width="item.width?item.width:125">
                <template slot-scope="scope">
                    <span style="margin-left:10px">{{ scope.row[item.prop] }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" min-width="180">
                <template slot-scope="scope">
                    <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
                <el-button size="mini"  type="danger" @click="del(scope.row)">删除</el-button>
                </template>
                
            </el-table-column>
        </el-table>
        <el-pagination class="pager" 
        :total="config.total" 
        :current-page.sync="config.page"
        :page-size="20" 
        @current-change="changepage" 
        layout="prev,pager,next"></el-pagination>

    </div>
    
</template>
<script>
export default {
    name:'CommonTable',
    props:{
        tableData:Array,
        tableLabel:Array,
        config:Object
    },
    data(){
        return{

        }
    },
    methods:{
        edit(row){
            this.$emit('edit',row)
        },
        del(row){
            this.$emit('del',row)
        },
        changepage(page){
            this.$emit('changepage',page)
        }
    }
}
</script>
<style lang="less" scoped>
.common-table{
    height: calc(100% - 62px);
    background-color: #fff;
    position: relative;
    .pager{
        position: absolute;
        bottom: 0;
        right: 20px;
    }
}
</style>