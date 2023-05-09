import React from 'react'
import { Shuffle } from '../util/icon-main'
import * as d3 from 'd3'
import { usePersonStore } from '../../store/person'

type Props = {}

interface ShuffleData {
  index: number
}

const ShuffleButton = (props: Props) => {

  const { person, yourCandidatePerson, setSelectedPerson, selectedDataSet, setSelectedCompany, party } = usePersonStore()

  const [shuffleList62, setShuffleList62] = React.useState<ShuffleData[]>([])
  const [shuffleList66, setShuffleList66] = React.useState<ShuffleData[]>([])

  const fetchFromGit = React.useCallback(async () => {
    const promises: Promise<ShuffleData[] | undefined>[] = []

    promises.push(d3.csv<ShuffleData & string>(`https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/shuffle-index.csv`, d3.autoType))
    promises.push(d3.csv<ShuffleData & string>(`https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/yourcandidate/shuffle-index.csv`, d3.autoType))

    await Promise.all(promises).then((value) => {
      console.log(value)
      setShuffleList62(value[0]?.slice(0, -1) as ShuffleData[])
      setShuffleList66(value[1]?.slice(0, -1) as ShuffleData[])
    }).catch((err) => console.log(err))
  }, [])

  React.useEffect(() => {
    if (shuffleList62.length <= 0 && shuffleList66.length <= 0) {
      fetchFromGit()
    }
  }, [shuffleList62, shuffleList66, fetchFromGit])

  const handleClick = () => {
    const index = Math.round(Math.random() * 49)
    const pIndex = selectedDataSet === 'นักการเมือง 62' ? shuffleList62[index].index : shuffleList66[index].index
    const personData = selectedDataSet === 'นักการเมือง 62' ? person[pIndex] : yourCandidatePerson[pIndex]
    const p = party.find((p) => p.Name === personData.PartyName)
    if (p)
      setSelectedPerson({ ...personData, Party: { Id: p.Id, Name: p.Name, Color: p.Color, Images: Array.isArray(p.Images) ? p.Images[0]!.url : null } })
    else
      setSelectedPerson(personData)
    setSelectedCompany(null)
  }

  return (
    <button onClick={() => handleClick()}>
      <Shuffle />
    </button>
  )
}

export default ShuffleButton