<template>

    <el-main>
      <el-row style="display: flex; flex-direction: row;">
        <el-col :span="6" >
              <img src="../assets/e.png" style="width: 70%; height: 50%;padding-left: 0%;" >
              
        </el-col>
        <el-col :span="12">
              <el-input  placeholder="请输入检测服务内容"
                    prefix-icon="el-icon-search"
                    style="top: 20%;width: 100%;left: 0%;"
                    >

                        <template #append>
                            <el-button type="primary" @click="open1"
                                style="background-color: rgb(65, 185, 183);color: white;">智能匹配
                            </el-button>
                        </template>
              </el-input>
        </el-col>
        <el-col :span="3">
                <img src="../assets/phone.png"  style="width:30%; padding-top: 10%;padding-left: 0%;padding-bottom: 0%;">
                <h4 >服务热线：651923</h4>
               
        </el-col>
        <el-col :span="3">
        <div style =  "margin-top:15%">
         <a  href="./login" style="margin-right: 28px; font-size: 18px;">请登录</a>
         <a  href="" style="margin-right: 28px; font-size: 18px;top: 50%;">注册</a>
        </div>


        </el-col>
        
      </el-row>

      <el-row style="display: flex; flex-direction: row;">
        <el-col :span = "10">
            <el-carousel >
              <el-carousel-item>
                <img src="../assets/r_img1.jpg"  style="height: 100%;width: 100%;">
              </el-carousel-item>

              <el-carousel-item>
                <img src="../assets/r_img2.png"  style="height: 100%;width: 100%;">
              </el-carousel-item>

              <el-carousel-item>
                <img src="../assets/r_img3.png"  style="height: 100%;width: 100%;">
              </el-carousel-item>

            </el-carousel>
        </el-col>
        <el-col :span = "10">

            <el-container>
              <div style="display: flex; ">
                  <div id = "title" >
                    便捷服务
                  </div>
                  <div class = "select" @click="open1">
                      <img src = "../assets/s1.jpg" >
                      <br/>
                    
                      我是用户
                  </div>
              </div>

              <div style=" display: flex; " @click="open1">
                  <div class = "select" style="margin-left: 80%;">
                      <img src = "../assets/s2.jpg" >
                      <br/>
                      我是商家
                  </div>
              </div>

              <div style=" display: flex; " @click="open1">
                  <div class = "select" style="margin-left: 110%;">
                      <img src = "../assets/s3.jpg" >
                      <br/>
                      信息公开
                  </div>
              </div>

              <div style=" display: flex; " @click="open1">
                  <div class = "select" style="margin-left: 150%;">
                      <img src = "../assets/s4.jpg" >
                      <br/>
                      管理界面
                  </div>
              </div>


            </el-container>


        </el-col>

      </el-row>

    </el-main>


</template>


<script>
import { ElMessageBox } from 'element-plus'

export default {
  
  name: 'MainPage',
  methods: {
    open1() {
      {
       ElMessageBox.alert('请先登录', '身份认证失败', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: ` 请登录: ${ action }`
            });
          }
        })
    }
    }
    }
  }

</script>

<style>
#background {
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0px;
  position: fixed;
}

#title {
   justify-content: center;
   margin-left:10% ;
   font-size: 25px;
   width: 40px;
   height: 128px;
   writing-mode: vertical-lr;
   background-color: rgb(240, 65, 66);
   color: white;
   padding:5px;
   font-weight: bold;
}

.select {
   width: 100%;
   height: 70%;
   margin-left: 30%;
   font-size: 20px;
   font-weight: bold;
}

</style>

