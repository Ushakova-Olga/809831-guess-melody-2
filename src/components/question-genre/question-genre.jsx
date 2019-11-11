import React from "react";
import PropTypes from 'prop-types';

class QuestionGenre extends React.PureComponent {
  constructor(props) {
    super(props);

    // const {question} = this.props;
    // const {answers} = question;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const {question, renderPlayer, onChange} = this.props;
    const {
      answers,
      genre,
    } = question;

    return <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={this.handleSubmit}>
        {answers.map((it, i) => <div className="track" key={`answer-${genre}${i}`}>
          {renderPlayer(it, i)}
          <div className="game__answer">
            <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${genre}${i}`} id={`answer-${genre}${i}`}
              onChange={() => {
                onChange(i);
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

  handleSubmit(evt) {
    const {answer, onAnswer} = this.props;
    evt.preventDefault();
    onAnswer(answer);
  }
}

QuestionGenre.propTypes = {
  answer: PropTypes.array,
  onAnswer: PropTypes.func,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([`rock`, `jazz`, `blues`, `pop`, `folk`]).isRequired,
    })).isRequired,
    genre: PropTypes.oneOf([`rock`, `jazz`, `blues`, `pop`, `folk`]).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default QuestionGenre;
