<template>
<div style="height:1000px;">
    <el-collapse accordion class="box">
        <el-collapse-item v-for="(item,index) in list" :key="index">
            <template slot="title" class="box-title">
                <div style="text-align:center;width:100%;font-size:18px;">
                    {{number[index]}}  {{item.name}}  {{item.times}}
                </div>
            </template>
            <div v-for="(item_, i) in item.detail" :key="i" class="box-contend">
                <p>{{item_[1]}} {{item_[2]}} {{item_[3]}}</p>
            </div>
        </el-collapse-item>
</el-collapse>
</div>
</template>
<script>
export default {
  name: 'rank',
  data () {
    return {
      list: [],
      number: ['①', '②', '③', '④', '⑤']
    }
  },
  methods: {
    requestRank () {
      this.$ajax({
        method: 'get',
        url: 'http://eastfly.top:8089/v1/sneaker/rank'
      }).then(res => {
        this.list = res.data.data
      })
    }
  },
  created () {
    this.requestRank()
  }
}
</script>
<style>
.box{
    width: 50%;
    margin-left: 25%;
    box-shadow: rgba(0, 0, 0, 0.1) -2px -6px 12px 0px;
    background-color: #fdfdfd00;
    text-align: center;
}
.el-collapse-item__header{
    background-color: #fdfdfd00;
    text-align: center;
}
.el-collapse-item__wrap{
    background-color: #fdfdfd00;
    text-align: center;
}
</style>
