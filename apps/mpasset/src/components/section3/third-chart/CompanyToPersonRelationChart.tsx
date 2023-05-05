import * as React from "react";
import * as d3 from "d3";
import { usePersonStore } from "../../../store/person";
import { CredenData, PersonCustom, ShareholderData } from "../../../models/person";

type NodeLinkType = {
  id: string,
  parentId: string,
  companyData?: CredenData
  shareholderData?: ShareholderData
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

type Props = {
  // type: 'director' | 'shareholder'
}


const CompanyToPersonRelationChart = (props: Props) => {

  const { selectedPerson, selectedCompany, selectedDataSet } = usePersonStore()

  const chartRef = React.useRef<HTMLDivElement>(null)
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [dataSet, setDataSet] = React.useState<NodeLink>()
  const [type, setType] = React.useState<'director' | 'shareholder'>('director')

  const [chartDimension, setChartDimension] = React.useState({
    width: 0,
    height: 0,
  })

  React.useEffect(() => {
    if (dataSet && selectedPerson) {
      const root = dataSet

      const svg = d3.select(svgRef.current);
      const w = Number(chartDimension.width);
      const h = Number(chartDimension.height);

      svg.attr("width", w)
      svg.attr("height", h)

      const MARGIN = { TOP: 10, RIGHT: 10, BOTTOM: 10, LEFT: 10 }
      const WIDTH = w - MARGIN.LEFT - MARGIN.RIGHT
      const HEIGHT = h - MARGIN.TOP - MARGIN.BOTTOM

      svg.select('.chart-margin')
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

      const radius = WIDTH * .35
      const nodeRadius = 40
      // WIDTH > 400 ? 40 : 20
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

      /// ------------ node layer ----------------
      const nodeRoot = chartArea.select('.node-layer')

      nodeRoot.selectAll('g').remove()

      const tooltip = d3.select('#tooltip-main-nav')
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px")

      const node = nodeRoot.selectAll<SVGAElement, NodeLink>('g')
        .data(root.descendants())

      const nodeEnter = node.enter()
        .append('g')
        .attr("fill-opacity", 0)
        .attr("stroke-opacity", 0)
        .attr("cursor", "pointer")
        .attr("pointer-events", "all")
        .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y - nodeRadius * .5}, ${- nodeRadius * .5})`)
        .on("mouseover", (_, d) => {
          tooltip.style("visibility", "visible");
          if (d.height === 0) {
            tooltip.html(`${String(d.data.shareholderData?.Firstname)} ${String(d.data.shareholderData?.Lastname)}`)
          } else {
            tooltip.html(String(d.data.companyData?.company_name_th))
          }
        })
        .on("mousemove", (e) => { return tooltip.style("top", (e.offsetY + 10) + "px").style("left", (e.offsetX + 10) + "px"); })
        .on("mouseout", () => { return tooltip.style("visibility", "hidden"); });


      nodeEnter.append('g')
      // .attr("transform", d => `rotate(${d.x}) translate(${nodeRadius * .5}, ${nodeRadius * .5})`)


      nodeEnter.select('defs').remove()

      const avatar_size = 100
      const logoSize = 20
      // console.log(root.descendants());


      const defs = nodeEnter.append('svg:defs')
      // profile
      defs.append("svg:pattern")
        .attr("id", (_, i) => "pattern_person_avatar" + i)
        .attr("width", 1)
        .attr("height", 1)
        // .attr("patternUnits", "userSpaceOnUse")
        .attr("patternContentUnits", "objectBoundingBox")
        .append('use')
        .attr('xlink:href', (_, i) => "#person_avatar" + i)
        .attr("transform", "scale(0.01)")
      defs.append("svg:image")
        .attr("id", (_, i) => "person_avatar" + i)
        .attr("xlink:href", (d) => typeof d.data.shareholderData?.person?.Images === 'string' && d.data.shareholderData?.person?.Images !== "" ?
          `${d.data.shareholderData?.person.Images}` :
          typeof d.data.personData?.Images === 'string' ? `${d.data.personData?.Images}` :
            process.env.BASE_PATH + '/design_assets/profile_pic.jpg')
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
        .attr("transform", "scale(0.01)")
      defs.append("svg:image")
        .attr("id", (_, i) => "party_avatar" + i)
        .attr("xlink:href", (d) => typeof d.data.shareholderData?.person?.Party?.Images === 'string' && d.data.shareholderData?.person?.Party?.Images !== "" ?
          `${d.data.shareholderData?.person?.Party?.Images}` : "")
        .attr("width", avatar_size)
        .attr("height", avatar_size)
        .attr("x", 0)
        .attr("y", 0);

      nodeEnter.append('rect')
        .attr('rx', (_, i) => i == 0 ? '5' : '49')
        .attr('width', nodeRadius)
        .attr('height', nodeRadius)
        .attr('transform', (d) => `rotate(${(d.x * 180 / Math.PI - 90) * -1} ${nodeRadius * .5} ${nodeRadius * .5})`)
        .attr('fill', (d, i) => i == 0 ? (Array.isArray(d.data.companyData?.gov_fund_proj) ? 'black' : 'white')
          : d.data.companyData?.gov_fund_proj ? '#000'
            // : d.id === `${selectedPerson?.Name.replaceAll(' ', '-')}`
            : "url(#pattern_person_avatar" + i + ")"
          // : 'url(#pattern_unknown_person_avatar)')
        )
        .attr('stroke', '#000')
        .attr('stroke-weight', '2px')
        .transition(transition)

        .attr("fill-opacity", 1)
        .attr("stroke-opacity", 1);

      nodeEnter.append('rect')
        // .attr('class', 'person-icon')
        .attr('x', nodeRadius - logoSize)
        .attr('y', nodeRadius - logoSize)
        .attr('transform', (d) => `rotate(${(d.x * 180 / Math.PI - 90) * -1} ${nodeRadius * .5} ${nodeRadius * .5})`)
        .attr('width', logoSize)
        .attr('height', logoSize)
        .attr('rx', 49)
        .attr('stroke', (d) => typeof d.data.shareholderData?.person?.Party?.Images === 'string' && d.data.shareholderData?.person?.Party?.Images !== "" ? '#000' : 'transparent')
        .attr('stroke-width', "2px")
        .attr("fill", (_, i) => "url(#pattern_party_avatar" + i + ")")
        .attr("fill-opacity", 1)
      // .attr("stroke-opacity", 1);
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






      const personIcon = chartArea.select('.person-icon')
        .attr('transform', `translate(${-avatar_size * .5} ${-avatar_size * .5})`)
      // .attr('y', )

      personIcon.selectAll('rect').remove()

      root.eachBefore(d => {
        if (d.parent) {
          d.x0 = d.parent.x;
          d.y0 = d.parent.y;
        }
      });
    }

  }, [svgRef, dataSet, chartDimension, selectedPerson]);


  React.useEffect(() => {
    if (selectedCompany && selectedPerson) {

      let data: NodeLinkType[] = [
        {
          id: `company-${selectedCompany.company_id}`,
          parentId: '',
          companyData: selectedCompany

        }
      ]

      if (Array.isArray(selectedCompany.company_shareholder) && selectedCompany.company_shareholder.length > 0) {
        data = [...data,
        ...selectedCompany.company_shareholder!.map((d) => ({
          id: `${d.Firstname.replaceAll(' ', '-')}-${d.Lastname.replaceAll(' ', '-')}`,
          parentId: `company-${selectedCompany.company_id}`,
          shareholderData: d
        }))]

        setType('shareholder')
      } else {
        data = [...data,
        {
          id: `company-${selectedPerson.Id}`,
          parentId: `company-${selectedCompany.company_id}`,
          personData: selectedPerson
        },
        ]
        setType('director')
      }

      const stratify = d3.stratify<NodeLinkType>().id((d) => d.id).parentId((d) => d.parentId)
      const root = stratify(data) as NodeLink;

      root.descendants().forEach((d, i) => {
        d._children = d.children;
        if (d.depth > 0) d.children = undefined;
      });

      // console.log(root);

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

export default CompanyToPersonRelationChart;