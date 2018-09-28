import React,{Component } from "react";

import * as echarts from 'echarts';

export default class EchatsDash extends Component{
    componentDidMount(){
        let xAxisData = [];
        let data1 = [];
        let data2 = [];
        for (let i = 0; i < 50; i++) {
            xAxisData.push('时间' + i);
            data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
        }
        let myChart = echarts.init(document.getElementById('main'));
        let  option = {
            title: {
                text: '数据流量',

            },
            legend: {
                data: ['今日', '昨日'],
                align: 'left'
            },
            toolbox: {
                // y: 'bottom',
                feature: {
                    magicType: {
                        type: ['stack', 'tiled']
                    },
                    dataView: {},
                    saveAsImage: {
                        pixelRatio: 2
                    }
                }
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {
            },
            series: [{
                name: '今日',
                type: 'bar',
                data: data1,
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }, {
                name: '昨日',
                type: 'bar',
                data: data2,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
        myChart.setOption(option);
    }
     render(){
         return(
             <div id="main" style={{ width: "100%", height:"100%" }}></div>
         )
     }
   

}