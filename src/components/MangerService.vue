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
                <el-table
                ref="multipleTableRef"
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" />

                <el-table-column property="detect_company" label="检测机构" width="120" />
                <el-table-column property="detect_object" label="检测对象" width="120" />
                <el-table-column property="detect_project" label="检测项目" width="120" />
                <el-table-column property="detect_price" label="检测价格" width="120" />
                <el-table-column property="detect_time" label="检测时间" width="120" />
                <el-table-column property="detect_standard" label="检测标准" width="120" />

            </el-table>

            <div style="margin-left: 80%; margin-top: 3%;">

            <el-button @click="del()">删除订单</el-button>

            </div>
            
       </el-col>
    </el-row>
              
        
</el-main>


</template>

<script>
export default{
    name:"MangerService",
    methods:{

        async del(){
                        const ret = await this.$http.get('login.json')
                        console.log(ret.data)
                        },  

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