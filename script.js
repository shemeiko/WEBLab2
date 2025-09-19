function task1() {
    let num = prompt("Enter a number: ")
    let arrNum = num.split("").map(Number)
    let [max, maxIdx] = [-Infinity, 0]
    let [min, minIdx] = [Infinity, 0]
    for (i = 0; i < arrNum.length; ++i) {
        if (arrNum[i] < min) [min, minIdx] = [arrNum[i], i]
        if (arrNum[i] > max) [max, maxIdx] = [arrNum[i], i]
    }
    alert(num.slice(minIdx+1, maxIdx+1))
}

function task2() {
    createInput()
    const span = document.createElement('span')
    span.innerText = '+'
    span.style.cursor = 'pointer'
    span.onclick = () => createInput()
    const cont = document.querySelector('.container')
    cont.appendChild(span)
}

function createInput() {
    const input = document.createElement('input')
    input.type = 'text'
    input.style.width = 200 + 'px'
    const cont = document.querySelector('.container')
    cont.appendChild(input)
}

task1()
task2()