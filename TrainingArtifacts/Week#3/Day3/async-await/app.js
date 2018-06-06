// With Call Backs
function get(callback) {
    return setTimeout(() => callback("secret"), 100);
}
function process(value, callback) {
    return setTimeout(() => callback(`${value}-code`), 100);
}
function main() {
    get(value => process(value, result => (console.log(result))));
}
main();



// With Promises
function get() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("secret"), 100)
    });
}
function process(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${value}-code`), 100)
    });
}
function main() {
    //get(value=>process(value,result=>(console.log(result))));
    get()
        .then(process)
        .then(result => console.log(result));
}
main();


// With Async/Await
async function get() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("secret"), 100)
    });
}
async function process(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${value}-code`), 100)
    });
}
async function main() {
    //get(value=>process(value,result=>(console.log(result))));
    let val = await get()
    let result = await process(val)
    console.log(result);
}
main();