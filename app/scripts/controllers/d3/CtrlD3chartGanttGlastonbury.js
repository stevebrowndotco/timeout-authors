'use strict';
var
width = window.innerWidth,
  height = window.innerHeight,
  barHeight = 40,
  margin = {
    top: 60,
    right: 60,
    bottom: 60,
    left: 120
  }, grp, Stages, xAxis, yAxis, labelAxis, bars, x, l, q, yRange, o, duration, minEndtime,
  maxEndtime, minStarttime, maxStarttime, stageCount, customTimeFormat, zoom, drag, timeLabels, steps, day, dayLabels,
  releaseMouse, gradient;
myApp.controller('CtrlD3chartGanttGlastonbury', function($scope, $log, $http) {
  $scope.$log = $log;
  $scope.myData = [];
  $http
    .get('/api/glaston/getlineup', {})
    .success(function(data) {
      var items = data.sort(compare);
      for (var i = 0; i < items.length; i++) {
        $scope.myData.push(items[i]);
      }
      printJson($scope.myData)
      $scope.busy = false;

    })
    .error(function(data, status) {
      if (status === 404) {
        $scope.error = 'That repository does not exist';
      } else {
        $scope.error = 'Error: ' + status;
      }
    });



  $scope.normalize = function() {
    console.log("normalize artist: ");
    $http.get('/api/glasto/insertartist', {

    })
      .success(function(data) {
        var items = data.sort(compare);
        for (var i = 0; i < items.length; i++) {
          //$scope.myData.push(items[i]);
        }
        _.map(function(v, k) {
          return items
        })




        $scope.busy = false;

      })
      .error(function(data, status) {
        if (status === 404) {
          $scope.error = 'That repository does not exist';
        } else {
          $scope.error = 'Error: ' + status;
        }
      });

  }


});



myApp.directive('dud3gantt', [

  function() {
    return {
      restrict: 'E',
      scope: {
        data: '=data'
      },
      link: function(scope, element) {

        var svg;
        svg = d3.select(element[0])
          .append("svg")
          .attr("height", height)
          .attr("width", width);
        scope.render = function(data) {
          printJson(data)









          //zoom pane

          grp = svg.append("g")
            .attr("height", height)
            .attr("width", width)
            .attr("x", 0)
            .attr("y", 0)
            .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');


          Stages = _
            .chain(data)
            .groupBy('Stage')
            .map(function(value, key) {
              return key;
            })
            .value();
          printJson(Stages)
          stageCount = Stages.length;

          maxStarttime = d3.max(data, function(d) {
            return StarttimeStamp(d);
          });
          minStarttime = d3.min(data, function(d) {
            return StarttimeStamp(d);
          });
          maxEndtime = d3.max(data, function(d) {
            return EndtimeStamp(d);
          });
          minEndtime = d3.min(data, function(d) {
            return EndtimeStamp(d);
          });

          duration = maxEndtime - minStarttime;

          timeLabels = [];
          steps = 1800000 //30*60*1000;//30 mins in millis
          var extDuration = ((duration / steps) + (2))
          for (var i = 0; i <= extDuration; i++) {
            var time = (steps * i) + minStarttime;
            timeLabels.push(time);
          }
          dayLabels = [];
          day = 3600000 * 24;
          for (var i = 0; i < (duration / day); i++) {
            var time = (day * i) + minStarttime;
            dayLabels.push(time);
          }

          x = d3.time.scale()
            .domain([minStarttime, maxEndtime])
            .nice(d3.time.minute, 15)
            .range([0, 5000]);

          yRange = Stages.length * barHeight;

          zoom = d3.behavior.zoom()
            .x(x)
            .scaleExtent([1, 10])
            .on("zoom", zoomed)
            .on("zoomend", zoomedEnd);

          drag = d3.behavior.drag()
            .on("dragstart", dragstarted)
            .on("drag", dragged)


          // Define the gradient
          gradient = grp.append("svg:defs")
            .append("svg:linearGradient")
            .attr("id", "gradient")
            .attr("x1", "0%")
            .attr("y1", "100%")
            .attr("x2", "100%")
            .attr("y2", "100%")
            .attr("spreadMethod", "pad");

          // Define the gradient colors
          gradient.append("svg:stop")
            .attr("offset", "0%")
            .attr("stop-color", "hsla(240,0%,0%,0.35)")
            .attr("stop-opacity", 1);
          gradient.append("svg:stop")
            .attr("offset", "40%")
            .attr("stop-color", "hsla(240,0%,83%,0.4)")
            .attr("stop-opacity", 1);
          gradient.append("svg:stop")
            .attr("offset", "50%")
            .attr("stop-color", "hsla(240,0%,100%,0.5)")
            .attr("stop-opacity", 1);
          gradient.append("svg:stop")
            .attr("offset", "60%")
            .attr("stop-color", "hsla(240,0%,83%,0.4)")
            .attr("stop-opacity", 1);
          gradient.append("svg:stop")
            .attr("offset", "100%")
            .attr("stop-color", "hsla(240,0%,0%,0.35)")
            .attr("stop-opacity", 1);

          //gradient apply
          grp.append("g")
            .attr("class", "gradientsGrp")
            .selectAll(".gradientGrp")
            .data(dayLabels)
            .enter()
            .append("rect")
            .attr("class", "gradientGrp")
            .attr("width", function() {
              return x(minStarttime + 86400000)
            })
            .attr("height", height + 20)
            .attr("x", function(d) {
              return x(d)
            })
            .attr("y", -margin.top)
            .style('fill', 'url(#gradient)')
            .style("stroke", "none");

          // events
          bars = grp
            .append("g")
            .attr("class", "barsGrp")
            .selectAll(".barGrp")
            .data(data)
            .enter()
            .append("g")
            .attr("class", "barGrp")
            .attr("transform", function(d, i) {
              var stage = d['Stage'];
              var stageId = Stages.indexOf(stage.toString());
              var xPos = x((StarttimeStamp(d)));
              return "translate(" + xPos + "," + stageId * barHeight + ")";
            })
            .attr("width", function(d) {
              var result;
              if (EndtimeStamp(d) > StarttimeStamp(d)) {
                result = x(EndtimeStamp(d)) - x(StarttimeStamp(d));
              } else {
                result = x(EndtimeStamp(d) + 86400000) - x(StarttimeStamp(d));
              }
              return result;
            })
            .attr("height", barHeight);

          bars.append("rect")
            .attr("width", function(d) {
              var result;
              result = x(EndtimeStamp(d)) - x(StarttimeStamp(d));
              if (result > 0) {
                return result;
              } else {
                return 0;
              }
            })
            .attr("height", barHeight)
            .attr("rx", 5)
            .attr("ry", 5)
            .style("fill", "hsla(0,0%,65%,0.65)")
            .style("stroke", "hsla(0,0%,95%,0.85)")
            .style("stroke-width", "2");

          bars.append("foreignObject")
            .attr("class", "artistNameObj")
            .attr("width", function(d) {
              var width = this.parentNode.getAttribute("width");
              if (width > 0) {
                return width;
              } else {
                return 20000;
              }

            })
            .attr("height", function(d) {
              var height = this.parentNode.getAttribute("height");
              if (height > 0) {
                return height;
              } else {
                return 20000;
              }
            })
            .style("font", "14px 'Helvetica Neue'")
            .html(function(d) {
              var stage = d['Stage'];
              var stageId = Stages.indexOf(stage.toString());
              var h = 359;
              var s = 0;
              if (stageId < 20 || stageId > 40) {
                var l = (0);
              } else {
                var l = (100);
              }
              return "<div style='color: hsla(0,0%,100%,1)' class='artistName'>" + d['Artist name'] + "</div>";
            });

          //cover v
          grp.append("rect")
            .attr("width", margin.left)
            .attr("height", height)
            .attr("x", -margin.left)
            .style("fill", "hsla(0,0%,25%,0.75)")
            .style("stroke", "none")

          //yAxis
          grp.append('g')
            .attr("class", "yAxis")
            .selectAll(".labelGrp")
            .data(Stages)
            .enter()
            .append("text")
            .attr("text-anchor", "end")
            .text(function(d, i) {
              return d;
            })
            .attr("class", "labelGrp")
            .attr("dx", ".5em")
            .attr("dy", ".15em")
            .call(wrap, margin.left)
            .attr("transform", function(d, i) {
              return "translate( 0 " + ((i * barHeight) + (barHeight / 2)) + ")";
            })
            .style("fill", "white")


          //grid h
          grp.append("g")
            .attr("class", "grid")
            .selectAll("line")
            .data(d3.range(0, yRange, barHeight))
            .enter()
            .append("line")
            .attr("y1", function(d) {
              return d;
            })
            .attr("x1", -margin.left)
            .attr("y2", function(d) {
              return d;
            })
            .attr("x2", width + margin.left)
            .style("fill", 'hsla(0,0%,100%,0.8)')



          //cover H
          grp.append("rect")
            .attr("width", width + margin.left)
            .attr("height", margin.top)
            .attr("x", -margin.left)
            .attr("y", -margin.top)
            .style('fill', 'hsla(0,0%,100%,0.55)')
            .style("stroke", "none");

          //xAxis
          grp.append('g')
            .attr("class", "xAxis")
            .selectAll(".labelxAxisGrp")
            .data(timeLabels)
            .enter()
            .append("text")
            .attr("class", "labelxAxisGrp")
            .attr("text-anchor", "end")
            .text(function(d, i) {
              var date = new Date(d);
              var options = {
                hour: "numeric",
                minute: "numeric"
              };
              return date.toLocaleString("en-GB", options);
            });


          //rotate the hours labels
          grp.selectAll(".labelxAxisGrp")
            .attr("transform", function(d, i) {
              var px = x(d) + 6;
              return "translate( " + px + " -51),rotate(-90)";
            });

          //day label
          grp.append('g')
            .attr("class", "xAxisDay")
            .selectAll(".labelxAxisDayGrp")
            .data(dayLabels)
            .enter()
            .append("text")
            .attr("text-anchor", "start")
            .text(function(d, i) {
              var date = new Date(d);
              var options = {
                weekday: "long",
                day: "numeric",
                month: "long"
              };
              return date.toLocaleString("en-GB", options);
            })
            .style("fill", "hsl(100,0%,0%)")
            .attr("class", "shadow labelxAxisDayGrp ")
            .attr("dx", ".5em")
            .attr("dy", ".15em")
            .attr("transform", function(d, i) {
              var px = x(d) - margin.left;
              if (px < margin.left) {
                return "translate( " + 0 + " -8)";
              } else {
                return "translate( " + px + " -8)";
              }
            })

          //zoom pane
          /*  grp.append("rect")
          .attr("class", "pane")
          .attr("width", width-margin.left-1)
          .attr("height", height-margin.top-1)*/



          //left top corner cover
          grp.append("rect")
            .attr("class", "pane")
            .attr("width", margin.left)
            .attr("height", margin.top)
            .attr("x", -margin.left)
            .attr("y", -margin.top)
            .style("fill", "black")
            .style("stoke", "none");




          grp.call(zoom);

          grp.call(drag);

        };

        //Watch 'data' and run scope.render(newVal) whenever it changes
        //Use true for 'objectEquality' property so comparisons are done on equality and not reference
        scope.$watch('data', function() {
          scope.render(scope.data);
        }, true);
      }
    };
  }
]);



/*function dragmove(d) {
  if (d3.event.defaultPrevented) return;

  // Extract the click location\    

  var x = d3.event.x;
  var y = d3.event.y;
  d3.select(this).attr("transform", "translate(" + x + "," + y + ")");
};*/



function zoomed() {


  bars.select("rect")
    .attr("width", function(d) {
      var result;
      //printJson(EndtimeStamp(d));

      result = x(EndtimeStamp(d)) - x(StarttimeStamp(d));

      if (result > 0) {
        return result;
      } else {
        return 0;
      }
    });

  grp.selectAll(".barGrp")
    .attr("transform", function(d, i) {
      var stage = d['Stage'];
      var stageId = Stages.indexOf(stage.toString());

      if (d3.event.translate[0] >= 0) {
        var xPos = x((StarttimeStamp(d))) - d3.event.translate[0];
        if (d3.event.translate[1] < 0) {
          var yPos = (stageId * barHeight) + d3.event.translate[1]
          return "translate(" + xPos + " " + yPos + ")";
        } else {
          var yPos = (stageId * barHeight)
          return "translate(" + xPos + " " + yPos + ")";
        }
      } else {
        var xPos = x((StarttimeStamp(d))) + d3.event.translate[0];
        if (d3.event.translate[1] < 0) {
          var yPos = (stageId * barHeight) + d3.event.translate[1]
          //console.log("d3.event.translate[0]<0 : ");
          return "translate(" + xPos + " " + yPos + ")";
        } else {
          var yPos = (stageId * barHeight)
          return "translate(" + xPos + " " + yPos + ")";
        }
      }


      //return "translate(" + xPos + "," + yPos + ")";
    })
    .attr("width", function(d) {
      var result;


      result = x(EndtimeStamp(d)) - x(StarttimeStamp(d));

      return result;
    })
    .attr("height", barHeight)


  grp.select(".grid")
    .attr("transform", function() {
      if (d3.event.translate[1] < 0) {
        return "translate(0 " + d3.event.translate[1] + ")";

      } else {
        return "translate(0 0)";
      };
    });

  grp.select(".yAxis")
    .attr("transform", function() {
      if (d3.event.translate[1] < 0) {

        return "translate( 0 " + d3.event.translate[1] + ")";

      } else {
        return "translate(0 0)";
      };
    });

  grp.selectAll('.labelxAxisGrp')
    .attr("transform", function(d, i) {
      var px = x(d) + d3.event.translate[0] + 6;
      return "translate( " + px + " -51),rotate(-90)";

    });
  grp.selectAll('.gradientGrp')

  .attr("x", function(d) {
    releaseMouse = d3.event.translate[0];
    return (x(d) + d3.event.translate[0] + 3)
  })
    .attr("y", -margin.top)
    .attr("width", function(d) {
      return x(minStarttime + 86400000) - d3.event.translate[0];
    })



  grp.selectAll('.labelxAxisDayGrp')
    .attr("transform", function(d, i) {
      var next = x(minStarttime + (86400000)) - d3.event.translate[0] - 130;

      var px = x(d) + d3.event.translate[0];

      if (px < 0 && px > (-next)) {
        return "translate( " + 0 + " -8)";
      } else {
        if (px <= (-(next))) {

          return "translate( " + (px + next) + " -8)";
        } else {
          return "translate( " + px + " -8)";
        }
      }
    })


  /*.style("fill", function(d, i) {
      var next = x(minStarttime + (86400000)) - d3.event.translate[0];
      var l = 2 * ((x(minStarttime + (86400000)) - d3.event.translate[0]) - (x(minStarttime + (86400000)))) / (x(minStarttime + (86400000)) - d3.event.translate[0]);
      l = l - (i)
      var px = x(d) + d3.event.translate[0];
      if (px < 0 && px > (-next)) {
        if ((l) < 0.1) {
          return "hsl(100,0%," + ((1 - l) * 100) + "%)";
        }
        if (l >= 0.1 && l <= 0.2) { //90to 0 in 0.1
          var lum = 90 - (((l - 0.1) / 0.1) * 100 * 0.9)
          return "hsl(100,0%," + (lum) + "%)";
        }
        if (l >= 0.2 && l <= 0.8) {
          return "hsl(100,0%," + (0) + "%)";
        }
        if (l >= 0.75 && l <= 0.88) {
          var lum = ((l - 0.75) / 0.13) * 100 * 0.88
          return "hsl(100,0%," + (lum) + "%)";
        }
        if (l > 0.88) {
          return "hsl(100,0%," + (l * 100) + "%)";
        }
      } else { 
          return "hsl(100,0%," + (100) + "%)";
      }
    })*/
};

function zoomedEnd() {

  grp.selectAll('.gradientGrp')


  .attr("transform", function(d) {
    console.log("releaseMouse: " + releaseMouse);
    if (releaseMouse >= 0) {
      var xPos = -(2 * releaseMouse) - 3;
      releaseMouse = 0;
      console.log("xPos: " + xPos);
    } else {

      var xPos = 0
    }
    console.log("releaseMouse: " + releaseMouse);
    return ("translate(" + xPos + " " + (-margin.top) + ")");
  })

  .attr("width", function(d) {
    return x(minStarttime + 86400000) - releaseMouse;
  })
    .style('fill', 'url(#gradient)')
    .style("stroke", "none")

  bars.selectAll(".artistNameObj")
    .attr("width", function(d) {
      var width = this.parentNode.getAttribute("width");
      return width
    })
};

/*function printJson(arr) {
  var output = JSON.stringify(arr, null, '\t')
  console.log("output: " + output);
};*/

function StarttimeStamp(d) {
  if (d['Start time'] === "24:00:00") {
    d['Start time'] = "00:00:00"
  };

  if (d.Day === "WEDNESDAY") {

    d.Date = "2014-06-25 " + d['Start time'];
    var StartDate = new Date(d.Date);

  };
  if (d.Day === "THURSDAY") {
    d.Date = "2014-06-26 " + d['Start time'];
    var StartDate = new Date(d.Date);

  };
  if (d.Day === "FRIDAY") {
    d.Date = "2014-06-27 " + d['Start time'];
    var StartDate = new Date(d.Date);

  };
  if (d.Day === "SATURDAY") {
    d.Date = "2014-06-28 " + d['Start time'];
    var StartDate = new Date(d.Date);


  };
  if (d.Day === "SUNDAY") {
    d.Date = "2014-06-29 " + d['Start time'];
    var StartDate = new Date(d.Date);

  };
  var result = StartDate.getTime()
  return result
};

function EndtimeStamp(d) {
  var Endtime;
  if (d.Day === "WEDNESDAY") {
    d.Date = "2014-06-25 " + d['End time'];
    Endtime = new Date(d.Date);

  };
  if (d.Day === "THURSDAY") {
    d.Date = "2014-06-26 " + d['End time'];
    Endtime = new Date(d.Date);
  };
  if (d.Day === "FRIDAY") {
    d.Date = "2014-06-27 " + d['End time'];
    Endtime = new Date(d.Date);
  };
  if (d.Day === "SATURDAY") {
    d.Date = "2014-06-28 " + d['End time'];
    Endtime = new Date(d.Date);
  };
  if (d.Day === "SUNDAY") {
    d.Date = "2014-06-29 " + d['End time'];
    Endtime = new Date(d.Date);
  };
  if (d['End time'] === "0:00:00") {
    return Endtime.getTime() + 86400000;
  } else {
    if (Endtime.getTime() < StarttimeStamp(d)) {
      return Endtime.getTime() + 86400000;
    } else {
      return Endtime.getTime();
    }

  };
};

function compare(a, b) {
  if (StarttimeStamp(a) < StarttimeStamp(b))
    return -1;
  if (StarttimeStamp(a) > StarttimeStamp(b))
    return 1;
  return 0;
};

function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
      words = text.text()
        .split(/\s+/)
        .reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.1, // ems
      y = text.attr("y"),
      dy = parseFloat(text.attr("dy")),
      tspan = text.text(null)
        .append("tspan")
        .attr("x", 0)
        .attr("y", y)
        .attr("dx", "-.5em")
        .attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node()
        .getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan")
          .attr("x", 0)
          .attr("y", y)
          .attr("dx", "-.5em")
          .attr("dy", ++lineNumber * lineHeight + dy + "em")
          .text(word);
      }
    }
  });
};

function dragstarted(d) {

  d3.event.sourceEvent.stopPropagation();
};

function dragged(d) {

}