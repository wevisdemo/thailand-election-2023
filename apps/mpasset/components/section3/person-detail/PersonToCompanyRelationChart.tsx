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

  const { selectedPerson, directorData, shareholderData } = usePersonStore()

  const svgRef = React.useRef<SVGSVGElement>(null);
  const [dataSet, setDataSet] = React.useState<NodeLink>()
  const [flag, setFlag] = React.useState(true)
  const [isDirty, setIsDirty] = React.useState(true)


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

  }, [selectedPerson, directorData, shareholderData])


  const handleClickNode = (d: NodeLink) => {
    if (d.height !== 0) {
      d.children = d.children ? undefined : d._children
      setIsDirty(true)
    }
  }


  React.useEffect(() => {
    if (dataSet) {
      const root = dataSet

      console.log(root);

      const svg = d3.select(svgRef.current);
      const w = Number(svgRef.current!.parentElement?.clientWidth);
      const h = Number(svgRef.current!.parentElement?.clientHeight);

      svg.attr("width", w)
      svg.attr("height", h)

      const MARGIN = { TOP: 10, RIGHT: 10, BOTTOM: 10, LEFT: 10 }
      const WIDTH = w - MARGIN.LEFT - MARGIN.RIGHT
      const HEIGHT = h - MARGIN.TOP - MARGIN.BOTTOM

      svg.select('.chart-margin')
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

      const radius = WIDTH * .45
      const nodeRadius = WIDTH > 400 ? 40 : 30
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

      const node = nodeRoot.selectAll<SVGAElement, NodeLink>('g')
        .data(root.descendants())

      const nodeEnter = node.enter()
        .append('g')
        .attr("fill-opacity", 0)
        .attr("stroke-opacity", 0)
        .attr("cursor", "pointer")
        .attr("pointer-events", "all")
        .on("click", (event, d) => {
          handleClickNode(d)
        })

      nodeEnter.append('rect')
        .attr('rx', '5')
        .attr('width', nodeRadius)
        .attr('height', nodeRadius)
        .attr('fill', '#000')
        .transition(transition)
        .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y - nodeRadius * .5}, ${- nodeRadius * .5})`)
        .attr("fill-opacity", 1)
        .attr("stroke-opacity", 1);

      /// ------------ link layer ----------------
      const linkRoot = chartArea.select<SVGGElement>('.link-layer')

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
          .attr('stroke', '#000')
          .attr('stroke-width', "2")
          .attr("fill", "url(#pattern_party_avatar" + rootNode.Party?.Id + ")")
          .attr('stroke', 'black')


      }
      root.eachBefore(d => {
        if (d.parent) {
          d.x0 = d.parent.x;
          d.y0 = d.parent.y;
        }
      });
      setIsDirty(false)
    }

  }, [svgRef, dataSet, flag, isDirty]);

  return (
    <div className="w-full h-full max-w-[800px] mx-auto">
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