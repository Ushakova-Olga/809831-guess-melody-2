import React from "react";
import PropTypes from 'prop-types';
import WelcomeScreen from "../../components/welcome-screen/welcome-screen.jsx";
import QuestionArtist from "../../components/question-artist/question-artist.jsx";
import QuestionGenre from "../../components/question-genre/question-genre.jsx";
import GameHeader from "../../components/game-header/game-header.jsx";

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";

const ArtistQuestionScreenWrapped = withActivePlayer(QuestionArtist);
const GenreQuestionScreenWrapped = withActivePlayer(QuestionGenre);

class App extends React.PureComponent {
  render() {
    const {questions, step, mistakes, gameTime, onTimeUpdate, onTimeEnd, registrateTimer} = this.props;
    const currentQuestion = questions[step];

    return <section className="game">

      {currentQuestion && <GameHeader mistakes={mistakes} gameTime={gameTime} registrateTimer={registrateTimer} onTimeUpdate={onTimeUpdate} onTimeEnd={onTimeEnd} />}

      {this._getScreen(currentQuestion)}
    </section>;
  }

  _getScreen(question) {
    if (!question) {
      const {gameTime, maxMistakes, onWelcomeScreenClick} = this.props;

      return <WelcomeScreen
        gameTime = {gameTime}
        errorCount = {maxMistakes}
        onStartButtonClick = {onWelcomeScreenClick}
      />;
    }

    const {onUserAnswer, mistakes, maxMistakes, questions} = this.props;
    const currentQuestionIndex = questions.indexOf(question);
    const maxQuestionIndex = questions.length;

    switch (question.type) {
      case `genre`:
        return <GenreQuestionScreenWrapped
          question = {question}
          onAnswer = {(userAnswer) => onUserAnswer(
              userAnswer,
              question,
              mistakes,
              maxMistakes,
              currentQuestionIndex,
              maxQuestionIndex
          )}
        />;
      case `artist`:
        return <ArtistQuestionScreenWrapped
          question = {question}
          onAnswer = {(userAnswer) => onUserAnswer(
              userAnswer,
              question,
              mistakes,
              maxMistakes,
              currentQuestionIndex,
              maxQuestionIndex
          )}
        />;
    }

    return null;
  }
}

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onTimeEnd: PropTypes.func.isRequired,
  registrateTimer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps,
    {
      step: state.step,
      mistakes: state.mistakes,
      gameTime: state.gameTime
    }
);

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes, currentQuestionIndex, maxQuestionIndex) => {
    dispatch(ActionCreator.incrementStep(currentQuestionIndex, maxQuestionIndex));
    dispatch(ActionCreator.incrementMistake(userAnswer, question, mistakes, maxMistakes));
  },

  onTimeUpdate: () => dispatch(ActionCreator.decrementTime()),

  onTimeEnd: () => dispatch(ActionCreator.resetGame()),

  registrateTimer: (id) => dispatch(ActionCreator.registrateTimer(id))
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
