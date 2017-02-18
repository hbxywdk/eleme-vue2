<template>
  <div class="index_main" v-if="showMe">
    <!-- 首页 -->
    <div class="index_header">
      <!-- 地址 -->
      <div class="index_location">
        <div class="location_left ell">
          <svg class="v-md">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
          </svg>
          <span  class="v-md">深圳市福田区这里是个假定位村淡定啦~这不重要</span>
        </div>
        
        <div class="index_login" v-if="!isLogin">
          <router-link to="/login">登录</router-link>
        </div>
        
      </div>
      <!-- 搜索 -->
      <div class="search_box">

          <input type="text" placeholder="搜索商家、商品" @keydown.enter="enter_search" v-model="search_word">

      </div>
      <!-- 热搜词 -->
      <div class="hot_word">
        <router-link to="/search/黄焖鸡">
          <span>黄焖鸡</span>
        </router-link>
        <router-link to="/search/黄焖鸡吧">
          <span>黄焖鸡吧</span>
        </router-link>
        <router-link to="/search/麻辣">
          <span>麻辣</span>
        </router-link>
        <router-link to="/search/黄焖鸡">
          <span>黄焖鸡</span>
        </router-link>
        <router-link to="/search/黄焖鸡吧">
          <span>黄焖鸡吧</span>
        </router-link>
        <router-link to="/search/麻辣">
          <span>麻辣</span>
        </router-link>
        <router-link to="/search/黄焖鸡">
          <span>黄焖鸡</span>
        </router-link>
        <router-link to="/search/黄焖鸡吧">
          <span>黄焖鸡吧</span>
        </router-link>
        <router-link to="/search/麻辣">
          <span>麻辣</span>
        </router-link>
        <router-link to="/search/麻辣">
          <span>麻辣老二</span>
        </router-link>
      </div>

    </div>

    <!-- 首页导航 -->
    <div class="index_banner">
      
    </div>
    <!-- 推荐商家标题 -->
    <h3 class="index_title">推荐商家</h3>                  
    <!-- 推荐商家列表 -->
    <OneBusiness v-for="n in 4" :a="n"></OneBusiness>


    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定导航栏 -->
    <Fixednav></Fixednav>
 


  </div>
</template>

<script>
import OneBusiness from './small_components/one_business'
import Fixednav from './small_components/Fixed_nav'
export default {
  name: 'homepage',
  data () {
    return {
      showMe: false,
      search_word: ''
    }
  },
  mounted () {
    this.$store.dispatch('setLoading', true)
    // 设置当前标记为主页
    this.$store.dispatch('setWhichpage', 'homepage')
    // 模拟ajax
    var time = Math.floor(Math.random() * 2000)
    console.log('模拟ajax用时' + time)
    setTimeout(() => {
      this.$store.dispatch('setLoading', false)
      this.showMe = true
    }, time)
  },
  computed: {
    isLogin () {
      return this.$store.getters.getLogin
    }
  },
  methods: {
    enter_search (e) {
      this.$router.push('/search/' + this.search_word)
    }
  },
  components: {
    'OneBusiness': OneBusiness,
    'Fixednav': Fixednav
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@baseBlue: #0096ff;
@com_gray1: #666;
@com_gray2: #999;
.com_gray1{
  color:@com_gray1;
}
.com_gray2{
  color:@com_gray2;
}
.com_blue{
  color:@baseBlue;
}

.index_main{
  width: 10rem;
  overflow:hidden; 
  .index_header{
    background:@baseBlue;
    height:3rem;
    padding:.26rem;
    box-sizing:border-box;
    .index_location{
      height:.9rem;
      color:#fff;
      width:10rem;
      font-size:.4rem;
      .location_left{
        width:8rem;
        svg{
          width:.5rem;
          height:.5rem;
        }
      }
      .index_login{
        position: absolute;
        height:1rem;
        font-size:.35rem;
        right: 0;
        top: 0;
        line-height:1rem;
        padding:0 .2rem;
        a{
          color:#fff;
        }
        
      }
    }
    /* 搜索 */
    .search_box{
      width:9rem;
      margin: 0 auto;
      height:.9rem;
      input[type="text"]{
        width:100%;
        height:.9rem;
        outline:none;
        font-size:.4rem;
        text-align: center;
        border:none;
        display:block;
        border-radius:.45rem;
      }
    }
    /* 热搜 */
    .hot_word{
      height:.9rem;
      line-height:.9rem;
      font-size:.3rem;
      width:9.48rem;
      overflow-x:auto;
      white-space: nowrap;
      span{
        padding:0 .1rem;
      }
      a{
        color:#fff;
      }

    }
  }
  .index_banner{
    height:4rem;
    background:#fff;
    margin-bottom:0.2rem;
  }
  .index_title{
    line-height: .8rem;
    font-weight: 600;
    background: #fff;
    border-top: 1px solid #eee;
    font-size: .4rem;
    padding-left: .4rem;
  }
  .space{
    width:10rem;
    height:1rem;
  }
}
</style>
