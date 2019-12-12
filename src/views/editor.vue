<template>
  <div id="editor">
    <div class="T_AND_K">
      <div class="TAGS">
        <span><i class="el-icon-collection-tag">TAG</i></span>
          <el-tag
          :key="tag"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputTagValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirmTag"
            @blur="handleInputConfirmTag">
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInputTag">+ New Tag</el-button>
        </div>
      <div class="KIND">
        <span><i class="el-icon-collection">KIND</i></span>
        <el-tag
        :key="kind"
        v-for="kind in dynamicKinds"
        closable
        :disable-transitions="false"
        @close="handleKindClose(kind)">
        {{kind}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisibleKind"
          v-model="inputKindValue"
          ref="saveKindInput"
          size="small"
          @keyup.enter.native="handleInputConfirmKind"
          @blur="handleInputConfirmKind"
        >
        </el-input>
        <el-button v-if="dynamicKinds.length < 1" class="button-new-tag" size="small" @click="showInputKind">+ New Tag</el-button>
    </div>
    </div>
    <mavon-editor
    ref=md
    @save="$savePost"
    v-model="handbook"
    class="editor-md"
    :ishljs = "true"
    @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>
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
      handbook: '# 不如来写篇文章吧\n',
      msg: '',
      img_file: [],
      articleId: '',
      dynamicTags: [],
      dynamicKinds: [],
      inputVisible: false,
      inputVisibleKind: false,
      inputTagValue: '',
      inputKindValue: ''

    }
  },
  created () {
    this.initPost()
  },
  methods: {
    initPost () {
      let body = {'data': this.handbook}
      console.log(body)
      this.$ajax({
        url: 'http://eastfly.top:8089/api/article/init',
        method: 'post',
        data: body
      }).then(res => {
        if (res.data.code === 200) {
          this.articleId = res.data.id
          this.handbook = res.data.contend
        } else if (res.data.code === 201) {
          this.handbook = res.data.contend
          this.articleId = res.data.id
          this.$message({
            message: '该文章已存在',
            type: 'warning'
          })
        } else {
          alert('刷新页面重试')
        }
      })
    },
    $savePost () {
      let data = {'data': this.handbook, 'id': this.articleId, 'tags': this.dynamicTags, 'kind': this.dynamicKinds[0]}
      console.log(data)
      this.$ajax({
        url: 'http://eastfly.top:8089/api/article/save',
        method: 'post',
        data: data
      }).then(res => {
        if (res.data.code === 200) {
          this.$message({
            message: '保存成功',
            type: 'success'
          })
        } else if (res.data.code === 202) {
          this.$message({
            message: '恢复' + res.data.updateTime + '时的文章',
            type: 'success'
          })
          this.articleId = res.data.id
          this.handbook = res.data.contend
          this.dynamicTags = res.data.tags
          if (res.data.kind !== null) {
            this.dynamicKinds[0] = res.data.kind
          }
        } else {
          this.$message.error('服务器内部错误')
        }
      })
    },
    $imgAdd (pos, $file) {
      var formata = new FormData()
      formata.append('image', $file)
      this.img_file[pos] = $file
      this.$ajax({
        url: 'http://eastfly.top:8089/api/article/uploadImage',
        method: 'post',
        data: formata,
        headers: {'Content-Type': 'multipart/form-data'}
      }).then((res) => {
        let _res = res.data
        this.$refs.md.$img2Url(pos, _res.url)
      })
    },
    $imgDel (pos) {
      delete this.img_file[pos]
    },
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },
    handleKindClose (kind) {
      this.dynamicKinds.splice(this.dynamicTags.indexOf(kind), 1)
    },
    showInputTag () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    showInputKind () {
      this.inputVisibleKind = true
      this.$nextTick(_ => {
        this.$refs.saveKindInput.$refs.input.focus()
      })
    },
    handleInputConfirmTag () {
      let inputTagValue = this.inputTagValue
      if (inputTagValue) {
        this.dynamicTags.push(inputTagValue)
      }
      this.inputVisible = false
      this.inputTagValue = ''
    },
    handleInputConfirmKind () {
      let inputKindValue = this.inputKindValue
      if (inputKindValue) {
        this.dynamicKinds.push(inputKindValue)
      }
      this.inputVisibleKind = false
      this.inputKindValue = ''
    }
  }
}

</script>
<style scoped>
  #editor {
    margin: auto;
    width: 80%;
  }
  .editor-md{
    min-height: 900px;
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
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .T_AND_K{
    padding: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) -2px -6px 12px 0px;
  }
  .KIND{
    padding: 0.5rem;
  }
  .TAGS{
        padding: 0.5rem;
  }
  @media only screen and (max-width: 736px){
  #editor {
    margin: auto;
    width: 100%;
  }
  }
  @media (max-device-height:812px) and (-webkit-min-device-pixel-ratio:2){
  #editor {
    margin: auto;
    width: 100%;
  }
  }
</style>
