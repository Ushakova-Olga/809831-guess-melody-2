import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionGenre from '../question-genre/question-genre';

Enzyme.configure({adapter: new Adapter()});

it(`Question genre correctly pressed button`, () => {
  const onAnswerClick = jest.fn((arr) => {
    return arr;
  });
  const componentQuestionGenre = mount(<QuestionGenre
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
    onAnswer={onAnswerClick}
  />);

  componentQuestionGenre.find(`.game__input`).at(0).simulate(`change`);
  componentQuestionGenre.find(`.game__input`).at(1).simulate(`change`);
  componentQuestionGenre.find(`form`).simulate(`submit`);

  expect(onAnswerClick).toHaveBeenCalledTimes(1);
  expect(onAnswerClick).toHaveBeenCalledWith([true, true, false, false]);
});
