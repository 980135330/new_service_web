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
                <el-table

                    :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                ref="table"
                style="width: 85% ; margin-left: 0%">
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

                </el-table>
         <el-pagination
             v-model:current-page="currentPage"
             @current-change="handlePageChange"
             :page-size="pageSize"
             :page-sizes = "[2, 10, 50, 500]"
             layout="total, prev, pager, next"
             :total="dataCount">
         </el-pagination>
                
                <div style="margin-left: 60%;">

                <el-button @click="deleteSelection()">删除</el-button>

              </div>
       </el-col>

       
    </el-row>
              
        
</el-main>


</template>

<script>

export default{
    name:"CompanyInfo",
    created(){
        this.getCompanyInfo();
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
        async getCompanyInfo(){
          const res = await this.$http.get("http://localhost:9001/company/myService",{
            params: {
              detectCompany: this.form.detectCompany
            }
          });
          this.tableData = res.data.data.records;
          this.dataCount = res.data.data.total;
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

    },

    watch:{

            tableData: {
                
                handler () {
                    this.$nextTick(() => {
                       
                        this.$refs.table.doLayout()
                    })
                },
                deep: true
    }
    }
}
    
</script>