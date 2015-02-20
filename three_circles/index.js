var svg = d3.select("svg");
svg.selectAll("circle")
    .data([20, 30, 40, 50])
  .enter().append("circle")
    .attr("cy", 60)
    .attr("cx", function(d, i) { return d + 20 * i; })
    .attr("r", function(d) { return d; });
var circle = d3.selectAll("circle")
circle.exit().remove();

