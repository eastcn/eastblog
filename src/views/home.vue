<template>
  <div id="app">
    <div class="container">
        <h2 class="chart">
            <span >something to say</span>
        </h2>
        <div class="words" v-html="userInfo.words">
                {{userInfo.words}}
        </div>
        <h2 class="chart">
                <span>学海无涯</span>
        </h2>
        <ul class="post_list">
            <li v-for="(list,index) in lists_1" :key="index" class="cap">
              <router-link class="link" :to="{ name: 'postContent', params: {id : list.id}}">
                <span class="postTitle">{{index+1}}. {{list.name}}</span>
                </router-link>
                  <span class="tags"  v-for="(tag,i) in list.tags" :key="i">
                    {{tag}}
                    <el-divider direction="vertical"></el-divider>
                  </span>
                <span class="create_time">{{list.time}}</span>
                </li>
        </ul>
        <h2 class="chart">
                <span>杂乱无章</span>
        </h2>
        <ul class="post_list">
             <li v-for="(list,index) in lists_2" :key="index" class="cap">
               <router-link class="link" :to="{ name: 'postContent', params: {id : list.id}}">
                <span class="postTitle">{{index+1}}. {{list.name}}</span>
                </router-link>
                <span class="tags"  v-for="(tag,i) in list.tags" :key="i">
                    {{tag}}
                    <el-divider direction="vertical"></el-divider>
                  </span>
                <span class="create_time">({{list.time}})</span>
                </li>
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
                <el-link :underline="false" target="_blank" href="https://weibo.com/u/3802953271">Weibo @再也不听风了</el-link>
            </li>
            <li>
                <b></b>
                <el-link :underline="false" target="_blank" href="https://www.zhihu.com/people/edian-dian/activities">Zhihu @听风来自地铁人海</el-link>
            </li>
            <li>
                <b></b>
                <el-link :underline="false" target="_blank" href="https://github.com/eastcn">Github @eastcn</el-link>
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
      lists_1: [],
      lists_2: [],
      userInfo: ''
    }
  },
  methods: {
    requestArticleTitle (kind) {
      this.$ajax({
        method: 'get',
        url: 'http://eastfly.top:8089/api/article/getNameByKind',
        params: {
          'kind': kind
        }
      }).then(res => {
        if (kind === '学习') {
          this.lists_1 = res.data
        } else if (kind === '杂乱') {
          this.lists_2 = res.data
        }
      })
    },
    requestWords () {
      this.$ajax({
        method: 'get',
        url: 'http://eastfly.top:8089/api/user/getUserWords',
        params: {}
      }).then(res => {
        this.userInfo = res.data
      })
    }
  },
  created () {
    this.requestArticleTitle('学习')
    this.requestArticleTitle('杂乱')
    this.requestWords()
  }
}
</script>

<style scoped>

@media only screen and (max-width: 736px){
  .el-link{
    font-size: 10px;
  }
  .link{
  text-decoration: none;
  color: #303133
  }
  .link_list{
    margin-left: 5%;
}
.link_list li{
    width: 100%;
    font-size: 10px;
    border-bottom:0.5px solid #b6b8bd;
    padding:0.5rem 0;
    transition: .2s ease-out;
    color: var(--color-font);
}
.cap{
    width: 100%;
    border-bottom:0.5px solid #cdd7ea;
    padding:1rem 0;
    transition: .2s ease-out;
    color: var(--color-font);
}
.cap:hover{
    padding-left: 1em;
    background-color: #fff;
    box-shadow: 0 16px 60px 0 rgba(0, 0, 0, .08), 0 6px 12px 0 rgba(0, 0, 0, .1);
}
.link_list li:hover{
    padding-left: 1em;
    background-color: #fff;
    box-shadow: 0 16px 60px 0 rgba(0, 0, 0, .08), 0 6px 12px 0 rgba(0, 0, 0, .1);
  }
.create_time{
  margin-left: 0.5rem;
  font-size: 0.5rem;
  }
.tags{
  margin-left: 0.5rem;
  font-size: 0.5rem;
  margin-right: -1rem;
  }
.words{
      color: var(--color-font);
      text-align: center;
      line-height: 2rem;
  }
}
@media (max-device-height:812px) and (-webkit-min-device-pixel-ratio:2){
  .el-link{
    font-size: 10px;
  }
  .link{
  text-decoration: none;
  color: #303133
  }
  .link_list{
    margin-left: 5%;
}
.link_list li{
    width: 90%;
    font-size: 10px;
    border-bottom:0.5px solid #b6b8bd;
    padding:0.5rem 0;
    transition: .2s ease-out;
    color: var(--color-font);
}
.cap{
    width: 100%;
    border-bottom:0.5px solid #cdd7ea;
    padding:1rem 0;
    transition: .2s ease-out;
    color: var(--color-font);
}
.cap:hover{
    padding-left: 1em;
    background-color: #fff;
    box-shadow: 0 16px 60px 0 rgba(0, 0, 0, .08), 0 6px 12px 0 rgba(0, 0, 0, .1);
}
.link_list li:hover{
    padding-left: 1em;
    background-color: #fff;
    box-shadow: 0 16px 60px 0 rgba(0, 0, 0, .08), 0 6px 12px 0 rgba(0, 0, 0, .1);
  }
.create_time{
  margin-left: 0.5rem;
  font-size: 0.5rem;
  }
.tags{
  margin-left: 0.5rem;
  font-size: 0.5rem;
  margin-right: -1rem;
  }
.words{
      color: var(--color-font);
      text-align: center;
      line-height: 2rem;
  }
}

@media (min-device-width:736px){
  .el-link{
  font-size: 16px
}
.link{
  text-decoration: none;
  color: #303133
}
.link_list{
    margin-left: 5%;
}
.link_list li{
    width: 30%;
    border-bottom:0.5px solid #b6b8bd;
    padding:0.5rem 0;
    transition: .2s ease-out;
    color: var(--color-font);
}
.cap{
    width: 90%;
    border-bottom:0.5px solid #cdd7ea;
    padding:1rem 0;
    transition: .2s ease-out;
    color: var(--color-font);
}
.cap:hover{
    padding-left: 1em;
    background-color: #fff;
    box-shadow: 0 16px 60px 0 rgba(0, 0, 0, .08), 0 6px 12px 0 rgba(0, 0, 0, .1);
}
.link_list li:hover{
    padding-left: 1em;
    background-color: #fff;
    box-shadow: 0 16px 60px 0 rgba(0, 0, 0, .08), 0 6px 12px 0 rgba(0, 0, 0, .1);
}
.post_list{
  margin-left: 5%;
}
.create_time{
  margin-left: 0.5rem;
  font-size: 0.5rem;
}
.tags{
  margin-left: 0.5rem;
  font-size: 0.5rem;
  margin-right: -1rem;
}
.words{
      color: var(--color-font);
      text-align: center;
      line-height: 2rem;
}}
</style>
