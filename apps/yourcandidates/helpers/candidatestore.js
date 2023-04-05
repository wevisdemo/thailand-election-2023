import { TheyWorkForUs } from '@thailand-election-2023/database'
import people_list from '../data/people_list.json'
import parties from '../data/parties.json'

export const getPeople = async (province, zone) => {
  let peopleHistoryFromApi = await TheyWorkForUs.People.fetchAll({
    fields: ['Name', 'PeoplePartyHistory'],
    'nested[PeoplePartyHistory][nested][Party][fields]': 'Id,Name,PartyGroup',
  })

  // filter candidates by province and zone
  let people = await people_list
  people = await people.filter(
    (person) => person.Province == province && person.Zone == zone
  )

  return people.map((person_) => {
    let person = {...person_}
    const partyPerson = parties.find((party) => party.Name === person.Party)
    if (partyPerson) person.Party = partyPerson
    else person.Party = { Name: person.Party, Image: '' }
    person = peopleHistoryFromApi.some((history) => person.Name === history.Name)
      ? Object.assign(
          person,
          peopleHistoryFromApi.find((history) => history.Name === person.Name)
        )
      : person

    return person
  })
}

export const getParties = async (province, zone) => {
  return parties
}
