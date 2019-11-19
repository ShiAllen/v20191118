import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userData: {},

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
    mutationIsLogin (state, payload) {
      state.isLogin = payload
    },
    mutationUserData (state, payload) {
      state.userData = payload
    },


    increment (state, para ) {
      state.count += para ;
    },
    sayHi(state,msg) {
      state. message = msg ;
    }
  },
  actions: {
    async actionCheckLoginStatus ({ dispatch, commit, state }, payload) {
      const token = localStorage.getItem('ncut_token')
      if (!token) {
        // 未登入
        localStorage.removeItem('ncut_token')
        commit('mutationUserData', null)
        commit('mutationIsLogin', false)
        return {
          success: false,
          message: '',
          payload: null
        }
      }
      const result = await api.userSession({ token })
      if (result.success === true && result.payload) {
        // 已登入
        commit('mutationUserData', result.payload)
        commit('mutationIsLogin', true)
      } else {
        // -- 登入驗證失敗 --
        localStorage.removeItem('ncut_token')
        commit('mutationUserData', null)
        commit('mutationIsLogin', false)
        return {
          success: false,
          message: '',
          payload: null
        }
      }
      return result
    },

    // 登入
    async actionLogin ({ dispatch, commit, state }, { email, password }) {
      const result = await api.userLogin({
        email,
        password
      })
      if (result.success === true && result.payload && result.payload.token && result.payload.user_info) {
        localStorage.setItem('ncut_token', result.payload.token)
        commit('mutationIsLogin', true)
        commit('mutationUserData', result.payload.user_info)
      } else {
        // -- 登入失敗 --
        localStorage.removeItem('ncut_token')
        commit('mutationUserData', null)
        commit('mutationIsLogin', false)
      }
      return result
    },

    // 登出
    async actionLogout ({ dispatch, commit, state }, payload) {
      localStorage.removeItem('ncut_token')
      commit('mutationUserData', null)
      commit('mutationIsLogin', false)

      const result = await api.userLogout()
      return result
    },
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
