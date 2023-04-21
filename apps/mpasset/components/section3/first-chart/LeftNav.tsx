import * as d3 from 'd3'
import React from 'react'
import { ScrollChartControlType } from '.'
import { usePersonStore } from '../../../store/person'
type Props = {
  width: number
  height: number
  scrollControl: ScrollChartControlType
}

const LeftNav = ({ width, height, scrollControl }: Props) => {
  const { filterPerson } = usePersonStore()

  React.useEffect(() => {
    if (filterPerson.length > 0) {
      const svg = d3.select('.chart-nav')
        .attr('width', width)
        .attr('height', height)

      const yScaleBand = d3.scaleBand().domain(filterPerson.map((_, i) => `${i}`)).range([0, height])

      const [minPct, maxPct] = d3.extent(filterPerson, (d) => d.totalPctShare)
      const xScale = d3.scaleLinear().domain([minPct || -20, maxPct || 100]).range([0, width])

      svg.selectAll('rect')
        .data(filterPerson)
        .join('rect')
        .attr('x', (d) => d.totalPctShare <= 0 ? xScale(d.totalPctShare) : xScale(0))
        .attr('y', (_, i) => yScaleBand(`${i}`)!)
        .attr('width', (d) => d.totalPctShare <= 0 ? xScale(0) - xScale(d.totalPctShare) : xScale(d.totalPctShare) - xScale(0))
        .attr('height', yScaleBand.bandwidth())
        .attr('fill', (d) => d.Party ? d.Party.Color! : 'black')

    }
  }, [filterPerson, height, width])


  React.useLayoutEffect(() => {
    if (filterPerson.length > 0) {
      if (scrollControl.scrollHeight === 0 && scrollControl.clientHeight === 0 && scrollControl.scrollTop === 0) return;

      const svg = d3.select('.chart-nav')

      const yScale = d3.scaleLinear().domain([0, scrollControl.scrollHeight]).range([0, height])

      svg.select('.scroll-control').remove()

      svg.append('rect')
        .attr('class', 'scroll-control')
        .attr('width', width)
        .attr('height', yScale(scrollControl.clientHeight))
        .attr('fill', '#F6FF94')
        .attr('opacity', '.5')
        .attr('stroke', 'black')
        .attr('stroke-weight', '2px')
        .attr('x', 0)
        .attr('y', yScale(scrollControl.scrollTop))

    }
  }, [filterPerson, scrollControl, height, width])

  React.useEffect(() => {
    if (filterPerson.length > 0) {
      const svg = d3.select('.chart-nav')
    }
  }, [filterPerson, scrollControl])

  return (
    <div className='w-full h-full' >
      <svg className='chart-nav'>
        <rect className='scroll-control' />
      </svg>
    </div >
  )
}

export default LeftNav