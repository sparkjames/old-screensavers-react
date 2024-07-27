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

	const starRef = useRef(null);

	const getStarStyleDefaults = (warpSpeed=70) => {
		const animationDuration = getRandomDuration(warpSpeed);
		const animationDelay = getRandomIntInclusive(500, 4000);
		return {
			'animationDuration': animationDuration,
			'animationDelay': animationDelay,
			'left': `${initX()}px`,
			'top': `${initY()}px`,
			'fill': getRandom16Color(),
		};
	}
	const [starStyles, setStarStyles] = useState(getStarStyleDefaults());
	
	// TODO
	// Figure out a way to set the zIndex on the fly based on the timing, to see which star is in front.

	useEffect( () => {

		const onAnimationEnd = (e) => {
			// console.log('animation ended, cancel the animation, reset properties, and start animation again...');
			// console.log(e);
			
			e.target.cancel();
			setStarStyles( getStarStyleDefaults(warpSpeed) );
			e.target.play();
		};

		starRef.current.getAnimations().forEach((anim) => {
			anim.addEventListener( 'finish', onAnimationEnd );
		});

	}, [warpSpeed]);

	return (
		<StarEl
			$graphictype={graphicType}
			$starStyles={starStyles}
			ref={starRef}
		>
			{ graphicType === 'windows' &&
			<WindowsSVG></WindowsSVG>
			}
		</StarEl>
	);

};
