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
      <el-col :span = "20">
        <el-form  label-width="100px" style="width: 70%;">


          <el-form-item label="检测机构">
            <el-input v-model="form.detectCompany" />
          </el-form-item>

        </el-form>
        <div style="margin-left: 30%;">

          <el-button @click="getCompanyOrder">查找订单</el-button>

        </div>
<!--      </el-col>-->

<!--       <el-col :span = "20">-->
                <el-table
                ref="multipleTableRef"
                :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                style="width: 100%"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" />

                <el-table-column property="order_number" label="订单号" width="120" />
                <el-table-column property="user_name" label="用户名" width="120" />
                  <el-table-column property="serviceId" label="服务编号" width="120" />
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


       </el-col>

       
    </el-row>
              
        
</el-main>


</template>

<script>
export default{
    name:"CompanyOrder",
    created(){
        this.getCompanyOrder();
    },
    data(){
        return{
          form : {
            detectCompany : ''

          },
          tableData:[],
          currentPage: 1,
          pageSize: 10,
          dataCount: 100
        }
    },
    methods:{
        async getCompanyOrder(){
          const res = await this.$http.get("http://localhost:9001/company/myOrder",{
            params: {
              detectCompany: this.form.detectCompany
            }
          });
          this.tableData = res.data.data.records;
          this.dataCount = res.data.data.total;
        },
        companyinput(){
            this.$router.push("/companyinput");
        },

        companyinfo(){
            this.$router.push("/companyinfo");
        },

        companyorder(){
            this.$router.push("/companyorder");

        },
    }
}

</script>