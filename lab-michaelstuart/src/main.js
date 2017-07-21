import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/about';
import Note from './components/note';

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/about'} component={About} />
      <Route exact path={'/'} component={Note} />
    </Switch>
  </BrowserRouter>
)

const container = document.createElement('div')
document.body.appendChild(container)
ReactDom.render(<App />, container)
