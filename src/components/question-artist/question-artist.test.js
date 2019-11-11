import React from "react";
import renderer from 'react-test-renderer';
import QuestionArtist from '../question-artist/question-artist';
import questions from "../../mocks/questions.js";

it(`Question artist screen correctly renders`, () => {

  const tree = renderer
    .create(<QuestionArtist
      screenIndex={3}
      question={questions[2]}
      renderPlayer={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
