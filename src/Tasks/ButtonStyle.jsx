import React, { Component } from 'react'

 class ButtonStyle extends Component {
    constructor(){
        super();
        this.state ={
            isBlue : true,
        };
    }
    toggleColor =() =>{
        this.setState(prevState => ({
            isBlue: !prevState.isBlue
        }));
    };
  render() {
    return (
      <div>ButtonStyle</div>
    )
  }
}

export default ButtonStyle