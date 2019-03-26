<template>
  <div id="editor">
    <mavon-editor></mavon-editor>
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
  }
}

</script>
<style scoped>
  #editor {
    margin: auto;
    width: 50%;
  }
</style>
