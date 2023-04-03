import { TheyWorkForUs } from '@thailand-election-2023/database'
import people_list from '../data/people_list.json'
import parties from '../data/parties.json'

export const getPeople = async (province, zone) => {
  let peopleHistory = await TheyWorkForUs.People.fetchAll({
    fields: ['Name', 'PeoplePartyHistory'],
    'nested[PeoplePartyHistory][nested][Party][fields]': 'Id,Name,PartyGroup',
  })

  let parties = await TheyWorkForUs.Parties.fetchAll({
    fields: ['Id', 'Name', 'Images'],
  })
  // filter candidates by province and zone
  let people = await people_list
  people = await people.filter(
    (person) => person.Province == province && person.Zone == zone
  )

  return people.map((person_) => {
    let person = {...person_}
    const partyFromApi = parties.find((party) => party.Name === person.Party)
    if (partyFromApi) person.Party = partyFromApi
    else person.Party = { Name: person.Party, Image: '' }
    person = peopleHistory.some((history) => person.Name === history.Name)
      ? Object.assign(
          person,
          peopleHistory.find((history) => history.Name === person.Name)
        )
      : person

    return person
  })
}

export const getParties = async (province, zone) => {
  return parties
}
