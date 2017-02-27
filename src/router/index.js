import Vue from 'vue';
import Router from 'vue-router';

import Homepage from 'components/Homepage';
import Order from 'components/Order';
import Myzone from 'components/Myzone';
import Business from 'components/Business';
import Login from 'components/Login';
import Search from 'components/Search';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/myzone',
      name: 'myzone',
      component: Myzone
    },
    {
      path: '/business/:id',
      name: 'business',
      component: Business
    },
    {
      path: '/search/:keyword',
      name: 'Search',
      component: Search
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});
