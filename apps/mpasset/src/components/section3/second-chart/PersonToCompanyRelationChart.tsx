import * as React from "react";
import * as d3 from "d3";
import { usePersonStore } from "../../../store/person";
import { CredenData, PersonCustom } from "../../../models/person";

type NodeLinkType = {
  id: string,
  parentId: string,
  companyData?: CredenData
  personData?: PersonCustom
}

interface NodeLink extends d3.HierarchyNode<NodeLinkType> {
  children?: this[]
  _children?: this[]
  x0: number,
  y0: number,
  x: number,
  y: number,
}


const PersonToCompanyRelationChart: React.FunctionComponent = () => {

  const { selectedPerson, directorData, shareholderData, setSelectedCompany } = usePersonStore()

  const chartRef = React.useRef<HTMLDivElement>(null)
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [dataSet, setDataSet] = React.useState<NodeLink>()

  const [chartDimension, setChartDimension] = React.useState({
    width: 0,
    height: 0,
  })


  const handleClickNode = React.useCallback((d: NodeLink) => {
    setSelectedCompany(d.data.companyData!)
    if (d.height !== 0) {
      d.children = d.children ? undefined : d._children
    }
  }, [setSelectedCompany])


  React.useEffect(() => {
    if (dataSet) {
      const root = dataSet

      const svg = d3.select(svgRef.current);
      const w = Number(chartDimension.width);
      const h = Number(chartDimension.height);

      svg.attr("width", w)
      svg.attr("height", h)
      svg.attr('fill', "none")

      const MARGIN = { TOP: 10, RIGHT: 10, BOTTOM: 10, LEFT: 10 }
      const WIDTH = w - MARGIN.LEFT - MARGIN.RIGHT
      const HEIGHT = h - MARGIN.TOP - MARGIN.BOTTOM

      svg.select('.chart-margin')
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

      const radius = WIDTH * .35
      const nodeRadius = WIDTH > 400 ? 40 : 20
      const tree = d3.tree<NodeLink>().size([2 * Math.PI, radius])
        .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth)

      const transition = d3.transition().duration(500)
        .tween("resize", () => () => svg.dispatch("toggle"));


      const chartArea = svg.select('.chart-area')
        .attr('transform', `translate(${WIDTH * .5},${HEIGHT * .5})`)

      // @ts-ignore
      tree(root).links()

      const radialPoint = (x: number, y: number) => {
        return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
      }

      const tooltip = d3.select('#tooltip-main-nav')
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px")

      /// ------------ node layer ----------------
      const nodeRoot = chartArea.select('.node-layer')

      nodeRoot.selectAll('g').remove()

      const node = nodeRoot.selectAll<SVGAElement, NodeLink>('g')
        .data(root.descendants())

      const nodeEnter = node.enter()
        .append('g')
        .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y - nodeRadius * .5}, ${- nodeRadius * .5})`)
        // .attr('fill', 'none')
        // .attr("fill-opacity", 0)
        // .attr("stroke-opacity", 0)
        .attr("cursor", "pointer")
        .attr("pointer-events", "all")
        .on("click", (_, d) => {
          handleClickNode(d)
        })
        .on("mouseover", function (_, d) { tooltip.style("visibility", "visible"); tooltip.html(String(d.data.companyData?.company_name_th)) })
        .on("mousemove", function (e) { return tooltip.style("top", (e.offsetY + 10) + "px").style("left", (e.offsetX + 10) + "px"); })
        .on("mouseout", function () { return tooltip.style("visibility", "hidden"); });

      nodeEnter.append('rect')
        .attr('rx', '5')
        .attr('width', nodeRadius)
        .attr('height', nodeRadius)
        .attr('fill', (d) => d.data.companyData?.gov_fund_proj ? '#000' : 'white')
        .attr('stroke', '#000')
        .attr('stroke-weight', '2px')
        .transition(transition)

        .attr("fill-opacity", 1)
        .attr("stroke-opacity", 1);

      nodeEnter.append('g')
        .attr('transform', (d) => `rotate(${(d.x * 180 / Math.PI - 90) * -1} ${nodeRadius * .5} ${nodeRadius * .5})`)
        .append('text')
        .attr('x', nodeRadius * .5)
        .attr('y', nodeRadius * .5 + 4)
        .attr('text-anchor', 'middle')
        .attr('class', 'typo-b5 text-black fill-black')
        .append('tspan')
        .attr('font-size', '10px')
        .attr('fill', (d) => Array.isArray(d.data.companyData?.gov_fund_proj) ? 'white' : 'black')
        .attr('fill-opacity', (d) => (d.data.companyData && Array.isArray(d.data.companyData?.company_shareholder) &&
          d.data.companyData.company_shareholder.reduce((sum, cur) => sum + (cur.person ? 1 : 0), 0) > 1 ? '1' : '0'))
        // .attr('transform')
        .text((d) => (d.data.companyData && Array.isArray(d.data.companyData?.company_shareholder) ? d.data.companyData.company_shareholder.reduce((sum, cur) => sum + (cur.person ? 1 : 0), 0) : 1))




      // const circleSize = nodeRadius * .5
      // nodeEnter.append('rect')
      //   .attr('rx', '49')
      //   .attr('width', circleSize)
      //   .attr('height', circleSize)
      //   .attr('transform', `translate(${circleSize * .5} ${circleSize * .5})`)
      //   .attr('fill', (d) => d.data.companyData?.gov_fund_proj ? '#000' : 'white')
      //   .attr('stroke', '#000')
      //   .attr('stroke-weight', '2px')
      //   .transition(transition)
      //   .attr("fill-opacity", 1)
      //   .attr("stroke-opacity", 1);

      /// ------------ link layer ----------------
      const linkRoot = chartArea.select<SVGGElement>('.link-layer')

      linkRoot.selectAll('line').remove()

      const link = linkRoot.selectAll<SVGAElement, NodeLink>('.link')
        .data(root.links() as d3.HierarchyLink<NodeLinkType>[])

      const linkEnter = link.enter()
        .append("line")
        .transition(transition)
        .attr("class", "link")
        .attr("stroke", "#ccc")
        .attr("stroke-opacity", 1)
        // @ts-ignore
        .attr("x1", d => radialPoint(d.source.x, d.source.y)[0])
        // @ts-ignore
        .attr("y1", (d) => radialPoint(d.source.x, d.source.y)[1])
        // @ts-ignore
        .attr("x2", (d) => radialPoint(d.target.x, d.target.y)[0])
        // @ts-ignore
        .attr("y2", (d) => radialPoint(d.target.x, d.target.y)[1])


      const avatar_size = 100
      const logoSize = 30

      chartArea.selectAll('defs').remove()
      const defs = chartArea.select('.person-icon').append('svg:defs')

      const rootNode = root.descendants()[0].data.personData
      if (rootNode) {
        // profile
        defs.append("svg:pattern")
          .attr("id", "pattern_person_avatar" + rootNode.Id)
          .attr("width", 1)
          .attr("height", 1)
          // .attr("patternUnits", "userSpaceOnUse")
          .attr("patternContentUnits", "objectBoundingBox")
          .append('use')
          .attr('xlink:href', "#person_avatar" + rootNode.Id)
          .attr("transform", "scale(0.01)")
        defs.append("svg:image")
          .attr("id", "person_avatar" + rootNode.Id)
          .attr("xlink:href", typeof rootNode.Images === 'string' && rootNode.Images !== "" ? rootNode.Images : process.env.BASE_PATH + '/design_assets/profile_pic.jpg')
          .attr("width", avatar_size)
          .attr("height", avatar_size)
          .attr("x", 0)
          .attr("y", 0);

        if (rootNode.Party) {
          // profile
          defs.append("svg:pattern")
            .attr("id", "pattern_party_avatar" + rootNode.Party?.Id)
            .attr("width", 1)
            .attr("height", 1)
            // .attr("patternUnits", "userSpaceOnUse")
            .attr("patternContentUnits", "objectBoundingBox")
            .append('use')
            .attr('xlink:href', "#party_avatar" + rootNode.Party?.Id)
            .attr("transform", "scale(0.01)")
          defs.append("svg:image")
            .attr("id", "party_avatar" + rootNode.Party?.Id)
            .attr("xlink:href", typeof rootNode.Party?.Images === 'string' ? rootNode.Party?.Images : process.env.BASE_PATH + '/design_assets/profile_pic.jpg')
            .attr("width", avatar_size)
            .attr("height", avatar_size)
            .attr("x", 0)
            .attr("y", 0);
        }
        const personIcon = chartArea.select('.person-icon')
          .attr('transform', `translate(${-avatar_size * .5} ${-avatar_size * .5})`)
        // .attr('y', )

        personIcon.selectAll('rect').remove()

        // personIcon.remove()
        personIcon.append('rect')
          // .attr('class', 'person-icon')
          .attr('width', avatar_size)
          .attr('height', avatar_size)
          .attr('rx', 49)
          .attr('stroke', '#000')
          .attr('stroke-width', "2")
          .attr("fill", "url(#pattern_person_avatar" + rootNode.Id + ")")
          .attr('stroke', 'black')


        personIcon.append('rect')
          // .attr('class', 'person-icon')
          .attr('x', avatar_size - logoSize)
          .attr('y', avatar_size - logoSize)
          .attr('width', logoSize)
          .attr('height', logoSize)
          .attr('rx', 49)
          .attr('stroke', rootNode.Party ? '#000' : 'transparent')
          .attr('stroke-width', "2")
          .attr("fill", "url(#pattern_party_avatar" + rootNode.Party?.Id + ")")


      }

      root.eachBefore(d => {
        if (d.parent) {
          d.x0 = d.parent.x;
          d.y0 = d.parent.y;
        }
      });
    }

  }, [svgRef, dataSet, chartDimension, handleClickNode]);


  React.useEffect(() => {
    if (selectedPerson && directorData && shareholderData) {
      let data: NodeLinkType[] = [
        {
          id: `pol-${selectedPerson.Id}`,
          parentId: '',
          personData: selectedPerson
        },
        ...directorData.map((d) => ({
          id: `${d.tsic}`,
          parentId: `pol-${selectedPerson.Id}`,
          companyData: d
        })),
        ...shareholderData.map((d) => ({
          id: `${d.tsic}`,
          parentId: `pol-${selectedPerson.Id}`,
          companyData: d
        }))
      ]

      const stratify = d3.stratify<NodeLinkType>().id((d) => d.id).parentId((d) => d.parentId)
      const root = stratify(data) as NodeLink;

      root.descendants().forEach((d, i) => {
        d._children = d.children;
        if (d.depth > 0) d.children = undefined;
      });
      setDataSet(root)
    }
    if (!selectedPerson || typeof selectedPerson === 'undefined') {
      setDataSet(undefined)
    }

  }, [selectedPerson, directorData, shareholderData])




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
    <div className="w-full h-full max-w-[800px] mx-auto relative desktop:ml-[calc(95vw-800px)]" ref={chartRef}>
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
          <g className="chart-area">
            <g className="link-layer" />
            <g className="node-layer" />
            <g className="person-icon" />
          </g>
        </g>
      </svg>
      <div id='tooltip-main-nav' />
    </div>
  );
};

export default PersonToCompanyRelationChart;