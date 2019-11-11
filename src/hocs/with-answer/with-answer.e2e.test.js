import React from 'react';
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withAnswer from "./with-answer.js";

configure({adapter: new Adapter()});

it(`Rendered checkboxes are synchronized with state`, () => {
  const MockComponent = () => <div />;
  const MockComponentWrapped = withAnswer(MockComponent);
  const app = shallow(<MockComponentWrapped />);

  app.instance().handleChange(0);
  expect(app.state().answer).toEqual([true, false, false, false]);

  app.instance().handleChange(3);
  expect(app.state().answer).toEqual([true, false, false, true]);
});
