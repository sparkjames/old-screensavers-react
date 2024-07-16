import { getRandomIntInclusive } from './getRandomIntInclusive';

/**
 * Get a random one of the 16 color pallette.
 * @return string A hex code for a color.
 */
export const getRandom16Color = () => {
	const colorPallette = [];
	// colorPallette.push("#000000");
	colorPallette.push("#FFFFFF");
	colorPallette.push("#C0C0C0");
	colorPallette.push("#808080");
	colorPallette.push("#FF0000");
	colorPallette.push("#00FF00");
	colorPallette.push("#0000FF");
	colorPallette.push("#00FFFF");
	colorPallette.push("#FF00FF");
	colorPallette.push("#FFFF00");
	colorPallette.push("#008080");
	colorPallette.push("#800080");
	colorPallette.push("#808000");
	colorPallette.push("#800000");
	colorPallette.push("#008000");
	colorPallette.push("#000080");

	const randomIndex = getRandomIntInclusive(0,14);

	return colorPallette[randomIndex];
};

export default getRandom16Color;
