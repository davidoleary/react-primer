import React from 'react'
import ThemedButton from './themed-button';

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  console.log(props)
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme: {props.someText}
    </ThemedButton>
  );
}

export default Toolbar;