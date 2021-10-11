import request from '@/utils/request'
import axios from "axios";
import Qs from 'qs';

// 注册
export function userRegister(data) {
  
  return request({
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
  }],
    url: 'user/register',
    method: 'post',
    data
  })
}

// 前台用户登录
export function login(data) {
  
  return request({
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return Qs.stringify(data)
  }],
    url: 'user/login',
    method: 'post',
    data
  })
}
// 登录后获取前台用户信息
export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}
// 前台用户注销
export function logout() {
  return request({
    url: '/user/logout'
  })
}