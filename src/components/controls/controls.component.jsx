import './controls.styles.scss';
import { ControlGroupGraphic } from '../control-group-graphic/control-group-graphic.component';
import ControlGroupWarpSpeed from '../control-group-warpspeed/control-group-warpspeed.component';
import ControlGroupQuantity from '../control-group-quantity/control-group-quantity.component';

export const Controls = () => {

	return (
		<div className="controls">
        <h1 className="controls-title">Screensaver Setup</h1>

        <ControlGroupGraphic></ControlGroupGraphic>

        <ControlGroupQuantity></ControlGroupQuantity>

        <ControlGroupWarpSpeed></ControlGroupWarpSpeed>
        
      </div>
	);

};

export default Controls;
