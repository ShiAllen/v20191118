<template>
  <div class="myUI">
    <h1>{{ msg }}</h1>
    <p>
       MY Element UI Test 
    </p>
   
     
  </div>
</template>

<script>
export default {
  name: 'Hello Element UI',
  props: {
    msg: String
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
