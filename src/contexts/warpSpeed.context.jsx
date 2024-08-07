import { createContext, useState } from "react";

export const WarpSpeedDefaultValue = 25;

export const WarpSpeedContext = createContext({
	warpSpeed: 0,
	setWarpSpeed: () => {},
});

export const WarpSpeedProvider = ({children}) => {

	const [warpSpeed, setWarpSpeed] = useState(WarpSpeedDefaultValue);

	const value = { warpSpeed, setWarpSpeed };

	return (
		<WarpSpeedContext.Provider value={value}>{children}</WarpSpeedContext.Provider>
	);

};
