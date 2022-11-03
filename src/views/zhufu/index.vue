<template>
  <div class="manage">
        
        <div class="manage-header">
            <el-form :inline="true" :model="blessingForm">
                <el-form-item>
                    <el-input placeholder="请输入上传人姓名" v-model="blessingForm.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="common-tabel">
            <el-table
                stripe
                height="90%"
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="comment"
                    label="祝福内容">
                </el-table-column>
                <el-table-column
                    prop="state"
                    label="审核状态">
                    <template slot-scope="scope">
                        <span>{{ scope.row.state == 1 ? '通过' : '待审核' }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="上传人">
                </el-table-column>
                <el-table-column
                    prop="state"
                    label="操作">
                    <template slot-scope="scope">
                        <el-button v-if="scope.row.state==0" size="mini" type="success" @click="handleEdit(scope.row)">通过</el-button>
                        <el-button v-else size="mini" type="warning" @click="handleEdit(scope.row)">驳回</el-button>
                        <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pager">
                <el-pagination
                    layout="prev, pager, next"
                    :total="total"
                    @current-change="handlePage">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'huodong',
  data () {
    return {
      dialogVisible: false,
       tableData:[
        {
        comment:'所有的烦恼说拜拜',
        state:0,
        name:'我',
        time:'2022.11.3 0:52'
       },{
        comment:'所有的烦恼说拜拜',
        state:0,
        name:'我',
        time:'2022.11.3 0:52'
       },
       {
        comment:'所有的烦恼说拜拜',
        state:0,
        name:'我',
        time:'2022.11.3 0:52'
       },
       {
        comment:'所有的烦恼说拜拜',
        state:0,
        name:'我',
        time:'2022.11.3 0:52'
       },
       {
        comment:'所有的烦恼说拜拜',
        state:0,
        name:'我',
        time:'2022.11.3 0:52'
       }
      ],
      total: 0, //当前的总条数
      pageData: {
          page: 1,
          limit: 10
      },
      blessingForm: {
          name: ''
      }
    }
  },
    methods: {
        // 提交用户表单
        
        editblessing(data){

        },
        delblessing(val){

        },

        handleEdit(row) {
            row.state=!row.state
            // 注意需要对当前行数据进行深拷贝，否则会出错
            // console.log(row)
            // this.form = JSON.parse(JSON.stringify(row))
        },
        handleDelete(row) {
            this.$confirm('是否确认删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.delblessing(row.num)
                    
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
            });
        },

        // 获取列表的数据
        getList() {
            // 获取的列表的数据
            
            this.total=tableData.length()||0
            // getblessing({params: {...this.blessingForm, ...this.pageData}}).then(({ data }) => {
            //     console.log(data)
            //     this.tableData = data.list

            //     this.total = data.count || 0
            // })
        },
    
        
        // 选择页码的回调函数
        handlePage(val) {
            // console.log(val, 'val')
            this.pageData.page = val
            this.getList()
        },
        // 列表的查询
        onSubmit() {
            this.getList()
        }
    },
}
</script>
<style lang="less" scoped>
.manage {
    height: 90%;
    .manage-header{
     text-align:right;
    }
    .common-tabel {
        position: relative;
        height: calc(100% - 62px);
        .pager {
            position: absolute;
            bottom: 0;
            right: 20px;
        }
    }
}
</style>