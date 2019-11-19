<template>
  <el-form :model="loginForm" :rules="loginFormRules" ref="loginForm">
    <el-form-item prop="email">
      <div slot="label">
        <i class="fas fa-envelope" placeholder="請輸入"></i><span>電子郵件</span>
      </div>
      <el-input v-model="loginForm.email" type="text"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <div slot="label">
        <i class="fas fa-lock"></i><span>密碼</span>
      </div>
      <el-input v-model="loginForm.password" type="password" placeholder="請輸入"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="login-btn" @click="submitLoginForm">登入</el-button>
    </el-form-item>
    <el-form-item>
      <el-row>
        <el-col :span="12" class="align-left">
          <a
            href="javascript:;"
            @click="changeForm('SignupForm')">
            點此註冊
          </a>
        </el-col>
        <el-col :span="12" class="align-right">
          <a
            href="javascript:;"
            @click="changeForm('ForgetPwdForm')">
            忘記密碼
          </a>
        </el-col>
      </el-row>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      // 表單規則
      loginFormRules: {
        email: [
          { required: true, message: '請輸入電子郵件', trigger: 'blur' },
          { type: 'email', message: '請輸入電子郵件正確格式', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '請輸入密碼', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions([
      'actionLogin'
    ]),
    ...mapState([
      'userData'
    ]),
    submitLoginForm () {
      this.$refs.loginForm.validate((valid) => {
        console.log(this)
        if (valid === false) {
          this.$message({
            message: '請輸入完整的email及密碼',
            type: 'error'
          })
          return false
        }
        this.actionLogin({
          email: this.loginForm.email,
          password: this.loginForm.password
        }).then(data => {
          if (data.success === true) {
            this.$router.push({
              name: 'home'
            })
          }
        })
      })
    },
    changeForm (componentName) {
      this.$emit('handleFormChange', componentName)
    }
  }
}
</script>
