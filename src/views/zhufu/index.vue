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
                    prop="id"
                    label="ID">
                </el-table-column>
                <el-table-column
                    prop="bless"
                    label="祝福内容">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="审核状态"
                    align="center">
                    <template slot-scope="scope">
                        <span>{{ scope.row.status == 1 ? '通过' : '待审核' }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="createBy"
                    label="上传人"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="createTime"
                    label="上传时间"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="操作"
                    align="center">
                    <template slot-scope="scope">
                        <el-button v-if="scope.row.status==0" size="mini" type="success" @click="handleEdit(scope.row)">通过</el-button>
                        <el-button v-else size="mini" type="primary" >已通过</el-button>
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
import http from '../../utils/requset'
import { editStatus,getblessing,delblessing} from '../../api'
export default {
  name: 'huodong',
  data () {
    return {
      dialogVisible: false,
       tableData:[
      ],
      total: 0, //当前的总条数
      pageNo:1,
      pageSize:10,
      blessingForm: {
          name: ''
      }
    }
  },
    methods: {
        // 提交用户表单


        handleEdit(row) {
            // row.status=!row.status
            editStatus(row.id).then(()=>{
                this.getList()
            })
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
                    delblessing(row.id).then(()=>{
                        this.$message({
                        type: 'success',
                        message: '删除成功!'
                        });
                        // 重新获取列表的接口
                        this.getList()
                    })

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
            http({
                method:'post',
                url:getblessing,
                data:{
                    pageNo: this.pageNo,
                    pageSize: this.pageSize,
                }
            }).then(res=>{
                console.log('getblessing',res.data)
                this.tableData=res.data.dataList
                this.total = res.data.total;
            }).catch(() => {
                this.$message({
                    type: 'error',
                    message: '服务器错误！'
                });
                })
        },


        // 选择页码的回调函数
        handlePage(val) {
            console.log(val, 'val')
            this.pageNo = val
            this.getList()
        },
        // 列表的查询
        onSubmit() {
            http({
                method:'post',
                url:getblessing,
                data:{
                    createBy:this.blessingForm.name,
                    pageNo: 1,
                    pageSize: 200,
                }
            }).then(res=>{
                console.log('getblessing',res.data)
                this.tableData=res.data.dataList
                this.total = res.data.total;
            }).catch(() => {
                this.$message({
                    type: 'error',
                    message: '服务器错误！'
                });
                })
            
        }
    },
     mounted () {
        this.getList()
    }
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
            // bottom: 0;
            right: 20px;
        }
    }
}
</style>
