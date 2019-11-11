import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionGenre from '../question-genre/question-genre';
import questions from "../../mocks/questions.js";

Enzyme.configure({adapter: new Adapter()});

it(`Question genre correctly pressed button`, () => {
  const renderPlayer = jest.fn();
  const onChange = jest.fn();
  const onAnswerClick = jest.fn((arr) => {
    return arr;
  });
  const componentQuestionGenre = mount(<QuestionGenre
    screenIndex={1}
    question={questions[0]}
    onAnswer={onAnswerClick}
    renderPlayer={renderPlayer}
    onChange={onChange}
  />);

  componentQuestionGenre.find(`.game__input`).at(0).simulate(`change`);
  componentQuestionGenre.find(`.game__input`).at(1).simulate(`change`);
  componentQuestionGenre.find(`form`).simulate(`submit`);

  expect(onAnswerClick).toHaveBeenCalledTimes(1);
});
