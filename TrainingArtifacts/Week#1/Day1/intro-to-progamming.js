// 1. Take the input and store it as n.
// 2. Validate the input.
// 3. If validation fails, print error and stop.
// 4. If validation passes, go to step 5.
// 5. Initialize variable fact to 1.
// 6. Initialize variable i to 1
// 7. Repeat step 8 till i is less than or equal to n, 
// else go to step 10
// 8. Multiply fact with i and store it in fact.
// 9. Increment i by 1 and goto step 6
// 10. Print fact

function fact(n) {
    if (validateInput(n)) {
        return calculateFactorial(n);
    } else {
        return -1;
    }
}

function validateInput(n) {
    if (n < 0) {
        console.log('Negative numbers not permitted');
        return false;
    }
    return true;
}

function calculateFactorial(n) {
    var fact = 1;
    var i;
    for (i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

// Test Cases

var result = fact(8);
if (result > 0) {
    console.log(result);
}

// var inputs = [0, 1, 5, -1, 8];

// for (i = 0; i < inputs.length; i++) {
//     console.log('Fact of ' + inputs[i] + ' is ',
//         fact(inputs[i]));
// }

// Factorial with recursion

function fact_recursion(n) {
    if (n == 0) {
        return 1;
    }
    return n * fact_recursion(n - 1);
}

function fact_tail_recursion(n, result = 1) {
    if (n == 0) {
        return result;
    }
    return fact_tail_recursion(n - 1, result * n);
}
