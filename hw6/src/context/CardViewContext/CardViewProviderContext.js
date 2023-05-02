import { useState } from 'react';
import CardViewContext from './CardViewContext';

const CardViewContextProvider = ({children}) => {

	const [isCardView, setIsCardView] = useState(true);

	return (
		<CardViewContext.Provider value={{ isCardView, setIsCardView }}>
			{children}
		</CardViewContext.Provider>
	);
}

export default CardViewContextProvider;
