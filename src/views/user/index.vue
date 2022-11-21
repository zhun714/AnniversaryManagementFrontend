<template>
    <div class="manage">
        <el-dialog
            :title=" modalType == 0 ? '新增用户' :'编辑用户'"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <!-- 用户的表单信息 -->
            <el-form ref="form" :rules="rules" :inline="true" :model="form" label-width="80px">
                <el-form-item label="学号" >
                    <el-input placeholder="请输入学号" v-model="form.sid"></el-input>
                </el-form-item>
                <el-form-item label="姓名" >
                    <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" >
                    <el-input placeholder="请输入邮箱(xx@xx.com)" v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="宿舍号" >
                    <el-input placeholder="请输入宿舍号" v-model="form.dormitory"></el-input>
                </el-form-item>
                <el-form-item label="性别" >
                    <el-select v-model="form.sex" placeholder="请选择">
                        <el-option label="男" :value="1"></el-option>
                        <el-option label="女" :value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="毕业日期" >
                    <el-date-picker
                        v-model="form.graduationTime"
                        type="date"
                        placeholder="选择日期"
                        value-format="yyyy-MM-DD">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="微信Id" >
                    <el-input placeholder="请输入微信Id号" v-model="form.openId"></el-input>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="submit()">确 定</el-button>
            </span>
        </el-dialog>
        <div class="manage-header"  style="text-align:right;margin:0px auto 0px auto;">
            <!-- form搜索区域 -->
            <el-form :inline="true" :model="userForm" >
                <el-form-item>
                    <el-input placeholder="请输入名称" v-model="userForm.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="common-tabel">
            <el-table
                stripe
                height="95%"
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="id"
                    label="ID">
                </el-table-column>
                <el-table-column
                    prop="sid"
                    label="学号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="email"
                    label="邮箱"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="dormitory"
                    label="宿舍号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="sex"
                    label="性别"
                    align="center">
                    <template slot-scope="scope">
                        <span>{{ scope.row.sex == 1 ? '男' : '女' }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="graduationTime"
                    label="毕业日期"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="openId"
                    label="微信Id"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="banFlag"
                    label="禁用"
                    align="center">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.banFlag"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="banFlag"
                    label="操作">
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
                    :page-size="pageSize"
                    @current-change="handlePage">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import http from '../../utils/requset'
import  {editUser,delUser,getUser,findUser } from '../../api/index'
export default {
    data() {
        return {
            dialogVisible: false,
            form: {
                sid: "",
                name: '',
                email: '',
                dormitory: '',
                sex: '',
                graduationTime: '',
                openId:''
            },
            user:{
              name:'',
            },
            rules: {
                // name1: [
                //     { required: true, message: '请输入姓名' }
                // ],
                // num1: [
                //     { required: true, message: '请输入学号' }
                // ],
                // sex1: [
                //     { required: true, message: '请选择性别' }
                // ],
                // graduate1: [
                //     { required: true, message: '请选择毕业日期' }
                // ],
                // phone1: [
                //     { required: true, message: '请输入电话' }
                // ],
                // sushe1:[
                //     { required: true, message: '请输入宿舍号' }
                // ],
                // wx1:[
                //    { required: true, message: '请输入wx号' }
                // ]
            },
            tableData:[
                
            ],
            modalType: 0, // 0表示新增的弹窗， 1表示编辑
            total: 0, //当前的总条数
            userForm: {
                name: ''
            },
            pageSize:8,
            pageNo:1
        }
    },
    methods: {
        // 提交用户表
        submit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    // 后续对表单数据的处理
                   
                     console.log(this.form)
                      editUser(this.form).then(() => {
                        // 重新获取列表的接口
                        this.getList()
                      })
                    // 清空表单的数据
                    this.$refs.form.resetFields()
                    // 关闭弹窗
                    this.dialogVisible = false
                }
            })
        },
        // 弹窗关闭的时候
        handleClose() {
            this.$refs.form.resetFields()
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
              delUser( row.id ).then(() => {
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
                url:getUser,
                data:{
                    pageNo: this.pageNo,
                    pageSize: this.pageSize,
                }
            }).then(res=>{
                console.log('getuser',res.data)
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
                url:getUser,
                data:{
                    name:this.userForm.name,
                    pageNo: 1,
                    pageSize: 100
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
   
    .common-tabel {
        position: relative;
        height: calc(100% - 62px);
        .pager {
            position: absolute;
            bottom: 0px;
            right: 20px;
        }
    }
}
</style>
