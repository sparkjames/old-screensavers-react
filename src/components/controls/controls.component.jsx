import './controls.component.scss';
import { GraphicTypeContext } from '../../contexts/graphicType.context';
import { WarpSpeedContext } from '../../contexts/warpSpeed.context';
import { useContext } from 'react';

export const Controls = () => {

	const { graphicType, setGraphicType } = useContext(GraphicTypeContext);
	const { setWarpSpeed } = useContext(WarpSpeedContext);

	const graphicTypeOnChange = (e) => {
		// console.log( 'graphicTypeOnChange()');
    // console.log( e.target.value );

    const allowedGraphicTypes = [
      'windows',
      'stars',
    ];

    if ( allowedGraphicTypes.indexOf(e.target.value) >= 0 ){
      setGraphicType( e.target.value );
    }
	};

	const warpSpeedOnChange = (e) => {
		setWarpSpeed( parseInt( e.target.value ) );
		console.log('setting warpSpeed value to ', parseInt( e.target.value ));
	};

	return (
		<div className="controls">
        <h1 className="controls-title">Screensaver Setup</h1>

        <div className="controls-group controls-group--graphic">
          <h2 className="controls-heading">Graphic</h2>

          <ul className="controls-list">
            <li className="controls-list-item">
              <label htmlFor="graphic-windows"><input type="radio" className="controls-radio controls-radio--graphic" name="graphic" id="graphic-windows" value="windows" defaultChecked={graphicType==='windows'} onChange={graphicTypeOnChange} />Windows</label>
            </li>
            <li className="controls-list-item">
              <label htmlFor="graphic-stars"><input type="radio" className="controls-radio controls-radio--graphic" name="graphic" id="graphic-stars" value="stars" defaultChecked={graphicType==='stars'} onChange={graphicTypeOnChange} />Stars</label>
            </li>
          </ul>
          
        </div>

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
