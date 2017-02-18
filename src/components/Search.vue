<template>
  <div class="hello" v-if="showMe">
    <h2>{{ $route.params.keyword }}</h2>
  </div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
      msg: '搜索',
      showMe: false
    }
  },
  mounted () {
    this.$store.dispatch('setLoading', true)
    // 模拟ajax
    var time = Math.floor(Math.random() * 2000)
    console.log('模拟ajax用时' + time)
    setTimeout(() => {
      this.$store.dispatch('setLoading', false)
      this.showMe = true
    }, time)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
