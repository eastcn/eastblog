<template>
    <div id="params">
    </div>
</template>

<script>
export default {
  name: 'post_content',
  data () {
    return {
      p: '',
      post: ''
    }
  },
  methods: {
    showPost () {
      this.p = this.$route.params.id // 从url中获取文章的id
      console.log(this.p)
      this.$ajax({
        method: 'get',
        url: '', // 获取文章的URL
        params: {
          id: this.p
        }
      }).then(res => {
        this.post = res.data.data
      })
    }
  },
  created () {
    this.showPost()
  }
}
</script>

<style scoped>
#params{
  width: 100px;
  height: 100px;
}
</style>
