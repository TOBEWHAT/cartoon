<template>
  <div>
    Cartoon List{{dataList}}
    <button @click="getCartoon">Click</button>
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  name: 'Cartoon',
  data () {
    return {
      dataList: ''
    }
  },
  methods: {
    async getCartoon () {
      const loginin = await request.post('/user/login', {
        UCode: 'Mrli', UPwd: 'li#$123456'
      })
      this.dataList = loginin.data
    }
  }
}
</script>
<style lang="scss">
</style>
