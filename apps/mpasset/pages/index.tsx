import TestBTN from '../components/TestBTN';
import TestStyle from '../components/TestStyle';

import dynamic from 'next/dynamic';
import { usePathname, useRouter } from 'next/navigation';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import { Close, List, Question, Search, Share, Shuffle } from '../components/util/icon-main';

const PartyTree = dynamic(() => import('../components/PartyTree'))

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className='bg-white text-black'>
      <div className='h-header snap-mandatory overflow-scroll snap-always scroll-smooth snap-y'>
        <div className='snap-center shrink-0 w-screen h-header'><Section1 /></div>
        <div className='snap-center shrink-0 w-screen h-header'><Section2 /></div>
        <div className='snap-center shrink-0 w-screen h-header'><Section3 /></div>
        <div className='snap-center shrink-0 w-screen h-header'>
          <election-bottom></election-bottom>
          <election-footer></election-footer>
        </div>
      </div>

      {/* <TestNoco /> */}
      {/* <PartyTree /> */}
      <TestBTN />
      <TestStyle />

    </div >
  )
}
