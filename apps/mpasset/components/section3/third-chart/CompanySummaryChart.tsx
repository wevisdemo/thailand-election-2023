/*

DOC-tooltip: https://d3-graph-gallery.com/graph/interactivity_tooltip.html
*/

import * as React from "react";
import * as d3 from "d3";
import { scaleTime } from "d3";
import { DGAData, FinancialData } from "../../../models/person";
import { usePersonStore } from "../../../store/person";


type FinancialDataType = {
  income: number
  year: Date | string
}

const GovProject: React.FunctionComponent = () => {

  const { selectedCompany } = usePersonStore()

  const chartRef = React.useRef<HTMLDivElement>(null)
  const svgRef = React.useRef<SVGSVGElement>(null);

  const [chartDimension, setChartDimension] = React.useState({
    width: 0,
    height: 0,
  })


  // d3 util
  const parseTime = d3.timeParse("%Y")

  React.useEffect(() => {
    if (selectedCompany) {

      // const yearIndex = dataSet.findIndex((d) => d.year === year)!
      // if (yearIndex === -1) return;
      const data: FinancialDataType[] = selectedCompany.financial


      const svg = d3.select(svgRef.current);
      const w = Number(chartDimension.width);
      const h = Number(chartDimension.height);

      svg.attr("width", w)
      svg.attr("height", h)

      const MARGIN = { TOP: 10, RIGHT: 12, BOTTOM: 20, LEFT: 12 }
      const WIDTH = w - MARGIN.LEFT - MARGIN.RIGHT
      const HEIGHT = h - MARGIN.TOP - MARGIN.BOTTOM

      svg.select('.chart-margin')
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)


      const xScale = d3.scaleTime()
        // .domain(
        //   d3.extent(data, d => d.date)! as [Date, Date]
        // )
        .domain([
          new Date(2018, 0, 1),
          new Date(2020, 12, 31),
        ])
        .range([MARGIN.LEFT, WIDTH - MARGIN.RIGHT])
      // .paddingInner(0.3)
      // .paddingOuter(0.1)

      // reverse to bar chart
      const [minIncome, maxIncome] = d3.extent(data, (d) => Number(d.income))
      console.log([minIncome, maxIncome]);

      const yScale = d3.scaleLinear()
        .domain([minIncome || 0, maxIncome || 100000])
        .range([HEIGHT - MARGIN.TOP, MARGIN.BOTTOM])

      const t = d3.transition().duration(100)

      // draw axis
      const formatTime = d3.timeFormat("%Y")
      const xAxisCall = d3.axisBottom(xScale)
        .ticks(d3.timeYear.every(1))
        .tickFormat((d) => `${Number(formatTime(d as any)) + 543}`) as any

      svg.select(".x-axis")
        .attr("transform", `translate(0,${HEIGHT})`)
        .transition(t)
        .call(xAxisCall)
        .call(g => g.select(".domain")
          .attr('stroke-width', "3px")
          .attr('stroke', "black"))
        .call(g => g.selectAll('.tick')
          .select('line')
          .attr('stroke-width', "3px")
          .attr('stroke', "black"))
        .call(g => g.selectAll('.tick')
          .select('text')
          .attr('font-size', "10px")
          .attr('fill', "black"))

      const formatSi = d3.format(".2s")
      const formatAbbreviation = (x: number) => {
        const s = formatSi(x)

        switch (s[s.length - 1]) {
          case "G": return s.slice(0, -1) + "B"
          case "k": return s.slice(0, -1) + "K"
        }
        return s
      }
      const yAxisCall = d3.axisLeft(yScale)
        .offset(20)


        .tickFormat((d) => `${formatAbbreviation(d as number)}`) as any
      // .ticks(3)

      svg.select(".y-axis")
        .transition(t)
        .call(yAxisCall)
        .attr('transform', `translate(${MARGIN.LEFT + 20},-${MARGIN.BOTTOM + 6})`)
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll('.tick')
          .select('line')
          .remove())
        .call(g => g.selectAll('.tick')
          .select('text')
          .attr('font-size', "10px")
          .attr('fill', "black")
        )

      // draw vertical gridline
      const chartArea = svg.select('.chart-area')

      chartArea.selectAll('line').remove()

      chartArea.selectAll('line')
        .data(yScale.ticks())
        .enter()
        .append('line')
        .attr("class", "horizontalGrid")
        .attr("x1", 0)
        .attr("x2", WIDTH)
        .attr("y1", (d) => yScale(d))
        .attr("y2", (d) => yScale(d))
        .attr("stroke", "black")
        .attr("stroke-width", "1px")
        .attr("stroke-dasharray", "2 2")
      // console.log(yScale(yScale.ticks()[0]))


      const line = d3.line<FinancialDataType>()
        .x((d) => xScale(new Date(Number(d.year) - 543, 0, 1)))
        .y(d => yScale(d.income))

      console.log(xScale(new Date(Number('2566') - 543, 3, 2)));


      const lineChart = svg.select('.chart-area')

      lineChart.selectAll('path').remove()

      lineChart.append('path')
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", "3px")
        .transition(t)
        .attr("d", line(data))

      if (selectedCompany.gov_fund_proj.length > 0) {
        chartArea.append('g')
          .selectAll('line')
          .data(selectedCompany.gov_fund_proj)
          .enter()
          .append('line')
          .attr("class", "plot-gov-fund")
          .attr("x1", (d) => {
            console.log(new Date(d.วันที่ลงนามในสัญญา));
            console.log(d.วันที่ลงนามในสัญญา);

            return xScale(new Date(d.วันที่ลงนามในสัญญา));
          })
          .attr("x2", (d) => xScale(new Date(d.วันที่ลงนามในสัญญา)))
          .attr("y1", 0)
          .attr("y2", HEIGHT)
          .attr("stroke", "#00EAA4")
          .attr("stroke-width", "2px")

      }


      /*************** Tooltip ***************/
      // var tooltip = d3.select('.tooltip-area')
      //   .style("pointer-events", "none");
      // .style('opacity', 0);

      // const mouseover = () => {
      //   tooltip.style("opacity", 1);
      // };

      // const mouseleave = () => {
      //   tooltip.style('opacity', 0);
      // }

      // const mousemove = (event: any, d: CountryType) => {
      //   const [x, y] = d3.pointer(event);
      //   console.log("x:", x, " y:", y);

      //   console.log(xScale.invert(x));

      //   const i = d3.bisectCenter(data.map((d) => d.date), xScale.invert(x));
      //   console.log(yScale.invert(y));

      //   console.log(xScale(data[i].date));

      //   tooltip.style("opacity", 1)
      //     // .style("display", null)
      //     .attr('transform', `translate(${ xScale(data[i].date)}, ${ yScale(data[i].price) })`);

      //   tooltip.select('g').remove()

      //   const tooltipContent = tooltip.append('g').attr('transform', "translate(-50,0)")

      //   tooltipContent
      //     .append('rect')
      //     .attr("x", 0)
      //     .attr("y", 0)
      //     .attr("width", 100)
      //     .attr("height", 100)
      //     .attr("fill", "white")
      //     .attr("stroke", "black")

      //   // .text(d => d.value)
      //   // for (const [index, [key, value]] of Object.entries(Object.entries(d))) {
      //   tooltipContent.append('text')
      //     .attr("x", 20)
      //     .attr("y", 20)
      //     .attr("font-size", "10px")
      //     .attr("fill", "black")
      //     .selectAll('tspan')
      //     .data([data[i].project, data[i].price])
      //     .join('tspan')
      //     .attr("x", 10)
      //     .attr("y", (d, i, D) => `${ 1.1 + i * 1.3 } em`)
      //     .text((d) => d)
      //   // }

      //   chartArea.select('.line-horizontal').remove()
      //   chartArea.append('line')
      //     .attr("class", "line-horizontal")
      //     .attr("stroke", "black")
      //     .attr("stroke-width", "1px")
      //     .attr("x1", 0)
      //     .attr("x2", WIDTH)
      //     .attr("y1", y)
      //     .attr("y2", y)

      //   chartArea.select('.line-vertical').remove()
      //   chartArea.append('line')
      //     .attr("class", "line-vertical")
      //     .attr("stroke", "black")
      //     .attr("stroke-width", "1px")
      //     .attr("x1", x)
      //     .attr("x2", x)
      //     .attr("y1", 0)
      //     .attr("y2", HEIGHT)
      // };

      /*************** End Tooltip ***************/

      // chartArea.attr("pointer-events", "all")
      //   .on("pointerenter pointermove", mousemove, mouseover)
      //   .on("pointerleave", mouseleave)
      //   .on("touchstart", event => event.preventDefault());
    }

  }, [svgRef, selectedCompany, chartDimension]);



  React.useEffect(() => {
    function updateSize() {
      if (chartRef.current) {
        setChartDimension({ width: chartRef.current.clientWidth, height: chartRef.current.clientHeight })
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize()
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div>
      <div className="w-full h-[228px] mx-auto relative" ref={chartRef}>
        <svg ref={svgRef}>
          <g className="chart-margin">
            <g className="x-axis" />
            <g className="y-axis" />
            <g className="chart-area" />
            <g className="tooltip-area" />
            <g className="legend"></g>
          </g>
        </svg>

      </div>
    </div>
  );
};

export default GovProject;