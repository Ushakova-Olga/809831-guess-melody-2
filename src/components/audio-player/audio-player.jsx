import React from "react";
import PropTypes from 'prop-types';

class AudioPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
  }

  render() {
    const {audioRef, isLoading, isPlaying} = this.props;

    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={this._onPlayButtonClick}
        />
        <div className="track__status">
          <audio
            ref={audioRef}
          />
        </div>
      </React.Fragment>
    );
  }

  _onPlayButtonClick() {
    const {onPlayButtonClick, id} = this.props;
    onPlayButtonClick(id);
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  audioRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}),
  id: PropTypes.number.isRequired,
};

export default AudioPlayer;
