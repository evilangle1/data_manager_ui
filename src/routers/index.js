import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Login=()=>import('../components/Login')
const HelloWorld=()=>import('../components/HelloWorld')
const router= new Router({
  routes:[
    {
      path: '/',
      redirect: '/login'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = window.sessionStorage.getItem('Authorization');
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});
export default router;
