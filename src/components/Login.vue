<template>
  <div class="login_box">
    <Backbar title="登录"></Backbar>
    <div class="input_login">
      <input type="search" placeholder="用户名" v-model="uname" maxlength="18" autocapitalize="off">
      <input type="password" placeholder="密码" v-model="pwd" maxlength="18" @keydown.enter="cheack_n_p">
      <button @click="cheack_n_p">登录</button>
    </div>
  </div>
</template>

<script>
import Backbar from './small_components/Back_bar';
import { mapGetters } from 'vuex';

export default {
  name: 'login',
  data () {
    return {
      uname: '',
      pwd: ''
    };
  },
  mounted () {
    if (this.getLogin) {
      this.$router.replace('/myzone');
    }
  },
  computed: {
    ...mapGetters([
      'getLogin',
      'getuname',
      'getpwd'
    ])
  },
  methods: {
    cheack_n_p () {
      if (this.uname === '' || this.pwd === '') {
        alert('用户名或密码不能为空');
        return;
      }
      if (this.uname !== this.getuname || this.pwd !== this.getpwd) {
        alert('用户名或密码错误');
      } else {
        this.$store.dispatch('setLogin', true);
        this.$router.replace('/myzone');
      }
    }
  },
  components: {
    'Backbar': Backbar
  }
};
</script>

<style lang="less" scoped>
.input_login{
  margin-top: 1.35rem; 
  input{
    height: 1rem;
    width: 10rem;
    padding:.6rem;
    box-sizing:border-box;
    border:none;
    outline:none;
    font-size:.45rem;
    display:block;
  }
  button{
    margin: .6rem auto;
    display:block;
    width: 9rem;
    height: 1rem;
    font-size:.5rem;
    background:#4cd964;
    border:none;
    outline:none;
    color:#fff;
    border-radius:.1rem;
  }
}

</style>
