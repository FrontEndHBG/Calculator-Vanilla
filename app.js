
const form = document.querySelector('form');
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const result = document.querySelector('.result');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let input1  = parseInt(document.querySelector('.input1').value);
    let input2  = parseInt(document.querySelector('.input2').value);


    // Adding
    add.addEventListener(() => {
        result.innerHTML = input1 + input2;
    });

    // Subtract
    subtract.addEventListener(() => {
        result.innerHTML = input1 - input2;
    });

    // Multiply
    multiply.addEventListener(() => {
        result.innerHTML = input1 * input2;
    });

    // Divide
    divide.addEventListener(() => {
        result.innerHTML = input1 / input2;
    });
})
