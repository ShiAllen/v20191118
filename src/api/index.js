import { Message, Notification } from 'element-ui';
import axios from 'axios'

const successNotify = (title) => {
  Notification.success({
    title
  })
}

const successMessage = (message) => {
  Message.success({
    message
  })
}

const errorMessage = (message = '未知錯誤，請確認網路狀態或聯絡系統管理員') => {
  Message.error({
    message
  })
}

export default {

  //apiUrl: process.env.VUE_API_URL,
  apiUrl: "." , ///http://www.ncut.edu.tw",
  // ---------- 帳號 ----------
  // 個人註冊
  async userRegister (data) {
    let result = await axios
      //.post(`${this.apiUrl}/api/v1/user.register`, data)
      .post(`/api/v1/user.register`, data)
      .then((response) => {
        if (response.data.success) {
          successMessage('註冊成功')
        } else {
          errorMessage(response.data.message || '')
        }
        return response.data
      })
      .catch((error) => {
        errorMessage()
        return error
      })
    return result
  },
  // 修改密碼
  async userPasswordReset (data) {
    let result = await axios
    //  .post(`${this.apiUrl}/api/v1/user-password.reset`, data)
    .post(`/api/v1/user-password.reset`, data)
      .then((response) => {
        if (response.data.success) {
          successMessage('修改密碼成功')
        } else {
          errorMessage(response.data.message || '')
        }
        return response.data
      })
      .catch((error) => {
        errorMessage()
        return error
      })
    return result
  },
  // 忘記密碼,重寄亂數密碼
  async userForgetPassword (data) {
    let result = await axios
   //   .post(`${this.apiUrl}/api/v1/user.forget-password`, data)
   .post(`/api/v1/user.forget-password`, data)
      .then((response) => {
        if (response.data.success) {
          successMessage('已送出email請至信箱收取')
        } else {
          errorMessage(response.data.message || '')
        }
        return response.data
      })
      .catch((error) => {
        errorMessage()
        return error
      })
    return result
  },
  // 登入
  async userLogin (data) {
    let result = await axios
    //  .post(`${this.apiUrl}/api/v1/user.login`, data)
      .post(`/api/v1/user.login`, data)
      .then((response) => {
        if (response.data.success) {
          successNotify(`HI,${response.data.payload.user_info.user_name}`)
        } else {
          errorMessage(response.data.message || '')
        }
        return response.data
      })
      .catch((error) => {
        errorMessage()
        return error
      })
    return result
  },
  // 登出
  async userLogout () {
    let result = await axios
      //.post(`${this.apiUrl}/api/v1/user.logout`)
      .post(`/api/v1/user.logout`)
      .then((response) => {
        if (!response.data.success) {
          errorMessage(response.data.message || '')
        }
        return response.data
      })
      .catch((error) => {
        errorMessage()
        return error
      })
    return result
  },
  // 取得session
  async userSession (data) {
    let result = await axios
   //   .post(`${this.apiUrl}/api/v1/user-session`, data)
      .post(`/api/v1/user-session`, data)      
      .then((response) => {
        if (!response.data.success) {
          errorMessage(response.data.message || '')
        }
        return response.data
      })
      .catch((error) => {
        errorMessage()
        return error
      })
    return result
  },
}
