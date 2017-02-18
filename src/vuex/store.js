import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var navData = [
  {
    'id': 15,
    'is_in_serving': true,
    'description': '',
    'title': '美食',
    'image_url': '/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg'
  },
  {
    'id': 20,
    'is_in_serving': true,
    'description': '',
    'title': '甜品饮品',
    'image_url': '/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg'
  },
  {
    'id': 10,
    'is_in_serving': true,
    'description': '',
    'title': '商店超市',
    'image_url': '/0/f5/4fcf4d0358f43a636835cba3e5792jpeg.jpeg'
  },
  {
    'id': 1,
    'is_in_serving': true,
    'description': '',
    'title': '预订早餐',
    'image_url': '/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg'
  },
  {
    'id': 8,
    'is_in_serving': true,
    'description': '',
    'title': '果蔬生鲜',
    'image_url': '/4/34/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg'
  },
  {
    'id': 314,
    'is_in_serving': true,
    'description': '',
    'title': '新店特惠',
    'image_url': '/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg'
  },
  {
    'id': 92,
    'is_in_serving': true,
    'description': '',
    'title': '准时达',
    'image_url': '/3/848e031bf7b3c036b4ec19edff16e46jpeg.jpeg'
  },
  {
    'id': 400370,
    'is_in_serving': true,
    'description': '',
    'title': '夜宵',
    'image_url': '/9/21/60ac33f023d9074e13cd78f9b5964jpeg.jpeg'
  },
  {
    'id': 65,
    'is_in_serving': true,
    'description': '',
    'title': '土豪推荐',
    'image_url': '/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg'
  },
  {
    'id': 9,
    'is_in_serving': true,
    'description': '',
    'title': '鲜花蛋糕',
    'image_url': '/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg'
  },
  {
    'id': 236,
    'is_in_serving': true,
    'description': '',
    'title': '汉堡',
    'image_url': '/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg'
  },
  {
    'id': 285,
    'is_in_serving': true,
    'description': '',
    'title': '日韩料理',
    'image_url': '/6/1a/1e0f448be0624c62db416e864d2afjpeg.jpeg'
  },
  {
    'id': 286,
    'is_in_serving': true,
    'description': '',
    'title': '麻辣烫',
    'image_url': '/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg'
  },
  {
    'id': 287,
    'is_in_serving': true,
    'description': '',
    'title': '披萨意面',
    'image_url': '/7/b6/235761e50d391445f021922b71789jpeg.jpeg'
  },
  {
    'id': 288,
    'is_in_serving': true,
    'description': '',
    'title': '川湘菜',
    'image_url': '/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg'
  },
  {
    'id': 289,
    'is_in_serving': true,
    'description': '',
    'title': '包子粥店',
    'image_url': '/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg'
  }
]
export default new Vuex.Store({
  state: {
    platform: 'store原始值',
    navData,
    isLoading: false,
    username: 'admin',
    password: 'admin',
    isLogin: false,
    whichPage: ''
  },
  mutations: {
    SET_APP (state, platform) {
      state.platform = platform
    },
    SET_LOGIN (state, platform) {
      state.isLogin = platform
    },
    SET_LOADING (state, platform) {
      state.isLoading = platform
    },
    SET_WHICHPAGE (state, platform) {
      state.whichPage = platform
    }
  },
  actions: {
    setApp ({commit}, platform) {
      commit('SET_APP', platform)
    },
    setLogin ({commit}, platform) {
      commit('SET_LOGIN', platform)
    },
    setLoading ({commit}, platform) {
      commit('SET_LOADING', platform)
    },
    setWhichpage ({commit}, platform) {
      commit('SET_WHICHPAGE', platform)
    }
  },
  getters: {
    getApp: (state) => state.platform,
    getLogin: (state) => state.isLogin,
    getuname: (state) => state.username,
    getpwd: (state) => state.password,
    getloading: (state) => state.isLoading,
    getwhichpage: (state) => state.whichPage
  }
})
