import React from "react";
import renderer from "react-test-renderer";
import GameHeader from '../game-header/game-header';

it(`Game header correctly renders`, () => {
  const tree = renderer
    .create(<GameHeader
      mistakes={0}
      gameTime={5}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
