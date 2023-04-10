import React from 'react';
import ClickGuide from '../ClickGuide';
import LeftNav from './LeftNav';
import MainNav from './MainNav';

// Project = TheyWorkForUs, Table = Person
type Props = {}

export type ScrollChartControlType = {
  scrollTop: number,
  scrollHeight: number,
  clientHeight: number
}

const FirstChart = (props: Props) => {

  const chartRef = React.useRef<HTMLDivElement>(null)

  const [resolution, setResolution] = React.useState<{ width: number, height: number }>({
    width: 0,
    height: 0
  })

  const [mainScroll, setMainScroll] = React.useState<ScrollChartControlType>({
    scrollTop: 0,
    scrollHeight: 0,
    clientHeight: 0
  })

  React.useEffect(() => {
    if (chartRef.current) {
      setResolution({
        width: chartRef.current.clientWidth,
        height: chartRef.current.clientHeight
      })
    }
  }, [chartRef])

  React.useLayoutEffect(() => {
    function updateSize() {
      if (chartRef.current) {
        setResolution({
          width: chartRef.current.clientWidth,
          height: chartRef.current.clientHeight
        })
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className='px-0 w-full h-full flex-grow-1'>
      <div className='w-full h-full flex-grow-1 relative' ref={chartRef}>
        <div className='w-full h-full flex flex-row'>
          <div className='w-1/4 h-full'>
            <LeftNav
              width={resolution.width * .25}
              height={resolution.height}
              scrollControl={mainScroll}
            />
          </div>
          <div className='w-3/4'>
            <MainNav width={resolution.width * .75} height={resolution.height} onScroll={setMainScroll} />
          </div>
        </div>
        <div className='absolute bottom-[10px] inset-x-0'>
          <ClickGuide />
        </div>
      </div>
    </div>
  )
}

export default FirstChart