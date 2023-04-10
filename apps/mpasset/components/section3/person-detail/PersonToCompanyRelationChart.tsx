import * as React from "react";
import * as d3 from "d3";
import { usePersonStore } from "../../../store/person";

type NodeLinkType = {
  id: string,
  parentId: string,
  is_gov: boolean
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

  const { selectedPerson } = usePersonStore()

  const svgRef = React.useRef<SVGSVGElement>(null);
  const [dataSet, setDataSet] = React.useState<NodeLink>()
  const [flag, setFlag] = React.useState(true)
  const [isDirty, setIsDirty] = React.useState(true)


  const fetchPersonData = React.useCallback(
    () => {
      console.log(selectedPerson);

    }, [selectedPerson])

  React.useEffect(() => {
    fetchPersonData()
  }, [selectedPerson, fetchPersonData])


  const fetchData = React.useCallback(
    () => {
      // fetch here
      // const csv = [12, 5, 6, 6, 9, 10];
      d3.csv<NodeLinkType[] & string>("data/sample.csv").then(res => {
        // code goes here
        // convert data to there type
        const data = res.slice(0, res.length) as NodeLinkType[]

        if (data) {
          const stratify = d3.stratify<NodeLinkType>().id((d) => d.id).parentId((d) => d.parentId)
          const root = stratify(data) as NodeLink;
          const dy = 192 / 6
          root.descendants().forEach((d, i) => {
            d._children = d.children;
            if (d.depth > 0) d.children = undefined;
          });
          // data.forEach(d => {
          //   d.revenue = Number(d.revenue)
          //   d.profit = Number(d.profit)
          // })
          setDataSet(root)
        }
      }).catch(error => {
        //best parctice
        console.log(error)
      })

    },
    [],)

  React.useEffect(() => {
    fetchData()
  }, [fetchData])


  const handleClickNode = (d: NodeLink) => {
    if (d.height !== 0) {
      d.children = d.children ? undefined : d._children
      setIsDirty(true)
    }
    // console.log('ancestor', d.ancestors())
  }


  React.useEffect(() => {
    if (dataSet) {
      // const data = flag ? dataSet?.slice(1) : dataSet
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

      const radius = HEIGHT * .25
      const nodeRadius = radius * .1
      const tree = d3.tree<NodeLink>().size([2 * Math.PI, radius])
        .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth).nodeSize([Math.PI * 2 / root.children!.length, WIDTH * .15])

      const transition = d3.transition().duration(500)
        // .attr("viewBox", [-MARGIN.LEFT, left.x - MARGIN.TOP, WIDTH, HEIGHT])
        .tween("resize", () => () => svg.dispatch("toggle"));

      var fill = "#999", // fill for nodes
        fillOpacity, // fill opacity for nodes
        stroke = "#555", // stroke for links
        strokeWidth = 1.5, // stroke width for links
        strokeOpacity = 0.4 // stroke opacity for links
        // strokeLinejoin, // stroke line join for links
        // strokeLinecap // stroke line cap for links
        ;


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
        });


      nodeEnter.append('rect')
        .attr('width', nodeRadius)
        .attr('height', nodeRadius)
        .attr('fill', '#fff')

      nodeEnter.append('text')
        .attr("fill", '#F00')
        .attr("stroke", stroke)
        .attr('font-size', '10')
        .style("transform", d => `rotate(${d.x <= (Math.PI / 8) ? 180 : 0}deg)`)
        .text((d) => d.id!)

      // Transition nodes to their new position.
      const nodeUpdate = node.merge(node).transition(transition)
        .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y - nodeRadius * .5}, ${- nodeRadius * .5})`)
        .attr("fill-opacity", 1)
        .attr("stroke-opacity", 1);

      // Transition exiting nodes to the parent's new position.
      const nodeExit = node.exit<NodeLink>().transition(transition).remove()
        .attr("transform", d => `rotate(${d.x0 * 180 / Math.PI - 90}) translate(${d.y0}, ${- nodeRadius * .5})`)
        .attr("fill-opacity", 0)
        .attr("stroke-opacity", 0);

      /// ------------ link layer ----------------
      const linkRoot = chartArea.select<SVGGElement>('.link-layer')

      const link = linkRoot.selectAll<SVGAElement, NodeLink>('.link')
        .data(root.links() as d3.HierarchyLink<NodeLinkType>[])

      const linkEnter = link.enter()
        .append("line")
        .transition(transition)
        .attr("class", "link")
        .attr("stroke", "#ccc")
        .attr("stroke-opacity", 0)


      const linkUpdate = link.merge(link).transition(transition)
        .attr("stroke-opacity", 1)
        // @ts-ignore
        .attr("x1", d => radialPoint(d.source.x, d.source.y)[0])
        // @ts-ignore
        .attr("y1", (d) => radialPoint(d.source.x, d.source.y)[1])
        // @ts-ignore
        .attr("x2", (d) => radialPoint(d.target.x, d.target.y)[0])
        // @ts-ignore
        .attr("y2", (d) => radialPoint(d.target.x, d.target.y)[1])

      const linkExit = link.exit().transition(transition).remove()
        .attr("stroke-opacity", 0);

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
    <div className="w-full h-full bg-green-500 max-w-[800px] mx-auto">
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
          </g>
        </g>
      </svg>
    </div>
  );
};

export default PersonToCompanyRelationChart;