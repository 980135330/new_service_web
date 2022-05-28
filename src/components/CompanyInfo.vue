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
               
                :data="tableData"
                ref="table"
                style="width: 85% ; margin-left: 0%">
                >     
                
                <el-table-column type="selection"   />

                <el-table-column property="detect_company" label="检测机构"    />
                <el-table-column property="detect_object" label="检测对象"  />
                <el-table-column property="detect_project" label="检测项目"   />
                <el-table-column property="detect_price" label="检测价格"   />
                <el-table-column property="detect_time" label="检测时间"   />
                <el-table-column property="detect_standard" label="检测标准"  />

                </el-table>
                
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


    methods:{
        async getCompanyInfo(){
            const res = await this.$http.get("/companyinfo.json");
            this.tableData = res.data.datalist;
            console.log(res.data.datalist)
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

    },
    data(){
        return {
            tableData:[],
        }
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