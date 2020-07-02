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
                     layout="total, sizes, prev, pager, next, jumper"
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
      pageSize: 20
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
  .pageination {
    margin-top: 32px;
  }
  .page-number {
    margin: 0 auto;
    width: 860px;
    text-align: left;
    li {
      line-height: 1;
      padding: 6px 10px;
      border: 1px #c6d9f5 solid;
      color: #c6d9f5;
      text-align: center;
      display: inline-block;
      margin: 8px;
      font-size: 12px;
    }
  }
}
</style>
