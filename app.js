
var form = document.querySelector('form');
var add = document.querySelector('.add');
var subtract = document.querySelector('.subtract');
var result = document.querySelector('.result');
var multiply = document.querySelector('.multiply');
var divide = document.querySelector('.divide');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var input1 = parseInt(document.querySelector('.input1').value);
    var input2 = parseInt(document.querySelector('.input2').value);
    
    
    // Adding
    add.addEventListener('click', function () {
        result.innerHTML = input1 + input2;
    });

    // subtract
    subtract.addEventListener('click', function () {
        result.innerHTML = input1 - input2;
    });

    // multiply
    multiply.addEventListener('click', function () {
        result.innerHTML = input1 * input2;
    });

    // Divide
    divide.addEventListener('click', function () {
        result.innerHTML = input1 / input2;
    });
    
});