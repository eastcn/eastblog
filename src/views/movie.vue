<template>
  <div class="main">
    <div class="block" style="overflow:auto;height: 1000px;"
         v-infinite-scroll="load"
         infinite-scroll-disabled="disabled">
      <el-timeline style="overflow:auto">
        <el-timeline-item v-for="(time_line, index) in time_arr" :key="index"
                          class="infinite-list-item"
                          :timestamp="time_line" placement="top">
          <el-card>
            <el-row>
              <el-col :span="7" v-for="(subject, a) in subjects"
                      :key="a" v-if="(subject.create_time == time_line)"
                       class="list">
                <a :href="subject.url" style="text-decoration:none">
                <el-card :body-style="{ padding: '0px' }" class="card">
                    <img :src="subject.cover" class="image">
                      <div style="padding: 14px;">
                        <span>{{subject.name}}</span>
                      <div class="bottom clearfix">
                      <time class="time">
                        {{ subject.types }}
                      </time>
                        <h4 class="rate">{{subject.rate}}分</h4>
                    </div>
                  </div>
                  </el-card>
                </a>
              </el-col>
            </el-row>
          </el-card>
        </el-timeline-item>
      </el-timeline>
      <p v-if="loading" class="loading_" v-loading="loading"
         element-loading-text="loading..."
         element-loading-spinner="el-icon-loading"></p>
      <p v-if="noMore" class="loading_">大哥已经没有更多了...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'movie',
  data () {
    return {
      subjects: [],
      time_arr: [],
      count: 1,
      offset: 0,
      limit: 7,
      loading: false,
      noMore: false
    }
  },
  created () {
    this.getMovieSubjects(0, 7)
  },
  computed: {
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    getMovieSubjects (offset, limit) {
      this.$ajax({
        method: 'get',
        url: 'http://eastfly.top:8089/api/movie/subjects',
        params: {
          offset: offset,
          limit: limit
        }
      }).then(res => {
        if (res.data.code === 200) {
          this.subjects = res.data.subject
          this.time_arr = res.data.timeline
          // for (let i = 0; i < this.time_arr.length; i++) {
          // }
        }
      })
    },
    getMore () {
      this.$ajax({
        method: 'get',
        url: 'http://eastfly.top:8089/api/movie/subjects',
        params: {
          offset: this.offset + 7,
          limit: this.limit
        }
      }).then(res => {
        if (res.data.code === 200) {
          let subjects = res.data.subject
          let timeArr = res.data.timeline
          if (subjects.length > 0) {
            console.log(subjects.length)
            console.log('获取前：' + this.subjects.length)
            this.loading = false
            // push()函数只能一个一个元素加入，因此把接口返回的数组用循环加入
            for (let i = 0; i < subjects.length; i++) {
              this.subjects.push(subjects[i])
            }
            let timeArr2 = this.time_arr
            // 每次返回的时间数组中有可能会跟当前有的数据重复，所以需要先循环去重，在进行push()加入
            // splice(a, b) a为需要操作的元素的位置，b为从那个处理几个
            for (let i = 0; i < timeArr.length; i++) {
              for (let j = 0; j < timeArr2.length; j++) {
                if (timeArr[i] === timeArr2[j]) {
                  timeArr.splice(timeArr[i], 1)
                }
              }
            }
            for (let i = 0; i < timeArr.length; i++) {
              this.time_arr.push(timeArr[i])
            }
            this.offset += 7
          } else if (subjects.length === 0) {
            this.loading = false
            this.noMore = true
          }
        } else {
          this.loading = false
        }
      })
    },
    load () {
      console.log('执行load')
      this.loading = true
      setTimeout(() => {
        this.getMore()
      }, 2000)
    }
  }
}
</script>

<style scoped>
  .main {
    margin: 0 auto;
    width: 60%;
  }

  .block {
    margin-left: 5%;
    margin-right: 5%;
  }

  .infinite-list-item {
    list-style: none;
  }

  .loading_ {
    text-align: center;
    font-size: 12px;
    font-weight: lighter;
  }

  ul {
    list-style: none;
  }

  .time {
    float: left;
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .image {
    width: 100%;
    display: block;
  }
  .rate{
    float: right;
    padding: 0;
    margin: 0;
    color: #70af0a;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .list{
    margin-left:8% ;
  }

  .clearfix:after {
    clear: both
  }
  .card{
    float: left;
  }
</style>
