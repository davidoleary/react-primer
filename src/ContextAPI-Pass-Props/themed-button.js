import React from 'react'
import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let { themeToPass, someTextToPass, onClickHandlerToPass } = this.context;
    return (
      <div>
        {someTextToPass}
        <button
          {...props}
          style={{ backgroundColor: themeToPass.background }}
        />

        <button onClick={onClickHandlerToPass}>Click to trigger parent function </button>
      </div>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;