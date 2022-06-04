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
            <el-menu-item index="1-2" @click = "userorder()">所有订单</el-menu-item>
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

                <el-table-column property="order_number" label="订单号" width="120" />
                  <el-table-column property="serviceId" label="服务编号" width="120" />
                <el-table-column property="detect_company" label="检测机构" width="120" />
                <el-table-column property="detect_object" label="检测对象" width="120" />
                <el-table-column property="detect_project" label="检测项目" width="120" />
                <el-table-column property="detect_price" label="检测价格" width="120" />
                <el-table-column property="detect_time" label="检测时间" width="120" />
                <el-table-column property="detect_standard" label="检测标准" width="120" />
                <el-table-column property="order_time" label="下单时间" width="120" />
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

            <el-button @click="submit()">评价订单</el-button>

            </div>

       </el-col>

       
    </el-row>
              
        
</el-main>


</template>

<script>
export default{
    name:"UserOrder",
  created(){
    this.getUserInfo();
  },
  data(){
    return{
      form : {
        username : ''

      },
      tableData:[],
      currentPage: 1,
      pageSize: 10,
      dataCount: 100
    }
  },
  methods:{

    async order(){
      const res = await this.$http.get("http://localhost:9001/user/myOrder",{
        params: {
          username: this.form.username
        }
      });
      this.tableData = res.data.data.records;
      this.dataCount = res.data.data.total;
    },
    async getUserInfo(){
      console.log(this.$route.query.username)
      this.form.username=this.$route.query.username
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