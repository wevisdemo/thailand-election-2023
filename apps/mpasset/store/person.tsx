import { Person, Party } from '@thailand-election-2023/database'
import { create } from 'zustand'
import { BusinessType } from '../models/business'


interface PersonState {
  person: Person[]
  setPerson: (by: Person[]) => void
  selectedPerson?: Person | null
  setSelectedPerson: (by: Person | null) => void
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
  selectedPerson: undefined,
  setSelectedPerson: (by) => { return set((state) => ({ ...state, selectedPerson: by })) },
  selectedBusinessType: undefined,
  setSelectedBusinessType: (by) => { return set((state) => ({ ...state, selectedBusinessType: by })) },

  party: [],
  setParty: (by) => { return set((state) => ({ ...state, party: by })) },
  selectedParty: undefined,
  setSelectedParty: (by) => { return set((state) => ({ ...state, selectedParty: by })) },
}))