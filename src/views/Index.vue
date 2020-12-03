<template>
  <div class="index">
    <el-button @click="$router.push('signup')">
      注册
    </el-button>
    <el-button @click="$router.push('login')">
      登录
    </el-button>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {}
}
</script>

<style>
</style>