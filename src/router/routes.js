const routes = [
    {
        path: '/',
        component: () => import('@/layouts/User.vue'),
        children: [
            {
                path: '',
                component: () => import('@/pages/home/index.vue'),
            },
        ],
    },
    {
        path: '/user',
        component: () => import('@/layouts/User.vue'),
        children: [
            {
                path: '',
                component: () => import('@/pages/user/index.vue'),
            },
        ],
    },
    {
        path: '/404',
        component: () => import('@/pages/error/index.vue')
    },
    {
        path: '*', redirect: '/404'
    },

]

export default routes;