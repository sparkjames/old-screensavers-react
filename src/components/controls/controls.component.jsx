import './controls.styles.scss';
import { ControlGroupGraphic } from '../control-group-graphic/control-group-graphic.component';
import ControlGroupWarpSpeed from '../control-group-warpspeed/control-group-warpspeed.component';
import ControlGroupQuantity from '../control-group-quantity/control-group-quantity.component';
import { useRef, useState } from 'react';

export const Controls = () => {

	const [hideControls, setHideControls] = useState(false);
	const controlsRef = useRef(null);

	const titleBarCloseOnClick = () => {
		setHideControls( !hideControls );
	};

	const controlsOnMouseOver = () => {
		// console.log(controlsRef.current);
		controlsRef.current.style.opacity = '1.0';
	};
	const controlsOnMouseLeave = () => {
		// console.log(controlsRef.current);
		controlsRef.current.style.opacity = '0.33';
	};

	return (
		<div 
			className="controls" 
			ref={controlsRef} 
			onMouseOver={controlsOnMouseOver}
			onMouseLeave={controlsOnMouseLeave}
			style={{opacity: '0.33'}}
			>
			<div className="controls-titleBar">
				<button className="controls-titleBarClose" type="button" onClick={titleBarCloseOnClick}>Toggle Controls<span className="controls-titleBarCloseBar"></span></button>
				<h1 className="controls-title">Screensaver Setup</h1>
			</div>

			{ hideControls === false &&
			<div className="controls-grid">
				<ControlGroupGraphic></ControlGroupGraphic>
				<ControlGroupQuantity></ControlGroupQuantity>
				<ControlGroupWarpSpeed></ControlGroupWarpSpeed>
			</div>
			}
        
		</div>
	);

};

export default Controls;
