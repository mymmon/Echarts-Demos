var myChart = echarts.init(document.getElementById('section1'));
var myData = ['本月累计', '月度同期', '上月同期',' ','本年累计', '去年累计'];
var option ={
	/*legend:{
		data:['进仓','出仓'],
		x:'center',
		itemGap:50,
		textStyle:{
			color:'#000'
		}
	},*/
	//坐标系设置
	grid: [{
        show: false,
        left: '2%',
        top: 60,
        bottom: 60,
        containLabel: true,
        width: '40%',
    }, {
        show: false,
        left: '50.5%',
        top: 80,
        bottom: 60,
        width: '0%',
    }, {
        show: false,
        right: '2%',
        top: 60,
        bottom: 60,
        containLabel: true,
        width: '40%',
    }, ],
    //x轴设置
    xAxis: [{
        type: 'value',
        inverse: true,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        position: 'top',
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
                fontSize: 12,
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                width: 1,
                type: 'solid',
            },
        },
    }, {
        gridIndex: 1,
        show: false,
    }, {
        gridIndex: 2,
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        position: 'top',
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
                fontSize: 12,
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                width: 1,
                type: 'solid',
            },
        },
    }, ],
    //y轴设置
    yAxis: [{
        type: 'category',
        inverse: true,
        position: 'right',
        axisLine: {
        	show: false
    	},
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            margin: 8,
            textStyle: {
                color: '#000',
                fontSize: 12,
            },
        },
        data: myData,
    }, {
        gridIndex: 1,
        type: 'category',
        inverse: true,
        position: 'left',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
            },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#000',
                fontSize: 12,
            },
         },
        data: myData.map(function(value) {
            return {
                value: value,
                textStyle: {
                    align: 'center',
                }
            }
        }),
    }, {
        gridIndex: 2,
        type: 'category',
        inverse: true,
        position: 'left',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#000',
                fontSize: 12,
            },
        },
        data: myData,
    }, ],
	series: [{
        name: '进仓',
        type: 'bar',
        barGap: 20,
        barWidth: 20,
        z: 10,
        label:{
        	show:true,
        	normal:{
        		color:'#000',
        	}
        },
        data: [{
        	name:'本月累计',
        },{
        	name:'月度同期',
        	value:115.02,
        	itemStyle:{
        		normal:{
        			color:'#0E60A2'
        		}
        	},
        	label:{
        		normal:{
        			position:'insideLeft',
        			color:'#fff'
        		}
        	}
        },{
        	name:'上月同期',
        	value:79.92,
        	itemStyle:{
        		normal:{
        			color:'#0E60A2'
        		}
        	},
        	label:{
        		normal:{
        			position:'insideLeft',
        			color:'#fff'
        		}
        	}
        },{
        	name:''
        },{
        	name:'本年累计',
        },{
        	name:'去年累计',
        }],
    },{
        name: '进仓对比',
        type: 'bar',
        barGap:'-100%',
        barWidth: 20,
        //silent: true,  //是否不需要触发操作
        label:{
        	show:true,
        	normal:{
        		color:'#000',
        	}
        },
        data: [{
        	name:'本月累计',
        	value:121,
        	itemStyle:{
        		normal:{
        			color:'#19B5EF'
        		}
        	}
        },{
        	name:'月度同期',
        	value:221,
        	itemStyle:{
        		normal:{
        			color:'#999999'
        		}
        	}
        },{
        	name:'上月同期',
        	value:221,
        	itemStyle:{
        		normal:{
        			color:'#999999'
        		}
        	}
        },{
        	name:'',
        },{
        	name:'本年累计',
        	value:221,
        	itemStyle:{
        		normal:{
        			color:'#19B5EF'
        		}
        	}
        },{
        	name:'去年累计',
        	value:221,
        	itemStyle:{
        		normal:{
        			color:'#0E60A2'
        		}
        	}
        }],
    },{
        name: '出仓',
        type: 'bar',
        z:8,
        barGap: 20,
        barWidth: 20,
        xAxisIndex: 2,
        yAxisIndex: 2,
        data: [{
        	name:'本月累计',
        },{
        	name:'月度同期',
        	value:115.02,
        	itemStyle:{
        		normal:{
        			color:'#F985BB'
        		}
        	},
        	label:{
        		normal:{
        			position:'insideRight',
        			color:'#fff'
        		}
        	}
        },{
        	name:'上月同期',
        	value:79.92,
        	itemStyle:{
        		normal:{
        			color:'#ED3A52'
        		}
        	},
        	label:{
        		normal:{
        			position:'insideRight',
        			color:'#fff'
        		}
        	}
        },{
        	name:''
        },{
        	name:'本年累计',
        },{
        	name:'去年累计',
        }],
    },{
        name: '出仓对比',
        type: 'bar',
        barGap: '-100%',
        barWidth: 20,
        xAxisIndex: 2,
        yAxisIndex: 2,
        data: [{
        	name:'本月累计',
        	value:121,
        	itemStyle:{
        		normal:{
        			color:'#F985BB'
        		}
        	}
        },{
        	name:'月度同期',
        	value:221,
        	itemStyle:{
        		normal:{
        			color:'#999999'
        		}
        	}
        },{
        	name:'上月同期',
        	value:221,
        	itemStyle:{
        		normal:{
        			color:'#999999'
        		}
        	}
        },{
        	name:'',
        },{
        	name:'本年累计',
        	value:221,
        	itemStyle:{
        		normal:{
        			color:'#F985BB'
        		}
        	}
        },{
        	name:'去年累计',
        	value:221,
        	itemStyle:{
        		normal:{
        			color:'#ED3A52'
        		}
        	}
        }],
    }]
}
myChart.setOption(option);