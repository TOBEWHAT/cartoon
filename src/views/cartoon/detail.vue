<template>
  <div class="cartoon-detail">
    <div class="button_bar">
      <!-- <button @click="getPrevchapter">上一章</button> -->
      <button @click="getNextchapter">下一章</button>
    </div>

    <img :src="img" style="opacity:.07">

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
        // console.log(_this.routerpath)
        // console.log(res.data.data)
        // _this.prevchapter=_this.routerpath
        // _this.routerpath = res.data.data
        _this.img = process.env.VUE_APP_BASE_URL+'user/filedatd?path=' + res.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// .cartoon-detail {
//   .button_bar {
//   }
// }
</style>
