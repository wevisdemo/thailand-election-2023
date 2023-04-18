import React from 'react'
import { usePersonStore } from '../../../store/person'
import * as d3 from 'd3'
import { convertToInternationalCurrencySystem } from '../../util/calculation'
import { PersonCustom } from '../../../models/person'

type Props = {
  width: number
  height: number
  onScroll: Function
}

const MainNav = ({ width, height, onScroll }: Props) => {
  const { personOutlier, person, setSelectedPerson } = usePersonStore()
  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    onScroll({
      scrollHeight: e.currentTarget.scrollHeight,
      scrollTop: e.currentTarget.scrollTop,
      clientHeight: e.currentTarget.clientHeight,
    });
  };

  React.useEffect(() => {
    if (person.length > 0) {
      const countPerson = person.length + 2
      const contentHeight = countPerson * 40

      const svg = d3.select('.chart-main')
        .attr('width', width)
        .attr('height', contentHeight)

      let [minPct, maxPct] = d3.extent(person, (d) => d.totalPctShare)

      const personData = [...personOutlier.map((d) => ({ ...d, totalPctShare: maxPct || 100 })), ...person.map((d) => ({ ...d }))]

      // const yScaleBand = d3.scaleBand().domain(person.map((d) => `${d.Id}`)).range([0, 40 * countPerson]).paddingInner(4)
      const yScaleBand = d3.scaleBand().domain(personData.map((_, i) => `${i}`)).range([0, 40 * countPerson]).paddingInner(.5).paddingOuter(.2)

      // let [minPct, maxPct] = d3.extent(person, (d) => d.totalPctShare)


      // minPct = -30
      const xScale = d3.scaleLinear().domain([minPct || -20, maxPct || 100]).range([0, width])

      svg.select('line').remove()
      svg.append('line').attr('x1', xScale(0)).attr('y1', 0).attr('x2', xScale(0)).attr('y2', contentHeight).attr('stroke', 'black')

      const node = svg.selectAll('g')
        .data(personData)
        .join('g')
        .attr('transform', (_, i) => `translate(0, ${yScaleBand(`${i!}`)})`)
        .on('click', (_, d: PersonCustom) => { console.log(d); setSelectedPerson(d) })

      node.select('rect').remove()
      node.select('text').remove()


      const getWidth = (totalPctShare: number) => {
        let w = (totalPctShare <= 0 ? xScale(0) - xScale(totalPctShare) : xScale(totalPctShare) - xScale(0))

        // return w <= 0 ? 10 : w
        return totalPctShare > 10 ? w * .95 : w
      }

      node.append('rect')
        .attr('x', (d) => d.totalPctShare < 0 ? xScale(d.totalPctShare) : xScale(0))
        .attr('y', 0)
        .attr('width', (d) => getWidth(d.totalPctShare))
        .attr('height', (_) => yScaleBand.bandwidth())
        .attr('fill', (d) => d.Party ? d.Party.Color! : 'black')



      const avatar_size = 400

      node.select('defs').remove()

      const defs = node.append('svg:defs')
      // profile
      defs.append("svg:pattern")
        .attr("id", (_, i) => "pattern_person_avatar" + i)
        .attr("width", 1)
        .attr("height", 1)
        // .attr("patternUnits", "userSpaceOnUse")
        .attr("patternContentUnits", "objectBoundingBox")
        .append('use')
        .attr('xlink:href', (_, i) => "#person_avatar" + i)
        .attr("transform", "scale(0.0025)")
      defs.append("svg:image")
        .attr("id", (_, i) => "person_avatar" + i)
        .attr("xlink:href", (d) => typeof d.Images === 'string' ? d.Images : process.env.BASE_PATH + '/design_assets/profile_pic.jpg')
        .attr("width", avatar_size)
        .attr("height", avatar_size)
        .attr("x", 0)
        .attr("y", 0);

      // profile
      defs.append("svg:pattern")
        .attr("id", (_, i) => "pattern_party_avatar" + i)
        .attr("width", 1)
        .attr("height", 1)
        // .attr("patternUnits", "userSpaceOnUse")
        .attr("patternContentUnits", "objectBoundingBox")
        .append('use')
        .attr('xlink:href', (_, i) => "#party_avatar" + i)
        .attr("transform", "scale(0.0025)")
      defs.append("svg:image")
        .attr("id", (_, i) => "party_avatar" + i)
        .attr("xlink:href", (d) => typeof d.Party?.Images === 'string' ? d.Party?.Images : process.env.BASE_PATH + '/design_assets/profile_pic.jpg')
        .attr("width", avatar_size)
        .attr("height", avatar_size)
        .attr("x", 0)
        .attr("y", 0);

      const r = 15
      const limiter = 25
      node.selectAll('circle').remove()

      let circleMargin = 5

      node.append('circle')
        .attr('cx', (d) => d.totalPctShare < limiter ?
          d.totalPctShare < 0 ?
            xScale(0) + r + circleMargin
            : xScale(0) - r - circleMargin
          : xScale(d.totalPctShare) - (r + 2))
        .attr('cy', yScaleBand.bandwidth() * .5)
        .attr('r', r)
        .attr("fill", (_, i) => "url(#pattern_person_avatar" + i + ")")
        .attr('stroke', 'black')

      const rLogo = 5
      node.append('circle')
        .attr('cx', (d) => d.totalPctShare < limiter ?
          d.totalPctShare < 0 ?
            xScale(0) + circleMargin
            : xScale(0) - r * 2 - circleMargin
          : xScale(d.totalPctShare) - (r * 2) + rLogo * .5)
        .attr('cy', yScaleBand.bandwidth())
        .attr('r', rLogo)
        .attr("fill", (d, i) => d.Party ? "url(#pattern_party_avatar" + i + ")" : "none");

      node.append('text')
        .attr('x', (d) => d.totalPctShare < limiter ?
          d.totalPctShare < 0 ?
            xScale(0) + r * 2 + circleMargin * 2
            : xScale(d.totalPctShare) + r * .5 : xScale(d.totalPctShare) - r * 2 - circleMargin)
        .attr('y', yScaleBand.bandwidth() * .5)
        .attr('rx', '2')
        .attr('fill', (d) => d.totalPctShare < limiter ? 'black' : 'white')
        .attr('text-anchor', (d) => d.totalPctShare < limiter ? 'start' : 'end')
        .attr('alignment-baseline', 'middle')
        .attr('class', 'typo-b7')
        .text((d) => d.totalValueShare !== 0 ? convertToInternationalCurrencySystem(d.totalValueShare) : d.countDirector > 0 ? `เกี่ยวข้องกับธุรกิจแต่ไม่มีหุ้นอยู่` : 'ไม่เกี่ยวข้องกับธุรกิจ')

    }
  }, [person, height, width, setSelectedPerson, personOutlier])

  return (
    <div className={`overflow-y-scroll overflow-x-hidden
      border-l-[1px] border-l-black`} style={{ maxHeight: `${height}px` }}
      onScroll={(e) => handleScroll(e)}>
      <svg className='chart-main' />
    </div>
  )
}

export default MainNav