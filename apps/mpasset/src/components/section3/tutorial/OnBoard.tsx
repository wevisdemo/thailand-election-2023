import { ReactElement } from 'react';

type Props = {
  children: ReactElement | string | ReactElement[]
}

import { TourProvider } from '@reactour/tour';
import { tourSteps } from './steps';

const OnBoard = ({ children }: Props) => {

  return (
    <TourProvider
      steps={tourSteps}
      showBadge={false}
      showNavigation={false}
      showDots={false}
      showCloseButton={false}
      styles={{
        maskArea: (base) => ({ ...base, background: '#09090937' }),
        popover: (base) => ({ ...base, padding: 0, background: 'transparent', boxShadow: 'unset' })
      }}
      position={'center'}
    >
      {children}
    </TourProvider>
  )
}

export default OnBoard