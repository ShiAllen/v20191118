<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyUI msg="Hello MY Element UI vue"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyUI from '@/components/MyUI.vue'
export default {
  name: 'home',
  components: {
    HelloWorld ,MyUI
  }
}
</script>
