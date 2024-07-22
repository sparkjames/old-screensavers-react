import './starpoint.styles.scss';

import { useEffect, useState, useContext } from 'react';
import { Star } from '../star/star.component';
import { QuantityContext } from '../../contexts/quantity.context';

export const Starpoint = () => {

	const [stars, setStars] = useState([]);
	const { quantity } = useContext(QuantityContext);

	useEffect( () => {
		const newStars = [];
		for( let i=0; i<quantity; i++ ){
			newStars.push(
				<Star key={i}></Star>
			);
		}
		setStars( newStars );
	}, [quantity]);

	return (
		<div className="starpoint">
			{ stars.length && stars.map( starElement => starElement )}
		</div>
	);

};
