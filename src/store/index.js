import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0 ,
    message : "Hello",
    ncut:{ 
        ruler:'admin' ,
        username:'' ,
        appname:'web' , 
        crpath : '/', // 目前位置 
    },
    ap:{allen:"彥任",joy:"禾逸",noah:"天海"},
    my:[1,2,3,4,5],
    config:{
      version: '0.0.1' ,
      auth:'Allen Shi' ,
    }
  },
  mutations: {
    increment (state, para ) {
      state.count += para ;
    },
    sayHi(state,msg) {
      state. message = msg ;
    }
  },
  actions: {
  },
  // gatters  
  getters:{
    meCount: function (state) {
      console.log("----doneTodosCount getters----");
     // console.log(getters);
      return state.my.length ;
    }
  },
  modules: {
  }
})
