import './index.css'
// 图表
import Chart from 'chart.js'

import articleService from '@/service/article-service'

$(function () {

    // 1. 获取热门文章展示到图表

    articleService.getHotArticles().then((data) => {
        // 标题
        let titles = data.map((ele) => {
            return ele.title;
        });
        // 阅读量
        let readings = data.map(ele => {
            return ele.reading;
        });

        // 构造图表
        let chartData = {
            type: 'pie',
            data: {
                labels: titles,
                datasets: [{
                    data: readings,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false
            }
        };
        let ctx1 = $('#chart1');
        let chart1 = new Chart(ctx1, chartData);
    });

})