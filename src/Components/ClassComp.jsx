import React, { Component } from 'react'

class ClassComp extends Component {
  render() {
    const {course,duration} = this.props
    
    return (
      <div> 
        <h2>basic of akshay</h2>
        <h5>course:{course}</h5>
        <h5>duration:{duration}</h5>

      </div>
    )
  }
}

export default ClassComp