<template>
    <div id="viewer">
    <mavon-editor
    class="editor-md"
    v-model="viewerValue"
    :ishljs = "true"
    :editable = "false"
    :subfield = "false"
    :defaultOpen = "preview"
    :navigation = "true"
    :toolbarsFlag = "false"></mavon-editor>
  </div>
</template>

<script>
export default {
  name: 'post_content',
  data () {
    return {
      p: '',
      post: '',
      preview: 'preview',
      viewerValue: '# 1232323'
    }
  },
  methods: {
    showPost () {
      this.p = this.$route.params.id // 从url中获取文章的id
      console.log(this.p)
      this.$ajax({
        method: 'get',
        url: 'http://eastfly.top:8089/api/article/getPost', // 获取文章的URL
        params: {
          id: this.p
        }
      }).then(res => {
        this.viewerValue = res.data.post
      })
    }
  },
  created () {
    this.showPost()
  }
}
</script>

<style scoped>
 #viewer {
    margin: auto;
    width: 60%;
  }
  .editor-md{
    min-height: 900px;
  }
  @media only screen and (max-width: 736px){
    #viewer {
    margin: auto;
    width: 90%;
  }
  }
  @media (max-device-height:812px) and (-webkit-min-device-pixel-ratio:2){
#viewer {
    margin: auto;
    width: 90%;
  }
  }
</style>
