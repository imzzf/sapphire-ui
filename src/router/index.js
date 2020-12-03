import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('@/views/Index')
    },
    {
        path: '/home',
        component: () => import('@/views/Home')
    },
    {
        path: '/about',
        component: () => import('@/views/About')
    },
    {
        path: '/login',
        component: () => import('@/views/Login')
    },
    {
        path: '/signup',
        component: () => import('@/views/Signup')
    },
    {
        path: '/404',
        component: () => import('@/views/404')
    },
    {
        path: '*',
        component: () => import('@/views/404')
    }
]

const router = new VueRouter({
    //mode: 'history',
    routes
})

// router.beforeEach(
//     (to,from,next)=>{
//
//     }
// )

export default router
