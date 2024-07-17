import { StarEl } from './star.styles';
import { getRandom16Color } from '../../utilities/getRandom16Color';
import { useEffect, useState } from 'react';
import getRandomIntInclusive from '../../utilities/getRandomIntInclusive';

const perspective = '15in'; // The perspective distance (for CSS).
const star_z_distance = '16in'; // The distance for the stars to move (for CSS).

const windowsSVG = `<svg viewBox="0 0 173 142" xmlns="http://www.w3.org/2000/svg"><path style="display:inline;fill:${getRandom16Color()};stroke-width:0" d="M194-32.5c-14 .1-28 3.5-39 9v16.9c9-4.5 16-7.9 28-8.9v40.2c-11 0-20 3-28 7v68c22-13 48-17 83 0V-22.2c-15-7.2-29-10.3-43-10.3zm5 16.1c8 0 14 .8 21 4.5v39.6c-10-4-18-5-27-4v-40c2-.1 4-.1 6-.1zm-16 51.1v39c-10 1-21 4-28 9v-40c9-5 16-7 28-8zm10 0c10 0 18 0 28 4v39c-9-4-18-5-28-4zM152-22.2v14.3L138 .6V-15ZM152-4.7V9.6l-14 8.9v-16zM152 13.5v14l-15 9 1-16zM152 30.5v15l-14 8v-15zM152 48.5v14l-15 8 1-15zM152 66.5v14l-14 8v-15zM152 84.5v14l-14 8.5V91.5ZM134-16.9v13.8l-14 7.4v-14zM134 1.1v13.4l-14 8V8.4ZM134 18.5v13l-14 8v-14zM134 36.5v14l-14 7v-14zM134 53.5v14l-14 8v-14zM134 70.5v14l-14 7v-14zM134 87.5V102l-14 8V95.5ZM117-16.1v12.5l-12 5.8v-12.5ZM117 2v12.5l-12 6V7.8ZM117 18.5v13l-12 6v-13zM117 36.5v12l-12 6v-12zM117 54.5v13l-12 5v-12zM117 71.5v12l-12 6v-12zM117 88.5V102l-12 6V94.5ZM100-14.2V-5l-9.4 4v-8.5zM100 3.6v8.9l-9.5 4V8.3ZM100 20.5v9l-9.4 4v-8zM100 38.5v9l-9.5 4v-9zM100 56.5v9l-9.5 4v-8zM100 73.5v9l-9.4 4v-8zM101 91.5v9.5l-10.3 4v-8.5zM84.2-19.5v7.1l-7.1 4.3v-7.5zM84.3-1.7v7.1l-7.1 4.3V2.2ZM84.3 15.5v7l-7.1 4v-7zM84.3 33.5v7l-7.1 4v-7zM84.3 51.5v7l-7.1 4v-8zM84.5 67.5v8l-7.1 4v-8zM84.4 85.5v7l-7.1 4v-7zM64.9 91.5l-.1-5 5.5-3 .1 5zM65.2 73.5l-.1-5 5.5-3 .1 5zM65 56.5l-.1-5 5.5-3 .1 5zM64.9 38.5l-.1-5 5.5-3 .1 5zM65.1 20.5l-.2-5 5.5-3 .2 5zM65.1 3.4l-.1-5 5.5-3 .1 5zM65-14.7l-.1-5 5.5-3 .1 5z" transform="translate(-64.8 32.5)"/></svg>`;

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

	const [left, setLeft] = useState(`${initX()}px`);
	const [top, setTop] = useState(`${initY()}px`);
	const [transform, setTransform] = useState(`translate3d(0px, 0px, 0px)`);
	const [opacity, setOpacity] = useState(`0`);
	const [transition, setTransition] = useState(`none`);

	const moveStar = () => {
		// const multiplier = parseInt( document.querySelector('.controls-slide--quantity').value ) * .01;
		const multiplier = 1.25;
		const transition_min = 7 * multiplier;
		const transition_max = 30 * multiplier;
		const transition_seconds = getRandomIntInclusive(transition_min, transition_max);
		const new_transition = `transform ${transition_seconds}s linear, opacity ${transition_seconds / 2}s linear`;

		// Replace the Z transform value and set the opacity to triger the transition animation.
		const new_transform = `translate3d(0px, 0px, ${star_z_distance})`;
		const new_opacity = '1';

		setTransform(new_transform);
		setTransition(new_transition);
		setOpacity(new_opacity);
	};

	useEffect( () => {
		setTimeout( moveStar, 10 );
	}, []);

	return (
		<StarEl 
			$left={left} 
			$top={top} 
			$transform={transform} 
			$opacity={opacity} 
			$transition={transition}
		>
			{ windowsSVG }
		</StarEl>
	);

};
