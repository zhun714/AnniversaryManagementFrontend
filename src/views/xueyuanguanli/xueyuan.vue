<template>
  <div class="manage">
       <el-dialog
            :title=" modalType == 0 ? '新增风采校友' :'编辑风采校友'"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <!-- 用户的表单信息 -->
            <el-form ref="form"  :inline="true" :model="form" label-width="80px">
                <el-form-item label="荣誉类别" prop="type">
                    <el-input placeholder="请输入荣誉类别" v-model="form.type" readonly></el-input>
                </el-form-item>
                <el-form-item label="荣誉奖项" prop="title">
                    <el-input placeholder="请输入荣誉奖项" v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="荣誉名次" prop="rank">
                    <el-input placeholder="请输入荣誉名次" v-model="form.rank"></el-input>
                </el-form-item>
                <el-form-item label="荣誉介绍" prop="description">
                    <el-input placeholder="请输入荣誉介绍" v-model="form.description"  type="textarea" autosize></el-input>
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
            <!-- <el-form :inline="true" :model="awardsForm">
                <el-form-item>
                    <el-input placeholder="请输入荣誉奖项" v-model="awardsForm.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form> -->
        </div>
        <span class="title">学院风采列表</span>
        <div class="table" >
            <div class="content" v-for="item in tableData" :key="item.name">
              <div class="table-header">
                  <div class="header-left">
                      <span class="edit" style="cursor:pointer" @click="handleEdit(item)">编辑</span>
                      <span class="font_6 span_20">|</span>
                      <span class="del" style="cursor:pointer" @click="handleDelete(item)">删除</span>
                  </div>
              </div>
              <div class="table-content">
                    <div class="type">
                        <span>{{item.type}}</span>
                    </div>
                    <div class="information">
                      <span class="awards">{{item.title}}</span>
                      <span class="introduce">{{item.description}}</span>
                    </div>
                    <div class="rank"> 
                      <span>
                           {{item.rank}}
                      </span>
                    </div>      
                  
                  <!-- <div class="divider"></div> -->
              </div>
        </div>
        <!-- <div class="pager">
                <el-pagination
                    layout="prev, pager, next"
                    :total="total"
                    @current-change="handlePage">
                </el-pagination>
            </div> -->
    </div>
  </div>
</template>
<script>
import http from '../../utils/requset'
import {getachievement,editachievement,delachievement,addachievement} from '../../api/index'
export default {
  name: 'huodong',
  data () {
    return {
      dialogVisible: false,
      form:{
        type:'科研成果',
        title:'',
        rank:'',
        description:'',
      }, 
      // rules: {
      //     type: [
      //         { required: true, message: '请输入荣誉类别' }
      //     ],
      //     awards: [
      //         { required: true, message: '请输入荣誉奖项' }
      //     ],
      //     rank: [
      //         { required: true, message: '请输入荣誉名次' }
      //     ],
      //     introduce: [
      //         { required: true, message: '请输入荣誉介绍' }
      //     ],
      // },
       tableData:[
              // {
              //   type:'科研成果',
              //   awards:'2020年度省科技进步奖',
              //   rank:'一等奖',
              //   introduce:'智能化集成化的机器学习云平台',
              // },
              // {
              //   type:'科研成果',
              //   awards:'2020年度省科技进步奖',
              //   rank:'一等奖',
              //   introduce:'智能化集成化的机器学习云平台',
              // },
              // {
              //   type:'科研成果',
              //   awards:'2020年度省科技进步奖',
              //   rank:'一等奖',
              //   introduce:'智能化集成化的机器学习云平台',
              // }
      ],
      modalType: 0, // 0表示新增的弹窗， 1表示编辑
      total: 0, //当前的总条数
      pageNo:1,
      pageSize:20,
      awardsForm: {
          name: ''
      }
    }
  },
  mounted(){
    this.getList()
  },
    methods: {
        submit() {
            this.$refs.form.validate((valid) => {
                // console.log(valid, 'valid')
                if (valid) {
                    // 后续对表单数据的处理
                    if (this.modalType === 0) {
                        console.log(this.form)
                       addachievement(this.form).then(()=>{
                        console.log(11111)
                        this.getList()
                       })
                       
                    } else if(this.modalType === 1){
                        editachievement(this.form).then(() => {
                            // 重新获取列表的接口
                            this.getList()
                            
                        })
                    }

                    // 清空表单的数据
                    this.form={
                      type:'',
                      title:'',
                      rank:'',
                      description:'',
                    }
                    // 关闭弹窗
                    this.dialogVisible = false
                }
            })
        },
        // 弹窗关闭的时候
        handleClose() {
            this.form={
                    type:'',
                    title:'',
                    rank:'',
                    description:'',
                  }
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
        handleDelete(item) {
            this.$confirm('是否确认删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    delachievement(item.id).then(()=>{
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
            
            // this.total=tableData.length()||0
            http({
                method:'post',
                url:getachievement,
                data:{
                    pageNo: this.pageNo,
                    pageSize: this.pageSize,
                    "type":"科研成果"
                }
            }).then(res=>{
                console.log('getachievement',res.data)
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
    height: 97%;
    .manage-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
     .title{
      font-size: 25px;
      font-weight: bold;
      margin-left:10px ;
    }
    .table{
      position: relative;
      margin-top:10px ;
      overflow: scroll;
      height: calc(100% - 62px);
      background: white;
      .content{
        margin-top:15px ;
        // overflow: scroll;
        border-radius: 10px;
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
          height: 130px;
          display: flex;
           margin-top:30px ;
          justify-content: space-around;
          .type{
            display: flex;
            align-items: center;
            justify-content:center;
            font-size: 22px;
            font-weight: bold;
          }
          .information{
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content:center;
              width:400px;
              .awards{
                margin-bottom:5px ;
                color: #7b7b7b;
                font-size: 20px;
                font-weight: 500;
              }
              .introduce{
                margin-top:35px ;
                font-size: 20px;
                font-weight: 500;
              }
            }
            .rank{
              display: flex;
              align-items: center;
              justify-content:center;
              font-size: 28px;
              font-weight: 600;
              color: #d43030;
            }
        }
       
      }
      //  .pager {
      //       position: absolute;
      //       // bottom: 0px;
      //       right: 20px;
      //   }
    }
}
</style>