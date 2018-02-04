import { Component } from 'react';
import * as React from 'react';
import './shared-app.component.scss';

import { Warrior } from './../../ditest/interfaces';
import { myContainer } from './../../ditest/inversify.config';
import { TYPES } from './../../ditest/types';

export class SharedAppComponent extends Component {
  public render() {
    const ninja = myContainer.get<Warrior>(TYPES.Warrior);
    return (
      <div className='App'>
        <header className='App-header'>
        <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
