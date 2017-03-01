<template>
  <div>
    <div v-if="showMe">
      <Backbar title="订单"></Backbar>
      <div class="order_box">
        <div v-for=" (item, index) in  getFalseOrder" class="order_one">
          <div class="order_img">
            <img src="../images/shop-logo.png" alt="">
          </div>
          <div class="order_info">
            <header class="order_info_t">
              <div class="order_title flex_align">
                <p class="b_name">{{ item.store_name }}</p>
                <p class="b_status">{{ item.order_state }}</p>
              </div>
              <p class="order_time">{{ item.order_birth_time }}</p>
            </header>
            <footer class="order_info_b flex_align">
              <p class="order_brief_info">{{ item.order_brief_info }}</p>
              <p class="order_price">￥{{ item.order_price }}</p>
            </footer>
            <div style="display:none;">{{ item.restaurant_id }}</div>
          </div>
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
    // console.log(this.getLogin);
    // 设置当前标记为主页
    this.$store.dispatch('setWhichpage', 'order');
    if (!this.getLogin) {
      this.$router.replace('/login');
    } else {
      // 模拟加载
      this.$store.dispatch('setLoading', true);
      var time = Math.floor(Math.random() * 2000);
      console.log('模拟加载用时' + time);
      setTimeout(() => {
        this.$store.dispatch('setLoading', false);
        this.showMe = true;
      }, time);
    }
  },
  methods: {

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
  margin: 1rem 0 1.2rem;
}
.order_one{
  background:#fff;
  margin-bottom: .2rem;
  .order_img{
    width:1rem;
    height:1rem;
    float:left;
    padding: .2rem .4rem;
    img{
      width:100%;
    }
  }
  .order_info{
    margin-left:1.6rem;
    padding:.2rem .2rem 0 0;
    box-sizing:border-box;
    .order_info_t{
      border-bottom: 1px solid #eee;
      .order_title{
        height:.6rem;
        line-height:.6rem;
        .b_name{
          font-size:.4rem;
        }
        .b_status{
          font-size:.35rem;
          color:#333;
        }
      }
      .order_time{
        font-size:.3rem;
        color:#999;
        line-height:.6rem;
      }
    }
    .order_info_b{
      padding: 0.2rem 0;
      .order_brief_info{
        font-size: 0.346667rem;
        color: #666;
      }
      .order_price{
        text-align: right;
        font-size: 0.346667rem;
        color: #333;
        font-weight: bold;
      }
    }
  }
}
</style>
