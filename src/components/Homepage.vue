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

        <!-- 登录按钮 -->
        <div class="index_login" v-if="!getLogin">
          <router-link to="/login">登录</router-link>
        </div>
      </div>

      <!-- 搜索 -->
      <div class="search_box">
        <input type="text" placeholder="搜索商家、商品" @keydown.enter="enter_search" v-model="search_word">
      </div>

      <!-- 热搜词 -->
      <div class="hot_word">
        <router-link v-for="x in getFalseHotWord" :to="'/search/' + x.search_word">
          <span>{{ x.title }}</span>
        </router-link>
      </div>
    </div>

    <!-- 首页导航 -->
    <div class="index_banner">

      <Swipe class="my-swipe" :auto="0"><!-- swipe 设置不自动滚动 -->
        <Swipe-item class="slide slide1">
          <router-link to="/search/美食">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic1.jpeg" alt="">
              <p>美食</p>
            </div>
          </router-link>
          <router-link to="/search/甜品饮品">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic2.jpeg" alt="">
              <p>甜品饮品</p>
            </div>
          </router-link>
          <router-link to="/search/商店超市">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic3.jpeg" alt="">
              <p>商店超市</p>
            </div>
          </router-link>
          <router-link to="/search/预定早餐">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic4.jpeg" alt="">
              <p>预定早餐</p>
            </div>
          </router-link>
          <router-link to="/search/果蔬生鲜">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic5.jpeg" alt="">
              <p>果蔬生鲜</p>
            </div>
          </router-link>
          <router-link to="/search/新店特惠">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic6.jpeg" alt="">
              <p>新店特惠</p>
            </div>
          </router-link>
          <router-link to="/search/准时达">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic7.jpeg" alt="">
              <p>准时达</p>
            </div>
          </router-link>
          <router-link to="/search/夜宵">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic8.jpeg" alt="">
              <p>夜宵</p>
            </div>
          </router-link>
        </Swipe-item>

        <Swipe-item class="slide slide2">
          <router-link to="/search/土豪推荐">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic9.jpeg" alt="">
              <p>土豪推荐</p>
            </div>
          </router-link>
          <router-link to="/search/鲜花蛋糕">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic10.jpeg" alt="">
              <p>鲜花蛋糕</p>
            </div>
          </router-link>
          <router-link to="/search/汉堡">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic11.jpeg" alt="">
              <p>汉堡</p>
            </div>
          </router-link>
          <router-link to="/search/日韩料理">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic12.jpeg" alt="">
              <p>日韩料理</p>
            </div>
          </router-link>
          <router-link to="/search/麻辣烫">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic13.jpeg" alt="">
              <p>麻辣烫</p>
            </div>
          </router-link>
          <router-link to="/search/披萨意面">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic14.jpeg" alt="">
              <p>披萨意面</p>
            </div>
          </router-link>
          <router-link to="/search/川湘菜">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic15.jpeg" alt="">
              <p>川湘菜</p>
            </div>
          </router-link>
          <router-link to="/search/包子粥店">
            <div class="common_slider">
              <img src="../images/slider-pic/slider-pic16.jpeg" alt="">
              <p>包子粥店</p>
            </div>
          </router-link>
        </Swipe-item>
      </Swipe>

    </div>
    <!-- 推荐商家标题 -->
    <h3 class="index_title">推荐商家</h3>                  
    <!-- 推荐商家列表 -->
    <div>
      <OneBusiness v-for="n in getFalseBussinessbrief" :a="n"></OneBusiness>
    </div>

    <!-- 撑开Fixednav挡住的位置 -->
    <div class="space"></div>
    <!-- 固定导航栏 -->
    <Fixednav></Fixednav>
 
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import OneBusiness from './small_components/One_business';
import Fixednav from './small_components/Fixed_nav';
import { mapGetters } from 'vuex';

export default {
  name: 'homepage',
  data () {
    return {
      showMe: false, // 是否展示当前页面
      search_word: '', // 搜索框搜索词
      hot_words: '',
      sexteen_slider: '',
      isLoadingMore: false
    };
  },
  mounted () {
    console.log(mapGetters([
      'getLogin',
      'falseHotWord'
    ]));
    // 设置当前状态为加载中
    this.$store.dispatch('setLoading', true);
    // 设置当前标记为主页
    this.$store.dispatch('setWhichpage', 'homepage');
    // 模拟请求等待
    var time = Math.floor(Math.random() * 2000);
    console.log('模拟加载用时' + time);
    setTimeout(() => {
      // 页面显示
      this.$store.dispatch('setLoading', false);
      this.showMe = true;
    }, time);
    setTimeout(() => {
      window.addEventListener('scroll', this.dispatchLoad, false);
    }, 0);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.dispatchLoad, false);
  },
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    // 等同于
    // isLogin () {
    //   return this.$store.getters.getLogin
    // }
    // 能少写不少代码
    ...mapGetters([
      'getLogin',
      'getFalseHotWord',
      'getFalseBussinessbrief' // 商家简略信息
    ])
  },
  methods: {
    enter_search (e) {
      this.$router.push('/search/' + this.search_word);
    },
    // 加载更多
    loadMore () {
      // 大于十五条不加载
      if (this.getFalseBussinessbrief.length > 15) return;
      this.$store.dispatch('setLoading', true);
      if (!this.isLoadingMore) { // 是否加载中
        this.isLoadingMore = true;
        setTimeout(() => {
          this.$store.dispatch('setLoading', false);
          if (this.getFalseBussinessbrief.length <= 15) {
            this.$store.dispatch('setHomepageMore', [...this.getFalseBussinessbrief, ...(this.getFalseBussinessbrief).slice(0, 5)]);
            // console.log(this.getFalseBussinessbrief);
          }
          this.isLoadingMore = false;
        }, 1000);
      }
    },
    // 触发加载更多
    dispatchLoad () {
      var dscrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (document.documentElement.offsetHeight <= (dscrollTop + window.innerHeight + 1)) {
        console.info('触发加载');
        this.loadMore();
      }
    }
  },
  components: {
    OneBusiness,
    Fixednav,
    Swipe,
    SwipeItem
  }
};
</script>

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
    overflow:hidden;
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
      height:1.2rem;
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
    height:4.6rem;
    background:#fff;
    margin-bottom:0.2rem;
    .common_slider{
      width:2.5rem;
      height:2rem;
      float: left;
      img{
        margin: 0 auto;
        display:block;
        width:1.2rem;
        height:1.2rem;
        margin-top:.2rem;
      }
      p{
        text-align:center;
        font-size: .3rem;
      }
    }
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
    height:1.2rem;
  }
}
/* slider插件css + 改写*/
.mint-swipe,.mint-swipe-items-wrap{overflow:hidden;position:relative;height:100%}.mint-swipe-items-wrap>div{position:absolute;-webkit-transform:translateX(-100%);transform:translateX(-100%);width:100%;height:100%;display:none}.mint-swipe-items-wrap>div.is-active{display:block;-webkit-transform:none;transform:none}.mint-swipe-indicators{position:absolute;bottom:10px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.mint-swipe-indicator{width:.1rem;height:.1rem;display:inline-block;border-radius:50%;background:#ccc;margin:0 3px}.mint-swipe-indicator.is-active{background:@baseBlue}

</style>
