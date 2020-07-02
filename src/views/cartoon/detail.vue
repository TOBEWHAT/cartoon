<template>
  <div class="cartoon-detail">
    <!-- {{this.$route.query.path}} -->
    <img :src="img">
  </div>
</template>

<script>
// import request from '@/utils/request'
import { getdetail, tests } from '@/api/cartoon.js'
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
    }
  }
}
</script>

<style lang="scss" scoped>
.cartoon-detail {

}
</style>
