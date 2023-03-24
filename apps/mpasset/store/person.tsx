import { Person } from '@thailand-election-2023/database'
import { create } from 'zustand'
import { BusinessType } from '../models/business'


interface PersonState {
  person: Person[]
  setPerson: (by: Person[]) => void
  selectedPerson?: Person | null
  setSelectedPerson: (by: Person | null) => void
  selectedBusinessType?: BusinessType | null
  setSelectedBusinessType: (by: BusinessType | null) => void
}

export const usePersonStore = create<PersonState>()((set) => ({
  person: [],
  setPerson: (by) => { return set((state) => ({ ...state, person: by })) },
  selectedPerson: undefined,
  setSelectedPerson: (by) => { return set((state) => ({ ...state, selectedPerson: by })) },
  selectedBusinessType: undefined,
  setSelectedBusinessType: (by) => { return set((state) => ({ ...state, selectedBusinessType: by })) },
}))