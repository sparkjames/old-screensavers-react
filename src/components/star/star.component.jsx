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
	const firstRun = useRef(true);

	const [runAnimation, setRunAnimation] = useState(null);

	// function resetAnimation() {
	// 	if ( starRef.current ) {
	// 		starRef.current.style.animation = 'none';
	// 		// eslint-disable-next-line no-unused-expressions
	// 		starRef.current.offsetHeight; // trigger reflow
	// 		starRef.current.style.animation = null; 
	// 	}
	// }

	const getStarStyleDefaults = (warpSpeed=70) => {
		const animationDuration = getRandomDuration(warpSpeed);
		const animationDelay = getRandomIntInclusive(500, 4000);
		return {
			'animationDuration': animationDuration,
			'animationDelay': animationDelay,
			'animationTotal': (animationDuration * 1000) + animationDelay,
			'left': `${initX()}px`,
			'top': `${initY()}px`,
			'fill': getRandom16Color(),
		};
	}
	const [starStyles, setStarStyles] = useState(getStarStyleDefaults());

	const onAnimationEnd = (e) => {
		console.log('animation ended...');
		console.log(e);
		e.target.cancel();
		setStarStyles( getStarStyleDefaults(warpSpeed) );
		e.target.play();
	};
	
	// TODO
	// Figure out a way to set the zIndex on the fly based on the timing, to see which star is in front.

	useEffect( () => {
		console.log('run once per star, animationTotal = ', starStyles.animationTotal);
		setRunAnimation(starStyles.animationTotal);

		// const timeout = setTimeout( () => {
		// 	// console.log('==========');
		// 	// console.log('OHAI');
		// 	// console.log('==========');
		// 	console.log('initial timeout running, setting runAnimation to 0');
		// 	setRunAnimation(0);
		// 	firstRun.current = false;
		// 	// setStarStyles( getStarStyleDefaults() );
		// }, starStyles.animationTotal);

		starRef.current.getAnimations().forEach((anim) => {
			console.log('anim = ', anim);
			// anim.cancel();
			// anim.play();
			anim.addEventListener( 'finish', onAnimationEnd );
		});

		// starRef.current.addEventListener( "animationend",  onAnimationEnd );

		// return () => clearTimeout(timeout);
	}, []);

	useEffect( () => {
		console.log('starStyles updated ', starStyles );
		console.log('firstRun.current = ', firstRun.current );

		// let timeout = null;

		// if ( firstRun.current === false ) {
		// 	console.log('reset animation');
		// 	// resetAnimation();

		// 	clearTimeout(timeout);
		// 	timeout = setTimeout( () => {
		// 		console.log('In new timeout, set runAnimation to 0');
		// 		setRunAnimation(0);
		// 	}, starStyles.animationTotal);
		// }

		// return () => clearTimeout(timeout);
	}, [starStyles]);

	// useEffect( () => {
	// 	console.log('runAnimation updated ', runAnimation );
	// 	// console.log('starStyles updated ', starStyles );

	// 	if ( runAnimation === 0 ) {
	// 		console.log('runAnimation === 0, now set animationTotal to new number and/or reset the star position/animation');
	// 		// setRunAnimation(starStyles.animationTotal);
	// 		setStarStyles( getStarStyleDefaults(warpSpeed) );
	// 	}
	// }, [runAnimation, warpSpeed]);

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
