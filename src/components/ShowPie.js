/**
 * Created by lenovo on 2017/9/13.
 */
import React, { Component } from 'react'
import PieReact from './pieReact'
import {data} from './Data.js'

class ShowPie extends React.Component {
  render() {
    //const { data } = this.props.reducer
    return (
    <div>
      {/*<strong>test test again</strong> */}
      <PieReact data={data} />
    </div>
    )
  }
}

export default ShowPie
