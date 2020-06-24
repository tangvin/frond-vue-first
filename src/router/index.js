import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/TheLogin'
import Container from '@/container/container.vue'
import Dashboard from '@/views/list/dashboard'
import Article from '@/views/list/articles'
import Setting from '@/views/list/settings/index.vue'

// import LoginOne from '@/views/Login/Login1'
// import LoginSuccess from '@/components/loginSuccess'
// import Dashboard from '@/views/list/dashboard/dashboard.vue'
// import Article from '@/views/list/articles/article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path:'/',
    //   name:'HelloWorld',
    //   component:HelloWorld  
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Container',
      component: Container,
      children: [
        {path: 'dashboard', name: '首页', component: Dashboard, },
        {path: 'article', name: '文章', component: Article, },
      ]
    }
  ]
})
