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
    const buttonSty ={
        backgroundcolor: this.state.isBlue ? 'blue' : 'green',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius:'5px',
        cursor:'pointer',
        fontSize: '20px',
    };
    return (
      <div>ButtonStyle</div>
    )
  }
}

export default ButtonStyle