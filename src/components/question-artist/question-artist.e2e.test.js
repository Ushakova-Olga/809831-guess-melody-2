import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionArtist from '../question-artist/question-artist';
import questions from "../../mocks/questions.js";

Enzyme.configure({adapter: new Adapter()});

it(`Question artist correctly pressed button`, () => {
  const onAnswerClick = jest.fn();
  const componentQuestionArtist = shallow(<QuestionArtist
    screenIndex={3}
    question={questions[2]}
    onAnswer={onAnswerClick}
  />);

  componentQuestionArtist.find(`.artist__input`).first().simulate(`change`);

  expect(onAnswerClick).toHaveBeenCalledTimes(1);
  expect(onAnswerClick).toHaveBeenCalledWith(`John Snow`);
});
