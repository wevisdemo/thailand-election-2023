import { useEffect } from 'react';
import * as loadingLottie from '../..//public/loading.json';
import Lottie from 'react-lottie';

const Loading = () => {
	useEffect(() => {}, []);
	const lottieOptions = {
		loop: true,
		autoplay: true,
		animationData: loadingLottie,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return <Lottie options={lottieOptions}></Lottie>;
};

export default Loading;
