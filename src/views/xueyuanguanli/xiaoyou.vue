<template>
  <div class="manage">
        <el-dialog
            :title=" modalType == 0 ? '新增风采校友' :'编辑风采校友'"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <!-- 用户的表单信息 -->
            <el-form ref="form" :inline="true" :model="form" label-width="80px">
                <el-form-item label="校友姓名" prop="name">
                    <el-input placeholder="请输入校友姓名" v-model="form.name"></el-input>
                </el-form-item>
                <!-- <el-form-item label="校友邮箱" prop="email">
                    <el-input placeholder="请输入校友邮箱" v-model="form.email"></el-input>
                </el-form-item> -->
                <el-form-item label="校友职业" prop="position" >
                    <el-input placeholder="请输入校友职业" v-model="form.position"></el-input>
                </el-form-item>
                <el-form-item label="校友简介" prop="brief">
                    <el-input placeholder="请输入校友简介" v-model="form.brief"></el-input>
                </el-form-item>
                <el-form-item label="校友头像:" >
                  <input type="file" ref="fileId"  @change="getFile">
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
            <el-form :inline="true" :model="xyForm">
                <el-form-item>
                    <el-input placeholder="请输入校友姓名" v-model="xyForm.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <span class="title">知名校友列表</span>
        <div class="table" style="overflow:auto;padding-bottom: 20px;"> 
          <div class="content" v-for="item in tableData" :key="item.name">
            <div class="table-header">
                <div class="header-left">
                    <span class="edit" style="cursor:pointer" @click="handleEdit(item)">编辑</span>
                    <span class="font_6 span_20">|</span>
                    <span class="del" style="cursor:pointer" @click="handleDelete(item.id)">删除</span>
                </div>
            </div>
            <div class="table-content">
                  <div class="photo">
                    <img
                       style="width: 180px;height: 200px;border-radius: 5px;"
                      :src="item.photo"
                    />
                  </div>
                    <div class="information">
                      <span class="work">{{item.position}}</span>
                      <div class="person">
                        <span class="name">{{item.name}}</span>
                        
                      </div>
                    </div>
                    <div class="intro"> 
                      <span>
                        详情介绍： {{item.brief}}
                      </span>
                    </div>      
                
            </div>
          </div>
        </div>
        
    </div>
</template>
<script>
import http from '../../utils/requset'
import { getalumnus,editalumnus,delalumnus,addalumnus} from '../../api'
export default {
  name: 'huodong',
  data () {
    return {
      dialogVisible: false,
      form:{
        id:'',
        name:'',
        brief:'',
        photo:'',
        position:'',
        phFile:''
      }, 
      // rules: {
      //     name: [
      //         { required: true, message: '请输入校友姓名' }
      //     ],
      //     email: [
      //         { required: true, message: '请输入校友邮箱' }
      //     ],
      //     work: [
      //         { required: true, message: '请输入校友工作' }
      //     ],
      //     introduce: [
      //         { required: true, message: '请输入校友简介' },
      //          {
      //           min:10,message:'校友简介不能小于10个字'
      //       }
      //     ]
      // },
       tableData:[
          
      ],
      modalType: 0, // 0表示新增的弹窗， 1表示编辑
      total: 0, //当前的总条数
      pageNo:1,
      pageSize:20,
      xyForm: {
          name: ''
      }
    }
  },
  mounted(){
    this.getList()
  },
    methods: {
        // 提交用户表单
        getFile(){
        let files = this.$refs.fileId.files[0];
     this.form.phFile= files;
     console.log(files)
      },
        submit() {
            let that = this;
                console.log('11213',this.modalType)
                if (that.form.phFile == "") {
                    that.$message.error('请先添加文件');
                    return;
                }
                let formData = new window.FormData(); 
                // console.log(that.form.phFile)
                formData.append("photo", that.form.phFile);
                // console.log('1231',postdata)
                this.$refs.form.validate((valid) => {
                if (valid) {
                    // 后续对表单数据的处理
                    console.log(this.fileList)
                   
                    if (this.modalType === 0) {
                       http({
                        method:'post',
                        url:addalumnus,
                        headers:{
                            "Content-Type":"multipart/form-date"
                        },
                        // processDate:false,
                        data:formData,
                        params:{
                           brief:this.form.brief,
                            name:this.form.name,
                            position:this.form.position,
                            
                        }
                       }).then(()=>{

                            this.getList()
                        })
                    } else {
                       http({
                        method:'post',
                        url:editalumnus,
                        headers:{
                            "Content-Type":"multipart/form-date"
                        },
                        data:formData,
                        params:{
                            id:this.form.id,
                            brief:this.form.brief,
                            name:this.form.name,
                            position:this.form.position,
                        }
                       }).then(()=>{

                            this.getList()
                            })
                        // editbk(this.form).then(() => {
                        //     // 重新获取列表的接口
                        //     this.getList()
                        // })
                    }

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
        handleDelete(id) {
            this.$confirm('是否确认删除?', '提示', {
                confirmButtonspan: '确定',
                cancelButtonspan: '取消',
                type: 'warning'
                }).then((res) => {
                  console.log('del',res)
                    delalumnus(id).then(()=>{
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
            // 获取的列表的数据
            http({
                method:'post',
                url:getalumnus,
                data:{
                    pageNo: this.pageNo,
                    pageSize: this.pageSize,
                }
            }).then(res=>{
                console.log('getalumnus',res.data)
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
    height: 95%;
    .manage-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title{
      font-size: 25px;
      font-weight: bold;
      margin-left:10px ;
    }
    .table{
      
      position: relative;
      margin-top:20px ;
      height: calc(100% - 62px);
      background: white;
      .content{
        margin-top:25px ;
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
        .table-header{
            .header-left{
              padding-top:15px ;
              margin-left: 20px;
              font-size:20px;
              font-weight: 800;
              .edit{
                margin-right:5px ;
                color: #428269;
              }
              .del{
                margin-left:5px ;
                color:#d24735;
              }
            }
          }
          .table-content{
            display: flex;
            margin-top:30px ;
            justify-content: space-around;
            .information{
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content:center;
              .work{
                font-size: 20px;
                font-weight: 550;
                margin-bottom:25px ;
              }
              .name{
                font-size:18px;
                margin-right:8px ;
              }
              .email{
                font-size:16px;
                margin-left:8px ;
                color: #808080;
              }
            }
            .intro{
              display: flex;
              align-items: center;
              justify-content:center;
              width: 650px;
              height: 220px;
              span{
                font-size:18px ;
                font-weight: 500;
              }
            }
          }
      }
        .pager {
            position: absolute;
         
            right: 20px;
        }
    }
 
}
</style>