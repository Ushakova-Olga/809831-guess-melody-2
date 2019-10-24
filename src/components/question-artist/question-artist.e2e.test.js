import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionArtist from '../question-artist/question-artist';

Enzyme.configure({adapter: new Adapter()});

it(`Question artist correctly pressed button`, () => {
  const onAnswerClick = jest.fn();
  const componentQuestionArtist = shallow(<QuestionArtist
    screenIndex={3}
    question={ {
      type: `artist`,
      song: {
        artist: `Jim Beam`,
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      },
      answers: [
        {
          picture: `http://placehold.it/134x134`,
          artist: `John Snow`,
        },
        {
          picture: `http://placehold.it/134x134`,
          artist: `Jack Daniels`,
        },
        {
          picture: `http://placehold.it/134x134`,
          artist: `Jim Beam`,
        },
      ]}}
    onAnswer={onAnswerClick}
  />);

  componentQuestionArtist.find(`.artist__input`).first().simulate(`change`);

  expect(onAnswerClick).toHaveBeenCalledTimes(1);
  expect(onAnswerClick).toHaveBeenCalledWith(`John Snow`);
});
