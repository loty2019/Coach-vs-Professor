var commonProperties = {
    width: 150, 
    outerRadius: 75 
};

var graph1 = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width: 'container',
    //height: 'container',
    title: 'Top 10 Most Payed Jobs Since 2010',
    data: {url: 'topJobsAllYear.csv'},
    mark: {
      type: 'bar',
      tooltip: true,
      color: 'steelblue',
      cornerRadiusEnd: 2,
      height: {band: 0.8}
    },

    encoding: {
      x: {field: 'ANNUAL_RATE', type: 'quantitative', axis: {title: 'Salary'}},
      y: {
        field: 'POSITION_TITLE',
        type: 'nominal',
        axis: {title: null},
        sort: "-x",
        },

      color: {
        condition: {
          test: "indexof(lower(datum.POSITION_TITLE), 'coach') != -1", // Condition
          value: "orange" 
        },
        value: "rgba(70, 130, 180, 0.5)"
        
      },
    }
};

var ratioVisAmherst = {
    
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "description": "A pie chart showing the pay ratio of professors and coaches in different universities in 2023.",
        "width": commonProperties.width,
        title: 'Pay Ratio at Umass Amherst',
        "data": {
          "values": [
            {"position": "Coaches", "payRatio": 124660},
            
            {"position": "Prof", "payRatio": 134141},
            
            {"position": "Other Faculty", "payRatio": 63243},
          ]
        },
        "encoding": {
          "theta": {"field": "payRatio", "type": "quantitative", "stack": true},
          "radius": {
            "field": "payRatio",
            "scale": {"type": "sqrt", "zero": true, "rangeMax": commonProperties.outerRadius}
          },
          "color": {
            "field": "position",
            "type": "nominal",
            "scale": {
              "scheme": "category20"
            }
          }
        },
        "layer": [
          {
            "mark": {
              "type": "arc",
              tooltip: true,
              "outerRadius": commonProperties.outerRadius
            }
          },
          {
            "mark": {"type": "text", "radiusOffset": 20},
            "encoding": {
              "text": {"field": "position", "type": "nominal"}
            }
          }
        ]
    
      
};
  
var ratioVisBoston = {
    
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A pie chart showing the pay ratio of professors and coaches in different universities in 2023.",
    "width": commonProperties.width,
    title: 'Pay Ratio at Umass Boston',
    "data": {
      "values": [
        {"position": "Coaches", "payRatio": 75314},
        
        {"position": "Prof", "payRatio": 123561},
        
        {"position": "Other Faculty", "payRatio": 56575},
      ]
    },
    "encoding": {
      "theta": {"field": "payRatio", "type": "quantitative", "stack": true},
      "radius": {
        "field": "payRatio",
        "scale": {"type": "sqrt", "zero": true, "rangeMax": commonProperties.outerRadius}
      },
      "color": {
        "field": "position",
        "type": "nominal",
        "scale": {
          "scheme": "category20",
        }
      }
    },
    "layer": [
      {
        "mark": {
          "type": "arc",
          tooltip: true,
          "outerRadius": commonProperties.outerRadius
        }
      },
      {
        "mark": {"type": "text", "radiusOffset": 20},
        "encoding": {
          "text": {"field": "position", "type": "nominal"}
        }
      }
    ]

  
};

var ratioVisDartmouth = {
    
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A pie chart showing the pay ratio of professors and coaches in different universities in 2023.",
    "width": commonProperties.width,
    title: 'Pay Ratio at Umass Dartmouth',
    "data": {
      "values": [
        {"position": "Coaches", "payRatio": 70604},
        
        {"position": "Prof", "payRatio": 114042},
        
        {"position": "Other Faculty", "payRatio": 59173},
      ]
    },
    "encoding": {
      "theta": {"field": "payRatio", "type": "quantitative", "stack": true},
      "radius": {
        "field": "payRatio",
        "scale": {"type": "sqrt", "zero": true, "rangeMax": commonProperties.outerRadius}
      },
      "color": {
        "field": "position",
        "type": "nominal",
        "scale": {
          "scheme": "category20",
        }
      }
    },
    "layer": [
      {
        "mark": {
          "type": "arc",
          tooltip: true,
          "outerRadius": commonProperties.width
        }
      },
      {
        "mark": {"type": "text", "radiusOffset": 20},
        "encoding": {
          "text": {"field": "position", "type": "nominal"}
        }
      }
    ]
};

var ratioVisLowell = {
    
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A pie chart showing the pay ratio of professors and coaches in different universities in 2023.",
    "width": commonProperties.width,
    title: 'Pay Ratio at Umass Lowell',
    "data": {
      "values": [
        {"position": "Coaches", "payRatio": 83364},
        
        {"position": "Prof", "payRatio": 131523},
        
        {"position": "Other Faculty", "payRatio": 59630},
      ]
    },
    "encoding": {
      "theta": {"field": "payRatio", "type": "quantitative", "stack": true},
      "radius": {
        "field": "payRatio",
        "scale": {"type": "sqrt", "zero": true, "rangeMax": commonProperties.outerRadius}
      },
      "color": {
        "field": "position",
        "type": "nominal",
        "scale": {
          "scheme": "category20",
        }
      }
    },
    "layer": [
      {
        "mark": {
          "type": "arc",
          tooltip: true,
          "outerRadius": 'container'
        }
      },
      {
        "mark": {"type": "text", "radiusOffset": 20},
        "encoding": {
          "text": {"field": "position", "type": "nominal"}
        }
      }
    ]
};

vegaEmbed('#vis', graph1, { actions: false });
vegaEmbed('#vis2', ratioVisAmherst, { actions: false });
vegaEmbed('#vis3', ratioVisBoston, { actions: false });
vegaEmbed('#vis4', ratioVisDartmouth, { actions: false });
vegaEmbed('#vis5', ratioVisLowell, { actions: false });

