import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: ()=>import('../pages/login/Login')//使用懒加载的方式
    },
    {
      path: '/password',
      name: '忘记密码',
      component: ()=>import('../pages/login/password/PassWord')
    },
    {
      path: '/settingpassword',
      name: '设置新密码',
      component: ()=>import('../pages/login/settingPassWord/SettingPassWord')
    },
    {
      path: '/homesearch',
      name: '首页的搜索',
      component: ()=>import('../pages/homeSearch/homeSearch')
    },
    {
      path: '/shopdetail',
      name: '店铺详情',
      component: ()=>import('../pages/shopDetail/shopDetail')
    },
    {
     path:'/',
     component:()=>import('../pages/index'),
     children:[
      {
        path: 'home',
        name: '首页',
        component: ()=>import('../pages/home/Home')
      },
      {
        path: 'order',
        name: '订单',
        component: ()=>import('../pages/order/Order')
      },
      {
        path: 'mime',
        name: '我的',
        component: ()=>import('../pages/mime/Mime')
      },
      {
        path: '/',
        name: '首页',
        redirect:'/home'
      },
     ]
    },
    {
      path:'*',//任何不存在路由
      redirect:'/login'//重定向

    }
  ]
})
