import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { GraphicTypeProvider } from './contexts/graphicType.context';
import { WarpSpeedProvider } from './contexts/warpSpeed.context';
import { QuantityProvider } from './contexts/quantity.context';
import { PlayStateProvider } from './contexts/play-state.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlayStateProvider>
      <QuantityProvider>
        <GraphicTypeProvider>
          <WarpSpeedProvider>
            <App />
          </WarpSpeedProvider>
        </GraphicTypeProvider>
      </QuantityProvider>
    </PlayStateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
