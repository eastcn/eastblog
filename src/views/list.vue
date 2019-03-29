<template>
  <div id="app">
    <div class="container">
      <h2 class="chart">
            <span>POST</span>
      </h2>
      <div class="tags">
          <span>tags:</span>
          <span @click="Click" v-for="tag in tags" :key="tag" class="tag">{{tag}}</span>
      </div>
      <ul class="post_list">
             <li v-for="(list,index) in lists" :key="index"><router-link :to="{ name: 'postContent', params: {id : 111}}">{{list.title}}</router-link><span class="create_time">({{list.time}})</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      post: {
        list: [
          {title: 'post-title1', text: 'text1', time: 'Oct.12 2018'},
          {title: 'post-title1', text: 'text1', time: '1-2'},
          {title: 'post-title1', text: 'text1', time: '1-2'}
        ]
      },
      tags: [
        'tag1',
        'tag2',
        'tag3'
      ],
      lists: [
        {title: 'post-title1', text: 'text1', time: 'Oct.12 2018'},
        {title: 'post-title1', text: 'text1', time: '1-2'},
        {title: 'post-title1', text: 'text1', time: '1-2'}
      ]
    }
  },
  methods: {
    Click: function () {
      alert(1)
      this.$ajax({
        method: 'get',
        url: '/api/blog/get/aritcleTitle',
        params: {
          limit: 10,
          offset: 0
        }
      }).then(res => {
        this.lists = res.data.data
        alert(res.data.data)
      })
    },
    request () {
      this.$ajax({
        method: 'get',
        url: '/api/blog/get/aritcleTitle',
        params: {
          limit: 10,
          offset: 0
        }
      }).then(res => {
        this.lists = res.data.data
      })
    }
  },
  created () {
    this.request()
  }
}
</script>
<style scoped>
@import '../css/list.css';
</style>
