import React from 'react';
import {configure, mount} from "enzyme";
import questions from "../../mocks/questions.js";
import Adapter from "enzyme-adapter-react-16";
import withAudioPlayer from "./with-audio-player.js";

configure({adapter: new Adapter()});

it(`Player start and paused correctly`, () => {
  const clickHandler = jest.fn();
  const question = questions[2];
  const ref = {
    current: document.createElement(`audio`)
  };

  const MockComponent = () => <div />;
  const MockComponentWrapped = withAudioPlayer(MockComponent);
  jest.spyOn(React, `createRef`).mockImplementation(() => ref);

  const audioPlayer = mount(<MockComponentWrapped
    src={question.song.src}
    isPlaying={false}
    onPlayButtonClick={clickHandler}
  />);
  audioPlayer.instance()._onPlayButtonClick();
  expect(audioPlayer.state().isPlaying).toEqual(true);

  audioPlayer.instance()._onPlayButtonClick();
  expect(audioPlayer.state().isPlaying).toEqual(false);
});
