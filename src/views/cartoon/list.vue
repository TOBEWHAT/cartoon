<template>
  <div class="cartoon-list">
    <ul>
      <li class="cover"
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
            <span v-else></span>
          </dt>
          <dd></dd>
        </dl>
      </li>
    </ul>
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
  width: 784px;
  max-width: 100%;
  margin: 0 auto;
  ul {
    display: block;
    .cover {
      width: 180px;
      margin: 8px;
      display: block;
      float: left;
      dt {
        span {
          width: 180px;
          height: 240px;
          background-color: #eee;
          display: block;
        }
        img {
          width: 100%;
          opacity: 0.2;
        }
      }
    }
  }
}
</style>
