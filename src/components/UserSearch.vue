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
            <span>用户操作</span>
          </template>
          <el-menu-item-group title="检测客户">
            <el-menu-item index="1-1" @click = "usersearch()">服务库检索</el-menu-item>
            <el-menu-item index="1-2" @click = "userorder()">我的订单</el-menu-item>
            <el-menu-item index="1-3" @click = "usereval()">服务评价</el-menu-item>

          </el-menu-item-group>
        </el-sub-menu>

      </el-menu>
            </el-aside>
           
       </el-container>
       </el-col>

       <el-col :span = "20">
               <el-col :span="12" style="margin-left: 20%;">
              <el-input  v-model="form.requirement"
                  placeholder="请输入检测服务内容"
                    prefix-icon="el-icon-search"
                    style="top: 20%;width: 150%;left: 0%;"
                    >


                        <template #append>
                            <el-button type="primary" @click="findSerivce()"
                                style="background-color: rgb(65, 185, 183);color: white;">智能匹配
                            </el-button>
                        </template>
              </el-input>
            </el-col>

                <el-table
                ref="multipleTableRef"
                :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                style="width: 100%;margin-top: 5%;"
                @selection-change="handleSelectionChange"
            >

                  <el-table-column type="selection" width="55" />
                  <el-table-column property="serviceId" label="服务编号" width="120" />
                  <el-table-column property="detectCompany" label="检测机构" width="120" />
                  <el-table-column property="detectObject" label="检测对象" width="120" />
                  <el-table-column property="detectProject" label="检测项目" width="120" />
                  <el-table-column property="detectPrice" label="检测价格" width="120" />
                  <el-table-column property="detectTime" label="检测时间" width="120" />
                  <el-table-column property="detectStandard" label="检测标准" width="120" />
                  <el-table-column property="detectScore" label="服务评分" width="120" />

<!--                <el-table-column property="name" label="检测机构" width="120" />-->
<!--                <el-table-column label="服务名称" width="120">-->
<!--                <template #default="scope">{{ scope.row.date }}</template>-->
<!--                </el-table-column>-->
<!--                <el-table-column property="detect_object" label="检测对象" width="120" />-->
<!--                <el-table-column property="detect_project" label="检测项目" width="120" />-->
<!--                <el-table-column property="detect_price" label="检测价格" width="120" />-->
<!--                <el-table-column property="detect_time" label="检测时间" width="120" />-->
<!--                <el-table-column property="detect_standard" label="检测标准" width="120" />-->
<!--                <el-table-column property="quality_score" label="质量评分" width="120" />-->
<!--                <el-table-column property="speed_score" label="速度评分" width="120" />-->
<!--                <el-table-column property="attitude_score" label="态度评分" width="120" />-->
                
            </el-table>
           <el-pagination
               v-model:current-page="currentPage"
               @current-change="handlePageChange"
               :page-size="pageSize"
               :page-sizes = "[2, 10, 50, 500]"
               layout="total, prev, pager, next"
               :total="dataCount">
           </el-pagination>

            <div style="margin-left: 80%; margin-top: 3%;">

            <el-button @click="makeOrder()">下单</el-button>

            </div>
       </el-col>

       
    </el-row>
              
        
</el-main>


</template>

<script>
export default{
    name:"UserSearch",
    async created() {
       this.getUserInfo();
    },
  data(){
    return{
      form : {
        username : '',
        requirement : ''
        // serviceId : '',
        // detectCompany : '',
        // detectObject : '',
        // detectProject : '',
        // detectPrice : '',
        // detectTime : '',
        // detectStandard : ''

      },
      tableData:[],
      currentPage: 1,
      pageSize: 10,
      dataCount: 100
    }
  },
    methods:{
      //选中服务，下单
      async makeOrder(){
        console.log(this.dataonLineListSelections);
        // console.log(this.multipleSelection)
        let datalist = [];
        this.dataonLineListSelections.forEach(item => {
          this.$http.post("http://localhost:9001/user/makeOrder",{
              detectCompany: item.detectCompany,
              serviceId: item.serviceId,
            detectObject: item.detectObject,
            detectProject : item.detectProject,
            detectPrice : item.detectPrice,
            detectTime : item.detectTime,
            detectStandard : item.detectStandard,
            userName : this.form.username

          });
          datalist.push(item.serviceId);
        });
        this.$message.success('下单成功');
        console.log(datalist);
        // const res = await this.$http.post('http://localhost:9001/company/deleteService', {selections: datalist});

        // console.log(res)
      },
      handleSelectionChange(val) {
        this.dataonLineListSelections = val;
      },

      async findSerivce(){
        // const res = await this.$http.get("http://localhost:9001/user/findService",{
        //   params: {
        //     requirement: this.form.requirement
        //   }
        // });
        const res = await this.$http.get("http://localhost:9001//EsFindService/findService",{
          params: {
            requirement: this.form.requirement
          }
        });
        // const res = await this.$http.get("/allService.json");
        this.tableData = res.data.data.records;
        this.dataCount = res.data.data.total;
        // console.log(res.data.datalist)
      },
      async getUserInfo(){
        console.log(this.$route.query.username)
        this.form.username=this.$route.query.username
        this.$message.success('用户名'+this.form.username);
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