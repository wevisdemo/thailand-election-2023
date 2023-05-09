import dynamic from 'next/dynamic';
import { LoadingScreen } from './section3/Loading';

const Section1 = dynamic(() => import('./section1'), { loading: () => <LoadingScreen /> });
const Section2 = dynamic(() => import('./section2'), { loading: () => <LoadingScreen /> });
const Section3 = dynamic(() => import('./section3'), { loading: () => <LoadingScreen />, ssr: false });

export default function Home() {
  return (
    <div className='bg-white text-black'>
      <div className='h-screen overflow-scroll scrollbar-hide
      snap-mandatory snap-always scroll-smooth snap-y'
        id='display-area'>
        <div className='snap-center shrink-0 w-screen h-screen'><Section1 /></div>
        <div className='snap-center shrink-0 w-screen h-screen'><Section2 /></div>
        <div id='section-3' className='snap-center shrink-0 w-screen h-screen'><Section3 /></div>
      </div>
    </div >
  )
}
