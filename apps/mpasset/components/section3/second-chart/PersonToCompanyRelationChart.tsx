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
    console.log(d.data.companyData);

    setSelectedCompany(d.data.companyData!)
    if (d.height !== 0) {
      d.children = d.children ? undefined : d._children

    }
  }, [setSelectedCompany])


  React.useEffect(() => {

    console.log('yeas');

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

      const radius = WIDTH * .4
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
        .on("click", (event, d) => {
          handleClickNode(d)
        })



      // nodeEnter
      //   .append('path')
      //   // .attr('d', 'M25.257 12.0554C25.1218 11.5957 24.6891 12.4394 24.3862 12.0716C24.2186 10.6924 23.9157 9.32947 23.364 8.15039C22.7853 6.90101 21.8929 5.90041 20.9734 4.95932C20.0539 4.01822 18.9939 3.16366 17.7769 2.62821C16.56 2.09276 15.2782 1.51404 13.8936 1.51404C12.5089 1.51404 11.2433 2.13062 10.0318 2.66066C8.82028 3.1907 7.5763 3.79647 6.62439 4.77001C5.67248 5.74356 4.872 6.8361 4.29328 8.08549C3.71456 9.33487 3.6118 10.7249 3.44413 12.1041C3.14125 12.4719 2.42732 11.5308 2.28669 11.9851C1.83237 13.5211 1.82696 13.7104 2.28129 15.2465C2.4165 15.7062 2.98981 14.8841 3.28728 15.2465C3.45495 16.6257 3.74161 17.9508 4.29869 19.1353C4.87741 20.3846 5.67789 21.5421 6.59735 22.4832C7.51681 23.4243 8.83651 23.9651 10.0589 24.506C11.2812 25.0469 12.5144 25.5985 13.899 25.5985C15.2836 25.5985 16.5654 25.1388 17.7823 24.6034C18.9993 24.0679 20.0377 23.2458 20.9896 22.2722C21.9415 21.2987 22.7528 20.3035 23.337 19.0595C23.9211 17.8156 24.3484 16.6311 24.5214 15.2573C24.8243 14.8895 25.2192 15.6629 25.5112 15.2843C26.4848 14.0187 25.7167 13.586 25.2624 12.05L25.257 12.0554Z')
      //   .attr('d', 'M150 0 L75 200 L225 200 Z')
      //   .attr('transform', 'scale(0.09)')
      //   .attr('stroke', "#090909")
      //   .attr('stroke-width', "2")
      //   .attr('stroke-miterlimit', "10")
      //   .attr('stroke-linejoin', "round")
      //   .attr('fill', 'black')
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
          .attr("xlink:href", typeof rootNode.Images === 'string' ? rootNode.Images : process.env.BASE_PATH + '/design_assets/profile_pic.jpg')
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
    <div className="w-full h-full max-w-[800px] mx-auto" ref={chartRef}>
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
    </div>
  );
};

export default PersonToCompanyRelationChart;