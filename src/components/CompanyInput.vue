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
            <span>检测机构</span>
          </template>
          <el-menu-item-group title="商家相关">
            <el-menu-item index="1-1">服务录入</el-menu-item>
            <el-menu-item index="1-2">服务管理</el-menu-item>
            <el-menu-item index="1-2">订单管理</el-menu-item>

          </el-menu-item-group>
        </el-sub-menu>



        </el-menu>

            </el-aside>
           
       </el-container>
       </el-col>

       <el-col :span = "15">
            <el-form  label-width="120px">


                <el-form-item label="检测机构">
                <el-input v-model="form.name" />
                </el-form-item>


                <el-form-item label="检测对象">
                <el-select v-model="form.region" placeholder="请选择检测对象">
                    <el-option label="新能源" value="1" />
                </el-select>
                </el-form-item>

                <el-form-item label="检测项目">
                <el-select v-model="form.region" placeholder="请选择检测项目">
                    <el-option label="锂电池" value="1" />
                    <el-option label="轮胎" value="2" />
                    <el-option label="发动机" value="3" />
                    <el-option label="机动装置" value="4" />

                </el-select>

                </el-form-item>

                <el-form-item label="检测价格">
                <el-input v-model="form.name" />
                </el-form-item>

                <el-form-item label="检测时间">
                <el-input v-model="form.name" />
                </el-form-item>


                <el-form-item label="检测标准">
                <el-input v-model="form.name" />
                </el-form-item>

                
            </el-form>

       </el-col>

       
    </el-row>
              
        
</el-main>


</template>

<script >

export default {
    name : 'CompanyInput',
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