import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'

import About from './pages/About.jsx'
import Work from './pages/Work.jsx'

export class Page extends Component {
    render() {
        return (
            <main>
              <Switch>
                <Route exact path='/' component={About}/>
                <Route path='/work' component={Work}/>
              </Switch>
            </main>
        )
    }
}
