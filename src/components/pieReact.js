/**
 * Created by lenovo on 2017/9/13.
 */
import React, { Component } from 'react'

//导入echarts
var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
require('echarts/lib/component/title')
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

export class PieReact extends React.Component {
    //在react中，我们需要等到虚拟dom渲染完成了才能通过refs去获取节点,所以在组件componentDidMount的时候初始化echarts
    componentDidMount(){
      const { data } = this.props //外部传入的data数据
      let myChart = echarts.init(this.refs.pieChart) //初始化echarts

      //我们要定义一个setPieOption函数将data传入option里面
      let options = this.setPieOption(data)
      //设置options
      myChart.setOption(options)
    }

    //一个基本的echarts图表配置函数
    setPieOption(data) {
      return {
        series:[
          {
            name: '负荷',
            type: 'pie',
            radius: ['100%', '70%'],
            data: data, //传入外部的data数据
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine:{
              normal: {
                show: false
              }
            }
          }
        ]
      }
    }

    render(){
        return(
          <div className="pie-react">
            <div ref="pieReact" style={{width: "100%", height: '200px'}}></div>
          </div>
        )
    }
}
