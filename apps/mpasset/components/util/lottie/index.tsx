import Lottie from 'lottie-react'
import businessLottie from './business.json'
import notfoundLottie from './notfound.json'

export const LottieBusiness = () => <Lottie animationData={businessLottie} loop={true} />
export const LottieNotFound = () => <Lottie animationData={notfoundLottie} loop={true} />