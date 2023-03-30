import { useState, useEffect } from 'react';
type Props = {
	children: string | JSX.Element | JSX.Element[];
};
function SafeHydrate({ children }: Props) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted && children;
}

export default SafeHydrate;
