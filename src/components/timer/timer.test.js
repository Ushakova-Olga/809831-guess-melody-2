import React from "react";
import renderer from "react-test-renderer";
import Timer from "../timer/timer.jsx";

it(`Timer correctly renders`, () => {
  const tree = renderer
    .create(<Timer
      time={5000}
      onTimeEnd={() => {}}
      onTimeUpdate={() => {}}
      registrateTimer={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
