import { useState, useEffect, FC } from 'react';
type Props = {
	children: FC;
};
function SafeHydrate({ children }: Props) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted && children;
}

export default SafeHydrate;
