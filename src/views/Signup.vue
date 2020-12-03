<template>
  <div>

    <el-form
        class="signupForm"
        ref="signupForm"
        :model="signupForm"
    >

      <el-form-item prop="username">
        <el-input
            ref="username"
            v-model="signupForm.username"
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
            ref="password"
            v-model="signupForm.password"
        ></el-input>
      </el-form-item>

      <el-button
          @click="signup"
          style="width: 100%"
      >
        注册
      </el-button>

    </el-form>

  </div>
</template>

<script>
import {login, signup} from "@/api/user";

export default {
  name: "Signup",
  data: () => ({
    signupForm: {
      username: "",
      password: ""
    }
  }),
  methods: {
    signup() {
      signup(this.signupForm).then(res => {
        if (res.code === 1) {
          login(this.signupForm).then(res => {
            if (res.code === 1) {
              this.$router.push('home')
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.signupForm {
  margin: 0 auto;
  width: 30%;
}
</style>