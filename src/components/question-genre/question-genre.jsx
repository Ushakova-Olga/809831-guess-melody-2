import React from "react";
import PropTypes from 'prop-types';
import AudioPlayer from "../../components/audio-player/audio-player.jsx";

class QuestionGenre extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1,
    };
    this.checkedInputs = [];
  }

  render() {
    const {question, onAnswer} = this.props;
    const {
      answers,
      genre,
    } = question;

    answers.forEach(() => {
      this.checkedInputs.push(false);
    });

    return <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={(evt) => {
        evt.preventDefault();
        onAnswer(this.checkedInputs);
      }}>
        {answers.map((it, i) => <div className="track" key={`answer-${genre}${i}`}>
          <AudioPlayer
            src={it.src}
            isPlaying={i === this.state.activePlayer}
            onPlayButtonClick={() => this.setState({
              activePlayer: this.state.activePlayer === i ? -1 : i
            })}
          />
          <div className="game__answer">
            <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${genre}${i}`} id={`answer-${genre}${i}`} onChange={() => {
              this.checkedInputs[i] = true;
            }}/>
            <label className="game__check" htmlFor={`answer-${genre}${i}`}>
              Отметить
            </label>
          </div>
        </div>)}

        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>;
  }
}

QuestionGenre.propTypes = {
  onAnswer: PropTypes.func,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([`rock`, `jazz`, `blues`, `pop`, `folk`]).isRequired,
    })).isRequired,
    genre: PropTypes.oneOf([`rock`, `jazz`, `blues`, `pop`, `folk`]).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
};

export default QuestionGenre;
