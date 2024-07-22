import { createContext, useState } from "react";

export const QuantityContext = createContext({
	quantity: 0,
	setQuantity: () => {},
});

export const QuantityProvider = ({children}) => {

	const [quantity, setQuantity] = useState(100);

	const value = { quantity, setQuantity };

	return (
		<QuantityContext.Provider value={value}>{children}</QuantityContext.Provider>
	);

};
