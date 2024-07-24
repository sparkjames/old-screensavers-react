import { StarEl } from './star.styles';
import { getRandom16Color } from '../../utilities/getRandom16Color';
import { useEffect, useRef, useState, useContext } from 'react';
import getRandomIntInclusive from '../../utilities/getRandomIntInclusive';

import { ReactComponent as WindowsSVG } from '../../assets/windows311.svg';

import { GraphicTypeContext } from '../../contexts/graphicType.context';
import { WarpSpeedContext } from '../../contexts/warpSpeed.context';

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

function getRandomDuration( warpSpeed = 70 ){
	const multiplier = parseInt( warpSpeed ) * .01;
	const animation_min = 7 * multiplier;
	const animation_max = 30 * multiplier;
	return getRandomIntInclusive(animation_min, animation_max);
}

export const Star = () => {

	const { graphicType } = useContext(GraphicTypeContext);
	const { warpSpeed } = useContext(WarpSpeedContext);

	const timeoutRef = useRef(0);
	const intervalRef = useRef(0);

	const [runAnimation, setRunAnimation] = useState(0);

	function getStarStyleDefaults() {
		return {
			'animationDuration': getRandomDuration(warpSpeed),
			'animationDelay': getRandomIntInclusive(500, 4000),
			'left': `${initX()}px`,
			'top': `${initY()}px`,
			'fill': getRandom16Color(),
		};
	}
	const [starStyles, setStarStyles] = useState(getStarStyleDefaults());
	
	// TODO
	// Figure out a way to set the zIndex on the fly based on the timing, to see which star is in front.

	// const resetStarPosition = () => {
	// 	setRunAnimation(0);
		
	// 	const newStarStyles = getStarStyleDefaults();
	// 	setStarStyles(newStarStyles);

	// 	timeoutRef.current = setTimeout( moveStar, getRandomIntInclusive(10, 4000));

	// 	return () => {
	// 		clearTimeout(timeoutRef.current);
	// 	}
	// };

	// const moveStar = () => {

	// 	// Reset the star position after a timeout that is delayed for the same time as the above transition.
	// 	const newAnimationTime = (starStyles.animationDuration * 1000) + starStyles.animationDelay;

	// 	// Triger the animation.
	// 	setRunAnimation(newAnimationTime);

	// 	timeoutRef.current = setTimeout( resetStarPosition, newAnimationTime);

	// 	return () => {
	// 		clearTimeout(timeoutRef.current);
	// 	}
	// };

	// useEffect( () => {
	// 	moveStar();
	// }, [warpSpeed, moveStar]);

	useEffect( () => {
		console.log('run once per star');
		const newAnimationTime = (starStyles.animationDuration * 1000) + starStyles.animationDelay;
		setRunAnimation(newAnimationTime);

		timeoutRef.current = setTimeout( () => {
			setRunAnimation(0);
			setStarStyles( getStarStyleDefaults() );
		}, newAnimationTime);
		// resetStarPosition();

		return () => clearTimeout(timeoutRef.current);
	}, []);

	useEffect( () => {
		if ( runAnimation === 0 ) {
			const newAnimationTime = (starStyles.animationDuration * 1000) + starStyles.animationDelay;
			setRunAnimation(newAnimationTime);

			timeoutRef.current = setTimeout( () => {
				setRunAnimation(0);
				setStarStyles( getStarStyleDefaults() );
			}, newAnimationTime);
		}

		return () => clearTimeout(timeoutRef.current);
	}, [runAnimation]);

	return (
		<StarEl
			$graphictype={graphicType}
			$runAnimation={runAnimation}
			$starStyles={starStyles}
		>
			{ graphicType === 'windows' &&
			<WindowsSVG></WindowsSVG>
			}
		</StarEl>
	);

};
