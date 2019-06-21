var section1 = echarts.init(document.getElementById('section1'));

/******各项指标占比图*******/
var color= ['#fb734e', '#e32f46','#94d96c', '#0bbcb7','#1a9bfc','#7049f0'];
var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
    }
};
var placeHolderStyle = {
    normal: {
        color: '#ccc',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: '#ccc'
    }
};
var option1 = {
	toolbox: {  
        feature: {
            dataView: {show: false, readOnly: false},        // 数据试图是否在控件中显示
            //magicType: {show: true, type: ['stack', 'tiled']},
            //restore: {show: true},
            saveAsImage: { 
                show: true, 
                backgroundColor:'rgba(255, 255, 255,0)', 
                pixelRatio:2 
            }
        }
    },
    title: {
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: "#fff",
        }
    },
    tooltip: {
        trigger: 'item',
        show: true,
        formatter: "{b} : <br/>{d}%",
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    legend: {
        orient: 'vertical',
        // icon: 'circle',
        left: 'left',
        top: '20',
        itemGap:20,
        data: ['第一层', '第二层','第三层'],
        textStyle: {
            color: '#fft'
        }
    },
    series: [
        {
            name: 'Line 1',
            type: 'pie',
            //clockWise: false,
            radius: ['70%', '76%'],
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            center:['50%','50%'],
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: 4438,
                    name: '第一层',
                    itemStyle: {
                        normal: {
                            color:'#0e60a2',
                            borderWidth: 1,
                        }
                    }
                },
                {
                    value: 100,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
            ]
        },
        {
            name: 'Line 2',
            type: 'pie',
            //clockWise: false,
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            radius: [80, 110],
            radius: ['50%', '56%'],
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: 2459,
                    name: '第二层',
                    itemStyle: {
                        normal: {
                            color: '#ed3a52',
                            borderWidth:8
                        }
                    }
                },
                {
                    value: 10541,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#ccc',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                        },
                        emphasis: {
                            color: '#ccc'
                        }
                    }
                },
            ]
        },
        {
            name: 'Line 3',
            type: 'pie',
            //clockWise: false,
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            radius: ['30%', '36%'],
            center:['50%','50%'],
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: 2000,
                    name: '第三层',
                    itemStyle: {
                        normal: {
                            color: '#2d91ff'
                        }
                    }
                },
                {
                    value:11000,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
            ]
        },
    ]
};


section1.setOption(option1);
