import './controls.styles.scss';
import { useContext } from 'react';
import { WarpSpeedContext } from '../../contexts/warpSpeed.context';
import { ControlGroupGraphic } from '../control-group-graphic/control-group-graphic.component';

export const Controls = () => {

	const { setWarpSpeed } = useContext(WarpSpeedContext);

	const warpSpeedOnChange = (e) => {
		setWarpSpeed( parseInt( e.target.value ) );
		console.log('setting warpSpeed value to ', parseInt( e.target.value ));
	};

	return (
		<div className="controls">
        <h1 className="controls-title">Screensaver Setup</h1>

        <ControlGroupGraphic></ControlGroupGraphic>

        <div className="controls-group controls-group--quantity">
          <h2 className="controls-heading">Warp Speed</h2>

          <div className="controls-slide-container">
            <div className="controls-slide-labels">
              <p className="controls-slide-label">Slow</p>
              <p className="controls-slide-label">Fast</p>
            </div>
            <input type="range" min="10" max="150" defaultValue="70" className="controls-slide controls-slide--quantity" id="controls-slide--quantity" onMouseUp={warpSpeedOnChange} />
          </div>
        </div>
        
      </div>
	);

};

export default Controls;
