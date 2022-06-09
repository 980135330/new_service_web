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
            <el-menu-item index="1-1" @click = "companyinput()" >服务录入</el-menu-item>
            <el-menu-item index="1-2" @click = "companyinfo()">服务管理</el-menu-item>
            <el-menu-item index="1-2" @click = "companyorder()">订单管理</el-menu-item>

          </el-menu-item-group>
        </el-sub-menu>



        </el-menu>

            </el-aside>
           
       </el-container>
       </el-col>

       <el-col :span = "15">
            <el-form  label-width="100px" style="width: 70%;">


<!--                <el-form-item label="检测机构">-->
<!--                <el-input v-model="form.detectCompany" />-->
<!--                </el-form-item>-->


                <el-form-item label="检测对象">
                <el-select v-model="form.detectObject" placeholder="请选择检测对象">
                    <el-option label="新能源" value="新能源" />
                </el-select>
                </el-form-item>

                <el-form-item label="检测项目">
                <el-select v-model="form.detectProject" placeholder="请选择检测项目">
                    <el-option label="锂电池" value="锂电池" />
                    <el-option label="轮胎" value="轮胎" />
                    <el-option label="发动机" value="发动机" />
                    <el-option label="机动装置" value="机动装置" />

                </el-select>

                </el-form-item>

                <el-form-item label="检测价格">
                <el-input v-model="form.detectPrice" />
                </el-form-item>

                <el-form-item label="检测时间">
                <el-input v-model="form.detectTime" />
                </el-form-item>


                <el-form-item label="检测标准">
                <el-input v-model="form.detectStandard" />
                </el-form-item>

                
            </el-form>
                <div style="margin-left: 30%;">

                <el-button @click="submit()">录入</el-button>

              </div>
       </el-col>

       
    </el-row>
              
        
</el-main>


</template>

<script >

export default {
    name : 'CompanyInput',
  created(){
    this.getCompanyInfo();
  },
    data(){
        return {
            form : {
              detectCompany : '',
              detectObject : '',
              detectProject : '',
              detectPrice : '',
              detectTime : '',
              detectStandard : ''
            }
        }
    },
    methods:{
      async getCompanyInfo(){
        console.log(this.$route.query.detectCompany)
        this.form.detectCompany=this.$route.query.detectCompany
      },
      async submit(){
        const ret = await this.$http.post('http://localhost:9001/company/uploadService',{
                              detectCompany : this.form.detectCompany,
                              detectObject : this.form.detectObject,
                              detectProject : this.form.detectProject,
                              detectPrice : this.form.detectPrice,
                              detectTime : this.form.detectTime,
                              detectStandard : this.form.detectStandard
                })
        console.log(ret.data)
        if(ret.data.code == 200){
          this.$message.success('提交服务成功');
        }
        else{
          this.$message.error('提交服务失败');
        }
      },
      companyinput(){
        this.$router.push({path:'/companyinput',query : { detectCompany: this.form.detectCompany}})
      },

      companyinfo(){
        this.$router.push({path:'/companyinfo',query : { detectCompany: this.form.detectCompany}})

      },

      companyorder(){
        this.$router.push({path:'/companyorder',query : { detectCompany: this.form.detectCompany}})

      },
    }
}


</script>