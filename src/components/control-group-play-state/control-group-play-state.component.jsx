import './control-group-play-state.styles.scss';

import { useContext } from 'react';
import { PlayStateContext } from '../../contexts/play-state.context';

export const ControlGroupPlayState = () => {

	const { playState, setPlayState } = useContext(PlayStateContext);

	const playStateOnChange = () => {
		setPlayState( ! playState );
	};

	return (
		<div className="controls-group controls-group--play-state">
			<h2 className="controls-heading">Play / Stop</h2>

			<div className="controls-number-container">
				<button type="button" className="controls-button controls-button--play-state" id="controls-button--play-state" onClick={playStateOnChange}>
					{ playState ? String.fromCharCode(8883) : String.fromCharCode(8214) }
				</button>
			</div>
		</div>
	);

};

export default ControlGroupPlayState;
