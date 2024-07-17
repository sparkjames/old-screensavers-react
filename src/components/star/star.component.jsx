import { StarEl } from './star.styles';
import { getRandom16Color } from '../../utilities/getRandom16Color';
import { useEffect, useRef, useState, useContext } from 'react';
import getRandomIntInclusive from '../../utilities/getRandomIntInclusive';

import { ReactComponent as WindowsSVG } from '../../assets/windows311.svg';

import { GraphicTypeContext } from '../../contexts/graphicType.context';
import { WarpSpeedContext } from '../../contexts/warpSpeed.context';

// const perspective = '15in'; // The perspective distance (for CSS).
const star_z_distance = '16in'; // The distance for the stars to move (for CSS).

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

	const [left, setLeft] = useState(`${initX()}px`);
	const [top, setTop] = useState(`${initY()}px`);
	const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
	const [opacity, setOpacity] = useState('0');
	const [transition, setTransition] = useState('none');
	const [color, setColor] = useState(getRandom16Color());
	// const [zIndex, setZIndex] = useState('1');
	// TODO
	// Figure out a way to set the zIndex on the fly based on the timing, to see which star is in front.
	
	const timeoutRef = useRef(0);

	const resetStarPosition = () => {
		setLeft(`${initX()}px`);
		setTop(`${initY()}px`);
		setTransform('translate3d(0px, 0px, 0px)');
		setOpacity('0')
		setTransition('none');
		setColor(getRandom16Color());

		// Get a random number of miliseconds to delay triggering the movement on this star.
		let star_appear_timeout = getRandomIntInclusive(10, 4000);

		// Move the star after the random delay.
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout( moveStar, star_appear_timeout);

	};

	const moveStar = () => {
		// Set a random time (in seconds) for the transition, so some stars will be fast and others slow.
		// TODO: Work the value of input.controls-slide--quantity into the transition number(s) here.
		const multiplier = parseInt( warpSpeed ) * .01;
		// const multiplier = 1.25;
		const transition_min = 7 * multiplier;
		const transition_max = 30 * multiplier;
		const transition_seconds = getRandomIntInclusive(transition_min, transition_max);
		const new_transition = `transform ${transition_seconds}s linear, opacity ${transition_seconds / 2}s linear`;
		setTransition(new_transition);

		// Replace the Z transform value and set the opacity to triger the transition animation.
		const new_transform = `translate3d(0px, 0px, ${star_z_distance})`;
		const new_opacity = '1';
		setTransform(new_transform);
		setOpacity(new_opacity);

		// Reset the star position after a timeout that is delayed for the same time as the above transition.
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout( resetStarPosition, transition_seconds*1000 );

	};

	useEffect( () => {
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout( resetStarPosition, 1000 );
	}, []);

	return (
		<StarEl 
			$left={left} 
			$top={top} 
			$transform={transform} 
			$opacity={opacity} 
			$transition={transition}
			$color={color}
			$graphictype={graphicType}
		>
			{ graphicType === 'windows' &&
			<WindowsSVG></WindowsSVG>
			}
		</StarEl>
	);

};
