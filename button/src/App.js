import React from "react";
/*import logo from './logo.svg';*/
import ReactDOM from 'react-dom';
import './Button.css';

class Button extends React.Component {

  constructor(props) {
    super(props);
     this.state={isToggle: false};
    this.handleClick = this.handleClick.bind(this);
   
  }

  handleClick() {
     this.setState((oldState) => ({
      isToggle: ! oldState.isToggle
    }));
  }

  render() {
  return (
    <div className="App">
	  <button
	  onClick={this.handleClick}
	  className= {this.state.isToggle ? 'toggled' : 'untoggled' }>
	  {this.state.isToggle ? 'toggled' : 'untoggled'}
	  </button>
    </div>
  );
}

}

export default Button;
