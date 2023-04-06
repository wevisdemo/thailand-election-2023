// import { TheyWorkForUs } from '@thailand-election-2023/database'
// import people_list from '../data/people_list.json'
import allParties from '../data/parties.json'

export const getPeople = async (province, zone) => {
  let poeple = []
  try {
    poeple = require(`~/data/electorals/${province}-${zone}.json`)
  } catch (error) {}
  return poeple.People
}

export const getElectoralData = async (province, zone) => {
  let electoralData = []
  try {
    electoralData = require(`~/data/electorals/${province}-${zone}.json`)
  } catch (error) {}
  const { People, Parties } = electoralData
  return { people: People, parties: Parties.map((p) => allParties[p]) }
}

export const getParties = async (province, zone) => {
  return []
}
