<template>
  <div id="app">
    <div class="container">
        <h2 class="chart">
            <span>something to say</span>
        </h2>
        <div>
                君不见，黄河之水天上来，奔流到海不复回。<br>
                君不见，高堂明镜悲白发，朝如青丝暮成雪。<br>
                人生得意须尽欢，莫使金樽空对月。<br>
                天生我材必有用，千金散尽还复来。<br>
                烹羊宰牛且为乐，会须一饮三百杯。<br>
                岑夫子，丹丘生，将进酒，杯莫停。<br>
                与君歌一曲，请君为我倾耳听。<br>
                钟鼓馔玉不足贵，但愿长醉不复醒。<br>
                古来圣贤皆寂寞，惟有饮者留其名。<br>
                陈王昔时宴平乐，斗酒十千恣欢谑。<br>
                主人何为言少钱，径须沽取对君酌。<br>
                五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。<br>
        </div>
        <h2 class="chart">
                <span>学海无涯</span>
        </h2>
        <ul class="post_list">
            <li v-for="(list,index) in lists" :key="index"><a href="https://www.baidu.com">{{list.title}}</a><span class="create_time">({{list.time}})</span></li>
        </ul>
        <h2 class="chart">
                <span>杂乱无章</span>
        </h2>
        <ul class="post_list">
             <li v-for="(list,index) in lists" :key="index"><a href="https://www.baidu.com">{{list.title}}</a><span class="create_time">({{list.time}})</span></li>
        </ul>
        <h2 class="chart">
                <span>Link</span>
        </h2>
        <ul class="link_list">
            <li>
                <b style="color: #a3156d">E-mail:</b>
                <a>east_163.com</a>
            </li>
            <li>
                <b style="color: #ec4525">Weibo:</b>
                <a href="https://weibo.com/u/3802953271">@再也不听风了</a>
            </li>
            <li>
                <b style="color: #378fe8">Zhihu:</b>
                <a href="https://www.zhihu.com/people/edian-dian/activities">@听风来自地铁人海</a>
            </li>
            <li>
                <b>Github:</b>
                <a href="https://github.com/eastcn">@eastcn</a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      lists: []
    }
  },
  methods: {
    requestArticleTitle () {
      this.$ajax({
        method: 'get',
        url: '/api/blog/get/aritcleTitle',
        params: {}
      }).then(res => {
        this.lists = res.data.data
      })
    }
  },
  created () {
    this.requestArticleTitle()
  }
}
</script>

<style scoped>
</style>
