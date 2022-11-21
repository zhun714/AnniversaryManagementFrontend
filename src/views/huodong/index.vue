<template>
  <div class="manage">
        <el-dialog
            :title=" modalType == 0 ? '新增活动' :'编辑活动'"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <!-- 用户的表单信息 -->
            <el-form ref="form" :inline="true" :model="form" label-width="80px">
                <el-form-item label="ID" >
                    <el-input placeholder="无需输入" v-model="form.id" readonly></el-input>
                </el-form-item>
                <el-form-item label="活动类型" >
                    <el-input placeholder="请输入活动类型" v-model="form.type"></el-input>
                </el-form-item>
                <el-form-item label="活动标题" >
                    <el-input placeholder="请输入活动标题" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动次序" >
                    <el-input-number placeholder="请输入次序" v-model="form.priority"></el-input-number>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </span>
        </el-dialog>
        <div class="manage-header">
            <el-button @click="handleAdd" type="primary">
                + 新增
            </el-button>
            <!-- form搜索区域 -->
            <el-form :inline="true" :model="acForm">
                <el-form-item>
                    <el-input placeholder="请输入名称" v-model="acForm.name"></el-input>
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
                    prop="type"
                    label="活动类型"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="活动标题"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="priority"
                    label="活动次序"
                    align="center"
                    sortable>
                </el-table-column>
                <el-table-column
                    prop="order"
                    label="操作"
                    align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
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
import { getProgram,editac,delac,findac,addac} from '../../api'
import http from '../../utils/requset'
export default {
  name: 'huodong',
  data () {
    return {
      dialogVisible: false,
      form:{
        id:'',
        type:'',
        name:'',
        priority:0
      }, 
    //   rules: {
    //       type: [
    //           { required: true, message: '请输入活动类型' }
    //       ],
    //       title: [
    //           { required: true, message: '请输入活动标题' }
    //       ],
    //       order: [
    //           { required: true, message: '请输入活动次序' }
    //       ]
    //   },
       tableData:[
    //    {
    //     type:'舞蹈',
    //     title:'舞动福大',
    //     order:5
    //    },
    //    {
    //     type:'小品',
    //     title:'学习',
    //     order:3
    //    },
    //    {
    //     type:'诗朗诵',
    //     title:'相聚校庆',
    //     order:4
    //    },
    //    {
    //     type:'诗朗诵',
    //     title:'相聚校庆',
    //     order:2
    //    }
      ],
      modalType: 0, // 0表示新增的弹窗， 1表示编辑
      total: 0, //当前的总条数
      pageSize:8,
      pageNo:1,
      acForm: {
          name: ''
      }
    }
  },
    methods: {
        submit() {
            console.log(this.form)
            this.$refs.form.validate((valid) => {
                // console.log(valid, 'valid')
                if (valid) {
                    // 后续对表单数据的处理
                    if (this.modalType === 0) {
                        
                        http({
                            method:'post',
                            url:addac,
                            data:{
                                name:this.form.name,
                                priority:this.form.priority,
                                type:this.form.type
                            }
                        }).then(()=>{
                            this.getList()
                        })
                            // 重新获取列表的接口
                        
                       
                    } else {
                       editac(this.form).then(() => {
                        // 重新获取列表的接口
                        this.getList()
                      })
                      
                    }

                    // 清空表单的数据
                    this.form={
                        id:'',
                        type:'',
                        name:'',
                        priority:0
                    },
                    // 关闭弹窗
                    this.dialogVisible = false
                }
            })
        },
        // 弹窗关闭的时候
        handleClose() {
            this.form={
                        id:'',
                        type:'',
                        name:'',
                        priority:0
                    },
            this.dialogVisible = false
        },
        cancel() {
            this.handleClose()
        },
        handleEdit(row) {
            this.modalType = 1
            this.dialogVisible = true
            // 注意需要对当前行数据进行深拷贝，否则会出错
            this.form = JSON.parse(JSON.stringify(row))
        },
        handleDelete(row) {
            this.$confirm('是否确认删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
              delac( row.id ).then(() => {
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
        handleAdd() {
            this.modalType = 0
            this.dialogVisible = true
        },
        // 获取列表的数据
        getList() {
            http({
                method:'post',
                url:getProgram,
                data:{
                    pageNo: this.pageNo,
                    pageSize: this.pageSize,
                }
            }).then(res=>{
                console.log('getprogram',res.data)
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
            // console.log(val, 'val')
            this.pageNo = val
            this.getList()
        },
        // 列表的查询
        onSubmit() {
            http({
                method:'post',
                url:findac,
                data:{
                    name:this.acForm.name,
                    pageNo: 1,
                    pageSize:100
                }
            }).then(res=>{
                console.log('finduser',res.data)
                this.tableData=res.data.dataList
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
    .manage-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
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