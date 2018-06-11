
const showForecast = (function () {
    var dayWiseMap = {};
    $('#getWeatherBtn').click(() => {
        $('#chart-container').hide(); console.log('Button clicked');
        const a = $('#cityInput').val();
        $.ajax({
            type: 'GET',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${a}&appid=27d43832d2a4adcb97fcbfa23db130aa`,
            success: (data) => {
                console.log('In success callback');
                console.log(data);
                const currentTemp = Math.round(data.main.temp - 270);
                const currentPressure = data.main.pressure;
                const humidity = data.main.humidity;
                $('#currentTemperature').html(currentTemp);
                $('table').show();
            },
            error: (err) => {
                console.log('In error callback');
                console.log(err);
            }
        });
    })

    $('#getForecastBtn').click(() => {
        $('table').hide();
        const cityName = $('#cityInput').val();
        // Hit the API
        // On Success, parse the forecast information from the response
        // and update the options in the chart
        $.ajax({
            type: 'GET',
            url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=27d43832d2a4adcb97fcbfa23db130aa`,
            success: (data) => {
                console.log('In success callback');
                console.log(data);

                listOfDates = data.list.map((ele) => moment(ele.dt * 1000).format('dddd, h:mm a'));
                console.log(listOfDates);
                listOfTemp = data.list.map(ele => Math.round(ele.main.temp - 270));
                console.log(listOfTemp);



                // Key would be day number
                // Value  would be all data corresponding to that day number;
                // {
                // 1: [{}, {}, {}],
                // 2: [{}, {}]
                // }

                data.list.forEach(date => {
                    // console.log(date);
                    const dateValue = new Date(date.dt * 1000);
                    const dayNum = dateValue.getDay();
                    if (dayNum in dayWiseMap) {
                        dayWiseMap[dayNum].push(date);
                    } else {
                        dayWiseMap[dayNum] = [date];
                        // dayWiseMap {
                        //     1: [{dt:2333,}]
                        // }
                        // const arr = [];
                        // arr.push(date);
                        // dayWiseMap[dayNum] = arr;
                    }
                });
                // Update the days in the DOM
                createDaysCard(Object.keys(dayWiseMap));
                console.log(dayWiseMap);
                // Get the first Day in the Map
                const firstDayInDayWiseMap = Object.keys(dayWiseMap)[0];
                // Get all temperatures associated for that day
                // And apply temperature conversion
                const tempListOfFirstDay =
                    dayWiseMap[firstDayInDayWiseMap].map(ele =>
                        convertFromKelvinToCelcius(ele.main.temp));
                const datesListOfFirstDay =
                    dayWiseMap[firstDayInDayWiseMap].map(ele =>
                        convertFromMsToDate(ele.dt));
                plotChart(tempListOfFirstDay, datesListOfFirstDay);

            },

            error: (err) => {
                console.log('In error callback');
                console.log(err);
            }
        });

        const createDaysCard = (daysList) => {
            daysList.forEach(day => {
                const str = `<div id="forecast-day-${day}" class="day" 
            onclick="showForecast(${day})">${convertDayInNumToWord(day)}</div>`;
                $('#forecast-days').append(str);
            });
        };

        const convertDayInNumToWord = (dayNum) => {
            const daysInWord = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                'Thursday', 'Friday', 'Saturday'];
            return daysInWord[dayNum];
        };



    });
    const plotChart = (tempArr, datesArr) => {
        $('#chart-container').show();
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
                    formatter: function () { return this.value + '°'; }
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
                name: '',
                marker: {
                    symbol: 'square'
                },
                data: tempArr

            }]
        });
    }

    const convertFromMsToDate = (ms) => moment(ms * 1000).format('dddd, h:mm a');

    const convertFromKelvinToCelcius = (tempInK) => tempInK - 270;
    const showForecast = (dayNum) => {
        // Fetch the data corresponding to this dayNum from dayWiseMap
        console.log(dayNum);
        console.log(dayWiseMap[dayNum]);
        const tempListOfFirstDay =
            dayWiseMap[dayNum].map(ele =>
                convertFromKelvinToCelcius(ele.main.temp));
        const datesListOfFirstDay =
            dayWiseMap[dayNum].map(ele =>
                convertFromMsToDate(ele.dt));
        plotChart(tempListOfFirstDay, datesListOfFirstDay);

    }
    return showForecast;
})();

