import React from 'react'
import { usePersonStore } from '../../../store/person'
import * as d3 from 'd3'
import { convertToInternationalCurrencySystem } from '../../util/calculation'
import { PersonCustom } from '../../../models/person'
import { useTour } from '@reactour/tour'

type Props = {
  width: number
  height: number
  onScroll: Function
}

const MainNav = ({ width, height, onScroll }: Props) => {
  const { filterPerson, setSelectedPerson } = usePersonStore()

  // tour
  const { currentStep, setCurrentStep } = useTour()

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    onScroll({
      scrollHeight: e.currentTarget.scrollHeight,
      scrollTop: e.currentTarget.scrollTop,
      clientHeight: e.currentTarget.clientHeight,
    });
  };

  React.useLayoutEffect(() => {
    if (filterPerson.length > 0) {
      const countPerson = filterPerson.length + 2
      const contentHeight = countPerson * 40

      const svg = d3.select('.chart-main')
        .attr('width', width)
        .attr('height', Math.max(contentHeight, height))

      // let [minPct, maxPct] = d3.extent(filterPerson, (d) => d.totalPctShare)

      const personData = [
        ...filterPerson.map((d) => ({ ...d }))
      ]

      const yScaleBand = d3.scaleBand().domain(personData.map((_, i) => `${i}`)).range([0, 40 * countPerson]).paddingInner(.5).paddingOuter(.2)

      // let [minPct, maxPct] = d3.extent(person, (d) => d.totalPctShare)

      // console.log([minPct, maxPct]);

      // minPct = -30
      const xScale = d3.scaleLinear().domain([-10, 30]).range([0, width])

      svg.selectAll('line').remove()
      svg.append('line').attr('x1', xScale(0)).attr('y1', 0).attr('x2', xScale(0)).attr('y2', Math.max(contentHeight, height)).attr('stroke', 'black')

      const avatar_size = 400
      svg.selectAll('defs').remove()
      // default unknown person
      const defsDefaultAvatar = svg.append('svg:defs')
      defsDefaultAvatar.append("svg:pattern")
        .attr("id", "pattern_person_avatar_default")
        .attr("width", 1)
        .attr("height", 1)
        // .attr("patternUnits", "userSpaceOnUse")
        .attr("patternContentUnits", "objectBoundingBox")
        .append('use')
        .attr('xlink:href', "#person_avatar_default")
        .attr("transform", "scale(0.0025)")
      defsDefaultAvatar.append("svg:image")
        .attr("id", "person_avatar_default")
        .attr("xlink:href", process.env.BASE_PATH + '/design_assets/profile_pic.jpg')
        .attr("width", avatar_size)
        .attr("height", avatar_size)
        .attr("x", 0)
        .attr("y", 0);



      //tooltip
      const tooltip = d3.select('#tooltip-main-nav')
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px")

      const node = svg.selectAll('g')
        .data(personData)
        .join('g')
        .attr('transform', (_, i) => `translate(0, ${yScaleBand(`${i!}`)})`)
        .attr('class', `cursor-pointer`)
        .on('click', (_, d: PersonCustom) => {
          setSelectedPerson(d)
          if (currentStep === 0)
            setCurrentStep(1)
          else
            setCurrentStep(5)
        })
        .on("mouseover", function (_, d) { tooltip.style("visibility", "visible"); tooltip.html(d.Name) })
        .on("mousemove", function (e) { return tooltip.style("top", (e.offsetY + 10) + "px").style("left", (e.offsetX + 10) + "px"); })
        .on("mouseout", function () { return tooltip.style("visibility", "hidden"); });

      node.selectAll('rect').remove()
      node.selectAll('text').remove()


      const getWidth = (totalPctShare: number) => {
        let w = (totalPctShare <= 0 ? xScale(0) - xScale(totalPctShare) : xScale(totalPctShare) - xScale(0))

        // return w <= 0 ? 10 : w
        return totalPctShare > 10 ? w : w
      }

      node.append('rect')
        .attr('x', (d) => d.totalPctShare < 0 ? xScale(d.totalPctShare) : xScale(0))
        .attr('y', 0)
        .attr('width', (d) => getWidth(d.totalPctShare))
        .attr('height', (_) => yScaleBand.bandwidth())
        .attr('fill', (d) => d.Party ? d.Party.Color! : 'black')

      node.selectAll('defs').remove()

      // const defs = node.append('svg:defs')

      const defs = node.filter((d) => typeof d.Images === 'string' && d.Images !== '').append('svg:defs')
      // profile
      defs.append("svg:pattern")
        .attr("id", (d) => "pattern_person_avatar" + d.Id)
        .attr("width", 1)
        .attr("height", 1)
        // .attr("patternUnits", "userSpaceOnUse")
        .attr("patternContentUnits", "objectBoundingBox")
        .append('use')
        .attr('xlink:href', (_, i) => "#person_avatar" + i)
        .attr("transform", "scale(0.0025)")
      defs.append("svg:image")
        .attr("id", (_, i) => "person_avatar" + i)
        .attr("xlink:href", (d) => String(d.Images))
        .attr("width", avatar_size)
        .attr("height", avatar_size)
        .attr("x", 0)
        .attr("y", 0);

      const defsParty = node.filter((d) => typeof d.Party?.Images === 'string' && d.Party?.Images !== '').append('svg:defs')
      // profile
      defsParty.append("svg:pattern")
        .attr("id", (_, i) => "pattern_party_avatar" + i)
        .attr("width", 1)
        .attr("height", 1)
        // .attr("patternUnits", "userSpaceOnUse")
        .attr("patternContentUnits", "objectBoundingBox")
        .append('use')
        .attr('xlink:href', (_, i) => "#party_avatar" + i)
        .attr("transform", "scale(0.0025)")
      defsParty.append("svg:image")
        .attr("id", (_, i) => "party_avatar" + i)
        .attr("xlink:href", (d) => String(d.Party?.Images))
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
        .attr("fill", (d) => typeof d.Images === 'string' && d.Images !== '' ? "url(#pattern_person_avatar" + d.Id + ")" : "url(#pattern_person_avatar_default)")
        .attr('stroke', 'black')

      const rLogo = 5
      node.filter((d) => typeof d.Party?.Images === 'string' && d.Party?.Images !== '').append('circle')
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
  }, [filterPerson, height, width, setSelectedPerson, currentStep, setCurrentStep])

  return (
    <div className={`overflow-y-scroll overflow-x-hidden relative
      border-l-[1px] border-l-black 
      `}
      style={{ maxHeight: `${height}px` }}
      onScroll={(e) => handleScroll(e)}>
      <div className='absolute top-0 inset-x-0 h-1/2 pointer-events-none
      tour1-first-step 
      tour3-first-step'/>
      <svg className='chart-main' />
      <div id='tooltip-main-nav' />

    </div>
  )
}

export default MainNav