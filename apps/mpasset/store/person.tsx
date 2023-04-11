import { Person, Party } from '@thailand-election-2023/database'
import { create } from 'zustand'
import { BusinessType } from '../models/business'
import { CredenData, PersonCustom } from '../models/person'


interface PersonState {
  person: PersonCustom[]
  setPerson: (by: PersonCustom[]) => void
  personOutlier: PersonCustom[]
  setPersonOutlier: (by: PersonCustom[]) => void

  // chart2
  selectedPerson?: PersonCustom | null
  setSelectedPerson: (by: PersonCustom | null) => void
  directorData: CredenData[]
  setDirectorData: (by: CredenData[]) => void
  shareholderData: CredenData[]
  setShareholderData: (by: CredenData[]) => void


  // filter
  selectedBusinessType?: BusinessType | null
  setSelectedBusinessType: (by: BusinessType | null) => void
  party: Party[]
  setParty: (by: Party[]) => void
  selectedParty?: Party | null
  setSelectedParty: (by: Party | null) => void
}

export const usePersonStore = create<PersonState>()((set) => ({
  person: [],
  setPerson: (by) => { return set((state) => ({ ...state, person: by })) },
  personOutlier: [],
  setPersonOutlier: (by) => { return set((state) => ({ ...state, personOutlier: by })) },

  // chart2
  selectedPerson: undefined,
  setSelectedPerson: (by) => { return set((state) => ({ ...state, selectedPerson: by })) },
  directorData: [],
  setDirectorData: (by) => { return set((state) => ({ ...state, directorData: by })) },
  shareholderData: [],
  setShareholderData: (by) => { return set((state) => ({ ...state, shareholderData: by })) },

  // filter
  selectedBusinessType: undefined,
  setSelectedBusinessType: (by) => { return set((state) => ({ ...state, selectedBusinessType: by })) },
  party: [],
  setParty: (by) => { return set((state) => ({ ...state, party: by })) },
  selectedParty: undefined,
  setSelectedParty: (by) => { return set((state) => ({ ...state, selectedParty: by })) },
}))