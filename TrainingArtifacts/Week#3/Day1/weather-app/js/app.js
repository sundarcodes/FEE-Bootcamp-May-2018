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