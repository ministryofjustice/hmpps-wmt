
trace1 = {
    x: utilisationTable.headings,
    y: utilisationTable.values, 
    hoverinfo: 'x+y', 
    line: {width: 3.5}, 
    marker: {
        line: {width: -0.5}, 
        size: 9
    }, 
    mode: 'lines+markers', 
    name: 'Utilisation %', 
    type: 'scatter', 
};
data = [trace1];
layout = {
    autosize: true, 
    dragmode: 'pan', 
    hovermode: 'closest', 
    legend: {
        x: 0.436873550022, 
        y: -0.208008047869, 
        borderwidth: 0, 
        font: {size: 12}, 
        orientation: 'h'
    }, 
    margin: {
        r: 0, 
        t: 40, 
        b: 60, 
        l: 50
    }, 
    shapes: [
    {
        fillcolor: 'rgb(109, 206, 250)', 
        line: {
            color: 'rgba(68, 68, 68, 100)', 
            dash: 'dot', 
            width: 1
        }, 
        opacity: 0.3, 
        type: 'rectangle', 
        x0: 0, 
        x1: 1, 
        xref: 'paper', 
        y0: 90, 
        y1: 110, 
        yref: 'y'
    }
    ], 
    showlegend: true, 
    title: 'Caseload Utilisation', 
    xaxis: {
        autorange: true, 
        fixedrange: true, 
        mirror: false, 
        nticks: 0, 
        range: [-0.665000979816, 11.6650009798], 
        showgrid: false, 
        showline: true, 
        side: 'bottom', 
        ticks: 'outside', 
        title: '2016', 
        titlefont: {size: 15}, 
        type: 'category', 
        zeroline: false, 
        zerolinewidth: 11
    }, 
    yaxis: {
        autorange: false, 
        fixedrange: true, 
        range: [0, 120], 
        showline: true, 
        ticks: 'outside', 
        title: 'Utilisation %', 
        type: 'linear'
    }
};
Plotly.plot('plotly-div-line', {
    data: data,
    layout: layout
});
