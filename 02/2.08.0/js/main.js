/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/
/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.7 - Loading external data
*/

d3.json("./data/buildings.json").then((data) => {
    data.forEach(function(d){
        d.height = +d.height;
    });

    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 400)
        .attr("height", 400);

    var x = d3.scaleBand()
        .domain(['Burj Khalifa', 'Shangai Tower',
            'Abraj Al-Bait Clock Tower', 'Ping An Finance Center',
            'Lotte World Tower'])
        .range([0, 400])
        .paddingInner(0.3)
        .paddingOuter(0.3)

    var y = d3.scaleLinear()
        .domain([0, 828])
        .range([0, 400])

    var circles = svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function(d){
            return x(d.name);
        })
        .attr("y", 20)
        .attr("width", x.bandwidth)
        .attr("height", function(d){
            return d.height;
        })
        .attr("fill", (d) => {
            if(d.name === 'Lotte') {
                return "grey"
            } 
            else {
                return "blue"
            }
        });
}).catch(err => console.log(err))