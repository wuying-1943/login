<template>
  <div class="login">
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="avatar">
        <img src="./../assets/logo.png" alt="" />
      </div>
      <!-- 登录表单 -->
      <el-form
        label-width="80px"
        class="login-form"
        :model="form"
        :rules="loginRules"
        ref="loginForm"
      >
        <el-form-item label="用户账号" prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="form.username"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input
            type="password"
            placeholder="请输入用户密码"
            v-model="form.password"
            prefix-icon="el-icon-s-custom"
          ></el-input>
        </el-form-item>
        <div class="btns">
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button @click="reset">重置</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      // 表单验证规则
      loginRules: {
        username: [
          { required: true, message: "请输入用户账号", trigger: "blur" },
          {
            min: 4,
            max: 14,
            message: "用户账号长度为6-14个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          {
            min: 6,
            max: 10,
            message: "用户密码长度为6-14个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          setTimeout(() => {
            if (
              this.form.username === "admin" &&
              this.form.password === "123456"
            ) {
              this.$message({
                message: "登录成功",
                type: "success",
              });
              var token = 'UJHHJuiuq543F54SD45FDG';
              sessionStorage.setItem('token',token);
              this.$router.push('/home');
            } else {
               this.$message.error('账号或密码错误');
            }
          }, 100);
        } else {
          return;
        }
      });
    },
    reset() {
      this.$refs.loginForm.resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: #2b4b6b;
  position: relative;
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 300px;
    background: #fff;
    border-radius: 15px;
    .avatar {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        background: #ddd;
      }
    }
    .login-form {
      margin-top: 80px;
      .btns {
        text-align: center;
      }
    }
  }
}
.el-form-item {
  padding: 0 25px;
}
</style>
