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
          <el-menu-item-group title="管理员">
            <el-menu-item index="1-1" @click = "mangerservice">服务库</el-menu-item>
            <el-menu-item index="1-2" @click = "mangerorder">所有订单</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>


      </el-menu>
            </el-aside>
           
       </el-container>
       </el-col>

       <el-col :span = "20">
         <div style="margin-left: 80%; margin-top: 3%;">

           <el-button @click="updateAllRate()">更新所有服务评分</el-button>

         </div>
                <el-table
                ref="multipleTableRef"
                :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                style="width: 100%"
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

            <el-button @click="deleteSelection()">删除订单</el-button>

            </div>
            
       </el-col>
    </el-row>
              
        
</el-main>


</template>

<script>
export default{
    name:"MangerService",
    created(){
      this.getAllSerivce();
    },
  data() {
    return{
      tableData:[],
      currentPage: 1,
      pageSize: 10,
      dataCount: 100
    }
  },
    methods:{
      async getAllSerivce(){
        const res = await this.$http.get("http://localhost:9001/admin/allService");
        // const res = await this.$http.get("/allService.json");
        this.tableData = res.data.data.records;
        this.dataCount = res.data.data.total;
        // console.log(res.data.datalist)
      },
      async updateAllRate(){
        const ret = await this.$http.get("http://localhost:9001/admin/updateAllRate");
        console.log(ret.data)
        if(ret.data.code == 200){
          this.$message.success('更新所有服务评分成功');
          this.$router.push({
            path:"/mangerservice"
          })

        }
        else{
          this.$message.error('更新所有服务评分失败');
        }
      },
      //删除，传递选中数据到后端
      async deleteSelection(){
        console.log(this.dataonLineListSelections);
        // console.log(this.multipleSelection)
        let datalist = [];
        this.dataonLineListSelections.forEach(item => {
          this.$http.get("http://localhost:9001/admin/deleteService",{
            params: {
              serviceId: item.serviceId
            }
          });
          datalist.push(item.serviceId);
        });
        this.$message.success('删除服务成功');
        console.log(datalist);
        // const res = await this.$http.post('http://localhost:9001/company/deleteService', {selections: datalist});

        // console.log(res)
      },
      handleSelectionChange(val) {
        this.dataonLineListSelections = val;
      },


        // async del(){
        //                 const ret = await this.$http.get('login.json')
        //                 console.log(ret.data)
        //                 },

        mangerservice(){
            this.$router.push({
                path:"/mangerservice"
            })
        },
        mangerorder(){
            this.$router.push({
                path:"/mangerorder"
            })
        },
    }
}

</script>