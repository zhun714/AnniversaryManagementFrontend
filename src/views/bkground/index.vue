<template>
  <div class="manage">
        <el-dialog
            :title=" modalType == 0 ? '新增背景' :'编辑背景'"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <!-- 用户的表单信息 -->
            <el-form ref="form" :rules="rules" :inline="true" :model="form" label-width="80px">
                <el-form-item label="背景名称" prop="name">
                    <el-input placeholder="请输入背景名称" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="背景图片" prop="ImageUrl">
                    <el-upload
                      class="upload-demo"
                      drag
                      action="https://jsonplaceholder.typicode.com/posts/"
                      multiple>
                      <i class="el-icon-upload"></i>
                      <div class="el-upload__span">将文件拖到此处，或<em>点击上传</em></div>
                      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2MB</div>
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
            <el-form :inline="true" :model="bkForm">
                <el-form-item>
                    <el-input placeholder="请输入背景名称" v-model="bkForm.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <span class="title">虚拟背景列表</span>
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
                    :src="item.ImageUrl"
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
export default {
  name: 'huodong',
  data () {
    return {
      dialogVisible: false,
      form:{
        name:'',
        ImageUrl: ''
        
      }, 
      rules: {
          name: [
              { required: true, message: '请输入背景名称' }
          ]
      },
       tableData:[
          {
          name:'东门',
          ImageUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.dc08fe825b8bd2bf2871f5fffab08380?rik=rubO22eJyjaX1g&riu=http%3a%2f%2fp8.qhimg.com%2ft0184a2d603ef1708df.jpg&ehk=OmbXhn8hlAY6yILKMQwRPeBKqbJagfdu2q96zy23rc4%3d&risl=&pid=ImgRaw&r=0'
          
        },
         {
          name:'东门',
          ImageUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.dc08fe825b8bd2bf2871f5fffab08380?rik=rubO22eJyjaX1g&riu=http%3a%2f%2fp8.qhimg.com%2ft0184a2d603ef1708df.jpg&ehk=OmbXhn8hlAY6yILKMQwRPeBKqbJagfdu2q96zy23rc4%3d&risl=&pid=ImgRaw&r=0'
          
        },
          {
          name:'东门',
          ImageUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.dc08fe825b8bd2bf2871f5fffab08380?rik=rubO22eJyjaX1g&riu=http%3a%2f%2fp8.qhimg.com%2ft0184a2d603ef1708df.jpg&ehk=OmbXhn8hlAY6yILKMQwRPeBKqbJagfdu2q96zy23rc4%3d&risl=&pid=ImgRaw&r=0'
          
        },
          {
          name:'东门',
          ImageUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.dc08fe825b8bd2bf2871f5fffab08380?rik=rubO22eJyjaX1g&riu=http%3a%2f%2fp8.qhimg.com%2ft0184a2d603ef1708df.jpg&ehk=OmbXhn8hlAY6yILKMQwRPeBKqbJagfdu2q96zy23rc4%3d&risl=&pid=ImgRaw&r=0'
          
        },
         {
          name:'东门',
          ImageUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.dc08fe825b8bd2bf2871f5fffab08380?rik=rubO22eJyjaX1g&riu=http%3a%2f%2fp8.qhimg.com%2ft0184a2d603ef1708df.jpg&ehk=OmbXhn8hlAY6yILKMQwRPeBKqbJagfdu2q96zy23rc4%3d&risl=&pid=ImgRaw&r=0'
          
        },
         {
          name:'东门',
          ImageUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.dc08fe825b8bd2bf2871f5fffab08380?rik=rubO22eJyjaX1g&riu=http%3a%2f%2fp8.qhimg.com%2ft0184a2d603ef1708df.jpg&ehk=OmbXhn8hlAY6yILKMQwRPeBKqbJagfdu2q96zy23rc4%3d&risl=&pid=ImgRaw&r=0'
          
        },
         {
          name:'东门',
          ImageUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.dc08fe825b8bd2bf2871f5fffab08380?rik=rubO22eJyjaX1g&riu=http%3a%2f%2fp8.qhimg.com%2ft0184a2d603ef1708df.jpg&ehk=OmbXhn8hlAY6yILKMQwRPeBKqbJagfdu2q96zy23rc4%3d&risl=&pid=ImgRaw&r=0'
          
        },
        
        
      ],
      modalType: 0, // 0表示新增的弹窗， 1表示编辑
      total: 0, //当前的总条数
      pageData: {
          page: 1,
          limit: 10
      },
      bkForm: {
          name: ''
      }
    }
  },
    methods: {
        // 提交用户表单
        addbk(data){
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
        editbk(data){

        },
        delbk(val){

        },
        submit() {
            this.$refs.form.validate((valid) => {
                // console.log(valid, 'valid')
                if (valid) {
                    // 后续对表单数据的处理
                    if (this.modalType === 0) {
                        console.log(this.form)
                        this.addbk(this.form)
                            // 重新获取列表的接口
                        // this.getList()
                       
                    } else {
                       this.delbk(this.form)
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
        handleDelete(row) {
            this.$confirm('是否确认删除?', '提示', {
                confirmButtonspan: '确定',
                cancelButtonspan: '取消',
                type: 'warning'
                }).then(() => {
                    this.delbk(row.num)
                    
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
            
            // getbk({params: {...this.bkForm, ...this.pageData}}).then(({ data }) => {
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
      overflow: scroll;
      display: flex;
      justify-content: space-between;
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