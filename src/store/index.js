import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false, // 是否展示loading动画
    orderBy: 'sale', // 根据什么字段排序
    goodsInfoByName: [], // 根据商品名称的列表
    goodsDetail: {}, // 商品详情
    goodsInfoByMerchanrtId: [], // 商户商品列表
    userInfo: {}, // 用户信息
    signUpStep: 0, // 登陆步骤
    marketing: { // 营销
      CarouselItems: [
        {
          img:"",
          query:""
        },
        {
          img:"",
          query:""
        },
        {
          img:"",
          query:""
        },
      ], // 轮播图
      activity: [
        {
          img:"",
          query:""
        },
        {
          img:"",
          query:""
        },
      ] // 活动
    },
    order: [], // 订单信息
    seckills: { // 秒杀
      deadline: {
        hours: 0,
        minute: 0,
        seconds: 0
      },
      goodsList: []
    },
    computer: {}, // 电脑专栏
    eat: {}, // 爱吃专栏
    asItems: [], // 广告
    goodsList: [], // 商品列表
    shoppingCart: [], // 购物车
    newShoppingCart: [], // 刚加入的购物车，作为展示
    recommend: [], // 推荐购买
    address: []
  },
  getters,
  actions,
  mutations
});
