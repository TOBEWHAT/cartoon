<template>
  <div class="cartoon-detail">
    <div class="button_bar">
      <button @click="getNextchapter" class="btn bttn-unite bttn-lg bttn-warning">Next</button>
    </div>
{{img}}
    <img :src="img">
    <div class="button_bar">
      <button @click="getNextchapter" class="btn bttn-unite bttn-lg bttn-warning">Next</button>
    </div>
  </div>
</template>

<script>
import { getNextchapter } from '@/api/cartoon.js'
export default {
  data () {
    return {
      routerpath: this.$route.query.path,
      prevchapter: '',
      newpath: '',
      img: process.env.VUE_APP_BASE_URL + 'user/filedatd?path=' + this.$route.query.path,
      query: {
        path: this.$route.query.path
      }
    }
  },
  methods: {
    getPrevchapter () {
      this.img = process.env.VUE_APP_BASE_URL + 'user/filedatd?path=' + this.prevchapter
    },
    getNextchapter () {
      const _this = this
      this.img = ''
      getNextchapter({
        path: _this.newpath ? _this.newpath : _this.routerpath
      }).then(res => {
        console.log(process.env.VUE_APP_BASE_URL + 'user/filedatd?path=' + res.data.data)
        _this.img = process.env.VUE_APP_BASE_URL + 'user/filedatd?path=' + res.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cartoon-detail {
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 52px;
  padding-top: 42px;
  .button_bar {
    button{
      font-size: 16px;
    }
  }
  img{
    max-width: 100%;
    margin: 32px 0;
  }
}
</style>
