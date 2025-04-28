import React, { Component } from 'react'

 class ClassComp extends Component {
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
        backgroundcolor: this.state.isBlue ? 'blue' : 'red',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius:'5px',
        cursor:'pointer',
        fontSize: '20px',
    };
    return (
      <div>
        <button style={buttonSty} onClick={this.toggleColor}> click the button to change the color</button>
      </div>
    );
  }
}

export default ClassComp;