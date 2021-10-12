import request from '@/utils/request'

import Qs from 'qs'

export function getArticle() {
    return request({
        url:'/findAll',
        method:'post'
    })
}

export function getArticleById(data) {
    return request({
        url:'/findArticleById',
        method:'post',
        transformRequest: [function (data) {
            // 对 data 进行任意转换处理
            return Qs.stringify(data)
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data:data,
    })
}