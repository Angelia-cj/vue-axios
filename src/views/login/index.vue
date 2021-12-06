<!--
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-06 22:00:23
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-06 22:25:29
-->
<template>
  <div class="login-container">
    <div class="login-user">
      <input type="text" v-model="username">
    </div>
    <div class="login-pwd">
      <input type="password" v-model="password">
    </div>
    <div class="login">
      <button type="submit" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$axios({
        url:'http://localhost:8080/#/login',
        method: 'get',
        params: {
          username:this.username,
          password: this.password
        }
      }).then(res=>{
        if (this.username === 'admin' && this.password === '111111') {
          // this.$router.push({name:'Home'})
          this.$router.push({path:'/home'})
        } else {
          return res.error
        }
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
