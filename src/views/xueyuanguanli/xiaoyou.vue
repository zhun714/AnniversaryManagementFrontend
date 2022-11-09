<template>
  <div class="manage">
        <el-dialog
            :title=" modalType == 0 ? '新增风采校友' :'编辑风采校友'"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <!-- 用户的表单信息 -->
            <el-form ref="form" :rules="rules" :inline="true" :model="form" label-width="80px">
                <el-form-item label="校友姓名" prop="name">
                    <el-input placeholder="请输入校友姓名" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="校友邮箱" prop="email">
                    <el-input placeholder="请输入校友邮箱" v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="校友职业" prop="work" >
                    <el-input placeholder="请输入校友职业" v-model="form.wrok"></el-input>
                </el-form-item>
                <el-form-item label="校友简介" prop="introduce">
                    <el-input placeholder="请输入校友简介" v-model="form.introduce"></el-input>
                </el-form-item>
                <el-form-item label="校友头像" prop="ImageUrl">
                    <el-upload
                      class="upload-demo"
                      drag
                      action="https://jsonplaceholder.typicode.com/posts/"
                      multiple>
                      <i class="el-icon-upload"></i>
                      <div class="el-upload__span">将文件拖到此处，或<em>点击上传</em></div>
                      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
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
        <div class="table"> 
          <div class="content" v-for="item in tableData" :key="item.name">
            <div class="table-header">
                <div class="header-left">
                    <span class="edit" style="cursor:pointer" @click="handleEdit(item)">编辑</span>
                    <span class="font_6 span_20">|</span>
                    <span class="del" style="cursor:pointer" @click="handleDelete(item)">删除</span>
                </div>
            </div>
            <div class="table-content">
                  <div class="photo">
                    <img
                       style="width: 180px;height: 200px;border-radius: 5px;"
                      :src="item.ImageUrl"
                    />
                  </div>
                    <div class="information">
                      <span class="work">{{item.work}}</span>
                      <div class="person">
                        <span class="name">{{item.name}}</span>
                        <span class="font_2">|</span>
                        <span class="email">{{item.email}}</span>
                      </div>
                    </div>
                    <div class="intro"> 
                      <span>
                        详情介绍： {{item.introduce}}
                      </span>
                    </div>      
                
                <!-- <div class="divider"></div> -->
            </div>
          </div>
          <div class="pager">
                <el-pagination
                    layout="prev, pager, next"
                    :total="total"
                    >
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
      form:{
        name:'',
        email:'',
        work:'',
        introduce:'',
        ImageUrl: ''
        
      }, 
      rules: {
          name: [
              { required: true, message: '请输入校友姓名' }
          ],
          email: [
              { required: true, message: '请输入校友邮箱' }
          ],
          work: [
              { required: true, message: '请输入校友工作' }
          ],
          introduce: [
              { required: true, message: '请输入校友简介' },
               {
                min:10,message:'校友简介不能小于10个字'
            }
          ]
      },
       tableData:[
          {
          name:'林慧民',
          email:'xxxxxxx@163.com',
          work:'中国科学院院士',
          introduce:' 1977年入福州大学计算数学专业学习，1982年2月在福州大学计算机系计算机...',
          ImageUrl: 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674747139951324366.png'
          
        },
        {
          name:'林慧民',
          email:'xxxxxxx@163.com',
          work:'中国科学院院士',
          introduce:' 1977年入福州大学计算数学专业学习，1982年2月在福州大学计算机系计算机...',
          ImageUrl: 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16674747139951324366.png'
          
        }
      ],
      modalType: 0, // 0表示新增的弹窗， 1表示编辑
      total: 0, //当前的总条数
      pageData: {
          page: 1,
          limit: 10
      },
      xyForm: {
          name: ''
      }
    }
  },
    methods: {
        // 提交用户表单
        addxy(data){
          console.log(data)
          const findres=this.tableData.find((x)=>x.num==this.tableData.num)
          if(!findres) this.tableData.push(data)
          else{
            this.$message({
                        type: 'info',
                        message: '添加失败'
                    })
          }
        },
        editxy(data){

        },
        delxy(val){

        },
        submit() {
            this.$refs.form.validate((valid) => {
                // console.log(valid, 'valid')
                if (valid) {
                    // 后续对表单数据的处理
                    if (this.modalType === 0) {
                        console.log(this.form)
                        this.addxy(this.form)
                            // 重新获取列表的接口
                        // this.getList()
                       
                    } else {
                       this.delxy(this.form)
                        // editxy(this.form).then(() => {
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
        handleDelete(row) {
            this.$confirm('是否确认删除?', '提示', {
                confirmButtonspan: '确定',
                cancelButtonspan: '取消',
                type: 'warning'
                }).then(() => {
                    this.delxy(row.num)
                    
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
            
            this.total=tableData.length()||2
            
            // getxy({params: {...this.xyForm, ...this.pageData}}).then(({ data }) => {
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