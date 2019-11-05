import {reducer} from "./reducer.js";

describe(`Reducer test group`, () => {
  it(`Reducer correctly increments step`, () => {
    expect(reducer(
        {
          step: -1,
          mistakes: 0,
        },
        {
          type: `INCREMENT_STEP`,
          payload: 1
        }
    )).toEqual({
      step: 0,
      mistakes: 0,
    });
  });

  it(`Reducer correctly increments mistakes`, () => {
    expect(reducer(
        {
          step: 0,
          mistakes: 0,
        },
        {
          type: `INCREMENT_MISTAKES`,
          payload: 2
        }
    )).toEqual({
      step: 0,
      mistakes: 2,
    });
  });
});
