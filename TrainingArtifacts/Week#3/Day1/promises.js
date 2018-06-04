// Call back in Event Listeners
var btn = document.getElementsByTagName('button')[0];
console.log('Before registering event');
btn.addEventListener("click", function () {
    console.log('Button clicked');
});
console.log('After registering event');

// Callbacks in setTimeout
console.log('Before setTimeout event');
setTimeout(function () {
    console.log('In setTimeout');
}, 1000);
console.log('After setTimeout event');




console.log('Before calling a XHR request');
// sendXHRRequest(function (rsp) {
//     console.log('Received XHR Response');
//     console.log(rsp);
// })
function onXHRSuccess(data) {
    console.log('Got data', data);
}
function onXHRFailure(err) {
    console.log('Err ', err);
}
sendXHRRequest1()
    .then(onXHRSuccess, onXHRFailure);

console.log('After calling a XHR request');


function sendXHRRequest1() {
    var promise = new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=27d43832d2a4adcb97fcbfa23db130aa', true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log("xhr done successfully");
                    var resp = xhr.responseText;
                    var respJson = JSON.parse(resp);
                    resolve(respJson);
                } else {
                    console.log("xhr failed");
                    reject("xhr error");
                }
            } else {
                console.log("xhr processing going on");
            }
        }
    });
    return promise;
}
