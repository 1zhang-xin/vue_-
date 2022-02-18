<template>
    <div class="login_">
         <div class="bord">
             <!-- 头像区域 -->
             <div class="img">
                 <img src="../assets/logo.png" alt="">
             </div>

             <!-- 登录表单区域 -->
             <div class="input">
                 <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" :rules="rules" ref="aaa">
  <el-form-item  prop="name">
    <el-input v-model="formLabelAlign.name" placeholder="请输入用户名" clearable prefix-icon="el-icon-user-solid"></el-input>
  </el-form-item>
  <el-form-item prop="region">
    <el-input v-model="formLabelAlign.region" placeholder="请输入密码" show-password prefix-icon="el-icon-lock"></el-input>
  </el-form-item>

   <el-form-item>
    <el-button type="primary" @click="submitForm()">登录</el-button>
    <el-button @click="resetForm()">重置</el-button>
  </el-form-item>
  
</el-form>
             </div>
         </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
              labelPosition: 'right',
        formLabelAlign: {
          name: 'admin',
          region: '123456',
          type: ''
        },
         rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 6, message: '长度在 3 到 6个字符', trigger: 'blur' }
          ],
           region: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ]
          },
          list:{}
        };
    },
    methods: {
         resetForm() {
        this.$refs.aaa.resetFields();
      },


      submitForm(){
          this.$refs.aaa.validate(
              canshu=>{
                    let can=canshu 
                  // console.log(can);
                 if(can){
                    
     


      return  this.axios.post('http://127.0.0.1:8888/api/private/v1/login',{
                     username:this.formLabelAlign.name,
                     password:this.formLabelAlign.region
                 }).then(res=>{
                    //  console.log(res);
                     this.list=res.data
                    //  console.log(this.list);
                     if(this.list.meta.status!=200){
                           
          this.$message({
          showClose: true,
          message: '登陆失败',
            //  type: 'success',
          duration:1000
         
        });
                     
         }
         else{
                   this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
             type: 'success',
          duration:1000,
          
         
      
    
         
        });
        console.log(this.list);
        window.sessionStorage.setItem('token',this.list.data.token);
         this.$router.push('/loginshouye')
    

                     }
                 })
         }else if(!can){
                     alert('验证失败')
                 };


              
          })
      }
    },
    components: {

    },
};
</script>

<style scoped lang="less">


 .login_{
      background-color: #2b4b6b;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .bord{
          width: 30%;
          height: 40%;
          background-color: aliceblue;
         
          .img{
              width: 130px;
              height: 130px;
              background-color: aliceblue;
              border-radius: 50%;
              border: solid 1px #ccc;
              padding: 10px;
              box-shadow:0 0 10px #2b4b6b;
              position: absolute;
           transform: translate(-50% ,-50%);
              left: 50%;
                img{
                  width: 100%;
                  height: 100%;
                    border-radius: 50%;
                    background-color: #ccc;
                  }
          }
          .input{
              position: absolute;
              top: 45%;
              left: 38%;
          }
      }
  
}
 
</style>
