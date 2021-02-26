<template>
  <div class="home">
    <el-button type="info" @click="logout">退出</el-button>
    Home
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    // 退出登录
    logout() {
      this.$confirm("您确定要退出登陆吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
      .then(() => {
        sessionStorage.clear();
        this.$router.push("/login");
      })
    },
  },
};
</script>

<style lang="scss" scoped></style>
