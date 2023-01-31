const calc = document.querySelector('#calc');
const show1 = document.querySelector('#show1');

const inp1 = document.querySelector('#input1-1');
const inp2 = document.querySelector('#input2-1');
const btn = document.querySelector('#btn');
let result = document.querySelector('#result');
const inputs = document.querySelector('#inputs');
const inputs2 = document.querySelector('#inputs2');
let input3 = document.querySelector('#input3');
let input4 = document.querySelector('#input4');
let id = 2;
let id2 = 2;

const multiply = () => {
    let sum = 0;
    for (let i = 1; i < id; i++) {
        let firstInp = document.querySelector(`#input1-${i}`);
        let secondInp = document.querySelector(`#input2-${i}`);
        sum += firstInp.value * secondInp.value;
    }
    for (let i = 1; i < id2; i++) {
        let firstInp2 = document.querySelector(`#input21-${i}`);
        let secondInp2 = document.querySelector(`#input22-${i}`);
        sum += firstInp2.value * secondInp2.value;
    }
    sum += input3.value * input4.value;
    result.innerHTML = `Затраты по укомплектованию кабинетов безопасности и охраны труда: ${sum} тенге`;
}

const addRow = () => {
    let rowInput = document.createElement('div');
    let input1 = document.createElement('input');
    let input2 = document.createElement('input');
    rowInput.id = `row-input-${id}`;
    input1.type = "number";
    input2.type = "number";
    input1.id = `input1-${id}`;
    input2.id = `input2-${id++}`;
    input1.placeholder = "Количество";
    input2.placeholder = "Цена";
    rowInput.appendChild(input1);
    rowInput.appendChild(input2);
    inputs.appendChild(rowInput);
}

const removeRow = () => {
    let rowInput = document.querySelector(`#row-input-${--id}`);
    rowInput.remove();
    if (id < 1) id = 1;
}
const addRow2 = () => {
    let rowInput2 = document.createElement('div');
    let input21 = document.createElement('input');
    let input22 = document.createElement('input');
    rowInput2.id = `row-input2-${id2}`;
    input21.type = "number";
    input22.type = "number";
    input21.id = `input21-${id2}`;
    input22.id = `input22-${id2++}`;
    input21.placeholder = "Количество";
    input22.placeholder = "Цена";
    rowInput2.appendChild(input21);
    rowInput2.appendChild(input22);
    inputs2.appendChild(rowInput2);
}

const removeRow2 = () => {
    let rowInput2 = document.querySelector(`#row-input2-${--id2}`);
    rowInput2.remove();
    if (id2 < 1) id2 = 1;
}


// event listeners
btn.addEventListener("click", () => {
    multiply();
})

plus.addEventListener("click", () => {
    addRow();
})

minus.addEventListener("click", () => {
    removeRow();
})

plus2.addEventListener("click", () => {
    addRow2();
})

minus2.addEventListener("click", () => {
    removeRow2();
})