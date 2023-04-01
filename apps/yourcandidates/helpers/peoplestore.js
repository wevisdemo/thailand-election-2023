import { TheyWorkForUs } from '@thailand-election-2023/database'
import peoples_list from '@/data/people_list.json'
import parties from '@/data/parties.json'

export const getPeople = async (province, zone) => {
  let peoplesHistory = await TheyWorkForUs.People.fetchAll({
    fields: ['Name', 'PeoplePartyHistory'],
    where: `(MpProvince,eq,${province})~and(MpZone,eq,${zone})~and(MpType,eq,แบ่งเขต)`,
    'nested[PeoplePartyHistory][nested][Party][fields]': 'Id,Name,PartyGroup',
  })

  let parties = await TheyWorkForUs.Parties.fetchAll({
    fields: ['Id', 'Name', 'Images'],
  })
  // filter candidates by province and zone
  let peoples = peoples_list
  peoples = peoples.filter(
    (people) => people.Province == province && people.Zone == zone
  )
  // left join between candidate peoplePartyHistory
  peoples = peoples.map((people) =>
    peoplesHistory.some((history) => people.Name === history.Name)
      ? Object.assign(
          people,
          peoplesHistory.find((history) => history.Name === people.Name)
        )
      : people
  )
  // join candidates and party (for use image party)
  for (let i = 0; i < peoples.length; i++) {
    let partyName = await peoples[i].Party
    peoples[i]['Party'] = await parties.find(
      (party) => party.Name === partyName
    )
  }

  return peoples
}

export const getParties = async (province, zone) => {
  return parties
}
