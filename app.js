const adviceNumber = document.getElementById('advice-number')
const advice = document.getElementById('advice')
const btn = document.getElementById('btn')

async function getAdvice() {

    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    const randomAdvice = data.slip

    adviceNumber.innerText = randomAdvice.id
    advice.innerText = `"${randomAdvice.advice}"`

}

btn.addEventListener('click', getAdvice)
window.onload = function () {
    getAdvice()
}