import './control-group-quantity.styles.scss';

import { useContext } from 'react';
import { QuantityContext } from '../../contexts/quantity.context';

export const ControlGroupQuantity = () => {

	const { setQuantity } = useContext(QuantityContext);

	const quantityOnChange = (e) => {
		setQuantity( parseInt( e.target.value ) );
		console.log('quantityOnChange() setting quantity value to ', parseInt( e.target.value ));
	};

	return (
		<div className="controls-group controls-group--quantity">
			<h2 className="controls-heading">Quantity</h2>

			<div className="controls-number-container">
				<label className="controls-number-label" htmlFor="controls-number--quantity">Quantity</label>
				<input type="number" min="10" max="250" defaultValue="100" className="controls-number controls-number--quantity" id="controls-number--quantity" onChange={quantityOnChange} />
			</div>
		</div>
	);

};

export default ControlGroupQuantity;
