<template>
  <div v-if="showMe">
    <div class="re_search">
      <svg @click="$router.go(-1)">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use>
      </svg>
      <input type="search" v-model="search_text" class="v-md" placeholder="请输入商品名称" @keydown.enter="search_method">
    </div>
    <OneBusiness v-for="(item, n) in search_res" :key="n" :a="item"></OneBusiness>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import OneBusiness from './small_components/One_business';

export default {
  name: 'search',
  data () {
    return {
      showMe: false,
      search_text: '', // 搜索框内容
      search_res: [] // 搜索结果
    };
  },
  mounted () {
    this.$store.dispatch('setLoading', true);
    // 模拟加载
    var time = Math.floor(Math.random() * 2000);
    console.log('模拟加载用时' + time);
    setTimeout(() => {
      this.$store.dispatch('setLoading', false);
      this.showMe = true;
    }, time);
    this.search_method();
  },
  computed: {
    ...mapGetters([
      'getFalseBussinessbrief' // 商家简略信息
    ])
  },
  methods: {
    search_method () {
      this.search_res = [];
      var mainWord = this.$route.params.keyword;
      if (this.search_text !== '' && this.search_text !== this.$route.params.keyword) {
        mainWord = this.search_text;
      }
      this.search_text = mainWord;
      for (var x in this.getFalseBussinessbrief) {
        if (this.getFalseBussinessbrief[x].shop_name.includes(mainWord)) {
          this.search_res.push(this.getFalseBussinessbrief[x]);
        }
      }
    }
  },
  components: {
    OneBusiness
  }
};
</script>

<style lang="less" scoped>
.re_search{
  background:#0096ff;
  line-height:0;
  padding: .2rem;
  svg{
    width:.6rem;
    height:.6rem;
  }
  input[type="search"]{
    display:inline-block;
    height:.9rem;
    width:8rem;
    outline: none;
    border: none;
    border-radius:.45rem;
    background:#f2f2f2;
    box-sizing: border-box;
    padding: 0 .5rem;
    font-size:.4rem;
  }
}
</style>
