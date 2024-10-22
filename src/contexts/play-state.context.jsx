import { createContext, useState } from "react";

export const PlayStateContext = createContext({
	playState: 1,
	setPlayState: () => {},
});

export const PlayStateProvider = ({children}) => {

	const [playState, setPlayState] = useState(1);

	const value = { playState, setPlayState };

	return (
		<PlayStateContext.Provider value={value}>{children}</PlayStateContext.Provider>
	);

};
