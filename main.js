const result = document.querySelector('.score-text')
const names = document.querySelectorAll('.item-name')
const icons = document.querySelectorAll('.icon')
const scores = document.querySelectorAll('.score')
const res = await fetch('./data.json')
const data = await res.json()

const calcResult = (a, b, c, d) => {
const total = a + b + c + d
return Math.round(total / 4)
}

const populateSummary = (name, icon, score) => {
    for (let i = 0; i < name.length; i++){
        name[i].textContent = data[i].category
        icon[i].src = data[i].icon
        score[i].textContent = data[i].score
    }
} 

populateSummary(names, icons, scores)

result.textContent = calcResult(data[0].score, data[1].score, data[2].score, data[3].score)