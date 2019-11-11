import React from "react";
import PropTypes from 'prop-types';

class QuestionArtist extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {question, renderPlayer, onAnswer} = this.props;
    const {
      answers,
      song,
    } = question;

    return <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track" key={`question-${song.artist}`}>
        {renderPlayer(song, 0)}
      </div>

      <form className="game__artist">
        {answers.map((it, i, arr) => <div className="artist" key={`answer-${song.artist}${i}`}>
          <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${i}`} id={`artist-${i}`} onChange={() => onAnswer(arr[i].artist)}/>
          <label className="artist__name" htmlFor={`artist-${i}`}>
            <img className="artist__picture" src={it.picture} alt={it.artist} />
            {it.artist}
          </label>
        </div>)}
      </form>
    </section>;
  }
}

QuestionArtist.propTypes = {
  onAnswer: PropTypes.func,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default QuestionArtist;
