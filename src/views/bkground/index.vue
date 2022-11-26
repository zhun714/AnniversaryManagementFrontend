<template>
  <div class="manage">
        <el-dialog
            :title=" modalType == 0 ? '新增背景' :'编辑背景'"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <!-- 用户的表单信息 -->
            <el-form ref="form"  :inline="true" :model="form" label-width="80px">
                <el-form-item label="背景名称" >
                    <el-input placeholder="请输入背景名称" v-model="form.name"></el-input>
                </el-form-item>
                <!-- <form action="" encrypted="multipart/form-date" id="uploadfile">
                    <label for="pic" class="flota-left">请上传图片：</label>
                    <input type="file" id="pic" ref="pic" name="upload" onChange="uploadpic(event)" hidden>
                    <img src="" alt="" @click="getpic" ref="picture" width="100px" height="100px">
                </form> -->
                <el-form-item label="上传背景:" >
                           
                            <input type="file" ref="fileId"  @change="getFile">
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </span>
        </el-dialog>
        <div class="manage-header" >
            <el-button @click="handleAdd" type="primary">
                + 新增
            </el-button>
            <!-- form搜索区域 -->
            <!-- <el-form :inline="true" :model="bkForm">
                <el-form-item>
                    <el-input placeholder="请输入背景名称" v-model="bkForm.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form> -->
        </div>
        <span class="title" style="">虚拟背景列表</span>
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
                     style="width: 100%;height: 190px; border-radius: 5px;"
                    :src="item.photo"
                    />
                </div>
                 <div class="title">
                    <span>{{item.name}}</span>
                 </div>
          </div>
        </div> 
    </div>
  </div>  
</template>
<script>
import http from '../../utils/requset'
import {delbackground, getbackground,addbackground,editbackground} from '../../api/index'
export default {
  name: 'huodong',
  data () {
    return {
      dialogVisible: false,
      form:{
        id:'',
        name:'',
        photo: '',
        phFile:''
      },
      fileList:[],
    //   rules: {
    //       name: [
    //           { required: true, message: '请输入背景名称' }
    //       ]
    //   },
       tableData:[
        
      ],
      modalType: 0, // 0表示新增的弹窗， 1表示编辑
      total: 0, //当前的总条数
      pageNo:1,
      pageSize:10,
      bkForm: {
          name: ''
      },
     

    }
  },
    methods: {
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
                        url:addbackground,
                        headers:{
                            "Content-Type":"multipart/form-date"
                        },
                        // processDate:false,
                        data:formData,
                        params:{
                            name:this.form.name,
                            
                        }
                       }).then(()=>{

                            this.getList()
                        })
                    } else {
                       http({
                        method:'post',
                        url:editbackground,
                        headers:{
                            "Content-Type":"multipart/form-date"
                        },
                        data:formData,
                        params:{
                            id:this.form.id,
                            name:this.form.name,
                            
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
                    this.form={
                            id:'',
                            name:'',
                            photo: '',
                            phFile:''
                    }
                    // 关闭弹窗
                    this.dialogVisible = false
                }
            })
        },
        // 弹窗关闭的时候
        handleClose() {
            this.form={
                            id:'',
                            name:'',
                            photo: '',
                            phFile:''
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
        handleDelete(row) {
          console.log(row)
            this.$confirm('是否确认删除?', '提示', {
                confirmButtonspan: '确定',
                cancelButtonspan: '取消',
                type: 'warning'
                }).then(() => {
                    delbackground(row.id).then(()=>{
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
                url:getbackground,
                data:{
                    pageNo: this.pageNo,
                    pageSize: this.pageSize,
                }
            }).then(res=>{
                console.log('getbk',res.data)
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
        // handlePage(val) {
        //     // console.log(val, 'val')
        //     this.pageData.page = val
        //     this.getList()
        // },
        // 列表的查询
        onSubmit() {
            this.getList()
        }
    },
    mounted () {
        this.getList()
    }
}
</script>
<style lang="less" scoped>

.manage {
    height: 95%;
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
      overflow: scroll;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      position: relative;
      margin-top:20px ;
      height: calc(100% - 62px);
      background: white;
      .content{
        width: 28%;
        height: 43%;
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
           padding-top: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
              justify-content:center;
        }
      }
        
    }
 
}
</style>