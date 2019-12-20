<template>
  <div id="app">
    <div class="back_image"></div>
    <!-- <img src="./assets/logo.png"> -->
    <div class="header">
      <div class="head-img"></div>
      <div class="head-name"><p>{{userInfo.name}}</p></div>
      <p class="head-about">{{userInfo.headWord}}</p>
      <nav>
        <ul class="head-menu">
          <router-link to="/"><li><span title='首页' class="home_icon"></span></li></router-link>
          <!-- <router-link to='/post_list'><li><span title="文章列表" class="post_icon"></span></li></router-link> -->
          <router-link to="/about_me"><li><span title="关于我" class="about_icon"></span></li></router-link>
          <router-link to="/movie"><li><span title="影视" class="movie_icon"></span></li></router-link>
        </ul>
      </nav>
    </div>
    <div id="router">
      <router-view></router-view>
    </div>
    <div class="footer-div">
      <div class="footer">
        <p class="footer-1">浙ICP备19030865号</p>
        <p class="footer-2">Copyright ©2019 ♥ east</p>
        <p class="footer-2">Developed and Managed By East Yan.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userInfo: ''
    }
  },
  methods: {
    requestWords () {
      this.$ajax({
        method: 'get',
        url: 'http://eastfly.top:8089/api/user/getUserInfo',
        params: {}
      }).then(res => {
        this.userInfo = res.data
      })
    }
  },
  created () {
    this.requestWords()
  }
}
</script>

<style>
  #app {
    font-family: "plantc", "Source Han Serif", serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /* margin-top: -35px; */
  }
  #router{
    margin-top: 40px;
  }
</style>
