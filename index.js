const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, '='];
const actions = ['*', '/', '+', '-', 'C']
const numbersContainer = document.querySelector('.numbers');
const actionsContainer = document.querySelector('.add-buttons')
function onLoad() {
    numbers.forEach(item => {
        const numberBlock = `
            <span class="calc-btn">${item}</span>
        `
        numbersContainer.insertAdjacentHTML('beforeend', numberBlock)
    })
    actions.forEach(item => {
        const actionBlock = `
            <span>${item}</span>
        `
        actionsContainer.insertAdjacentHTML('beforeend', actionBlock)
    })
}
onLoad()

const buttons = document.querySelectorAll('.calc-btn');
const addButtons = document.querySelectorAll('.add-buttons span');
const result = document.querySelector('.result');
buttons.forEach(item => {
    item.addEventListener('click', onClickCalcBtn)
})
addButtons.forEach(item => {
    item.addEventListener('click', onClickAddBtn)
})
let prevValue = null;
let currentAction = null;
function onClickCalcBtn(e) {
    if (e.target.innerHTML === '=') {
        if (!currentAction) return
        if (currentAction === '+') result.innerHTML = +prevValue + +result.innerHTML;
        if (currentAction === '-') result.innerHTML = +prevValue - +result.innerHTML;
        if (currentAction === '/') result.innerHTML = +prevValue / +result.innerHTML;
        if (currentAction === '*') result.innerHTML = +prevValue * +result.innerHTML;
        prevValue = null;
        currentAction = null;
        return
    }
    if (actions.includes(result.innerHTML)) {
        result.innerHTML = '';
    }
    result.innerHTML += e.target.innerHTML;
}
function onClickAddBtn(e) {
    if (e.target.innerHTML === 'C') {
        result.innerHTML = '';
        currentAction = null;
        prevValue = null;
        return
    }
    if (prevValue) return;
    prevValue = result.innerHTML;
    result.innerHTML = e.target.innerHTML;
    currentAction = e.target.innerHTML;
}