import React from 'react';
import ReactDOM from 'react-dom/client';
import Brand from './components/Brand.js';
import Timer from './components/Timer.js';
import TimerUseRef from './components/TimerUseRef.js';
import PropDrill from './components/PropDrill.js';
import PropUseContext from './components/PropUseContext.js';
import DOMElements from './components/DOMElements.js';
import FocusAfterLoad from './components/FocusAfterLoad.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

/** Componenten opsplitsen
 * See Components folder for Brand.js and Car.js
 */
// root.render(<Brand/>);

// root.render(<PropDrill/>);
// root.render(<PropUseContext/>);

// root.render(<Timer/>);
// root.render(<TimerUseRef/>);

root.render(<DOMElements/>);
root.render(<FocusAfterLoad/>);
