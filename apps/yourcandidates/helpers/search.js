import districts from '~/data/district_province_list.json'
import electorals from '~/data/electoral_district_table.json'
import fuzzysort from 'fuzzysort'
const SEARCH_KEYS = ['stringMenu']

const DISTRICT_LIST = districts.map((district) => {
  if (district.province === 'กรุงเทพมหานคร') {
    return {
      ...district,
      stringMenu: `แขวง${district.subDistrict} เขต${district.district} ${district.province}`,
    }
  }
  return {
    ...district,
    stringMenu: `ต. ${district.subDistrict} อ. ${district.district} จ. ${district.province}`,
  }
})

function normalizeSearchQuery(query) {
  if (!query) return ''
  if (typeof query !== 'string') return query
  if (query.match(/อำน(า(จ(เ(จ(ริ(ญ)?)?)?)?)?)?/g)) return query
  return query
    .replace(/^อำ(เ(ภ(อ)?|$|\s)?|$|\s)?/g, 'อ. ')
    .replace(/^จั(ง(ห(ว(ั(ด)?|$|\s)?|$|\s)?|$|\s)?|$|\s)?/g, 'จ. ')
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
  return pks.map((pk) => electorals[pk])
}
