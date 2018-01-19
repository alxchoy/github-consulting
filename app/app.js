import React from 'react';
import ReactDom from 'react-dom';

import {Button, Icon} from 'react-materialize'

import Home from './components/Home.js';

import './index.scss';

ReactDom.render(<Home />, document.getElementById('app'));