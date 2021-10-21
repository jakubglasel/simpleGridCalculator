//power
const powerBtn = document.querySelector(".calc__btn_power")
const clearBtn = document.querySelector(".calc__btn_c")

//screen
const screen = document.querySelector(".calc__screen")
const screenOnOff = document.querySelector(".calc__screen_on")

//digits
const btnOne = document.querySelector(".calc__btn_1")
const btnTwo = document.querySelector(".calc__btn_2")
const btnThree = document.querySelector(".calc__btn_3")
const btnFour = document.querySelector(".calc__btn_4")
const btnFive = document.querySelector(".calc__btn_5")
const btnSix = document.querySelector(".calc__btn_6")
const btnSeven = document.querySelector(".calc__btn_7")
const btnEight = document.querySelector(".calc__btn_8")
const btnNine = document.querySelector(".calc__btn_9")
const btnZero = document.querySelector(".calc__btn_0")

//operators
const btnPlus = document.querySelector(".calc__btn_plus")
const btnMinus = document.querySelector(".calc__btn_minus")
const btnMultiply = document.querySelector(".calc__btn_multiply")
const btnDevide = document.querySelector(".calc__btn_devide")
const btnEquals = document.querySelector(".calc__btn_equals")
const btnDecimal = document.querySelector(".calc__btn_decimal")


const buttons = document.querySelectorAll(".btn")


let calculation
let screenArray = []
let powerFlag = false

powerBtn.addEventListener("click", () => {
    if (!powerFlag) {
        screenOnOff.classList.remove("notActive")
        screenOnOff.classList.toggle("active")
        powerBtn.classList.toggle('poweredOn')
        screenOnOff.innerText = ""
        powerFlag = !powerFlag
    } else {
        screenOnOff.classList.toggle("active")
        screenOnOff.classList.add("notActive")
        powerBtn.classList.toggle('poweredOn')
        screenOnOff.innerText = ""
        powerFlag = !powerFlag
    }
})

clearBtn.addEventListener("click", () => {
    screenOnOff.innerText = ""
    calculation = ""
    screenArray = []
})


btnOne.addEventListener("click", () => {
    screenOnOff.innerText += 1
    screenArray.push(1)
})

btnTwo.addEventListener("click", () => {
    screenOnOff.innerText += 2
    screenArray.push(2)
})

btnThree.addEventListener("click", () => {
    screenOnOff.innerText += 3
    screenArray.push(3)
})

btnFour.addEventListener("click", () => {
    screenOnOff.innerText += 4
    screenArray.push(4)
})
btnFive.addEventListener("click", () => {
    screenOnOff.innerText += 5
    screenArray.push(5)
})

btnSix.addEventListener("click", () => {
    screenOnOff.innerText += 6
    screenArray.push(6)
})
btnSeven.addEventListener("click", () => {
    screenOnOff.innerText += 7
    screenArray.push(7)
})

btnEight.addEventListener("click", () => {
    screenOnOff.innerText += 8
    screenArray.push(8)
})
btnNine.addEventListener("click", () => {
    screenOnOff.innerText += 9
    screenArray.push(9)
})
btnZero.addEventListener("click", () => {
    screenOnOff.innerText += 0
    screenArray.push(0)
})

btnPlus.addEventListener("click", () => {
    screenOnOff.innerText += "+"
    screenArray.push("+")
})

btnMinus.addEventListener("click", () => {
    screenOnOff.innerText += "-"
    screenArray.push("-")
})
btnMultiply.addEventListener("click", () => {
    screenOnOff.innerText += "*"
    screenArray.push("*")
})
btnDevide.addEventListener("click", () => {
    screenOnOff.innerText += "/"
    screenArray.push("/")
})
btnDecimal.addEventListener("click", () => {
    screenOnOff.innerText += "."
    screenArray.push(".")
})
btnEquals.addEventListener("click", () => {
    var length = screenArray.length
    if (screenArray[length - 1] == 0 && screenArray[length - 2] == "/") {
        screenOnOff.style.fontSize = "25px"
        screenOnOff.innerText = "Cannot divide by zero"

    } else {
        screenOnOff.innerText = eval(screenOnOff.innerText)
    }
})

//keypad use
window.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        screenOnOff.innerText = eval(screenOnOff.innerText)
    } else if (event.key === 'Clear' || event.key === 'End') {
        if (!powerFlag) {
            screenOnOff.classList.remove("notActive")
            screenOnOff.classList.toggle("active")
            powerBtn.classList.toggle('poweredOn')
            screenOnOff.innerText = ""
            powerFlag = !powerFlag
        } else {
            screenOnOff.classList.toggle("active")
            screenOnOff.classList.add("notActive")
            powerBtn.classList.toggle('poweredOn')
            screenOnOff.innerText = ""
            powerFlag = !powerFlag
        }

    } else if (event.key === '=' || event.key === 'NumLock') {
        screenOnOff.innerText = ""
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
        screenOnOff.innerText = ""
    } else if (event.key) {
        screenOnOff.innerText += `${event.key}`
    }
})
console.log(screenArray)
console.log(buttons)