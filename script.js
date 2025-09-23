let countH = document.getElementById("count-home")
let countG = document.getElementById("count-guest")
let countB = 0
let countA = 0


function one() {
        countB += 1
        countH.textContent = countB
}

function two() {
    countB += 2
    countH.textContent = countB
}

function tree() {
    countB += 3
    countH.textContent = countB 
}


function oneg() {
        countA += 1
        countG.textContent = countA
}

function twog() {
    countA += 2
    countG.textContent = countA
}

function treeg() {
    countA += 3
    countG.textContent = countA   
}