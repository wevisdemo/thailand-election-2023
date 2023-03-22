import districts from '~/data/district_province_list.json'
import electorals from '~/data/electoral_district_table.json'
import fuzzysort from 'fuzzysort'
const SEARCH_KEYS = ['stringMenu']

const DISTRICT_LIST = districts.map((district) => ({
  ...district,
  stringMenu: `อ. ${district.district} จ. ${district.province}`,
}))

function normalizeSearchQuery(query) {
  return query
    .replace(/^อำ(เ(ภ(อ)?)?)?/g, 'อ. ')
    .replace(/^จั(ง(ห(ว(ั(ด)?)?)?)?)?/g, 'จ. ')
}

export const searchDistrict = (query) => {
  const results = fuzzysort.go(normalizeSearchQuery(query), DISTRICT_LIST, {
    keys: SEARCH_KEYS,
    limit: 20,
  })

  return results.map((result) => {
    let retObj = { obj: result.obj }
    for (let index = 0; index < SEARCH_KEYS.length; index++) {
      const key = SEARCH_KEYS[index]
      retObj[key] = fuzzysort.highlight(result[index]) ?? result.obj[key]
    }
    return retObj
  })
}

export const getElectorals = (pk) => {
  let pks = pk
  if (!Array.isArray(pk)) {
    pks = [pk]
  }
  console.log(pks)
  return pks.map((pk) => electorals[pk])
}
