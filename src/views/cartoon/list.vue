<template>
  <div class="cartoon-list">
    <div class="coverbox">
      <div class="cover"
          v-for="(item,index) in list.data"
          :key="index">
        <dl>
          <dt>
            <router-link :to="{path:'/cartoon/pagelist',query:{name:item.name}}"
                         v-if="item.name === 'wanjiexianzong'">
              <span>
                <img src="http://106.13.39.81:8089/images/cover/wanjiexianzhong_fengmian.jpg" />
              </span>
            </router-link>
            <router-link :to="{path:'/cartoon/pagelist',query:{name:item.name}}"
                         v-else-if="item.name === 'yaoshenji'">
              <span>
                <img src="http://106.13.39.81:8089/images/cover/yaoshenji_fengmian.jpg" />
              </span>
            </router-link>
            <span v-else><img style="opacity:0" src="http://106.13.39.81:8089/images/cover/yaoshenji_fengmian.jpg" /></span>
          </dt>
          <dd></dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { getCartoonList } from '@/api/cartoon.js'
export default {
  data () {
    return {
      list: ''
    }
  },
  created: function () {
    this.getCartoonList()
  },
  methods: {
    getCartoonList () {
      getCartoonList({}).then(res => {
        this.list = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cartoon-list {
  margin: 0 auto;
  max-width: 780px;
  .coverbox {
    display: flex;
    flex-direction: space-between;
    flex-wrap: wrap;
    padding: 0 1%;
    .cover {
      width: 23%;
      min-width: 23%;
      max-width: 23%;
      margin: 8px 1%;
      background-color: #eee;
      border-radius: 4px;
      display: inline-block;
      dt {
        img {
          width: 100%;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
