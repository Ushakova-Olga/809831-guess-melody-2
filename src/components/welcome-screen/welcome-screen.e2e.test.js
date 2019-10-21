import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from '../welcome-screen/welcome-screen';

Enzyme.configure({adapter: new Adapter()});

it(`Welcome screen correctly pressed button`, () => {
  const clickHandler = jest.fn();
  const componentWelcomeScreen = shallow(<WelcomeScreen errorCount={7}
    time={4}
    clickHandler={clickHandler} />);

  const startButton = componentWelcomeScreen.find(`button`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
