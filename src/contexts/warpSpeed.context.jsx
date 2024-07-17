import { createContext, useState, useEffect } from "react";

export const WarpSpeedContext = createContext({
	warpSpeed: '',
	setWarpSpeed: () => {},
});

export const WarpSpeedProvider = ({children}) => {

	const [warpSpeed, setWarpSpeed] = useState(70);

	const value = { warpSpeed, setWarpSpeed };

	return (
		<WarpSpeedContext.Provider value={value}>{children}</WarpSpeedContext.Provider>
	);

};
