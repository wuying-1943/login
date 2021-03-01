<template>
  <div class="login">
    <div class="login-box">
      <h2 class="title">今日头条号</h2>
      <el-form ref="form" :model="form" label-width="60px" :rules="rules">
        <el-form-item label="账号" prop="name">
          <el-input v-model="form.user.mobile" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.user.code"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="agree">
          <el-checkbox v-model="form.agree"
            >我已阅读并同意用户协议和隐私条款</el-checkbox
          >
        </el-form-item>
        <div class="btn">
          <el-button type="primary" @click="submitForm('form')"
            >登 录</el-button
          >
          <el-button @click="resetForm('form')" type="info">重 置</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import request from "@/api/request";
export default {
  name: "Login",
  data() {
    var checkAgree = (rule,value,callback) => {
       if (!value) {
          return callback(new Error('请同意隐私协议'));
        }
        callback();
    }
    return {
      form: {
        user:{
          mobile: "13911111111",
          code: "246810",
        },
         agree:false,
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 5, max: 14, message: "账户由5-14位字符组成", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 14, message: "密码由6-14位字符组成", trigger: "blur" },
        ],
        agree: [
            {validator: checkAgree, trigger: 'change' }
          ],
      },
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 登录
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          request({
            method: "POST",
            url: "/mp/v1_0/authorizations",
            data: this.form.user
          })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
          console.log(this.form.name, this.form.password);
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url("../../assets/images/login-bg.jpg") no-repeat center;
  background-size: cover;
  position: relative;
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 330px;
    box-sizing: border-box;
    border-radius: 15px;
    background: #fff;
    .title {
      text-align: center;
      color: #3498db;
      // padding: 10px 0;
      margin-top: 25px;
    }
    .el-form {
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
    }
  }
}
.btn {
  width: 100%;
  text-align: center;
  box-sizing: border-box;
}
::v-deep .el-form-item__label {
  text-align: center;
}
::v-deep .el-form-item__label {
  text-align: center;
}
</style>
