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
          <el-menu-item-group title="检测客户">
            <el-menu-item index="1-1" @click = "usersearch()">服务库</el-menu-item>
            <el-menu-item index="1-2" @click = "userorder()">我的订单</el-menu-item>
            <el-menu-item index="1-3" @click = "usereval()">服务评价</el-menu-item>

          </el-menu-item-group>
        </el-sub-menu>


      </el-menu>
            </el-aside>
           
       </el-container>
       </el-col>

       <el-col :span = "15">
            <el-form  label-width="120px" style="width: 70%;">

                <el-form-item label="订单号">
                <el-input v-model="form.orderNumber" />
                </el-form-item>
<!--              <el-form-item label="服务编号">-->
<!--                <el-input v-model="form.name" />-->
<!--              </el-form-item>-->

<!--                <el-form-item label="检测机构">-->
<!--                <el-input v-model="form.name" />-->
<!--                </el-form-item>-->

<!--                <el-form-item label="检测对象">-->
<!--                <el-input v-model="form.name" />-->
<!--                </el-form-item>-->

<!--                <el-form-item label="检测项目">-->
<!--                <el-input v-model="form.name" />-->
<!--                </el-form-item>-->

                <el-form-item label="质量评分">
                <el-input v-model="form.quality" />
                </el-form-item>

                <el-form-item label="速度评分">
                <el-input v-model="form.speed" />
                </el-form-item>
               
                <el-form-item label="态度评分">
                <el-input v-model="form.attitude" />
                </el-form-item>

            <div style="margin-left: 80%; margin-top: 3%;">

            <el-button @click="submit()">提交评价</el-button>

            </div>
                
            </el-form>

       </el-col>

       
    </el-row>
              
        
</el-main>


</template>

<script >

export default {
    name : 'UserEval`',
  created(){
    this.getUserInfo();
  },
  data(){
    return{
      form : {
        username : '',
        orderNumber: '',
        quality: '',
        speed: '',
        attitude: ''

      },
      tableData:[],
      currentPage: 1,
      pageSize: 10,
      dataCount: 100
    }
  },
    methods:{
        async getUserInfo(){
          console.log(this.$route.query.username)
          this.form.username=this.$route.query.username
          this.$message.success('用户名'+this.form.username);
        },
        async submit(){
          const ret = await this.$http.post('http://localhost:9001/user/comment',{
            orderNumber : this.form.orderNumber,
            quality : this.form.quality,
            speed : this.form.speed,
            attitude : this.form.attitude,
            userName : this.form.username
          })
          console.log(ret.data)
          if(ret.data.code == 200){
            this.$message.success('提交服务成功');
          }
          else{
            this.$message.error('提交服务失败');
          }
        },
      usersearch(){
        this.$router.push({path:'/usersearch',query : { username: this.form.username}})
      },
      userorder(){
        this.$router.push({path:'/userorder',query : { username: this.form.username}})
        // this.$router.push("/userorder");
      },
      usereval(){
        this.$router.push({path:'/usereval',query : { username: this.form.username}})
        // this.$router.push("/usereval");
      },
    }

}


</script>