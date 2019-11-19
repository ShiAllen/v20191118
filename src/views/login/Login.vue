<template>
  <main class="page-login">
    <div class="container">
      <div class="login-container clear">
        <div class="slogon">
          <div class="slogon-text">
            NCUT
          </div>
          <div class="slogon-text small">
            is the
          </div>
          <div class="slogon-text">
            Best
          </div>
        </div>
        <div class="login-form">
          <el-card class="form-container">
            <div slot="header" class="align-center">
              <!-- <router-link to="/">
                <img src="@/assets/images/logo.svg" alt="Saturn"/>
              </router-link> -->
            </div>
            <div
              :is="formComponent"
              @handleFormChange="changeForm">
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import api from '@/api/index.js'
import LoginForm from '@/views/login/LoginForm.vue'

export default {
  name: 'login',
  components: {
    LoginForm
  },
  data () {
    return {
      formComponent: LoginForm
    }
  },
  methods: {
    changeForm (componentName) {
      this.formComponent = componentName
    }
  },
  mounted () {
    // 將網址修改為 '/'
    window.history.replaceState(window.history.state, '', '/')
  }
}
</script>
