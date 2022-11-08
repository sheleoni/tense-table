const routes = [
    // {
    //     path: '',
    //     component: () => import('@/layouts/Empty.vue'),
    //     children: [],
    // },
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
        path: '/404',
        compnent: () => import('@/pages/error/index.vue')
    },
    {
        path: '*', redirect: '/404'
    },

]

export default routes;