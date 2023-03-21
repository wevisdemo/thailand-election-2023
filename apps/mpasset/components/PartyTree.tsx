
import * as React from "react";
import * as d3 from "d3";
import { scaleTime } from "d3";

type PartyTreeData = {
  Id?: number;
  CreatedAt?: string;
  UpdatedAt?: string;
  SearchPerson?: string;
  nc_9rqw__Parties_id?: null;
  EstablishedDate?: string;
  nc_9rqw__Person_id?: number;
  SearchParties?: string;
  Parties?: null;
  Person?: any;
  child: string;
  parent: string;
}




const PartyTree: React.FunctionComponent = () => {
  const svgRef = React.useRef<SVGSVGElement>(null);

  const [dataSet, setDataSet] = React.useState<PartyTreeData[]>()

  const [selectRange, setSelectRange] = React.useState<[number, number]>([0, 0])

  const [dataSetList, setDataSetList] = React.useState<string[]>([])
  const [selectDataSet, setSelectDataSet] = React.useState("")

  // d3 util
  const parseTime = d3.timeParse("%d/%m/%Y")

  const fetchData = React.useCallback(
    () => {
      // fetch here
      // const csv = [12, 5, 6, 6, 9, 10];


      d3.json<PartyTreeData>(`data/PersonPartyHistoryProcess.json`).then(data => {
        // code goes here
        // convert data to there type
        if (data) {
          // console.log(data);


          // let setList = []
          // for (const [key, value] of Object.entries(data)) {
          //   data[key] = value.filter((v) => v.vol !== null && v.market_cap !== null && v.price_usd !== null)
          //     .map((v) => ({
          //       vol: Number(v.vol),
          //       date: parseTime(String(v.date)),
          //       market_cap: Number(v.market_cap),
          //       price_usd: Number(v.price_usd)

          //     })) as CoinType[]
          //   setList.push(key)
          // }

          setDataSet(data)
          // setDataSetList(setList)
          // setSelectDataSet(setList[0])

        }
      }).catch(error => {
        //best parctice
        console.log(error)
      })

    },
    [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  React.useEffect(() => {

    if (dataSet) {
      // const yearIndex = dataSet.findIndex((d) => d.year === year)!
      // if (yearIndex === -1) return;


      const data = dataSet

      const svg = d3.select(svgRef.current);
      const w = Number(svgRef.current!.parentElement?.clientWidth);
      const h = Number(svgRef.current!.parentElement?.clientHeight);

      svg.attr("width", w)
      svg.attr("height", h)

      const MARGIN = { TOP: 100, RIGHT: 100, BOTTOM: 100, LEFT: 100 }
      const WIDTH = w - MARGIN.LEFT - MARGIN.RIGHT
      const HEIGHT = h - MARGIN.TOP - MARGIN.BOTTOM

      const chart = svg.select('.chart-margin')
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

      svg.select('.chart-margin').call(d3.zoom()
        .extent([[0, 0], [WIDTH, HEIGHT]])
        .scaleExtent([1, 8])
        .on("zoom", ({ transform }) => {

          transform.translate(MARGIN.LEFT, MARGIN.TOP)
          console.log(transform);
          chart.attr("transform", transform);
        }));


      const stratify = d3.stratify<PartyTreeData>().id((d) => d.child).parentId((d) => d.parent)
      const root = stratify(data)
      const radius = Math.min(WIDTH, HEIGHT) * .5
      const separation = d3.tree === d3.tree ? (a, b) => (a.parent == b.parent ? 1 : 2) / a.depth : (a, b) => a.parent == b.parent ? 1 : 2
      const tree = d3.tree<PartyTreeData>()
        // .size([WIDTH, HEIGHT])
        .size([2 * Math.PI, radius]).separation(separation)(root);

      // console.log(data);
      // console.log(root);
      // console.log(tree(root));
      // console.log(tree(root).links());
      chart.selectAll('g').remove()

      var
        stroke = "#555", // stroke for links
        strokeWidth = 1.5, // stroke width for links
        strokeOpacity = 0.4, // stroke opacity for links
        strokeLinejoin = 1, // stroke line join for links
        strokeLinecap = 1, // stroke line cap for links
        curve = d3.curveBumpX,
        r = 3, // radius of nodes
        fill = "#999"


      const linkNode = chart.append("g")
        .attr("fill", "none")
        .attr("stroke", stroke)
        .attr("stroke-opacity", strokeOpacity)
        .attr("stroke-linecap", strokeLinecap)
        .attr("stroke-linejoin", strokeLinejoin)
        .attr("stroke-width", strokeWidth)
        .attr("transform", `translate(${WIDTH * .5},${HEIGHT * .5})`)
        .selectAll("path")
        .data(root.links())
        .join("path")
        .attr("d", d3.linkRadial()
          .angle(d => d.x)
          .radius(d => d.y));

      const textNode = chart.append("g")
        .attr("transform", `translate(${WIDTH * .5},${HEIGHT * .5})`)
        .selectAll('g')
        .data(root.descendants())
        .join('g')
        .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`)


      textNode.append("circle")
        .attr("fill", d => d.children ? stroke : fill)
        .attr("r", r);

      // if (title != null) textNode.append("title")
      //   .text(d => title(d.data, d));

      textNode.append("text")
        .attr("transform", d => `rotate(${d.x >= Math.PI ? 180 : 0})`)
        .attr("dy", "0.32em")
        .attr("x", d => d.x < Math.PI === !d.children ? 6 : -6)
        .attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end")
        .attr("paint-order", "stroke")
        .attr("font-size", d => d.depth > 1 ? "6px" : "10px")
        // .attr("stroke", halo)
        // .attr("stroke-width", haloWidth)
        .text((d, i) => d.id);

      // const xScale = d3.scaleTime()
      //   .domain(
      //     d3.extent(data, d => d.date)! as [Date, Date]
      //   )
      //   .range([0, WIDTH]).nice()
      // // .paddingInner(0.3)
      // // .paddingOuter(0.1)

      // //   // const yScale = d3.scaleLinear()
      // //   //   .domain([0, d3.max(data, (d) => d.height)!])
      // //   //   .range([0, HEIGHT])

      // // console.log(d3.extent(data, (d) => d.price_usd));

      // // reverse to bar chart
      // const yScale = d3.scaleLinear()
      //   .domain(d3.extent(data, (d) => d.price_usd) as any)
      //   .range([HEIGHT, 0])


      // // const rScale = d3.scaleLinear()
      // //   .domain([0, d3.max(data, d => d.population)!])
      // //   .range([5, 25])


      // // const continentSet = ['africa', 'asia', 'americas', 'europe']
      // // const colorScale = d3.scaleOrdinal(continentSet,
      // //   d3.schemeCategory10)

      // const t = d3.transition().duration(100)

      // // draw axis
      // const formatTime = d3.timeFormat("%Y")
      // const xAxisCall = d3.axisBottom(xScale).ticks(d3.timeYear.every(1))
      //   .tickFormat((d) => `${formatTime(d as any)}`) as any

      // svg.select(".x-axis")
      //   .attr("transform", `translate(0,${HEIGHT})`)
      //   .transition(t)
      //   .call(xAxisCall)
      // // .selectAll("text")
      // // .attr("x", "-10")
      // // .attr("text-anchor", "end")
      // // .attr("transform", "rotate(-10)")

      // const formatSi = d3.format(".2s")
      // const formatAbbreviation = (x: number) => {
      //   const s = formatSi(x)
      //   switch (s[s.length - 1]) {
      //     case "G": return s.slice(0, -1) + "B"
      //     case "k": return s.slice(0, -1) + "K"
      //   }
      //   return s
      // }
      // const yAxisCall = d3.axisLeft(yScale)
      //   .tickFormat((d) => `${formatAbbreviation(d as number)}`) as any
      // // .ticks(3)

      // svg.select(".y-axis")
      //   .transition(t)
      //   .call(yAxisCall)

      // // draw xlabel
      // svg.select(".x-label text")
      //   .attr("x", WIDTH * .5)
      //   .attr("y", HEIGHT + 70)
      //   .attr("font-size", "20px")
      //   .attr("text-anchor", "middle")
      //   .text("Time")

      // // draw ylabel
      // svg.select(".y-label text")
      //   .attr("x", -HEIGHT * .5)
      //   .attr("y", -80)
      //   .attr("font-size", "20px")
      //   .attr("text-anchor", "middle")
      //   .attr("transform", "rotate(-90)")
      //   // .transition(t)
      //   .text("Price (USD)")



      // // // Tooltip
      // // var tooltip = d3.select('.tooltip-area')
      // // // .style('opacity', 0);

      // // const mouseover = () => {
      // //   tooltip.style("opacity", 1);
      // // };

      // // const mouseleave = () => {
      // //   tooltip.style('opacity', 0);
      // // }

      // // const mousemove = (event: any, d: CountryType) => {
      // //   const [x, y] = d3.pointer(event);
      // //   tooltip
      // //     .attr('transform', `translate(${x + 10}, ${y})`);

      // //   tooltip.selectAll('rect').remove()
      // //   tooltip.selectAll('text').remove()

      // //   tooltip
      // //     .append('rect')
      // //     .attr("x", 0 + 10)
      // //     .attr("y", 0)
      // //     .attr("width", 100)
      // //     .attr("height", 100)
      // //     .attr("fill", "white")
      // //     .attr("stroke", "black")

      // //   for (const [index, [key, value]] of Object.entries(Object.entries(d))) {
      // //     tooltip.append('text')
      // //       .attr("x", 20)
      // //       .attr("y", 20 + Number(index) * 12)
      // //       .attr("font-size", "10px")
      // //       .attr("fill", "black")
      // //       .text(`${key}:  ${value}`)
      // //   }
      // // };

      // const line = d3.line<CoinType>()
      //   .x(d => xScale(d.date))
      //   .y(d => yScale(d.price_usd))

      // const lineChart = svg.select('.chart-area')

      // lineChart.selectAll('path').remove()

      // lineChart.append('path')
      //   .attr("class", "line")
      //   .attr("fill", "none")
      //   .attr("stroke", "gray")
      //   .attr("stroke-width", "3px")
      //   .attr("d", "")
      //   .transition(t)
      //   .attr("d", line(data))
      // // // 1) Data Join
      // // const bars = svg.select('.chart-area').selectAll("circle")
      // //   .data(data, (d: any) => d.country)
      // // // .on('mouseover', mouseover)
      // // // .on('mousemove', mousemove)
      // // // .on('mouseleave', mouseleave)

      // // bars.exit().remove()
      // // // 2) Exit
      // // bars.exit()
      // //   .attr("fill", "red")
      // //   // .transition(t)
      // //   .attr("cy", yScale(0))
      // //   .remove()

      // // // 3) Update
      // // bars.transition(t)
      // //   .attr("cx", (d) => xScale(d.income)!)
      // //   .attr("cy", (d) => yScale(d.life_exp)!)
      // //   .attr("r", (d) => rScale(d.population)!)
      // //   .attr("fill", (d) => colorScale(d.continent)!)
      // // // .attr('width', xScale.bandwidth())
      // // // .attr('height', (d) => HEIGHT - yScale(d[selectedDataSet]))

      // // // 4) Enter
      // // bars.enter().append("circle")
      // //   .attr("cx", (d) => xScale(d.income)!)
      // //   .attr('fill', 'gray')
      // //   .attr("cy", yScale(0))
      // //   .attr("r", 0)
      // //   .attr("opacity", 1)
      // //   .merge(bars as any)
      // //   .transition(t)
      // //   .attr("cy", (d) => yScale(d.life_exp)!)
      // //   .attr("r", (d) => rScale(d.population)!)

      // // // legened
      // // let legend = svg.select('.legend')
      // //   .attr("transform", `translate(${WIDTH - 10}, ${HEIGHT - 125})`)
      // //   .selectAll('g').data(continentSet)

      // // legend.exit().remove()

      // // const legendEnter = legend.enter()
      // //   .append('g')
      // //   .attr("transform", (d, i) => `translate(0 ,${i * 20})`)

      // // legendEnter.append("rect")
      // //   .attr("width", 10)
      // //   .attr("height", 10)
      // //   .attr("fill", (d) => colorScale(d))

      // // legendEnter.append('text')
      // //   .attr('x', -10)
      // //   .attr('y', 10)
      // //   .attr("text-anchor", "end")
      // //   .style("text-transform", "capitalize")
      // //   .text((d) => d)
      // //   .merge(legend as any)
    }

  }, [svgRef, dataSet, selectDataSet, selectRange]);



  if (!dataSet) return <></>;

  return (
    <div>
      <div className="p-5" >
        <select className="text-black" value={selectDataSet} onChange={(e) => setSelectDataSet(e.target.value)}>
          {dataSetList.map((data) => (
            <option key={data} value={data}>{data}</option>
          ))}
        </select>
        {/* <Slider range
          min={d3.min(dataSet[selectDataSet]!, d => d.date)?.getTime()}
          max={d3.max(dataSet[selectDataSet]!, d => d.date)?.getTime()}
          onChange={(value) => setSelectRange(value)}
          value={selectRange}
        /> */}
      </div>
      <div className="w-screen h-screen bg-green-500  mx-auto relative">
        <svg ref={svgRef}>
          <g className="chart-margin">
            <g className="x-axis" />
            <g className="y-axis" />
            <g className="x-label">
              <text />
            </g>
            <g className="y-label" >
              <text />
            </g>
            <g className="chart-area"></g>
            <g className="legend"></g>
            <g className="tooltip-area" />
          </g>
        </svg>
        <div className="tooltip" />

      </div>
    </div>
  );
};

export default PartyTree;
