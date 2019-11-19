<template>
  <div class="myUI">
    <h1>{{ msg }}</h1>
    <p>
       MY Element UI Test {{count}} <br/>
       me.length : {{meCount}}<br/>
       msg :{{message}}
    </p>
<div>
  <button  @click="add2">add 2</button>
  <button  @click="add10">add 10</button>
</div>
     
  </div>
</template>

<script>

export default {
  name: 'my-ui',
  props: {
    msg: String
  },
  computed: {
    message(){
      return this.$store.state.message ;
    },
    count () {
      return this.$store.state.count ;
    },
    meCount () {
     return this.$store.getters.meCount  ;
    }
  },
  methods:{
    add2:function(){
	    this.$store.commit('increment',2);
    },
      add10:function(){
	    this.$store.commit('increment',10);
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
.myUI {
  color: #42b983;
}
</style>
