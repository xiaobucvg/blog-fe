import './index.css'
import Chart from 'chart.js'

$(function () {
    // 测试 Chart
    let ctx1 = $('#chart1');
    let ctx2 = $('#chart2');

    let data = {
        type: 'pie',
        data: {
            labels: ['标题1', '标题2', '标题3', '标题4', '标题5', '其余文章'],
            datasets: [{
                label: '# of Votes',
                data: [50, 30, 10, 5, 4, 1],
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

    let chart1 = new Chart(ctx1, data);
    let chart2 = new Chart(ctx2, data);

})