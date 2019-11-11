import React from "react";
import renderer from 'react-test-renderer';
import QuestionGenre from '../question-genre/question-genre';
import questions from "../../mocks/questions.js";

it(`Question genre screen correctly renders`, () => {

  const tree = renderer
    .create(<QuestionGenre
      screenIndex={1}
      question={questions[0]}
      renderPlayer={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
