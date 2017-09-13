/**
 * Created by lenovo on 2017/9/13.
 */
import React, { Component } from 'react'

export default class PieReact extends React.Component {
    render(){
        return(
          <div className="pie-react">
            <div ref="pieReact" style={{width: "100%", height: '200px'}}></div>
          </div>
        )
    }
}
