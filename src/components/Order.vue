<template>
  <div>
    <div v-if="showMe">
      <Backbar title="订单"></Backbar>
      <div class="order_box">
        <div v-for=" (item, index) in  getFalseOrder">
          {{ item.restaurant_id }}
          {{ item.store_name }}
          {{ item.order_birth_time }}
          {{ item.order_state }}
          {{ item.order_brief_info }}
          {{ item.order_price }}
        </div>
      </div>
      <Fixednav></Fixednav>
    </div>
  </div>

</template>

<script>
import Backbar from './small_components/Back_bar';
import Fixednav from './small_components/Fixed_nav';
import { mapGetters } from 'vuex';
export default {
  name: 'order',
  data () {
    return {
      showMe: false
    };
  },
  computed: {
    ...mapGetters([
      'getLogin',
      'getFalseOrder' // 已完成订单
    ])
  },
  mounted () {
    console.log(this.getLogin);
    // 设置当前标记为主页
    this.$store.dispatch('setWhichpage', 'order');
    if (!this.getLogin) {
      this.$router.replace('/login');
    } else {
      // 模拟ajax
      this.$store.dispatch('setLoading', true);
      var time = Math.floor(Math.random() * 2000);
      console.log('模拟ajax用时' + time);
      setTimeout(() => {
        this.$store.dispatch('setLoading', false);
        this.showMe = true;
      }, time);
    }
  },
  methods: {
    loadMore () {
      console.log('momo');
    }
  },
  components: {
    Backbar,
    Fixednav
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.order_box{
  margin-top: 1.2rem;
}
</style>
