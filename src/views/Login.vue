<template>
  <div class="login">

    <el-form
        class="loginForm"
        ref="loginForm"
        :model="loginForm"
    >

      <el-form-item prop="username">
        <el-input
            ref="username"
            v-model="loginForm.username"
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
            ref="password"
            v-model="loginForm.password"
        ></el-input>
      </el-form-item>

      <el-button
          @click="login"
          style="width: 100%"
      >
        登录
      </el-button>

    </el-form>

  </div>
</template>

<script>
import {login} from "@/api/user";

export default {
  name: "Login",
  data: () => ({
    loginForm: {
      username: "",
      password: ""
    }
  }),
  methods: {
    login() {
      login(this.loginForm).then(res => {
        if (res.code === 1) {
          this.$router.push('home')
        }
      })
    }
  }
}
</script>

<style scoped>
.loginForm {
  margin: 0 auto;
  width: 30%;
}

</style>