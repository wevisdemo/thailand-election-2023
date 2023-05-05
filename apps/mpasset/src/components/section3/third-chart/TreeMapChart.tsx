/*
  Ref: https://observablehq.com/@d3/treemap
  Doc: https://github.com/d3/d3-hierarchy
  Doc: https://d3-graph-gallery.com/graph/treemap_basic.html
*/
import * as React from "react";
import * as d3 from "d3";
import { CredenData, PersonCustom, ShareholderData } from "../../../models/person";
import { usePersonStore } from "../../../store/person";

type NodeLinkType = {
  id: string,
  parentId: string,
  companyData?: CredenData
  shareholderData?: ShareholderData
  personData?: PersonCustom
  percentage: number,
}

interface NodeLink extends d3.HierarchyNode<NodeLinkType> {
  children?: this[]
  x1: number,
  y1: number,
  x0: number,
  y0: number,
  x: number,
  y: number,
}

const TreeMapChart: React.FunctionComponent = () => {
  const { selectedPerson, selectedCompany } = usePersonStore()

  const chartRef = React.useRef<HTMLDivElement>(null)
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [dataSet, setDataSet] = React.useState<NodeLink>()
  const [type, setType] = React.useState<'director' | 'shareholder'>('director')

  const [chartDimension, setChartDimension] = React.useState({
    width: 0,
    height: 0,
  })


  // const fetchData = React.useCallback(
  //   () => {
  //     // fetch here
  //     // const csv = [12, 5, 6, 6, 9, 10];
  //     d3.csv<TreeMapType[] & string>("data/company-share.csv").then(res => {
  //       // code goes here
  //       // convert data to there type
  //       const data = res.slice(0, res.length) as TreeMapType[]

  //       if (data) {
  //         data.forEach((d) => {
  //           d.percentage = Number(d.percentage)
  //         })

  //         const stratify = d3.stratify<TreeMapType>().id((d) => d.id).parentId((d) => d.parentId)
  //         const root = stratify(data);

  //         // const dy = 192 / 6
  //         // root.descendants().forEach((d, i) => {
  //         //   d._children = d.children;
  //         //   if (d.depth > 0) d.children = null;
  //         // });
  //         // data.forEach(d => {
  //         //   d.revenue = Number(d.revenue)
  //         //   d.profit = Number(d.profit)
  //         // })
  //         setDataSet(root)
  //       }
  //     }).catch(error => {
  //       //best parctice
  //       console.log(error)
  //     })

  //   },
  //   [],)

  // React.useEffect(() => {
  //   fetchData()
  // }, [fetchData])



  React.useEffect(() => {
    if (dataSet) {
      // const data = flag ? dataSet?.slice(1) : dataSet



      const root = dataSet

      // console.log(root);

      const svg = d3.select(svgRef.current);
      const w = Number(svgRef.current!.parentElement?.clientWidth);
      const h = Number(svgRef.current!.parentElement?.clientHeight);

      svg.attr("width", w)
      svg.attr("height", h)

      const MARGIN = { TOP: 0, RIGHT: 0, BOTTOM: 0, LEFT: 0 }
      const WIDTH = w - MARGIN.LEFT - MARGIN.RIGHT
      const HEIGHT = h - MARGIN.TOP - MARGIN.BOTTOM

      svg.select('.chart-margin')
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)



      const padding = {
        inner: 0, // to separate a node from its adjacent siblings
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }

      // setup leave
      const leaves = root.leaves();

      // console.log('leaves', leaves);

      const chartArea = svg.select('.chart-area').style("overflow", "hidden")
      // .attr('transform', `translate(${WIDTH * .5},${HEIGHT * .5})`)
      // Compute the treemap layout.
      d3.treemap<NodeLinkType>()
        .tile(d3.treemapBinary)
        .size([WIDTH, HEIGHT])
        .paddingInner(padding.inner)
        .paddingTop(padding.top)
        .paddingRight(padding.right)
        .paddingBottom(padding.bottom)
        .paddingLeft(padding.left)
        .round(true)
        (root);

      // console.log(root);

      const node = chartArea.selectAll("g")
        .data(leaves)
        .join("g")
        .attr("transform", d => `translate(${d.x0},${d.y0})`);

      node.select('rect').remove()

      node.append("rect")
        .attr("fill", (d) => d.data.shareholderData?.person ? '#DFDAD1' : '#9A948C')
        .attr("width", d => d.x1 - d.x0)
        .attr("height", d => d.y1 - d.y0)
        .attr('stroke', 'black')
        .attr('stroke-weight', '2')

      node.select('text').remove()

      node.append('text')
        .selectAll('tspan')
        .data((d) => d.data.percentage > 2 ? [`${d.data.percentage}%`] : [])
        .join('tspan')
        .attr("x", 4)
        .attr("y", `24px`)
        .attr('font-size', '21px')
        .text((d: any) => d)
    }

  }, [svgRef, dataSet]);



  React.useEffect(() => {
    if (selectedCompany && selectedPerson) {

      let data: NodeLinkType[] = [
        {
          id: `company-${selectedCompany.company_id}`,
          parentId: '',
          companyData: selectedCompany,
          percentage: 0,
        }
      ]

      if (Array.isArray(selectedCompany.company_shareholder) && selectedCompany.company_shareholder.length > 0) {
        data = [...data,
        ...selectedCompany.company_shareholder!.map((d) => ({
          id: `${d.Firstname.replaceAll(' ', '-')}-${d.Lastname.replaceAll(' ', '-')}`,
          parentId: `company-${selectedCompany.company_id}`,
          shareholderData: d,
          percentage: d.pct_share
        }))]

        setType('shareholder')
      } else {
        data = [...data,]
        setType('director')
      }

      const stratify = d3.stratify<NodeLinkType>().id((d) => d.id).parentId((d) => d.parentId)
      const root = stratify(data) as NodeLink;
      // Compute the values of internal nodes by aggregating from the leaves.
      root.count()

      // compute numerical value for each entity
      root.sum((d) => d.percentage)


      setDataSet(root)
    }

  }, [selectedPerson, selectedCompany])



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
    <div className="w-full h-[200px] bg-green-500 max-w-[800px] mx-auto">
      <svg ref={svgRef} className="rounded-[5px] border-[2px] border-black">
        <g className="chart-margin">
          <g className="x-axis" />
          <g className="y-axis" />
          <g className="x-label">
            <text />
          </g>
          <g className="y-label" >
            <text />
          </g>
          <g className="chart-area">
          </g>
        </g>
      </svg>
    </div>
  );
};

export default TreeMapChart;