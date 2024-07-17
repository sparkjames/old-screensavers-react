import { createContext, useState } from "react";

export const WarpSpeedContext = createContext({
	warpSpeed: 0,
	setWarpSpeed: () => {},
});

export const WarpSpeedProvider = ({children}) => {

	const [warpSpeed, setWarpSpeed] = useState(70);

	const value = { warpSpeed, setWarpSpeed };

	return (
		<WarpSpeedContext.Provider value={value}>{children}</WarpSpeedContext.Provider>
	);

};
