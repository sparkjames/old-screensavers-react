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

export const Star = () => {

	const { graphicType } = useContext(GraphicTypeContext);
	const { warpSpeed } = useContext(WarpSpeedContext);
	const { quantity } = useContext(QuantityContext);

	const starRef = useRef(null);

	const [color, setColor] = useState(getRandom16Color());
	const [runAnimation, setRunAnimation] = useState(false);
	
	// TODO
	// Figure out a way to set the zIndex on the fly based on the timing, to see which star is in front.
	
	const timeoutRef = useRef(0);

	const resetStarPosition = () => {
		setColor(getRandom16Color());

		if ( starRef.current ) {
			starRef.current.style.left = `${initX()}px`;
			starRef.current.style.top = `${initY()}px`;
		}

		setRunAnimation(false);

		// Get a random number of miliseconds to delay triggering the movement on this star.
		let star_appear_timeout = getRandomIntInclusive(10, 4000);

		// Move the star after the random delay.
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout( moveStar, star_appear_timeout);

	};

	const moveStar = () => {
		// Set a random time (in seconds) for the transition, so some stars will be fast and others slow.
		const multiplier = parseInt( warpSpeed ) * .01;
		const transition_min = 7 * multiplier;
		const transition_max = 30 * multiplier;
		const transition_seconds = getRandomIntInclusive(transition_min, transition_max);

		if ( starRef.current ) {
			starRef.current.style.animationDuration = `${transition_seconds}s`;
		}

		// Triger the animation.
		setRunAnimation(true);

		// Reset the star position after a timeout that is delayed for the same time as the above transition.
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout( resetStarPosition, transition_seconds*1000 );

	};

	useEffect( () => {
		// console.log('new warp speed = ', warpSpeed);
		clearTimeout(timeoutRef.current);
		moveStar();
	}, [warpSpeed, quantity]);

	useEffect( () => {
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout( resetStarPosition, 1000 );
	}, []);

	return (
		<StarEl
			$color={color}
			$graphictype={graphicType}
			$runAnimation={runAnimation}
			ref={starRef}
		>
			{ graphicType === 'windows' &&
			<WindowsSVG></WindowsSVG>
			}
		</StarEl>
	);

};
