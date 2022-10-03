<template>
  <div > <!-- v-if="isLoggedin" -->
    only show if user is logged in
    
  </div>
  <h1>Hello</h1>

</template>

<script setup>
import {  onMounted } from 'vue'
//import useUsers from '@/modules/useUsers'
//const isLoggedin = ref(false)

//const { isLoggedin } = useUsers()
onMounted(() => {
  
})


//const user = localStorage.getItem('userLoginInfoFireBase') // checking for the user info and store it in 'user'

</script>

<style lang="scss" scoped>

</style>