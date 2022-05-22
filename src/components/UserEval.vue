<template>

<el-main>
    <el-row>
      <el-col :span="4">
      <el-container  style="height: 400px; border: 1px solid #eee">
            <el-aside  width="200px" style="background-color: rgb(244, 249, 255)">
               <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >


        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>管理界面</span>
          </template>
          <el-menu-item-group title="管理员">
            <el-menu-item index="1-1">服务库</el-menu-item>
            <el-menu-item index="1-2">所有订单</el-menu-item>
            <el-menu-item index="1-3">服务评价</el-menu-item>

          </el-menu-item-group>
        </el-sub-menu>


      </el-menu>
            </el-aside>
           
       </el-container>
       </el-col>

       <el-col :span = "15">
            <el-form  label-width="120px">

                <el-form-item label="订单号">
                <el-input v-model="form.name" />
                </el-form-item>

                <el-form-item label="检测机构">
                <el-input v-model="form.name" />
                </el-form-item>

                <el-form-item label="检测对象">
                <el-input v-model="form.name" />
                </el-form-item>

                <el-form-item label="检测项目">
                <el-input v-model="form.name" />
                </el-form-item>

                <el-form-item label="质量评分">
                <el-input v-model="form.name" />
                </el-form-item>

                <el-form-item label="速度评分">
                <el-input v-model="form.name" />
                </el-form-item>
               
                <el-form-item label="态度评分">
                <el-input v-model="form.name" />
                </el-form-item>

                
            </el-form>

       </el-col>

       
    </el-row>
              
        
</el-main>


</template>

<script >

export default {
    name : 'UserEval`',
    data(){
        return {
            form : {
                name : '',
                region : '',
                date1 : '',
                date2 : '',
                delivery : false,
                type : [],
                resource : '',
                desc : ''
            }
        }
    }
}


</script>