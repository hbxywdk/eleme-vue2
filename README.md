# 仿饿了么H5-纯前端Vue版+手把手教学

这是一个仿饿了么H5的纯前端练手，使用本地伪造数据。
最新更新：修改小球抛物效果，使用css3贝塞尔曲线实现，效果更流畅。
######预览点这里：[https://hbxywdk.github.io/eleme-vue2-static/#/](https://hbxywdk.github.io/eleme-vue2-static/#/)
网页是有假的账户密码的部分页面需要登录 ↓ ，最好在Chrome手机模式下浏览。
username：admin 
password：admin
### 本地预览步骤

```
# clone 文件
git clone https://github.com/hbxywdk/eleme-vue2.git

# 进入 eleme-vue2 文件夹
cd eleme-vue2

# install dependencies
npm install

# 运行 npm run dev 会在浏览器打开 localhost:8080
npm run dev
```

如果你已经对vue很了解，那么看看预览就好不用继续阅读，如果你知道听说过vue，想学习一下，请继续看下去。

> 使用到的相关库或工具：vue2 + vuex2 + vue-router2 + vue-swipe + vue-cli

<p align="center">
  <img width="400" src="./md-img/ele1.png" alt="awesome">
</p>
<p align="center">
  <img width="400" src="./md-img/ele2.png" alt="awesome">
</p>
<p align="center">
  <img width="400" src="./md-img/ele3.png" alt="awesome">
</p>

默认大家都已安装Node.js，且知道基础的ES6语法。

首先需要安装vue-cli，vue-cli是一个快速搭建vue项目的工具，就不需要我们一行一行写webpack配置了。
```
// 安装 vue-cli
npm install -g vue-cli

// 初始化一个项目
vue init webpack my-project

// 然后一路回车，记得勾选上vue-router
// 输入以下命令，等待浏览器打开
cd my-project
npm install
npm run dev

```
###得到以下目录结构
```
-build
-config
-node_modules	// node包
-src			// 项目代码所在文件夹
-static			
-.babelrc
-.editorconfig
-.eslintignore
-.eslintrc.js
-.gitignore
-index.html
-package.json
-README.md
```
src为项目代码所在文件夹
######手动添加vuex。（Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式）
```
npm install vuex -S
```
######在src目录下创建store.js
```
// store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) // 要记得use一下哦

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    Count (state, platform) {
      state.count = platform
    }
  },
  actions: {
    setCount ({commit}, platform) {
      commit('Count', platform)
    }
  },
  getters: {
    getCount: (state) => state.count
  }
})
```
state为状态数据，触发action，mutations会去改变state的值，getters对外提拱state的值。
######修改main.js。（main.js为webpack打包入口文件）
```
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'  // 引入store 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 注入store 
  template: '<App/>',
  components: { App }
})
```
加入store
######修改App.vue
```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{ asd }}                                     // here
    <button @click="change(233)">变为233</button> // here
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {                                           // here ↓
    asd () {
      return this.$store.getters.getCount
    }
  },
  methods: {
    change (arg) {
      this.$store.dispatch('setCount', arg)
    }
  }
}                                                       // here ↑
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
computed 写入    asd () {return this.$store.getters.getCount} ，通过vuex的getters就可得到state中的count，并在当前文件夹中以 asd 存在。
methods 中写入 this.$store.dispatch('setCount', arg)， 执行change 方法会触发action ，改变count值为233，state值改变，computed 就会改变当前asd的值，template中也会相应改变。
更多vuex用法详见：[https://vuex.vuejs.org/zh-cn/intro.html](https://vuex.vuejs.org/zh-cn/intro.html)

######Vue-router。（vue-router通常用于制作单页面应用，如其名就是给vue使用的路由，不清楚路由的可以百度一下）
在components文件夹中新建几个我们要用到的 .vue 文件，直接复制默认的Hello.vue文件即可，重命名并修改其中的不需要的内容。
######修改router/index.js
```
import Vue from 'vue';
import Router from 'vue-router';
//  引入组件
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
```
我们引入空白组件，并定义路由，当访问对应路径时，如localhost:8080/#/business，App.vue中的<router-view></router-view>就会展示对应内容，做到无刷新跳转。path: '/business/:id'，后面的 :id 则是要传递的参数，组件中可以this.$route.params.id得到其值。

template中用<router-link>来跳转，<router-link> 默认会被渲染成一个 `<a>` 标签 <router-link to="/business/123">Go to Foo</router-link>，js中可用router.replace(location)来进行跳转。
    
更多用法详见[http://router.vuejs.org/zh-cn/essentials/getting-started.html](http://router.vuejs.org/zh-cn/essentials/getting-started.html)

###下面进入到代码部分
整个项目使用 rem 方式布局，根据屏幕的宽度来自适应不同手机屏幕。
数据为伪造。
首页 Homepage.vue
```
// 部分代码
export default {
  mounted () {
    this.$store.dispatch('setLoading', true);// 设置当前状态为加载中，显示加载动画
    var time = Math.floor(Math.random() * 2000); // 模拟请求等待
    setTimeout(() => {
      this.$store.dispatch('setLoading', false); // 页面显示
      this.showMe = true;
    }, time);
  },
  computed: {
    ...mapGetters([
      'getLogin',
      'getFalseHotWord',
      'getFalseBussinessbrief' // 商家简略信息
    ])
  }
};
```
由于是纯前端页面，故使用setTimeout模拟下数据的加载，展示加载动画，computed中使用mapGetters来得到state中的数据，这样写与this.$store.getters.getCount实质上没有什么区别，但需要得到的数据较多时能少写不少代码。（使用前需引入）

导航部分使用 Vue-swipe 插件，[https://github.com/ElemeFE/vue-swipe](https://github.com/ElemeFE/vue-swipe)

商家列表部分，因为数据是伪造的，只有五个商家数据，所以这里用简单的复制，来做出加载更多的效果。

######Business.vue（商家详情页）
```
// 部分代码
export default {
  computed: {
    // 通过id找到store中对应店铺信息
    business_info () {
      return this.$store.getters.getFalseBussinessInfo[this.$route.params.id];
    }
  },
  methods: {
    // 右列表控制左列表样式
    rightControlLeftClass () {
       // code
    },
    // 左列表点击控制右列表滚动
    leftControlRightScroll (index) {
       // code
    },
    // 监控网页的resize来改变商品列表的高度
    watchHei () {
       // code
    },
    // 列表中的加按钮点击
    add_food (n, x, e) { // n 为大类 x为大类种商品
       // code
    },
    // 向购物车添加
    add_shopping_car (type, typename, foodname, foodid, foodprice) {
      if (!this.shoppingCarList[foodid]) {
        this.shoppingCarList[foodid] = {
          'type_accumulation': type,
          'type_name': typename,
          'name': foodname,
          'one_food_id': foodid,
          'unit_price': foodprice,
          'count': 1
        };
      } else {
        this.shoppingCarList[foodid].count++;
      }
      // 购物车改变 相关计算
      this.spChangeComputeAll();
    },
    // 购物车改变 相关计算
    spChangeComputeAll () {
       // code
    },
    // 结账
    checkout () {
       // code
    },
    // 添加商品抛球效果
    ball_fly () {
      // 每次添加获得点击按钮的坐标与目标位置的坐标，算得高度差值，并生成如下结构小球
      // <div class="father">
      //   <div class="child"></div>
      // </div>
      // father水平方向匀速运动，child垂直方向使用css3垂直上抛后再下降，即可得到抛球效果。
    }
  }
};
```
商家详情页占一整屏，最外层不允许出现滚动条，分上下两部分，上半部分给固定rem高度，下半部分高度动态计算，屏幕大小改变再次计算，下半部分，左右各一个ul列表，设置高度100%，overflow-y:auto;超出即可滚动。

左右列表
右ul滚动监控所有标题行的offsetTop，对比当前ul的scrollTop，给左ul添加对应样式。点击左列表，来控制右列表滚动。

购物车
data中定义一个购物车对象{ }，添加某样商品时，已存在就+1，不存在则添加属性，每次添加计算总价等相关数据。

结算
结算时将当前购物车中计算出的简略信息添加到state中，清空购物车，跳转路由。

######如果想了解更详细的内容，可以直接阅读代码，内有更详细的注释。
####可以的话可以点一下star。Thanks！
