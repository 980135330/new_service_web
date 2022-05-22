<template>
       <!-- <img alt = 'background img' src="./assets/back.jpg" style = "width: 100%;height: 100%;" > -->
  <img id="background" src="./assets/back.jpg">

   <el-container >
    <el-header >
      <el-row>
          <el-col :span="24" style = "display: flex;">
          <img src="./assets/top.png" style = "width:100%;height: 100%;top:10%;left:0%">
          </el-col>
      </el-row>
    </el-header>

    <router-view></router-view>

  


  </el-container>
  

</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
