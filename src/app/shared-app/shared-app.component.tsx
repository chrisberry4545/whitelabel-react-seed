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
      <div className='c-app'>
        <header className='c-app__header'>
          <h1 className='c-app__title'>ChrisB React Seed</h1>
        </header>
        <h4 className='c-app__color-name'>Primary color</h4>
        <div className='c-app__color c-app__color--primary'></div>
        <h4 className='c-app__color-name'>Secondary color</h4>
        <div className='c-app__color c-app__color--secondary'></div>
      </div>
    );
  }
}
