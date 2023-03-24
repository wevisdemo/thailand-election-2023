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
  const { person, selectedPerson } = usePersonStore()

  React.useEffect(() => {
    if (person.length > 0) {
      const svg = d3.select('.chart-nav')
        .attr('width', width)
        .attr('height', height)

      const yScaleBand = d3.scaleBand().domain(person.map((d) => String(d.Id))).range([0, height]).paddingInner(0.1)

      const xScale = d3.scaleLinear().domain([0, 100]).range([0, width])

      svg.selectAll('rect')
        .data(person)
        .join('rect')
        .attr('x', 0)
        .attr('y', (d) => yScaleBand(`${d.Id!}`)!)
        .attr('width', (d) => xScale(Math.random() * 100))
        .attr('height', (d) => yScaleBand.bandwidth())
    }
  }, [person, height, width])


  React.useEffect(() => {
    if (person.length > 0) {
      if (scrollControl.scrollHeight === 0 && scrollControl.clientHeight === 0 && scrollControl.scrollTop === 0) return;

      const svg = d3.select('.chart-nav')

      const yScale = d3.scaleLinear().domain([0, scrollControl.scrollHeight]).range([0, height])

      svg.select('.scroll-control').remove()

      svg.append('rect')
        .attr('class', 'scroll-control')
        .attr('width', width)
        .attr('height', yScale(scrollControl.clientHeight))
        .attr('fill', 'none')
        .attr('stroke', 'red')
        .attr('stroke-weight', '2px')
        .attr('x', 0)
        .attr('y', yScale(scrollControl.scrollTop))

    }
  }, [person, scrollControl, height, width])

  React.useEffect(() => {
    if (person.length > 0) {
      const svg = d3.select('.chart-nav')
    }
  }, [person, scrollControl])

  return (
    <div className='w-full h-full' >
      <svg className='chart-nav'>
        <rect className='scroll-control' />
      </svg>
    </div >
  )
}

export default LeftNav