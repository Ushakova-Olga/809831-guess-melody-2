import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from '../audio-player/audio-player';

Enzyme.configure({adapter: new Adapter()});

it(`Audio player correctly pressed button`, () => {
  const onPlayClick = jest.fn();
  const componentAudioPlayer = shallow(<AudioPlayer
    isLoading={false}
    isPlaying={false}
    onPlayButtonClick={onPlayClick}
    id={1}
    src={`test`}
  />);

  componentAudioPlayer.find(`.track__button`).simulate(`click`);
  expect(onPlayClick).toHaveBeenCalledWith(1);
});
