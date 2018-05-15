import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login/Login';
import Home from '@/components/Home/Home';
import Test from '@/components/Test/Test';

Vue.use(Router)

export default new Router({
  history:true,
  routes: [
    {
      path: '/',
      name: 'default',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      beforeEnter: (to,from,next)=> { 

        //获取过期时间
        var qItem=localStorage.ms_expire;

        //判断是否登陆过期

        //跳转控制
        if(true){
          //正常跳转至目标地址
          next();
        }else{
          //登陆超时,跳回登陆页
          next({path: '/login',query:{ Rurl: to.fullPath}}); 
        }
      },
      children:[
        {
          path:'/test',
          name:'/test',
          component:Test
        }
      ]
    },
  ]
})
