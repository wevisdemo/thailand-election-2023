import { Party, } from '@thailand-election-2023/database'
import React from 'react'

import { usePersonStore } from '../../store/person'
import Filter, { SelectedFilterType } from './Filter'
import FirstChart from './first-chart'
import Loading from './Loading'
import SearchPerson from './SearchPerson'
import SelectedPersonDetail from './person-detail/SelectedPersonDetail'

import * as d3 from 'd3';
import { PersonCustom } from '../../models/person'
import { placeZerosAtEnd } from '../util/calculation'

type Props = {}

const customParty: Party[] = [{
  Name: 'ทุกพรรค',
  Color: null,
  PartyType: null,
  PartyOrdinal: null,
  PartyGroup: 'ทุกพรรค',
  Description: 'ทุกพรรค',
  EstablishedDate: '',
  DissolvedDate: null,
  Speaker: null,
  FirstDeputySpeaker: null,
  SecondDeputySpeaker: null,
  Whip: null,
  OppositionLeader: null,
  PartyLeader: null,
  PartySecretary: null,
  Website: null,
  Facebook: null,
  Twitter: null,
  IsActive: null,
  Id: -1,
  EnName: null,
  Images: null,
},
{
  Name: 'ไม่สังกัดพรรค',
  Color: null,
  PartyType: null,
  PartyOrdinal: null,
  PartyGroup: 'ไม่สังกัดพรรค',
  Description: 'ไม่สังกัดพรรค',
  EstablishedDate: '',
  DissolvedDate: null,
  Speaker: null,
  FirstDeputySpeaker: null,
  SecondDeputySpeaker: null,
  Whip: null,
  OppositionLeader: null,
  PartyLeader: null,
  PartySecretary: null,
  Website: null,
  Facebook: null,
  Twitter: null,
  IsActive: null,
  Id: -1,
  EnName: null,
  Images: null,
}
]



const Section3 = (props: Props) => {
  const [filter, setFilter] = React.useState<SelectedFilterType>({
    dataSet: 'ผู้สมัคร 66',
    businessType: 'ทุกหมวดธุรกิจ',
    party: 'ทุกพรรค',
    sort: 'สูงสุด',
  })
  const [isLoading, setIsLoading] = React.useState(true)

  const { person, setPerson, selectedPerson, setPersonOutlier, personOutlier,
    party, setParty } = usePersonStore();


  const fetchFromGit = React.useCallback(async () => {
    await d3.json<PersonCustom[]>('https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/people.json').then((value) => {
      if (value) {
        let sortArray = placeZerosAtEnd(value, 'countCompShare', 'countDirector')
        setPerson(sortArray.slice(1))
        setPersonOutlier(sortArray.slice(0, 1))
        setIsLoading(false)
      }
    })
  }, [setPerson, setPersonOutlier])


  React.useEffect(() => {
    let ignore = false;
    if (person.length <= 0 && party.length <= 0)

      if (!ignore) { fetchFromGit() }
    // Promise.all([TheyWorkForUs.People.fetchAll(), TheyWorkForUs.Parties.fetchAll()]).then((values) => {
    //   if (!ignore) {
    //     setPerson(values[0] as Person[])
    //     setParty([...customParty, ...values[1].splice(3)] as Party[])
    //     setIsLoading(false)
    //   }
    // });
    return () => {
      ignore = true;
    }
  }, [person, setPerson, party, setParty, fetchFromGit])

  // usePersonStore


  const [isOpenSearchDialog, setIsOpenSearchDialog] = React.useState(false)

  if (isLoading) return <div className='h-screen flex flex-col'><Loading /></div>

  return (
    <div className='h-full inset-0 flex flex-col relative overflow-hidden'>
      {
        !selectedPerson ?
          <>
            <Filter selectedFilter={filter} onOpenSeachDialog={setIsOpenSearchDialog} />
            <div className='flex flex-row justify-between px-[10px]'>
              <div className='typo-b7 text-gray-3 typo-ibmplex'>*แสดงสีเฉพาะพรรคที่อยู่ในสภาสมัยล่าสุด</div>
              <div className='typo-b7 text-right'>ล้านบาท</div>
            </div>
            <FirstChart />
            <SearchPerson open={isOpenSearchDialog} onClose={() => setIsOpenSearchDialog(false)} />
          </>
          :
          <SelectedPersonDetail />
      }
    </div>
  )
}

export default Section3