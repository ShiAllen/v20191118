<template>
  <div class="hello">
    <h1>{{ msg }}{{message}}c:{{count}}</h1>
    <p>
     </p>
   <button v-if="isLogin" @click="logout" >登出</button>
    
  </div>
</template>

<script>
import store from '@/store/index'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }, 
  computed: {
    message(){
      return this.$store.state.message ;
    },
    count(){
        return this.$store.state.count ;
    },
    isLogin(){
       return this.$store.state.isLogin ;
    }
   },
    methods: {
   // ...mapActions([
   //   'actionLogout'
   // ]), 
   actionLogout:function (){ 

     return store.dispatch('actionLogout') ;
   },
   
    async logout () {
        await this.actionLogout()
        window.location.href = '/'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
