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
        title: 'Work No.3 上海富数科技',
        content: '和公司一起成长ing',
        timestamp: '2019-03-18',
        size: 'large',
        color: '#0bbd87'
      },
      {
        title: 'Work No.2 浙江网新恒天',
        content: '如果按照职场上的规矩来，这个其实应该才是真正的第一份工作，如果真的要从毕业开始算的话。',
        timestamp: '2018-07-01',
        size: 'large',
        color: '#0bbd87'
      },
      {
        title: 'Work No.1 网易云音乐',
        content: '\n 虽然只是一份实习，但是确实比在学校中学习到知识丰富很多。而且说起来还是挺怀念猪场的食堂的，特别是那个煎饼。',
        timestamp: '2017-09-13',
        color: '#0bbd87',
        size: 'large'
      },
      {
        title: 'Study 浙江科技学院',
        content: '大学母校，度过了许多快乐时光，也有很多不太如意的过往，是一段人生中重要且难忘的经历。',
        timestamp: '2014-10-07',
        color: '#0bbd87',
        size: 'large'
      },
      {
        title: '高考 兰溪第五中学',
        content: '毕竟这也算是所有故事中的一个转折点，也是以后高潮大幕拉开的第一个时间点。一部没有高考失利的小说，故事又怎么会好看起来。',
        timestamp: '2014-6-07',
        color: '#0bbd87',
        size: 'large'
      },
      {
        title: 'Born 浙江兰溪',
        content: '兰江边上的一个小城，小城里的一个小医院。1996年的端午节，我的所有的故事从这一天开始',
        color: '#0bbd87',
        size: 'large',
        timestamp: '1996-06-20'
      }]
    }
  }
}
</script>
<style scoped>
  .main {
    margin: 0 auto;
    width: 60%;
  }

  .block {
    margin-left: 5%;
    margin-right: 5%;
  }

</style>
