import request from '@/utils/request'

export const login = (data) => request({
    url: '/user/login',
    method: 'post',
    data
})

export const signup = (data) => request({
    url: '/user/signup',
    method: 'post',
    data
})

export const logout = () => request({
    url: '/user/logout',
    method: 'post'
})

export const getUserInfo = () => request({
    url: '/user/info',
    method: 'get'
})