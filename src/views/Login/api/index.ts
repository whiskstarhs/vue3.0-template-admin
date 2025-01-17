import request from '@/utils/request';


class Service{
  /**
   * @description POST 用户登录接口
  */
  static postLogin(data: any) {
    return request({
      url: '/api/auth/user/login',
      method: 'POST',
      json: true,
      data
    }).then((res) => {
      if (res.status === 200) {
      return Promise.resolve(res)
      }
      return Promise.reject(res)
    })
  }

  /**
   * @descript POST  用户注册
  */
      static postRegister(data: any) {
        return request({
          url: '/api/auth/user/register',
          method: 'POST',
          json: true,
          data
        }).then((res) => {
          if (res.status === 200) {
            return Promise.resolve(res)
          }
          return Promise.reject(res)
        })
      }

 /**
   * @description   POST 发送验证码 /auth/email/sendCaptcha
  */
   static postCaptcha(data: any) {
    return request({
      url: '/api/auth/email/sendCaptcha',
      method: 'POST',
      json: true,
      data
    }).then((res) => {
      if (res.status === 200||res.status === 400) {
      return Promise.resolve(res)
      }
      return Promise.reject(res)
    })
  }

  /**
   * @description POST 忘记密码接口
  */
   static postForgetPwd(data: any) {
    return request({
      url: '/api/auth/email/forgot-password',
      method: 'POST',
      json: true,
      data
    }).then((res) => {
      if (res.status === 200||res.status === 400) {
      return Promise.resolve(res)
      }
      return Promise.reject(res)
    })
  }

  /**
   * @description /auth/user/reset-password/{token}
  */
   static postResetPwd(data: any) {
    return request({
      url: `/api/auth/user/reset-password`,
      method: 'POST',
      json: true,
      data
    }).then((res) => {
      if (res.status === 200||res.status === 400) {
      return Promise.resolve(res)
      }
      return Promise.reject(res)
    })
  }


}
export default Service


