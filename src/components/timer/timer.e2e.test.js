import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Timer from "../timer/timer.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Timer tick correctly decrements time`, () => {
  const timeUpdateHandler = jest.fn();
  const timeEndHandler = jest.fn();
  const componentTimer = shallow(
      <Timer
        time={300000}
        onTimeEnd={timeEndHandler}
        onTimeUpdate={timeUpdateHandler}
        registrateTimer={jest.fn()}
      />
  );

  componentTimer.instance()._tick();
  expect(timeUpdateHandler).toHaveBeenCalledTimes(1);
  componentTimer.setProps({time: 0});
  componentTimer.instance()._tick();
  expect(timeEndHandler).toHaveBeenCalledTimes(1);
});
