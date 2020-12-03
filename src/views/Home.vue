<template>
  <div class="home">
    <h1>HOME</h1>
    <el-button
        @click="logout"
        style="width: 100%"
    >
      退出
    </el-button>
  </div>
</template>

<script>
import {getUserInfo, logout} from "@/api/user";

export default {
  name: 'Home',
  components: {},
  data: () => ({
    user: {
      username: '',
      password: '',

    }
  }),
  created() {
    getUserInfo().then(res => {
      if (res.code === 1) {
        this.user = res.data;
      }
    })
  },
  methods: {
    logout() {
      logout().then(res => {
        if (res.code === 1) {
          this.$router.push('/')
        }
      })
    },

  }
}
</script>