import React from "react";
import renderer from 'react-test-renderer';
import WelcomeScreen from '../welcome-screen/welcome-screen';

it(`Welcome screen correctly renders`, () => {

  const tree = renderer
    .create(<WelcomeScreen errorCount={7}
      gameTime={5000} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
