const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, '='];
const actions = ['*', '/', '+', '-']
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
const lastResult = document.querySelector('.last-result')
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
        if (currentAction === '+') lastResult.innerHTML = +prevValue + +result.innerHTML;
        if (currentAction === '-') lastResult.innerHTML = +prevValue - +result.innerHTML;
        if (currentAction === '/') lastResult.innerHTML = +prevValue / +result.innerHTML;
        if (currentAction === '*') lastResult.innerHTML = +prevValue * +result.innerHTML;
        result.innerHTML = '';
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
    if (prevValue) return
    prevValue = result.innerHTML;
    result.innerHTML = e.target.innerHTML;
    currentAction = e.target.innerHTML;
}