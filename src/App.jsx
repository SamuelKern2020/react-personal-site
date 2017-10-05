import React, {Component} from 'react';
import { Navigation } from './Navigation.jsx';
import { Page } from './Page.jsx';
import { Footer } from './Footer.jsx';

class App extends Component {
  render() {
    return (
        <div>

            <Navigation />
            <Page />
            <Footer />
        </div>

    );
  }
}
export default App;
