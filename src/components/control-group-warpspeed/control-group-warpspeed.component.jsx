import './control-group-warpspeed.styles.scss';

import { useContext } from 'react';
import { WarpSpeedContext } from '../../contexts/warpSpeed.context';

export const ControlGroupWarpSpeed = () => {

	const { setWarpSpeed } = useContext(WarpSpeedContext);

	const warpSpeedOnChange = (e) => {
		setWarpSpeed( parseInt( e.target.value ) );
		console.log('setting warpSpeed value to ', parseInt( e.target.value ));
	};

	return (
		<div className="controls-group controls-group--warpspeed">
			<h2 className="controls-heading">Warp Speed</h2>

			<div className="controls-slide-container">
				<div className="controls-slide-labels">
					<p className="controls-slide-label">Slow</p>
					<p className="controls-slide-label">Fast</p>
				</div>
				<input type="range" min="10" max="150" defaultValue="70" className="controls-slide controls-slide--warpspeed" id="controls-slide--warpspeed" onMouseUp={warpSpeedOnChange} />
			</div>
		</div>
	);

};

export default ControlGroupWarpSpeed;
