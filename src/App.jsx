import React, {Component} from 'react';
import { Navigation } from './Navigation.jsx';
import { Page } from './Page.jsx';

class App extends Component {
  render() {
    return (
        <div>

            <Navigation />
            <Page />
        </div>

    );
  }
}
export default App;
