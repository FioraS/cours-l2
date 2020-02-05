import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state={seconds:0};
  }

  componentDidMount() {
    this.interval = 
    setInterval(() => this.setState(state => ({
      seconds: state.seconds + 1
    })), 
    1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render () {
    return (
      <div data-testid="timer">
        {this.state.seconds}
      </div>
    );
  }
}

export default Timer;

