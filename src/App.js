import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';

import { Starpoint } from './components/starpoint/starpoint.component';

function App() {

  const [starCount, setStarCount] = useState(100);

  // useEffect( () => {

  // }, []);

  return (
    <div className="the-void graphic--windows">

      <Starpoint starCount={starCount}></Starpoint>

      {/* <div class="controls">
        <h1 class="controls-title">Screensaver Setup</h1>

        <div class="controls-group controls-group--graphic">
          <h2 class="controls-heading">Graphic</h2>

          <ul class="controls-list">
            <li class="controls-list-item">
              <label for="graphic-windows"><input type="radio" class="controls-radio controls-radio--graphic" name="graphic" id="graphic-windows" value="windows" checked />Windows</label>
            </li>
            <li class="controls-list-item">
              <label for="graphic-stars"><input type="radio" class="controls-radio controls-radio--graphic" name="graphic" id="graphic-stars" value="stars" />Stars</label>
            </li>
          </ul>
          
        </div>

        <div class="controls-group controls-group--quantity">
          <h2 class="controls-heading">Warp Speed</h2>

          <div class="controls-slide-container">
            <div class="controls-slide-labels">
              <p class="controls-slide-label">Slow</p>
              <p class="controls-slide-label">Fast</p>
            </div>
            <input type="range" min="10" max="150" value="50" class="controls-slide controls-slide--quantity" id="controls-slide--quantity"/>
          </div>
        </div>
        
      </div> */}

	</div>
  );
}

export default App;
