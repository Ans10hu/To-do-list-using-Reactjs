import React, { Component } from 'react'

 class counter extends Component {
  constructor(){
    super()
    // this.state = {
    //   count:0
    // }
  }
  state = {
    count : 0
  }
  increHand = () =>{
    this.setState({count: this.state.count + 1})
  }
  decHand= ()=>{
    this.setState({count:this.state.count - 1})
  }
  resetBtn =() =>{
    this.setState({ count:0});
  }
  render() {
    return (
      <>
      <h2>Counter :{this.state.count} </h2>
      <button className='btn btn-secondary'onClick={this.increHand} >Increase</button>
      <button className='btn btn-danger' onClick={this.decHand} >Decrease</button>
      <button className='btn btn-primary'onClick={this.resetBtn}>Reset</button>
      </>
    )
  }
}

export default counter