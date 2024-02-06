import React from 'react';
import ReactDOM from 'react-dom/client';

import Brand from './components/Brand.js';

import PropDrill from './components/PropDrill.js';
import PropUseContext from './components/PropUseContext.js';

import Timer from './components/Timer.js';
import TimerUseRef from './components/TimerUseRef.js';

import DOMElements from './components/DOMElements.js';
import FocusAfterLoad from './components/FocusAfterLoad.js';

import Counter from './components/Counter.js'
import Account from './components/Account.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

/** Componenten opsplitsen
 * See Components folder for Brand.js and Car.js
 */
// root.render(<Brand/>);

// root.render(<PropDrill/>);
// root.render(<PropUseContext/>);

// root.render(<Timer/>);
// root.render(<TimerUseRef/>);

// root.render(<DOMElements/>);
// root.render(<FocusAfterLoad/>);

root.render(<Counter />);
root.render(<Account />)
