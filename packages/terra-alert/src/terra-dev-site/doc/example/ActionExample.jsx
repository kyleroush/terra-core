import React from 'react';
import Button from 'terra-button';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Alert from 'terra-alert/lib/Alert';

class ActionExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionButtonClickCount: 0,
    };
    this.actionFunc = this.actionFunc.bind(this);
  }

  actionFunc() {
    const newState = this.state;
    newState.actionButtonClickCount += 1;
    this.setState(newState);
  }

  render() {
    const alertStartTagStr = '<Alert type="warning" action={<Button text="Action" variant="emphasis" onClick={this.actionFunc} />} >';
    const alertEndTagStr = '</Alert>';
    const alertText = 'This is a warning. It is configured with a custom Action button.';
    return (
      <div>
        <div dir="ltr">
          <h3>Basic Alert of type warning with action button</h3>
          <br />
          <code>
            {alertStartTagStr}
            <br />
            &nbsp;&nbsp;
            {alertText}
.
            <br />
            {alertEndTagStr}
          </code>
        </div>
        <br />
        <Alert type="warning" action={<Button text="Action" variant="emphasis" onClick={this.actionFunc} />}>
          {alertText}
        </Alert>
        <br />
        <p>
Action button has been clicked
          {this.state.actionButtonClickCount}
          {' '}
times.
        </p>
      </div>
    );
  }
}

export default ActionExample;
