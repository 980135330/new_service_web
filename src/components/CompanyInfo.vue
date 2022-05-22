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
            <el-menu-item index="1-1">服务录入</el-menu-item>
            <el-menu-item index="1-2">服务管理</el-menu-item>
            <el-menu-item index="1-2">订单管理</el-menu-item>

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
       </el-col>

       
    </el-row>
              
        
</el-main>


</template>

<script>
export default{
    name:"CompanyInfo"
}

</script>