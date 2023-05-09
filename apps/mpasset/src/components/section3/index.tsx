import React from 'react'

import { usePersonStore } from '../../store/person'
import { LoadingScreen } from './Loading'

import { TheyWorkForUs } from '@thailand-election-2023/database'
import * as d3 from 'd3'
import dynamic from 'next/dynamic'
import { PersonCustom } from '../../models/person'
import { placeZerosAtEnd } from '../util/calculation'
import Dialog from './Dialog'
import Tutorial from './tutorial'
import { Question, Share } from '../util/icon-main'
import Tour from 'reactour'
import OnBoard from './tutorial/OnBoard'
import { FacebookShareButton } from 'react-share'

const FirstChart = dynamic(() => import('./first-chart'), { loading: () => <LoadingScreen /> })
const SecondChart = dynamic(() => import('./second-chart'), { loading: () => <LoadingScreen /> })
const ThirdChart = dynamic(() => import('./third-chart'), { loading: () => <LoadingScreen /> })

enum VIEW_TYPE {
  MAIN_VIEW = 0,
  SELCTED_PERSON_CHART = 1,
  SELECTED_COMPANY_CHART = 2
}


const Section3 = () => {
  const [isLoading, setIsLoading] = React.useState(true)

  const {
    person, setPerson,
    yourCandidatePerson, setYourCandidatePerson,
    selectedPerson,
    setPersonOutlier,
    selectedCompany,
    party, setParty,
    setFilterPerson,
    selectedDataSet,
    selectedBusinessType,
    selectedParty,
    selectedSort,

    openTutorial,
    setOpenTutorial
  } = usePersonStore();

  const [view, setView] = React.useState(VIEW_TYPE.MAIN_VIEW)

  const fetchFromTheyWork = React.useCallback(async () => {
    const party = await TheyWorkForUs.Parties.fetchAll();
    setParty(party)
  }, [setParty])

  const fetchFromGit = React.useCallback(async () => {
    let res = await d3.csv<PersonCustom & string>('https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/people-optim.csv', d3.autoType)
    if (res) {
      const value = res.slice(0, -1) as PersonCustom[]
      console.log(value);

      await value.forEach((d) => {
        d.IsActive = String(d.IsActive) === "True",
          d.IsMp = String(d.IsMp) === "True",
          d.IsPmCandidate = String(d.IsPmCandidate) === "True",
          d.IsCabinet = String(d.IsCabinet) === "True",
          d.IsSenator = String(d.IsSenator) === "True",
          d.companyType = JSON.parse(String(d.companyType).replace(/'/g, '"')),
          d.totalValueShare = d.totalValueShare || 0,
          d.countCompShare = d.countCompShare || 0,
          d.countDirector = d.countDirector || 0,
          d.totalPctShare = d.totalPctShare || 0
      })
      const indexOfOutlier = value.map((d) => d.Name).indexOf('พิบูลย์ รัชกิจประการ')
      value[indexOfOutlier].totalPctShare = 30
      setPerson(value)
    }

  }, [setPerson])

  const fetchFromGitYourCandidate = React.useCallback(async () => {
    let res = await d3.csv<PersonCustom & string>('https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/yourcandidate/people-optim.csv', d3.autoType)
    if (res) {
      const value = res.slice(0, -1) as PersonCustom[]
      await value.forEach((d) => {
        d.Number = Number(d.Number),
          d.IsMp = Boolean(d.IsMp),
          d.IsPmCandidate = String(d.IsPmCandidate) === "True",
          d.IsCabinet = Boolean(d.IsCabinet),
          d.companyType = JSON.parse(String(d.companyType).replace(/'/g, '"')),
          d.MpType = d.MpType || 'บัญชีรายชื่อ',
          d.Images = `/mpasset/candidates/${d.PartyName}/${d.Name.replaceAll(' ', '-')}.webp`,
          d.totalValueShare = Number(d.totalValueShare) || 0,
          d.countCompShare = Number(d.countCompShare) || 0,
          d.countDirector = Number(d.countDirector) || 0,
          d.totalPctShare = Number(d.totalPctShare) || 0,
          d.totalPctShare = Number(d.totalPctShare) ? (Number(d.totalPctShare) > 30 ? 30 : Number(d.totalPctShare)) : 0
      })

      setYourCandidatePerson(value)

    }
  }, [setYourCandidatePerson])

  const fetchData = React.useCallback(async () => {
    await fetchFromGit()
    await fetchFromTheyWork()
    await fetchFromGitYourCandidate()
    setIsLoading(false)
  }, [fetchFromGit, fetchFromGitYourCandidate, fetchFromTheyWork, setIsLoading])

  React.useEffect(() => {
    let ignore = false;
    if (person.length <= 0 && party.length <= 0 && yourCandidatePerson.length <= 0) {
      if (!ignore) {
        fetchData()
      }
    } else
      setIsLoading(false)
    return () => {
      ignore = true;
    }
  }, [person, setPerson, party, setParty, yourCandidatePerson, fetchData])

  React.useLayoutEffect(() => {
    if (selectedCompany) {
      setView(VIEW_TYPE.SELECTED_COMPANY_CHART)
    } else if (selectedPerson) {
      setView(VIEW_TYPE.SELCTED_PERSON_CHART)
    } else {
      setView(VIEW_TYPE.MAIN_VIEW)
    }
  }, [selectedPerson, selectedCompany])

  React.useMemo(async () => {
    if (person.length > 0 && yourCandidatePerson.length > 0) {
      let outFilter: PersonCustom[] = selectedDataSet === 'นักการเมือง 62' ? Array.from(person) : Array.from(yourCandidatePerson)

      if (selectedBusinessType && selectedBusinessType.code !== 'all') {
        outFilter = outFilter.filter((d) => d.companyType!.includes(selectedBusinessType.code))
      }

      if (selectedParty && selectedParty.Name === 'สภาผู้แทนราษฎร') {
        outFilter = outFilter.filter((p) => p.IsMp === true)
      } else if (selectedParty && selectedParty.Name === 'วุฒิสภา') {
        outFilter = outFilter.filter((p) => p.IsSenator === true)
      } else if (selectedParty && selectedParty.Name === 'คณะรัฐมนตรี') {
        outFilter = outFilter.filter((p) => p.IsCabinet === true)
      } else if (selectedParty && selectedParty.Name !== 'ทุกพรรค') {
        outFilter = outFilter.filter((p) => p.Party?.Id === selectedParty?.Id)
      }

      if (selectedSort === 'desc')
        outFilter = outFilter.sort((a, b) => b.totalValueShare! - a.totalValueShare!)
      else
        outFilter = outFilter.sort((a, b) => a.totalValueShare! - b.totalValueShare!)

      setFilterPerson(placeZerosAtEnd(outFilter, 'countCompShare', 'countDirector'))
    }
  }, [selectedBusinessType, selectedParty, selectedSort, setFilterPerson, person, yourCandidatePerson, selectedDataSet])

  if (isLoading)
    return <LoadingScreen />

  return (
    <div className='h-full inset-0 flex flex-col relative overflow-hidden'>
      <OnBoard>
        <FirstChart />
        <Dialog open={view === VIEW_TYPE.SELCTED_PERSON_CHART}>
          <div className='w-full h-full bg-white bg-opacity-50'>
            <SecondChart />
          </div>
        </Dialog>
        <Dialog open={view === VIEW_TYPE.SELECTED_COMPANY_CHART}>
          <div className='w-full h-full bg-white bg-opacity-50'>
            <ThirdChart />
          </div>
        </Dialog>
        <Dialog open={(!isLoading && openTutorial)} onClose={() => setOpenTutorial(false)}><Tutorial /></Dialog>
        <div className='absolute bottom-[10px] right-[10px]'>
          <div className='flex flex-col gap-[5px]'>
            <button onClick={() => setOpenTutorial(true)}>
              <Question />
            </button>
            <FacebookShareButton url={`${process.env.SECURE_HOST}${process.env.BASE_PATH}`}
              className='cursor-pointer'>
              <Share />
            </FacebookShareButton>
          </div>
        </div>
        <Dialog open={isLoading}><LoadingScreen /></Dialog>
      </OnBoard>
    </div >
  )
}

export default Section3