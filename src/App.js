import React, { Component } from 'react';
import logo from './logo.svg';
import MyComponent from './MyComponent';
import MyFunctionalComponent from './MyFunctionalComponent';
import MyPureComponent from './MyPureComponent';
import MyPortal from './MyPortal';
import MyComponentWithBind from './MyComponentWithBind';
import Counter from './Counter';
import CounterSharedState from './CounterSharedState';
import CounterUseEffect from './UseEffect';
import UseRef from './UseRef';
import UseReducer from './UseReducer';
import UseSimpleReducer from './UseSimpleReducer';
import { Toolbar, ThemeContext, themes } from './ContextAPI-Pass-Props';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      overlayActive: true,
      theme: themes.light,
      someText: 'this is from the top level',
    };
  }

  closeOverlay = () => {
    this.setState({ overlayActive: false });
  };

  render() {
    const { overlayActive } = this.state;
    let overlay;

    if (overlayActive) {
      overlay = <MyPortal onClose={this.closeOverlay}>
        <div>Welcome this is a Portal</div>
      </MyPortal>
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <MyComponent />
          <MyFunctionalComponent version="111" />
          <MyPureComponent label="some prop" />
          <MyComponentWithBind />
          <Counter />
          <CounterSharedState />
          <CounterUseEffect />
          <UseRef />
          <UseReducer />
          <UseSimpleReducer />
          <ThemeContext.Provider value={{
            themeToPass: this.state.theme,
            someTextToPass: this.state.someText,
            onClickHandlerToPass: () => {
              console.log('called function in parent');
            }
          }}>
            <Toolbar changeTheme={this.toggleTheme} />
          </ThemeContext.Provider>
          {overlay}

        </header>
      </div>
    );
  }
}

export default App;
