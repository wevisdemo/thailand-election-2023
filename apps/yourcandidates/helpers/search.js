import districts from '~/data/district_province_list.json'
import electorals from '~/data/electoral_district_table.json'

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
  return query.replace(/\.([^\s])/g, '. $1')
}

const HIGHTLIGHT_STYLE = {
  tagOpen: '<b>',
  tagClose: '</b>',
}

export const searchDistrict = (query) => {
  // split query by space when before space is not .
  const queries = normalizeSearchQuery(query).split(/\s/g)
  const districts = DISTRICT_LIST.map((district) => {
    let score = 0
    let matchedIndices = []
    const stringMenuList = district.stringMenu.split(/\s/g)
    for (let index = 0; index < queries.length; index++) {
      const query = queries[index]
      let currIndex = 0
      for (const stringMenu of stringMenuList) {
        if (stringMenu.includes(query)) {
          const matchedIndex = stringMenu.search(query)
          const endMatchedIndex = matchedIndex + query.length
          score += query.length / stringMenu.length
          for (let i = matchedIndex; i < endMatchedIndex; i++) {
            if (matchedIndices.includes(i + currIndex)) continue
            matchedIndices.push(i + currIndex)
          }
        }
        currIndex += stringMenu.length + 1
      }
      if (score == 0) break
    }

    if (score === 0)
      return {
        ...district,
        score,
        matchedIndices,
        highlightedHtml: district.stringMenu,
      }
    // add tag for highlight before matched index
    const matchedIndicesSorted = matchedIndices.sort((a, b) => a - b)
    let highlightedHtml = ''
    let tagClosed = true
    for (let index = 0; index < district.stringMenu.length; index++) {
      const char = district.stringMenu[index]
      if (
        matchedIndicesSorted.includes(index) &&
        !matchedIndicesSorted.includes(index - 1)
      ) {
        highlightedHtml += HIGHTLIGHT_STYLE.tagOpen
        tagClosed = false
      } else if (
        !matchedIndicesSorted.includes(index) &&
        matchedIndicesSorted.includes(index - 1)
      ) {
        highlightedHtml += HIGHTLIGHT_STYLE.tagClose
        tagClosed = true
      }
      highlightedHtml += char
    }
    if (tagClosed === false) {
      highlightedHtml += HIGHTLIGHT_STYLE.tagClose
    }
    return { ...district, score, matchedIndices, highlightedHtml }
  })
  return districts
    .filter((d) => d.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 30)
}

export const getElectorals = (pk) => {
  let pks = pk
  if (!Array.isArray(pk)) {
    pks = [pk]
  }
  return pks.map((pk) => electorals[pk])
}
