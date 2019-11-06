import React from "react";
import PropTypes from "prop-types";

class Timer extends React.PureComponent {
  constructor(props) {
    super(props);

    props.registrateTimer(this._startTimer());
  }

  render() {
    const {time} = this.props;
    const minutes = parseInt(time / 1000 / 60, 10);
    const seconds = parseInt(time / 1000 % 60, 10);

    return <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
      <span className="timer__mins">{`${minutes}`.padStart(2, `0`)}</span>
      <span className="timer__dots">:</span>
      <span className="timer__secs">{`${seconds}`.padStart(2, `0`)}</span>
    </div>;
  }

  _startTimer() {
    return setInterval(() => {
      this._tick();
    }, 1000);
  }

  _tick() {
    const {onTimeUpdate, onTimeEnd, time} = this.props;

    if (time <= 0) {
      return onTimeEnd();
    }

    return onTimeUpdate();
  }
}

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  onTimeEnd: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  registrateTimer: PropTypes.func.isRequired
};

export default Timer;
