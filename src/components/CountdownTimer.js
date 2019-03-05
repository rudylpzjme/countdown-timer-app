import React, { Component } from "react";
import './CountdownTimer.css';

class CountdownTimer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          seconds: 47,
          minutes: 27,
          hours: 23,
          days: 1,
        };
    }
  
    tick() {
          this.setState(state => ({
            seconds: state.seconds - 1
          }));

          if(this.state.seconds === 0) this.setState(state => ({
            minutes: state.minutes - 1,
            seconds: 60,
          }));

          if(this.state.minutes === 0) this.setState(state => ({
            hours: state.hours - 1,
            minutes: 60,
          }));

          if(this.state.hours === 0) this.setState(state => ({
            days: state.days - 1,
            hours: 24,
          }));

          if(this.state.days === 0) this.setState(state => ({
            hours: 0,
            minutes: 0,
            seconds: 0,
          }));
    }
  
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (  
        <div className="countdown-timer-box">
            <div className="time-box">
                <p className="time-digit">{ this.state.days }</p>
                <p className="time-type">Days</p>
            </div>
            <div className="time-box">
                <p className="time-digit">{ this.state.hours }</p>
                <p className="time-type">Hours</p>
            </div>
            <div className="time-box">
                <p className="time-digit">{ this.state.minutes }</p>
                <p className="time-type">Minutes</p>
            </div>
            <div className="time-box">
                <p className="time-digit">{ this.state.seconds }</p>
                <p className="time-type">Seconds</p>
            </div>
        </div>
      );
    }
  }
  
  export default CountdownTimer;