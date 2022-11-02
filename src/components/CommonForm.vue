<template>
    <el-form ref="form" :model="form" label-width="100px" :inline="inline">
        <el-form-item
        v-for="item in formlabel"
        :key="item.label"
        :label="item.label"
        :prop="item.model"
        :rules="rules">
            <el-input
                v-if="item.type=='input'"
                :placeholder="'请输入'+item.label"
                v-model="form[item.label]"        
            ></el-input>
            <el-switch v-if="item.type=='switch'"
            v-model="form[item.model]"
            ></el-switch>
            <el-date-picker
            v-if="item.type=='date'"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请输入日期"
            v-model="form[item.model]"
            >
            </el-date-picker>
            <el-select
            v-if="item.type=='select'"
            placeholder="请选择"
            v-model="form[item.model]"
            >
                <el-option
                v-for="item in item.ops"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <slot></slot>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    name:'CommonForm',
    props:{
        formlabel:Array,
        form:Object,
        inline:Boolean,
    },
    data(){
        return{      
            rules:{
                name:[{
                        require:true,message:'请输入姓名'
                    }],
                age:[{
                        require:true,message:'请选择性别'
                    }]
                }
        }
    }
    
}
</script>