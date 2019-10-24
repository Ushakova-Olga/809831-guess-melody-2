import React from "react";
import renderer from 'react-test-renderer';
import QuestionGenre from '../question-genre/question-genre';

it(`Question genre screen correctly renders`, () => {

  const tree = renderer
    .create(<QuestionGenre
      screenIndex={1}
      question={{type: `genre`,
        genre: `rock`,
        answers: [
          {
            src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
            genre: `rock`,
          },
          {
            src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
            genre: `pop`,
          },
          {
            src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
            genre: `jazz`,
          },
          {
            src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
            genre: `rock`,
          },
        ]}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
