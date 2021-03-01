<template>
  <div class="nav">
    <div class="title">XX商城后台系统</div>
    <div class="nav-content">
      <div class="nav-item">
        <router-link to="/goods"
          ><i class="el-icon-search"></i>查询商品</router-link
        >
      </div>
      <div class="nav-item">
        <router-link to="/params"
          ><i class="el-icon-coin"></i>规格参数</router-link
        >
      </div>
      <div class="nav-item">
        <router-link to="/category"
          ><i class="el-icon-menu"></i>内容分类</router-link
        >
      </div>
    </div>
    <div class="user">
      <span>admin</span>
      <el-button type="danger" @click="quitBtn">退 出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {};
  },
  methods: {
    quitBtn() {
      console.log(123);
      this.$confirm("您确定要退出登陆吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        sessionStorage.clear();
        setTimeout(() => {
          this.$router.push("/login");
        }, 500);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  min-width: 900px;
  height: 80px;
  line-height: 80px;
  background: #222;
  display: flex;
  .title {
    width: 30%;
    text-align: center;
    color: #fff;
    font-size: 24px;
  }
  .nav-content {
    width: 60%;
    min-width: 600px;
    display: flex;
    .nav-item {
      padding: 0 30px;
      margin-left: 20px;

      a {
        border-radius: 5px;
        padding: 10px;
        color: #fff;
        i {
          color: #fff;
          margin-right: 5px;
        }
      }
    }
  }
  .user {
    width: 10%;
    min-width: 140px;
    span {
      color: #fff;
      margin-right: 10px;
    }
  }
}
.router-link-active {
  background: chocolate;
}
</style>
