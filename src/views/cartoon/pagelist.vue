 <template>
  <div class="pagelist">
    <ul class="page-number">
      <li v-for="(item,index) in listpage"
          :key="index">
        <router-link :to="{path:'/cartoon/detail',query:{path:item.path}}">
          {{item.fileCode}}
        </router-link>

      </li>
    </ul>
    <div class="pageination">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage"
                     :page-size="pageSize"
                     layout="prev, pager, next"
                     :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getListPage } from '@/api/cartoon.js'
export default {
  data () {
    return {
      listpage: '',
      currentPage: 1,
      total: null,
      pageSize: 100
    }
  },
  created: function () {
    this.getListPage()
  },
  methods: {
    getListPage () {
      getListPage({
        ClassName: this.$route.query.name,
        PageIndex: this.currentPage,
        PageSize: this.pageSize
      }).then(res => {
        this.listpage = res.data.data.data
        this.total = Number(res.data.data.dataCount)
      })
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.getListPage()
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getListPage()
    }
  }
}
</script>

 <style lang="scss" scoped>
.pagelist {
  padding-bottom: 52px;
  .pageination {
    margin-top: 32px;
  }
  .page-number {
    margin: 0 auto;
    max-width: 860px;
    text-align: left;
    display: flex;
    flex-direction: space-between;
    flex-wrap: wrap;
    li {
      line-height: 1;
      padding: 8px 12px;
      border: 1px #cf9236 solid;
      color: #cf9236;
      text-align: center;
      display: inline-block;
      margin: 8px;
      font-size: 12px;
      border-radius: 4px;
      cursor: pointer;
      a {
        color: #cf9236;
        display: block;
        width: 100%;
        height: 100%;
      }
      &:hover{
        background-color: rgba($color: #cf9236, $alpha: 0.5);
        a{
          color: #fff;
        }
      }
    }
  }
}
</style>
