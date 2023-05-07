import { Person, Party } from '@thailand-election-2023/database'
import { create } from 'zustand'
import { BusinessType } from '../models/business'
import { CredenData, PersonCustom } from '../models/person'
import { persist, createJSONStorage } from 'zustand/middleware'

type DataSetType = 'นักการเมือง 62' | 'ผู้สมัคร 66'

interface PersonState {
  //62
  person: PersonCustom[]
  setPerson: (by: PersonCustom[]) => void
  personOutlier: PersonCustom[]
  setPersonOutlier: (by: PersonCustom[]) => void

  // 66 yourcandidate
  yourCandidatePerson: PersonCustom[]
  setYourCandidatePerson: (by: PersonCustom[]) => void

  filterPerson: PersonCustom[]
  setFilterPerson: (by: PersonCustom[]) => void

  // chart2
  selectedPerson?: PersonCustom | null
  setSelectedPerson: (by: PersonCustom | null) => void
  directorData: CredenData[]
  setDirectorData: (by: CredenData[]) => void
  shareholderData: CredenData[]
  setShareholderData: (by: CredenData[]) => void

  // chart3
  selectedCompany?: CredenData | null
  setSelectedCompany: (by: CredenData | null) => void

  // filter
  selectedDataSet: DataSetType
  setSelectedDataSet: (by: DataSetType) => void
  selectedBusinessType?: BusinessType | null
  setSelectedBusinessType: (by: BusinessType | null) => void
  party: Party[]
  setParty: (by: Party[]) => void
  selectedParty?: Party | null
  setSelectedParty: (by: Party | null) => void
  selectedSort: 'asc' | 'desc'
  toggleSort: () => void

  // tutorial
  openTutorial: boolean
  setOpenTutorial: (by: boolean) => void
}

export const usePersonStore = create<PersonState>()(
  persist(
    (set, get) => ({
      // 62
      person: [],
      setPerson: (by) => { return set((state) => ({ ...state, person: by })) },
      personOutlier: [],
      setPersonOutlier: (by) => { return set((state) => ({ ...state, personOutlier: by })) },

      //66 yourcandidate
      yourCandidatePerson: [],
      setYourCandidatePerson: (by) => { return set((state) => ({ ...state, yourCandidatePerson: by })) },

      filterPerson: [],
      setFilterPerson: (by) => { return set((state) => ({ ...state, filterPerson: by })) },

      // chart2
      selectedPerson: undefined,
      setSelectedPerson: (by) => { return set((state) => ({ ...state, selectedPerson: by })) },
      directorData: [],
      setDirectorData: (by) => { return set((state) => ({ ...state, directorData: by })) },
      shareholderData: [],
      setShareholderData: (by) => { return set((state) => ({ ...state, shareholderData: by })) },

      // chart3
      selectedCompany: undefined,
      setSelectedCompany: (by) => { return set((state) => ({ ...state, selectedCompany: by })) },

      // filter
      selectedDataSet: 'ผู้สมัคร 66',
      setSelectedDataSet: (by) => { return set((state) => ({ ...state, selectedDataSet: by })) },
      selectedBusinessType: undefined,
      setSelectedBusinessType: (by) => { return set((state) => ({ ...state, selectedBusinessType: by })) },
      party: [],
      setParty: (by) => { return set((state) => ({ ...state, party: by })) },
      selectedParty: undefined,
      setSelectedParty: (by) => { return set((state) => ({ ...state, selectedParty: by })) },
      selectedSort: 'desc',
      toggleSort: () => { return set((state) => ({ ...state, selectedSort: state.selectedSort === 'asc' ? 'desc' : 'asc' })) },

      // tutorial
      openTutorial: true,
      setOpenTutorial: (by) => { return set((state) => ({ ...state, openTutorial: by })) },
    }),
    {
      name: 'person', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      partialize: (state) =>
      (
        {
          ...Object.fromEntries(
            Object.entries(state).filter(([key]) => ['person', 'personOutlier', 'yourCandidatePerson', 'party'].includes(key))
          ),
          filterPerson: state.person
        }),
      onRehydrateStorage: (state) => {
        console.log('hydration starts')

        // optional
        return (state, error) => {
          if (error) {
            console.log('an error happened during hydration', error)
          } else {
            console.log('hydration finished')
          }
        }
      },
    }
  )
)