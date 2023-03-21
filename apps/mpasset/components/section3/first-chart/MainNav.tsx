import React from 'react'
import { usePersonStore } from '../../../store/person'
import * as d3 from 'd3'

type Props = {
  width: number
  height: number
  onScroll: Function
}

const MainNav = ({ width, height, onScroll }: Props) => {
  const { person, setSelectedPerson } = usePersonStore()
  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    onScroll({
      scrollHeight: e.currentTarget.scrollHeight,
      scrollTop: e.currentTarget.scrollTop,
      clientHeight: e.currentTarget.clientHeight,
    });
  };

  React.useEffect(() => {
    if (person.length > 0) {
      const contentHeight = person.length * 40

      const svg = d3.select('.chart-main')
        .attr('width', width)
        .attr('height', contentHeight)

      const yScaleBand = d3.scaleBand().domain(person.map((d) => String(d.Id))).range([0, contentHeight])

      const xScale = d3.scaleLinear().domain([0, 100]).range([0, width])

      const node = svg.selectAll('g')
        .data(person.map((d) => ({ ...d, randX: Math.random() * 100 })))
        .join('g')
        .attr('transform', (d) => `translate(0, ${yScaleBand(`${d.Id!}`)})`)
        .on('click', (d) => setSelectedPerson(d))

      node.select('rect').remove()


      node.append('rect')
        .attr('x', 0)
        .attr('y', (d) => 10)
        .attr('rx', '2')
        .attr('width', (d) => xScale(d.randX) * .95)
        .attr('height', 20)
        .attr('fill', 'blue')

      const r = 20
      node.select('circle').remove()

      node.append('circle')
        .attr('cx', (d) => xScale(d.randX) - r)
        .attr('cy', r)
        .attr('r', r)

    }
  }, [person, height, width, setSelectedPerson])

  return (
    <div className={`overflow-y-scroll overflow-x-hidden
      border-l-[1px] border-l-black`} style={{ maxHeight: `${height}px` }}
      onScroll={(e) => handleScroll(e)}>
      <svg className='chart-main' />
    </div>
  )
}

export default MainNav