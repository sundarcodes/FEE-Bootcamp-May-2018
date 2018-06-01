var car = (function () {
    return {
        domElement: null,
        startId: null,
        currentLocation: 0,
        moveCar: function () {
            this.domElement = document.getElementById('car');
            var leftPosition = this.currentLocation;
            startId = setInterval(moveLeft.bind(this), 100);
            console.log(this.domElement);
            // var carRef = this;
            function moveLeft() {
                this.domElement.style.left = leftPosition + 'px';
                leftPosition += 10;
            }
        },
        stopCar: function () {
            clearInterval(startId);
            // Store the current Location
            this.currentLocation = parseInt(this.domElement.style.left);
        }
    }
})();
// var startId = 0;
// function moveCar() {
//     //1. First get the DOM element of car
//     var car = document.getElementById('car');
//     var leftPosition = 10;
//     //2. Increment the left position
//     //3. Repeat step 2 until stop button is pressed
//     startId = setInterval(moveLeft, 100);
//     function moveLeft() {
//         car.style.left = leftPosition + 'px';
//         leftPosition += 10;
//         // console.log(car.style.left);
//     }
// }

// function stopCar() {
//     clearInterval(startId);
// }