import { StarEl } from './star.styles';
import { getRandom16Color } from '../../utilities/getRandom16Color';
import { useEffect, useRef, useState, useContext } from 'react';
import getRandomIntInclusive from '../../utilities/getRandomIntInclusive';

import { ReactComponent as WindowsSVG } from '../../assets/windows311.svg';

import { GraphicTypeContext } from '../../contexts/graphicType.context';
import { WarpSpeedContext } from '../../contexts/warpSpeed.context';
import { QuantityContext } from '../../contexts/quantity.context';

// const perspective = '15in'; // The perspective distance (for CSS).
// const star_z_distance = '16in'; // The distance for the stars to move (for CSS).

/**
 * Get a random integer that is at most 75% of the screen width.
 * 
 * @return int Random integer used for X or left position.
 */
function initX(){
	const x_max = (.75 * window.innerWidth) / 2; // The max distance from the starting point where the star will appear.
	const x_min = 0 - x_max;
	const x = getRandomIntInclusive(x_min , x_max);
	return x;
}

/**
 * Get a random integer that is at most 75% of the screen height.
 * 
 * @return int Random integer used for Y or top position.
 */
function initY(){
	const y_max = (.75 * window.innerHeight) / 2;
	const y_min = 0 - y_max;
	const y = getRandomIntInclusive(y_min, y_max);
	return y;
}

function getRandomDuration( warpSpeed = 1 ){
	const multiplier = parseInt( warpSpeed ) * .01;
	const animation_min = 7 * multiplier;
	const animation_max = 30 * multiplier;
	return getRandomIntInclusive(animation_min, animation_max);
}

export const Star = () => {

	const { graphicType } = useContext(GraphicTypeContext);
	const { warpSpeed } = useContext(WarpSpeedContext);
	const { quantity } = useContext(QuantityContext);

	const starRef = useRef(null);
	const timeoutRef = useRef(0);

	const [runAnimation, setRunAnimation] = useState(false);
	const [starStyles, setStarStyles] = useState({
		'animationDuration': `${getRandomDuration()}s`,
		'left': `${initX()}px`,
		'top': `${initY()}px`,
		'fill': getRandom16Color(),
	});
	
	// TODO
	// Figure out a way to set the zIndex on the fly based on the timing, to see which star is in front.

	const resetStarPosition = () => {
		const newStarStyles = {
			'animationDuration': `${getRandomDuration()}s`,
			'left': `${initX()}px`,
			'top': `${initY()}px`,
			'fill': getRandom16Color(),
		};

		setRunAnimation(false);
		setStarStyles(newStarStyles);

		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout( moveStar, getRandomIntInclusive(10, 4000));
	};

	const moveStar = () => {
		// Triger the animation.
		setRunAnimation(true);

		// Reset the star position after a timeout that is delayed for the same time as the above transition.
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout( resetStarPosition, getRandomDuration() * 1000);
	};

	useEffect( moveStar, [warpSpeed, quantity]);

	useEffect( () => {
		console.log('run once per star');
		timeoutRef.current = setTimeout( resetStarPosition, getRandomDuration() * 1000);
	}, []);

	return (
		<StarEl
			$graphictype={graphicType}
			$runAnimation={runAnimation}
			$starStyles={starStyles}
			ref={starRef}
		>
			{ graphicType === 'windows' &&
			<WindowsSVG></WindowsSVG>
			}
		</StarEl>
	);

};
