<template>
  <div id="app">
    <div class="back_image"></div>
    <!-- <img src="./assets/logo.png"> -->
    <div class="header">
      <div class="head-img"></div>
      <div class="head-name"><p>言笑@EAST</p></div>
      <p class="head-about">路漫漫其修远兮，吾将上下而求索</p>
      <nav>
        <ul class="head-menu">
          <router-link to="/"><li><span title='首页' class="home_icon"></span></li></router-link>
          <router-link to='/post_list'><li><span title="文章列表" class="post_icon"></span></li></router-link>
          <router-link to="/about_me"><li><span title="关于我" class="about_icon"></span></li></router-link>
        </ul>
      </nav>
    </div>
    <div id="router">
      <router-view></router-view>
    </div>
    <div class="footer">
      <h1>footer</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /* margin-top: -35px; */
  }
  #router{
    margin-top: 40px;
  }
</style>
