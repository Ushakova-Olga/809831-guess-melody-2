import React, {PureComponent} from 'react';

const withAnswer = (Component) => {
  class WithAnswer extends PureComponent {
    constructor(props) {
      super(props);
      this.COUNT_ANSWERS = 4;

      this.state = {
        answer: new Array(this.COUNT_ANSWERS).fill(false),
      };

      this.handleChange = this.handleChange.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        answer={this.state.answer}
        onChange={this.handleChange}
      />;
    }


    handleChange(index) {
      this.setState((prevState) => {
        const newAnswer = prevState.answer.slice();
        newAnswer[index] = !prevState.answer[index];

        return {answer: newAnswer};
      });
    }
  }

  WithAnswer.propTypes = {};

  return WithAnswer;
};

export default withAnswer;
