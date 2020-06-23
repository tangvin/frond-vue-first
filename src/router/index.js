import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import LoginOne from '@/views/Login/Login1'
import LoginSuccess from '@/components/loginSuccess'
import Container from '@/container/container.vue'
import Dashboard from '@/views/list/dashboard/dashboard.vue'
import Article from '@/views/list/articles/article.vue'
import Setting from '@/views/list/settings/Setting.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Login',
      component:LoginOne  
    },
    {
      path:'/loginSuccess1111',
      name:'loginSuccess',
      component:LoginSuccess
    },
    {
      path:'/loginSuccess',
      redirect:'/dashboard',
      name:'Container',
      component:Container,
      children:[
        {
          path: '/dashboard', 
          name: '首页', 
          // component: () => import ('@/views/list/dashboard/dashboard.vue'),
          component:Dashboard,
          children:[
            {
              path: '/dashboard1',
              name:'首页1',
              component:Article
            },
            {
              path:'/dashboard2',
              name:'首页2',
              component:Article
            }
            
          ]
        },
        {path: 'articles', name: '文章', component: Article},
        {path: 'settings', name: '设置', component: Setting}
      ]
    }
  ]
})
