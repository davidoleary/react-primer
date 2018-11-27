import React, { PureComponent } from 'react';

class MyPureComponent extends PureComponent {
  render() {
    const { label } = this.props;

    return (
      <div>
        This is a pure component
        <span> {label} </span>
      </div>
    )
  }

}

export default MyPureComponent;