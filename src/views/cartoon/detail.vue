<template>
  <div class="cartoon-detail">
    <div class="button_bar">
      <button @click="getNextchapter" class="btn bttn-unite bttn-lg bttn-warning">Next</button>
    </div>

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
      routerpath:this.$route.query.path,
      prevchapter:'',
      img: process.env.VUE_APP_BASE_URL+'user/filedatd?path=' + this.$route.query.path,
      query: {
        path: this.$route.query.path
      }
    }
  },
  methods: {
    getPrevchapter(){
      this.img = process.env.VUE_APP_BASE_URL+'user/filedatd?path=' + this.prevchapter
    },
    getNextchapter () {
      let _this = this
      getNextchapter({
        path: _this.routerpath
      }).then(res => {
        _this.img = process.env.VUE_APP_BASE_URL+'user/filedatd?path=' + res.data.data
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
