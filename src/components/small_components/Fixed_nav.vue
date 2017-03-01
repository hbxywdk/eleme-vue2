<template>
    <!-- 列表单个商家 -->

  <nav class="fixed_nav">
    <router-link to="/">
      <span class="one_fixed_nav">
        <svg v-if="returnPageNow == 'homepage'">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index.18edf5a"></use>
        </svg>
        <svg v-if="returnPageNow !== 'homepage'">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index-regular.b245d60"></use>
        </svg>
        <span>外卖</span>
      </span>
    </router-link>

    <router-link to="/order">
      <span class="one_fixed_nav">
        <svg v-if="returnPageNow == 'order'">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order.070ae2a"></use>
        </svg>
        <svg v-if="returnPageNow !== 'order'">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order-regular.41c17f8"></use>
        </svg>
        <span>订单</span>
      </span>
    </router-link>

    <router-link to="/myzone">
      <span class="one_fixed_nav">
        <svg v-if="returnPageNow == 'myzone'">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile.dbc5ebf"></use>
        </svg>
        <svg v-if="returnPageNow !== 'myzone'">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile-regular.c151d62"></use>
        </svg>
        <span>我的</span>
      </span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'fixed_nav',
  data () {
    return {

    };
  },
  mounted () {
    setInterval(() => {
      // console.log(this.returnPageNow);
    }, 2000);
  },
  computed: {
    returnPageNow () {
      return this.$store.getters.getwhichpage;
    }
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
  .fixed_nav{
     width:10rem;
     height:1.2rem;
     background:#fff;
     position:fixed;
     left:0;
     right:0;
     bottom:0;
     font-size: .28rem;
     z-index: 999;
     svg{
      width:.45rem;
      height: .45rem;
      display:block;
      margin: .2rem auto .1rem;
     }
     .one_fixed_nav{
      width:32.6%;
      display:inline-block;
      height:1.2rem;
      text-align:center;
     }
  }
</style>
