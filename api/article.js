import request from '@/utils/request'

export function getArticle() {
    return request({
        url:'/findAll',
        method:'post'
    })
}