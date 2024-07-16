import './starpoint.styles.scss';

import { Star } from '../star/star.component';
import { useEffect, useState } from 'react';

export const Starpoint = ( {starCount} ) => {

	const [stars, setStars] = useState([]);

	useEffect( () => {
		const newStars = [];
		for( let i=0; i<starCount; i++ ){
			newStars.push(
				<Star></Star>
			);
		}
		setStars( newStars );
	}, [starCount]);

	return (
		<div className="starpoint">
			{ stars.length && stars.map( starElement => starElement )}
		</div>
	);

};
