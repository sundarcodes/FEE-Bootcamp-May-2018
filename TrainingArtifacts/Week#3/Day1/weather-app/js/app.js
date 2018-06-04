$('#getWeatherBtn').click(function () {
    console.log('Button clicked');
    var cityName = $('#cityInput').val();
    $.ajax({
        type: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=27d43832d2a4adcb97fcbfa23db130aa',
        success: function (data) {
            console.log('In success callback');
            console.log(data);
            var currentTemp = Math.round(data.main.temp - 270);
            var currentPressure = data.main.pressure;
            var humidity = data.main.humidity;
            $('#currentTemperature').html(currentTemp);
            $('table').removeClass('results-hide');
        },
        error: function (err) {
            console.log('In error callback');
            console.log(err);
        }
    });
})

$('#getForecastBtn').click(function () {
    var cityName = $('#cityInput').val();
    // Hit the API
    // On Success, parse the forecast information from the response
    // and update the options in the chart
    $.ajax({
        type: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=27d43832d2a4adcb97fcbfa23db130aa',
        success: function (data) {
            console.log('In success callback');
            console.log(data);

            listOfDates = data.list.map(function (ele) { return new Date(ele.dt * 1000) });
            console.log(listOfDates);
            listOfTemp = data.list.map(function (ele) { return Math.round(ele.main.temp - 270) });
            console.log(listOfTemp);
            plotChart(listOfTemp, listOfDates);
        },
        error: function (err) {
            console.log('In error callback');
            console.log(err);
        }
    });

    function plotChart(tempArr, datesArr) {
        $('#chart-container').removeClass('results-hide');
        Highcharts.chart('chart-container', {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            xAxis: {
                categories: datesArr
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {
                    formatter: function () {
                        return this.value + '°';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: cityName,
                marker: {
                    symbol: 'square'
                },
                data: tempArr

            }]
        });
    }

})