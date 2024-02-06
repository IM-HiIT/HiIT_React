import React from 'react';
import ReactDOM from 'react-dom/client';
import Brand from './components/Brand.js';
import Timer from './components/Timer.js';
import PropDrill from './components/PropDrill.js';
import PropUseContext from './components/PropUseContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

/** Componenten opsplitsen
 * See Components folder for Brand.js and Car.js
 */
root.render(<Brand/>);
root.render(<Timer/>);
root.render(<PropDrill/>);
root.render(<PropUseContext/>);
