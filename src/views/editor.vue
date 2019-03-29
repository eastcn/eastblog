<template>
  <div id="editor">
    <mavon-editor @save="savePost" v-model="handbook" class="editor-md"></mavon-editor>
    <!--<div id="button-save">-->
      <!--<div id="save" @click="savePost">保存</div>-->
    <!--</div>-->
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'editor',
  components: {
    mavonEditor
    // or 'mavon-editor': mavonEditor
  },
  data () {
    return {
      handbook: '不如来写篇文章吧',
      msg: '',
      url: ''
    }
  },
  methods: {
    savePost () {
      let data = {'data': this.handbook}
      alert(data.data)
      this.$ajax.post(this.url, data).then(res => {
        this.msg = res.data.data
      })
    }
  }
}

</script>
<style scoped>
  #editor {
    margin: auto;
    width: 50%;
  }
  {
    height: 200px;
  }
  .editor-md{
    min-height: 550px;
  }
  #button-save {
    margin-top: 20px;
  }
  #save{
    margin: auto;
    width: 60px;
    height: 40px;
    background: #efefef;
    line-height: 40px;
    text-align: center;
    border-radius: 5%;
    font-size: 0.8rem;
  }
</style>
