import dynamic from 'next/dynamic';
const Section1 = dynamic(() => import('../components/section1'));
const Section2 = dynamic(() => import('../components/section2'));
const Section3 = dynamic(() => import('../components/section3'));

export default function Home() {
  return (
    <div className='bg-white text-black'>
      <div className='h-header snap-mandatory overflow-scroll snap-always scroll-smooth snap-y'>
        <div className='snap-center shrink-0 w-screen h-header'><Section1 /></div>
        <div className='snap-center shrink-0 w-screen h-header'><Section2 /></div>
        <div className='snap-center shrink-0 w-screen h-header'><Section3 /></div>
        <div className='snap-center shrink-0 w-screen h-header'>
          <div className='flex flex-col justify-end'>
            <election-bottom></election-bottom>
            <election-footer></election-footer>
          </div>
        </div>
      </div>
    </div >
  )
}
