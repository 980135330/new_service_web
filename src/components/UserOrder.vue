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
            <el-menu-item index="1-1" @click = "usersearch()">服务库</el-menu-item>
            <el-menu-item index="1-2" @click = "userorder()">我的订单</el-menu-item>
            <el-menu-item index="1-3" @click = "usereval()">服务评价</el-menu-item>

          </el-menu-item-group>
        </el-sub-menu>

      </el-menu>
            </el-aside>
           
       </el-container>
       </el-col>

       <el-col :span = "20">
                <el-table
                ref="multipleTableRef"
                :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                style="width: 100%"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" />

                <el-table-column property="orderNumber" label="订单号" width="120" />
                  <el-table-column property="userName" label="用户名" width="120" />
                  <el-table-column property="serviceId" label="服务编号" width="120" />
                  <el-table-column property="detectCompany" label="检测机构" width="120" />
                  <el-table-column property="detectObject" label="检测对象" width="120" />
                  <el-table-column property="detectProject" label="检测项目" width="120" />
                  <el-table-column property="detectPrice" label="检测价格" width="120" />
                  <el-table-column property="detectTime" label="检测时间" width="120" />
                  <el-table-column property="detectStandard" label="检测标准" width="120" />
                  <el-table-column property="createTime" label="下单时间" width="120" />
<!--                  <el-table-column property="qualityInput" label="质量评分" width="120">-->
<!--                      <el-input-->
<!--                          size="mini"-->
<!--                          v-model="this.form.quality"-->
<!--                          placeholder="请输入（1-5）"-->
<!--                      ></el-input>-->
<!--                      <span>{{ this.form.quality }}</span>-->
<!--                  </el-table-column>-->
<!--                  <el-table-column property="speedInput" label="速度评分" width="120">-->
<!--                    <el-input-->
<!--                        size="mini"-->
<!--                        v-model="this.form.speed"-->
<!--                        placeholder="请输入（1-5）"-->
<!--                    ></el-input>-->
<!--                    <span>{{ this.form.speed }}</span>-->
<!--                  </el-table-column>-->
<!--                  <el-table-column property="attitudeInput" label="态度评分" width="120">-->
<!--                    <el-input-->
<!--                        size="mini"-->
<!--                        v-model="this.form.attitude"-->
<!--                        placeholder="请输入（1-5）"-->
<!--                    ></el-input>-->
<!--                    <span>{{ this.form.attitude }}</span>-->
<!--                  </el-table-column>-->
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

              <el-button @click="deleteSelectionOrder()">删除订单</el-button>

            </div>

       </el-col>

       
    </el-row>
              
        
</el-main>


</template>

<script>
export default{
    name:"UserOrder",
   created() {
    this.getUserInfo();
    this.myOrder();
  },
  data(){
    return{
      form : {
        username : '',
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

    async myOrder(){
      // await this.getUserInfo();
      console.log("查找订单")
      const res = await this.$http.get("http://localhost:9001/user/myOrder",{
        params: {
          userName: this.form.username
        }
      });
      this.tableData = res.data.data.records;
      this.dataCount = res.data.data.total;
    },
    async deleteSelectionOrder(){
      console.log(this.dataonLineListSelections);
      // console.log(this.multipleSelection)
      let datalist = [];
      this.dataonLineListSelections.forEach(item => {
        this.$http.get("http://localhost:9001/admin/deleteOrder",{
          params: {
            orderNumber: item.orderNumber
          }
        });
        datalist.push(item.orderNumber);
      });
      this.$message.success('删除订单成功');
      console.log(datalist);

    },
    handleSelectionChange(val) {
      this.dataonLineListSelections = val;
    },
    async getUserInfo(){
      console.log(this.$route.query.username)
      this.form.username=this.$route.query.username
      this.$message.success('用户名'+this.form.username);
    },
    usersearch(){
      // await this.getUserInfo();
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