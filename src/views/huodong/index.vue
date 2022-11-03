<template>
  <div class="manage">
        <el-dialog
            :title=" modalType == 0 ? '新增活动' :'编辑活动'"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <!-- 用户的表单信息 -->
            <el-form ref="form" :rules="rules" :inline="true" :model="form" label-width="80px">
                <el-form-item label="活动类型" prop="type">
                    <el-input placeholder="请输入活动类型" v-model="form.type"></el-input>
                </el-form-item>
                <el-form-item label="活动标题" prop="title">
                    <el-input placeholder="请输入活动标题" v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="活动次序" prop="order">
                    <el-input placeholder="请输入次序" v-model="form.order"></el-input>
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
                    prop="type"
                    label="活动类型">
                </el-table-column>
                <el-table-column
                    prop="title"
                    label="活动标题">
                </el-table-column>
                <el-table-column
                    prop="order"
                    label="活动次序"
                    sortable>
                </el-table-column>
                <el-table-column
                    prop="order"
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
      form:{
        type:'',
        title:'',
        order:0
      }, 
      rules: {
          type: [
              { required: true, message: '请输入活动类型' }
          ],
          title: [
              { required: true, message: '请输入活动标题' }
          ],
          order: [
              { required: true, message: '请输入活动次序' }
          ]
      },
       tableData:[
        {
        type:'诗朗诵',
        title:'相聚校庆',
        order:1
       },{
        type:'舞蹈',
        title:'舞动福大',
        order:5
       },
       {
        type:'小品',
        title:'学习',
        order:3
       },
       {
        type:'诗朗诵',
        title:'相聚校庆',
        order:4
       },
       {
        type:'诗朗诵',
        title:'相聚校庆',
        order:2
       }
      ],
      modalType: 0, // 0表示新增的弹窗， 1表示编辑
      total: 0, //当前的总条数
      pageData: {
          page: 1,
          limit: 10
      },
      acForm: {
          name: ''
      }
    }
  },
    methods: {
        // 提交用户表单
        addac(data){
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
        editac(data){

        },
        delac(val){

        },
        submit() {
            this.$refs.form.validate((valid) => {
                // console.log(valid, 'valid')
                if (valid) {
                    // 后续对表单数据的处理
                    if (this.modalType === 0) {
                        console.log(this.form)
                        this.addac(this.form)
                            // 重新获取列表的接口
                        // this.getList()
                       
                    } else {
                       this.delac(this.form)
                        // editac(this.form).then(() => {
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
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.delac(row.num)
                    
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
            
            this.total=tableData.length()||0
            // getac({params: {...this.acForm, ...this.pageData}}).then(({ data }) => {
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