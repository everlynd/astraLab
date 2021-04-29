import Vue from 'vue'
import Router from 'vue-router'

import enterScreen from '@/components/enter-screen.vue'
import signIn from '@/components/sign-in.vue'
import signUp from '@/components/sign-up.vue'
import mainScreen from '@/components/main-screen.vue'



Vue.use(Router)


let router = new Router({
    routes: [
        {
            path: '/enterScreen',
            name: 'enterScreen',
            component: enterScreen,
        },
        {
            path: '/signUp',
            name: 'signUp',
            component: signUp,
        },
        {
            path: '/signIn',
            name: 'signIn',
            component: signIn,
        },
        {
            path: '/',
            name: 'mainScreen',
            component: mainScreen
        }
    ]
})

export default router