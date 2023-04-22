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
  const { People } = electoralData
  return {
    people: People.map((person) => {
      let p = { ...person }
      p.Party = {
        Name: allParties[p.Party].Name,
        Image: allParties[p.Party].Image,
      }
      return p
    }),
    parties: Object.values(allParties)
      .filter((party) => party.Number > 0)
      .sort((a, b) => a.Number - b.Number),
  }
}

export const getParties = async (province, zone) => {
  return []
}
