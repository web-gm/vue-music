/**
 * article模块接口列表
 */

import base from './base' // 导入接口域名列表
import axios from '../utils/http' // 导入http中创建的axios实例
// import qs from 'qs' // 根据需求是否导入qs模块

const article = {
  // 新闻列表
  // articleList () {
  //   return axios.get(`${base.sq}/topics`)
  // },
  // // 新闻详情,演示
  // articleDetail (id, params) {
  //   return axios.get(`${base.sq}/topic/${id}`, {
  //     params: params
  //   })
  // },?id=705123491
  // // post提交
  // login (params) {
  //   return axios.post(`${base.sq}/accesstoken`, qs.stringify(params))
  // },
  // 其他接口…………
  //
  // playlist (params) {
  //   return axios.get(`${base.api}/comment/playlist`, {
  //     params: params
  //   })
  // },
  banner () {
    return axios.get(`${base.api}/banner`, {
    })
  },
  privatecontent () {
    return axios.get(`${base.api}/personalized/privatecontent`, {
    })
  }
}

export default {
  ...article
}
