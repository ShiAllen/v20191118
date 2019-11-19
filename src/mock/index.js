import Mock from 'mockjs'

// /api/v1/user.login
Mock.mock(/api\/v1\/user.login/, function (options) {
  var request = JSON.parse(options.body)
  if (request.email && request.password) {
    if (request.email === 'admin@gmail.com' && request.password === 'admin') {
      return Mock.mock({
        success: true,
        message: '',
        payload: {
          token: '0xabc123',
          user_info: {
            "user_sno|0-20": 0, // 使用者sno
            "user_name": "@cname", // 使用者姓名
            "role_sno": 0, // 角色sno
            "role_name": "系統管理者", // 角色名稱
            "email": "@email",
            "company_sno": 5,
            "company_name": "藍新求資訊股份有限公司",
            "unit_sno|0-5": 0, // 單位sno
            "unit_name": "@cname" + "單位", // 單位名稱
            "last_login_datetime": "@date('yyyy-MM-dd HH:mm:ss')", // 上次登入時間   (YYYY-MM-DD HH:mm:ss)
            "account_enable_datetime": "@date('yyyy-MM-dd HH:mm:ss')", // 帳號啟用時間 (YYYY-MM-DD HH:mm:ss)
            "account_confirm_datetime": "@date('yyyy-MM-dd HH:mm:ss')", // 帳號啟用時間 (YYYY-MM-DD HH:mm:ss)
            "account_active": true // 帳號是否啟用
          }
          
        }
      })
    }
  }

  return Mock.mock({
    success: false,
    message: '',
    payload: {}
  })
})


// /api/v1/user-session
Mock.mock(/api\/v1\/user-session/, function (options) {
  var request = JSON.parse(options.body)
  if (request.token && request.token === '0xabc123') {
    return Mock.mock({
      success: true,
      message: '',
      payload: {
        "user_sno|0-20": 0, // 使用者sno
        "user_name": "@cname", // 使用者姓名
        "role_sno": 0, // 角色sno
        "role_name": "系統管理者", // 角色名稱
        "email": "@email",
        "company_sno": 5,
        "company_name": "藍新求資訊股份有限公司",
        "unit_sno|0-5": 0, // 單位sno
        "unit_name": "@cname" + "單位", // 單位名稱
        "last_login_datetime": "@date('yyyy-MM-dd HH:mm:ss')", // 上次登入時間   (YYYY-MM-DD HH:mm:ss)
        "account_enable_datetime": "@date('yyyy-MM-dd HH:mm:ss')", // 帳號啟用時間 (YYYY-MM-DD HH:mm:ss)
        "account_confirm_datetime": "@date('yyyy-MM-dd HH:mm:ss')", // 帳號啟用時間 (YYYY-MM-DD HH:mm:ss)
        "account_active": true // 帳號是否啟用
        
      }
    })
  }

  return Mock.mock({
    success: false,
    message: '',
    payload: {}
  })
})
