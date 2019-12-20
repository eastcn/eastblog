<template>
<div class="main">
    <div class="block">
    <el-timeline>
        <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp" placement="top">
        <el-card>
        <h4>{{activity.title}}</h4>
        <p>{{activity.content}}</p>
      </el-card>
        <!-- {{activity.content}} -->
        </el-timeline-item>
    </el-timeline>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      activities: [{
        title: '1',
        content: '支持使用图标',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        color: '#0bbd87'
      },
      {
        title: '1',
        content: '支持自定义颜色',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87',
        size: 'large'
      },
      {
        title: '1',
        content: '支持自定义尺寸',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87',
        size: 'large'
      },
      {
        title: 'Born',
        content: '1996年的端午节',
        color: '#0bbd87',
        size: 'large',
        timestamp: '1996-06-20'
      }]
    }
  }
}
</script>
<style scoped>
  .main{
    margin: 0 auto;
    width: 60%;
  }
  .block{
    margin-left: 5%;
    margin-right: 5%;
  }

</style>
