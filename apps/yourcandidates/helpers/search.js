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

function highlight(indices, target) {
  // Initialize the result string to an empty string.
  let result = ''

  // Initialize the tagClosed flag to true.
  let tagClosed = true

  // Iterate over the characters in the target string.
  for (let index = 0; index < target.length; index++) {
    // Get the current character.
    const char = target[index]

    // If the current index is in the array of indices,
    // and the previous index is not in the array of indices,
    // then the current character is the beginning of a highlighted word.
    if (indices.includes(index) && !indices.includes(index - 1)) {
      // Add the opening tag to the result string.
      result += HIGHTLIGHT_STYLE.tagOpen

      // Set the tagClosed flag to false.
      tagClosed = false
    }

    // If the current index is not in the array of indices,
    // and the previous index is in the array of indices,
    // then the current character is the end of a highlighted word.
    else if (!indices.includes(index) && indices.includes(index - 1)) {
      // Add the closing tag to the result string.
      result += HIGHTLIGHT_STYLE.tagClose

      // Set the tagClosed flag to true.
      tagClosed = true
    }

    // Add the current character to the result string.
    result += char
  }

  // If the tagClosed flag is false, then the last character is the end of a highlighted word.
  if (tagClosed === false) {
    // Add the closing tag to the result string.
    result += HIGHTLIGHT_STYLE.tagClose
  }

  // Return the result string.
  return result
}

export const searchDistrict = (query) => {
  const queries = normalizeSearchQuery(query)
    .split(/\s/g)
    .filter((q) => q.length > 0)
    // remove duplicate
    .filter((q, index, self) => self.indexOf(q) === index)

  const districts = DISTRICT_LIST.map((district) => {
    let score = 0
    let matchedIndices = []
    for (let index = 0; index < queries.length; index++) {
      const query = queries[index]

      const stringMenu = district.stringMenu
      let matchedIndex = 0
      let startIndex = 0
      while ((matchedIndex = stringMenu.indexOf(query, startIndex)) >= 0) {
        const endMatchedIndex = matchedIndex + query.length

        score += query.length / stringMenu.length
        for (let i = matchedIndex; i < endMatchedIndex; i++) {
          if (matchedIndices.includes(i)) continue
          matchedIndices.push(i)
        }

        startIndex = endMatchedIndex
      }
      if (score == 0) break
    }

    return {
      ...district,
      score,
      matchedIndices,
    }
  })

  return (
    districts
      // filter score > 0
      .filter((d) => d.score > 0)
      // sort by score
      .sort((a, b) => b.score - a.score)
      // take top 30
      .slice(0, 30)
      // highlight string
      .map((d) => {
        return {
          ...d,
          highlightedHtml: highlight(d.matchedIndices, d.stringMenu),
        }
      })
  )
}

export const getElectorals = (pk) => {
  let pks = pk
  if (!Array.isArray(pk)) {
    pks = [pk]
  }
  return pks.map((pk) => electorals[pk])
}
