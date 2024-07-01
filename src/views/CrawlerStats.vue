<template>
    <div class="crawler-stats">
        <div class="chart-row">
            <div class="chart-container" ref="pieChart" :style="{ width: '50%', height: '400px' }"></div>
            <div class="chart-container" ref="lineChart" :style="{ width: '50%', height: '400px' }"></div>
        </div>
    </div>
</template>

<script>
    import * as echarts from 'echarts';

    export default {
        name: 'CrawlerStats',
        data() {
            return {
                pieChartData: [
                    { value: 1048, name: '正常' },
                    { value: 735, name: '异常' },
                    { value: 580, name: '采集不到数据' },
                    { value: 484, name: '采集到但显示不出' }
                ],
                lineChartData: {
                    xAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    seriesData: [120, 200, 150, 80, 70, 110, 130]
                }
            };
        },
        mounted() {
            this.initPieChart();
            this.initLineChart();
        },
        methods: {
            initPieChart() {
                const chart = echarts.init(this.$refs.pieChart);
                const option = {
                    title: {
                        text: '爬虫状态统计',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left'
                    },
                    series: [
                        {
                            name: '爬虫状态',
                            type: 'pie',
                            radius: '50%',
                            data: this.pieChartData,
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                chart.setOption(option);
            },
            initLineChart() {
                const chart = echarts.init(this.$refs.lineChart);
                const option = {
                    title: {
                        text: '每周采集量统计',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        data: this.lineChartData.xAxisData
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '采集量',
                            type: 'line',
                            data: this.lineChartData.seriesData,
                            smooth: true
                        }
                    ]
                };
                chart.setOption(option);
            }
        }
    };
</script>

<style scoped>
    .crawler-stats {
        padding: 16px;
    }

    .chart-row {
        display: flex;
        justify-content: space-between;
    }

    .chart-container {
        margin-top: 16px;
    }
</style>
