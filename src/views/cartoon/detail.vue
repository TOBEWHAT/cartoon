<template>
  <div class="cartoon-detail">
    <div class="button_bar">
      <button @click="getNextchapter">下一章</button>
    </div>

    <img style="opacity:.03"
         :src="img">

  </div>
</template>

<script>
// import request from '@/utils/request'
import { getdetail, getNextchapter, tests } from '@/api/cartoon.js'
export default {
  data () {
    return {
      img: 'http://106.13.39.81:8100/api/user/filedatd?path=' + this.$route.query.path,
      query: {
        path: this.$route.query.path
      }
    }
  },
  created: function () {
    this.getdetail()
    // this.tests()
  },
  methods: {
    tests () {
      return tests({

      }).then(res => {
        this.tempimg = res.data
        console.log(this.tempimg)
      })
    },
    getdetail () {
      return getdetail({
        path: this.$route.query.path
      }).then(res => {
        console.log(res)
      })
    },
    getNextchapter () {
      getNextchapter({
        url: ''
      }).then(res => {
        console.log(res)
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
