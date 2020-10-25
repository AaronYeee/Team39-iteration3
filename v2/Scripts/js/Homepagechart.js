/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Apply chart themes
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
    "year": "2008",
    "Children": 63679,
    "Participation Rate": 92.4
}, {
     "year": "2009",
     "Children": 64461,
    "Participation Rate": 92.7
}, {
    "year": 2010,
        "Children": 67430,
    "Participation Rate": 95.1
}, {
    "year": "2011",
        "Children": 71150,
    "Participation Rate": 94.6
}, {
    "year": "2012",
        "Children": 70511,
        "Participation Rate": 98.0
}, {
    "year": "2013",
      "Children": 71230,
    "Participation Rate": 98.2
    }, {
        "year": "2014",
        "Children": 73246,
        "Participation Rate": 96.4
    }
    , {
        "year": "2015",
        "Children": 72369,
        "Participation Rate": 98.1
    }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());

// Modify chart's colors
chart.colors.list = [
    am4core.color("#73CDBD"),
    am4core.color("#DA7A90")

];

categoryAxis.dataFields.category = "year";
categoryAxis.title.text = "Years";

// First value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Over 3 years old Children (P)";

// Second value axis
var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis2.title.text = "Kindergarten Participation Rate（%）";
valueAxis2.renderer.opposite = true;

// First series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "Children";
series.dataFields.categoryX = "year";
series.name = "Children Number (Over 3)";
series.tooltipText = "{name}: [bold]{valueY}[/]";

// Second series
var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Participation Rate";
series2.dataFields.categoryX = "year";
series2.name = "Participation Rate";
series2.tooltipText = "{name}: [bold]{valueY}%[/]";
series2.strokeWidth = 3;
series2.yAxis = valueAxis2;

// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();

// Add simple vertical scrollbar
chart.scrollbarY = new am4core.Scrollbar();

// Add horizotal scrollbar with preview
var scrollbarX = new am4charts.XYChartScrollbar();
scrollbarX.series.push(series);
chart.scrollbarX = scrollbarX;