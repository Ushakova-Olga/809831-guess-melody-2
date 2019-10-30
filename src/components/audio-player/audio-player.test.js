import React from "react";
import renderer from 'react-test-renderer';
import AudioPlayer from '../audio-player/audio-player';

it(`Audio player screen correctly renders`, () => {

  const tree = renderer
    .create(<AudioPlayer
      isPlaying={false}
      onPlayButtonClick={() => {}}
      src={`test`}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
