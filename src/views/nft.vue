<template>
  <div class="Echarts" style="width: 100%; height: 600px; margin-left: 24%">
    <div id="main" style="width: 50%; height: 100%"></div>
  </div>
</template>
<script>
export default {
  name: "Echarts",
  data() {
    return {
      chart: "",
      option: {
        title: {
          text: "Stacked Line",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Email", "Union Ads"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
          min: (value) => {
            return Math.floor(value.min / 100) * 100;
          },
          max: (value) => {
            console.log("value: " + JSON.stringify(value));
            return Math.ceil(value.max / 100) * 100;
          },
        },
        series: [
          {
            name: "Email",
            type: "line",
            // stack: "Total",
            data: [],
          },
          {
            name: "Union Ads",
            type: "line",
            // stack: "Total",
            data: [],
          },
        ],
      },
    };
  },
  props: {
    value: {
      type: Number,
      default() {
        return 1;
      },
    },
  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        console.log(JSON.stringify(this.option));
        this.chart.setOption(this.option);
      },
      deep: true, //对象内部属性的监听，关键。
    },
  },
  methods: {
    getNftRecords() {
      this.$ajax({
        method: "get",
        url: "http://localhost:8089/getByTaskId?taskId=1",
      }).then((res) => {
        var data = res.data;
        console.log(data);
        var lockedArray = data.lockedItems;
        var unlockedArray = data.noLockedItems;

        var title = data.title;
        var legends = data.legendData;
        this.option.title.text = title;
        this.option.legend.data = data.legendData;
        this.option.xAxis.data = data.timeArray;

        this.option.series[0].name = legends[0];
        this.option.series[1].name = legends[1];

        var seriesList1 = [];
        var seriesList2 = [];
        lockedArray.forEach((element) => {
          seriesList1.push(element.priceCny);
        });

        unlockedArray.forEach((element) => {
          seriesList2.push(element.priceCny);
        });
        this.option.series[0].data = seriesList1;
        this.option.series[1].data = seriesList2;

        console.log("value: " + this.value);
        this.value = this.value + 1;
      });
    },
    myEcharts() {
      var myChart = this.$echarts.init(document.getElementById("main"), "dark");
      //配置图表
      console.log("mounted时候的option: " + JSON.stringify(this.option));
      myChart.setOption(this.option, true);
      this.chart = myChart;
    },
  },
  mounted() {
    this.myEcharts();
  },
  created() {
    this.getNftRecords();
    console.log(JSON.stringify(this.option));
  },
};
</script>
<style>
</style>
