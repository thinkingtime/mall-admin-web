import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: {title: '首页', icon: 'home'}
    }]
  },
  {
    path: '/cms',
    component: Layout,
    redirect: '/cms/product',
    name: 'cms',
    meta: {title: '案列', icon: 'product'},
    children: [{
      path: 'product',
      name: 'product',
      component: () => import('@/views/cms/product/index'),
      meta: {title: '案列列表', icon: 'product-list'}
    },
      {
        path: 'addProduct',
        name: 'addProduct',
        component: () => import('@/views/cms/product/add'),
        meta: {title: '添加案列', icon: 'product-add'}
      },
      {
        path: 'updateProduct',
        name: 'updateProduct',
        component: () => import('@/views/cms/product/update'),
        meta: {title: '修改案列', icon: 'product-add'},
        hidden: true
      },
      {
        path: 'productRecycle',
        name: 'productRecycle',
        component: () => import('@/views/cms/product/index'),
        meta: {title: '案列回收站', icon: 'product-recycle'},
        hidden: true
      },
      {
        path: 'productCate',
        name: 'productCate',
        component: () => import('@/views/cms/productCate/index'),
        meta: {title: '案列分类', icon: 'product-cate'}
      },
      {
        path: 'addProductCate',
        name: 'addProductCate',
        component: () => import('@/views/cms/productCate/add'),
        meta: {title: '添加案列分类'},
        hidden: true
      },
      {
        path: 'updateProductCate',
        name: 'updateProductCate',
        component: () => import('@/views/cms/productCate/update'),
        meta: {title: '修改案列分类'},
        hidden: true
      },
      {
        path: 'productAttr',
        name: 'productAttr',
        component: () => import('@/views/cms/productAttr/index'),
        meta: {title: '案列类型', icon: 'product-attr'}
      },
      {
        path: 'productAttrList',
        name: 'productAttrList',
        component: () => import('@/views/cms/productAttr/productAttrList'),
        meta: {title: '案列属性列表'},
        hidden: true
      },
      {
        path: 'addProductAttr',
        name: 'addProductAttr',
        component: () => import('@/views/cms/productAttr/addProductAttr'),
        meta: {title: '添加案列属性'},
        hidden: true
      },
      {
        path: 'updateProductAttr',
        name: 'updateProductAttr',
        component: () => import('@/views/cms/productAttr/updateProductAttr'),
        meta: {title: '修改案列属性'},
        hidden: true
      }
    ]
  },
  // {
  //   path:'/sms',
  //   component: Layout,
  //   redirect: '/sms/coupon',
  //   name: 'sms',
  //   meta: {title: '营销', icon: 'sms'},
  //   children: [
  //     {
  //       path: 'flash',
  //       name: 'flash',
  //       component: () => import('@/views/sms/flash/index'),
  //       meta: {title: '秒杀活动列表', icon: 'sms-flash'}
  //     },
  //     {
  //       path: 'flashSession',
  //       name: 'flashSession',
  //       component: () => import('@/views/sms/flash/sessionList'),
  //       meta: {title: '秒杀时间段列表'},
  //       hidden:true
  //     },
  //     {
  //       path: 'selectSession',
  //       name: 'selectSession',
  //       component: () => import('@/views/sms/flash/selectSessionList'),
  //       meta: {title: '秒杀时间段选择'},
  //       hidden:true
  //     },
  //     {
  //       path: 'flashProductRelation',
  //       name: 'flashProductRelation',
  //       component: () => import('@/views/sms/flash/productRelationList'),
  //       meta: {title: '秒杀案列列表'},
  //       hidden:true
  //     },
  //     {
  //       path: 'coupon',
  //       name: 'coupon',
  //       component: () => import('@/views/sms/coupon/index'),
  //       meta: {title: '优惠券列表', icon: 'sms-coupon'}
  //     },
  //     {
  //       path: 'addCoupon',
  //       name: 'addCoupon',
  //       component: () => import('@/views/sms/coupon/add'),
  //       meta: {title: '添加优惠券'},
  //       hidden:true
  //     },
  //     {
  //       path: 'updateCoupon',
  //       name: 'updateCoupon',
  //       component: () => import('@/views/sms/coupon/update'),
  //       meta: {title: '修改优惠券'},
  //       hidden:true
  //     },
  //     {
  //       path: 'couponHistory',
  //       name: 'couponHistory',
  //       component: () => import('@/views/sms/coupon/history'),
  //       meta: {title: '优惠券领取详情'},
  //       hidden:true
  //     },
  //     {
  //       path: 'brand',
  //       name: 'homeBrand',
  //       component: () => import('@/views/sms/brand/index'),
  //       meta: {title: '品牌推荐', icon: 'product-brand'}
  //     },
  //     {
  //       path: 'new',
  //       name: 'homeNew',
  //       component: () => import('@/views/sms/new/index'),
  //       meta: {title: '新品推荐', icon: 'sms-new'}
  //     },
  //     {
  //       path: 'hot',
  //       name: 'homeHot',
  //       component: () => import('@/views/sms/hot/index'),
  //       meta: {title: '人气推荐', icon: 'sms-hot'}
  //     },
  //     {
  //       path: 'subject',
  //       name: 'homeSubject',
  //       component: () => import('@/views/sms/subject/index'),
  //       meta: {title: '专题推荐', icon: 'sms-subject'}
  //     },
  //     {
  //       path: 'advertise',
  //       name: 'homeAdvertise',
  //       component: () => import('@/views/sms/advertise/index'),
  //       meta: {title: '广告列表', icon: 'sms-ad'}
  //     },
  //     {
  //       path: 'addAdvertise',
  //       name: 'addHomeAdvertise',
  //       component: () => import('@/views/sms/advertise/add'),
  //       meta: {title: '添加广告'},
  //       hidden:true
  //     },
  //     {
  //       path: 'updateAdvertise',
  //       name: 'updateHomeAdvertise',
  //       component: () => import('@/views/sms/advertise/update'),
  //       meta: {title: '编辑广告'},
  //       hidden:true
  //     }
  //   ]
  // },
  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

