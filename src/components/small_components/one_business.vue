<template>
    <!-- 列表单个商家 -->
    <router-link :to="'/business' + a.path">
    
      <section class="tj_business">

        <section class="one_business clear">
          <div class="business_img">
            <img src="../../images/slider-pic/slider-pic1.jpeg" alt="">
          </div>
          <div class="business_info">
            <section class="business_name clear">
              <h3 class="fl ell"><span v-if="a.brand">品牌</span>{{ a.shop_name }}</h3>
              <div class="name_icon fr">
                <div class="bzp" v-if="a.bao">
                  <i>保</i>
                </div>
                <div class="bzp" v-if="a.piao">
                  <i>票</i>
                </div>
                <div class="bzp" v-if="a.zhun">
                  <i>准</i>
                </div>
              </div>
            </section>
            <section class="business_code clear">
              <div class="code_num fl">
                <svg class="v-md">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
                </svg>
                <span class="v-md">{{ a.shop_rating }}</span>
              </div>
              <div class="code_icon fr">
                <div class="zsd" v-if="a.on_time">准时达</div>
                <div class="fnzs" v-if="a.fengniao">蜂鸟专送</div>
              </div>
            </section>
            <section class="business_other clear"> 
              <div class="other_price fl">
                <span class="com_gray1">￥{{ a.start_send }}起送</span>
                <span>/</span>
                <span class="com_gray1">配送费约￥{{ a.send_cost }}</span>
              </div>
              <div class="other_dis fr">
                <span class="com_gray2">{{ a.distance }}m</span>
                <span>/</span>
                <span class="com_blue">{{ a.estimate_time }}分钟</span>
              </div>
            </section>
          </div>
        </section>

      </section>

    </router-link>

</template>

<script>
export default {
  name: 'one_business',
  props: ['a'],
  data () {
    return {
      msg: '1'

    };
  },
  mounted () {

  },
  computed: {

  },
  methods: {

  }

};
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
/* 单个商家 */
.one_business{
  background:#fff;

  .business_img{
    width:1.6rem;
    height:1.6rem;
    padding:0.4rem;
    float: left;
    img{
      width:100%;
      height:100%;
    }
  }
  .business_info{
    float: right;
    width:7.4rem;
    height:1.6rem;
    padding:0.4rem .2rem .4rem 0;
    .business_name{
      font-size:.35rem;
      line-height:.45rem;
      vertical-align:top;
      h3{
        width:5rem;
        display:inline-block;
        span{
          color: #52250a;
          background:#ffd930;
          font-size:.2rem;
          padding:.02rem;
          border-radius: 2px;
          vertical-align:top;
          margin-right: .04rem;
        }
      }
      .bzp{
        width: .3rem;
        height: .3rem;
        font-size:.26rem;
        text-align:center;
        line-height:.3rem;
        display: inline-block;
        color: @com_gray2;
        border: 0.01rem solid #ddd;
        padding: 0.01rem;
        border-radius:3px;
        i{
          font-style: normal;
        }
        
      }
    }
    .business_code,.business_other{
      font-size:.25rem;
      margin-top: .3rem;
      line-height:.25rem;
    }

  }
  .code_num{
    svg{
      width:.3rem;
      height:.3rem;
      fill: #ffaa0c;
    }
  }
  .zsd{
    font-size:.25rem;
    height: .35rem;
    line-height: .3rem;
    padding: 0 0.05rem;
    display:inline-block;
    color: @baseBlue;
    background: #fff;
    border: 0.01rem solid @baseBlue;
    box-sizing: border-box;
    border-radius:3px;
  }
  .fnzs{
    font-size:.25rem;
    height: .35rem;
    padding: 0 0.05rem;
    line-height: .3rem;
    display:inline-block;
    background: @baseBlue;
    color: #fff;
    border: 0.01rem solid @baseBlue;
    box-sizing: border-box;
    border-radius:3px;
  }
}
</style>
