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
          <el-menu-item-group title="专家">
            <el-menu-item index="1-1">服务评分</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>


      </el-menu>
            </el-aside>
           
       </el-container>
       </el-col>

       <el-col :span = "15">
            <el-form  label-width="180px">

                <el-form-item label="专家ID">
                <el-input v-model="form.name" />
                </el-form-item>


                <el-form-item label="质量评分权重">
                <el-input v-model="form.name" />
                </el-form-item>

                <el-form-item label="速度评分权重">
                <el-input v-model="form.name" />
                </el-form-item>
               
                <el-form-item label="态度评分权重">
                <el-input v-model="form.name" />
                </el-form-item>

                
            </el-form>

            <div style="margin-left: 30%;">

            <el-button @click="submit()">提交评价</el-button>

            </div>

       </el-col>

       
    </el-row>
              
        
</el-main>


</template>

<script >

export default {
    name : 'ExpertUpload',
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
    },
    methods:{
        async submit(){
                        const ret = await this.$http.get('login.json')
                        console.log(ret.data)
                        },     
    }
}


</script>