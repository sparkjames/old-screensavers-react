import { createContext, useState } from "react";

export const GraphicTypeContext = createContext({
	graphicType: '',
	setGraphicType: () => {},
});

export const GraphicTypeProvider = ({children}) => {

	const [graphicType, setGraphicType] = useState('windows');

	const value = { graphicType, setGraphicType };

	return (
		<GraphicTypeContext.Provider value={value}>{children}</GraphicTypeContext.Provider>
	);

};
