am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdivCosts", am4charts.XYChart3D);

    // Add data
    chart.data = [{
        "ChildcareType": "Centre-based(per day)",
        "Min": 70,
        "Max": 85
    }, {
        "ChildcareType": "Family day care(per hour)",
        "Min": 6,
        "Max":17
    }, {
        "ChildcareType": "Nannies(per hour)",
        "Min": 15 ,
        "Max": 35
    }, {
        "ChildcareType": "Au pairs (per week)",
        "Min": 170,
        "Max": 250
    }];

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "ChildcareType";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Typical childcare costs";
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
        return text + "$";
    });

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "Min";
    series.dataFields.categoryX = "ChildcareType";
    series.name = "Min";
    series.clustered = false;
    series.columns.template.tooltipText = "Price from {category} (Min): [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.9;

    var series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "Max";
    series2.dataFields.categoryX = "ChildcareType";
    series2.name = "Max";
    series2.clustered = false;
    series2.columns.template.tooltipText = "To Price {category} (Max): [bold]{valueY}[/]";

}); // end am4core.ready()


