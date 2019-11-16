import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // 路由懒加载
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },

  {
    path: '/', // 首页
    name: 'index',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/login', // 登陆
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/regist', // 注册
    name: 'regist',
    component: () => import('@/views/regist/regist.vue'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/regist/registInputInfo.vue'),
      },
      {
        path: 'registInputInfo',
        name: 'registInputInfo',
        component: () => import('@/views/regist/registInputInfo.vue'),
      },
      {
        path: 'registSuccess',
        name: 'registSuccess',
        component: () => import('@/views/regist/registSuccess.vue'),
      }
    ]
  },
  {
    path: '/goodsList', // 商品列表
    name: 'goodsList',
    component: () => import('@/views/goodsList.vue'),
  },
  {
    path: '/goodsDetail', // 商品详情
    name: 'goodsDetail',
    component: () => import('@/views/goodsDetail.vue'),
  },
  {
    path: '/addSuccess', // 加入成功
    name: 'addSuccess',
    component: () => import('@/views/addSuccess.vue'),
  },
  {
    path: '/shoppingCart', // 购物车
    name: 'shoppingCart',
    component: () => import('@/views/shoppingCart.vue'),
  },
  {
    path: '/pay', // 支付页面
    name: 'pay',
    component: () => import('@/views/pay.vue'),
  },
  {
    path: '/paySuccess', // 支付成功页面
    name: 'paySuccess',
    component: () => import('@/views/paySuccess.vue'),
  },
  {
    path: '/feedback', // 反馈页面
    name: 'feedback',
    component: () => import('@/views/feedback.vue'),
  },
  {
    path: '/personalCenter', // 个人中心
    name: 'personalCenter',
    component: () => import('@/views/personalCenter/personalCenter.vue'),
    children: [
      {
        path: '/',//个人中心-主页
        name: 'index',
        component: () => import('@/views/personalCenter/personalCenterMyOrder.vue'),
      },
      {
        path: 'personalCenterMyAddress',//个人中心-我的地址
        name: 'personalCenterMyAddress',
        component: () => import('@/views/personalCenter/personalCenterMyAddress.vue'),
      },
      {
        path: 'personalCenterAddAddress',//个人中心-添加地址
        name: 'personalCenterAddAddress',
        component: () => import('@/views/personalCenter/personalCenterAddAddress.vue'),
      },
      {
        path: 'personalCenterMyOrder',//个人中心-我的订单
        name: 'personalCenterMyOrder',
        component: () => import('@/views/personalCenter/personalCenterMyOrder.vue'),
      },
      {
        path: 'personalCenterMyShoppingCart',//个人中心-我的购物车
        name: 'personalCenterMyShoppingCart',
        component: () => import('@/views/personalCenter/personalCenterMyShoppingCart.vue'),
      }
    ]
  },
  // {
  //   path: '/merchant',
  //   name: 'Merchant',
  //   component: Merchant
  // }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 添加顶部进度条
import ViewUI from 'view-design';
Vue.use(ViewUI);
router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  next();
});
router.afterEach(route => {
  ViewUI.LoadingBar.finish();
});

export default router
