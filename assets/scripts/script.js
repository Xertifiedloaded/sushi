let content = document.querySelector(".image")
// console.log(content)
window.addEventListener("scroll", () => {
    let contentPosition = content.getBoundingClientRect().top
    let screenPosition = window.innerHeight / 5 * 4
    if (contentPosition < screenPosition) {
        content.classList.add("active")
    } else {
        content.classList.remove("active")
        content.style.transition = "2s all ease"
    }
})

let allBtns = document.querySelectorAll("#allbtn")
allBtns.forEach(button => {
    if (button.classList.contains("first1")) {
        button.addEventListener("click", counter);
        let value = 0
        function counter(e) {
            let display = document.querySelector(".preview")
            const btn = e.target.id
            if (btn === 'increase') {
                value++
                console.log("minus")
            } else if (btn === 'decrease') {
                value -= 1
                if (value < 0) {
                    value = 0
                }
            }
            display.textContent = value
        }
    } else if (button.classList.contains("second")) {
        button.addEventListener("click", counter);
        let value = 0
        function counter(e) {
            let display = document.querySelector(".preview1")
            const btn = e.target.id
            if (btn === 'increase') {
                value++
                console.log("minus")
            } else if (btn === 'decrease') {
                value--
                if (value < 0) {
                    value = 0
                }
            }
            display.textContent = value
        }
    } else if (button.classList.contains("third")) {
        button.addEventListener("click", counter);
        let value = 0
        function counter(e) {
            let display = document.querySelector(".preview2")
            const btn = e.target.id
            if (btn === 'increase') {
                value++
                console.log("minus")
            } else if (btn === 'decrease') {
                value--
                if (value < 0) {
                    value = 0
                }
            }

            display.textContent = value
        }
    } else if (button.classList.contains("fourth")) {
        button.addEventListener("click", counter);
        let value = 0
        function counter(e) {
            let display = document.querySelector(".preview4")
            const btn = e.target.id
            if (btn === 'increase') {
                value++
                console.log("minus")
            } else if (btn === 'decrease') {
                value--
                if (value < 0) {
                    value = 0
                }
            }
            display.textContent = value
        }
    } else if (button.classList.contains("fifth")) {
        button.addEventListener("click", counter);
        let value = 0
        function counter(e) {
            let display = document.querySelector(".preview5")
            const btn = e.target.id
            if (btn === 'increase') {
                value++
                console.log("minus")
            } else if (btn === 'decrease') {
                value--
                if (value < 0) {
                    value = 0
                }
            }
            display.textContent = value
        }
    } else if (button.classList.contains("sixth")) {
        button.addEventListener("click", counter);
        let value = 0
        function counter(e) {
            let display = document.querySelector(".preview6")
            const btn = e.target.id
            if (btn === 'increase') {
                value++
                console.log("minus")
            } else if (btn === 'decrease') {
                value--
                if (value < 0) {
                    value = 0
                }
            }

            display.textContent = value
        }
    } else if (button.classList.contains("seventh")) {
        button.addEventListener("click", counter);
        let value = 0
        function counter(e) {
            let display = document.querySelector(".preview7")
            const btn = e.target.id
            if (btn === 'increase') {
                value++
                console.log("minus")
            } else if (btn === 'decrease') {
                value--
                if (value < 0) {
                    value = 0
                }
            }

            display.textContent = value
        }
    } else if (button.classList.contains("eight")) {
        button.addEventListener("click", counter);
        let value = 0
        function counter(e) {
            let display = document.querySelector(".preview8")
            const btn = e.target.id
            if (btn === 'increase') {
                value++
                console.log("minus")
            } else if (btn === 'decrease') {
                value--
                if (value < 0) {
                    value = 0
                }
            }
            display.textContent = value
        }
    } else if (button.classList.contains("nine")) {
        button.addEventListener("click", counter);
        let value = 0
        function counter(e) {
            let display = document.querySelector(".preview9")
            const btn = e.target.id
            if (btn === 'increase') {
                value++
                console.log("minus")
            } else if (btn === 'decrease') {
                value--
                if (value < 0) {
                    value = 0
                }
            }

            display.textContent = value
        }
    } else if (button.classList.contains("ten")) {
        button.addEventListener("click", counter);
        let value = 0
        function counter(e) {
            let display = document.querySelector(".preview10")
            const btn = e.target.id
            if (btn === 'increase') {
                value++
                console.log("minus")
            } else if (btn === 'decrease') {
                value--
                if (value < 0) {
                    value = 0
                }
            }

            display.textContent = value
        }
    } else if (button.classList.contains("eleven")) {
        button.addEventListener("click", counter);
        let value = 0
        function counter(e) {
            let display = document.querySelector(".preview11")
            const btn = e.target.id
            if (btn === 'increase') {
                value++
                console.log("minus")
            } else if (btn === 'decrease') {
                value--
                if (value < 0) {
                    value = 0
                }
            }

            display.textContent = value
        }
    } else if (button.classList.contains("twelve")) {
        button.addEventListener("click", counter);
        let value = 0
        function counter(e) {
            let display = document.querySelector(".preview12")
            const btn = e.target.id
            if (btn === 'increase') {
                value++
                console.log("minus")
            } else if (btn === 'decrease') {
                value--
                if (value < 0) {
                    value = 0
                }
            }

            display.textContent = value
        }
    } else if (button.classList.contains("thirteen")) {
        button.addEventListener("click", counter);
        let value = 0
        function counter(e) {
            let display = document.querySelector(".preview13")
            const btn = e.target.id
            if (btn === 'increase') {
                value++
                console.log("minus")
            } else if (btn === 'decrease') {
                value--
                if (value < 0) {
                    value = 0
                }
            }

            display.textContent = value
        }
    } else if (button.classList.contains('fourteen')) {
        button.addEventListener("click", counter);
        let value = 0
        function counter(e) {
            let display = document.querySelector(".preview14")
            const btn = e.target.id
            if (btn === 'increase') {
                value++
                console.log("minus")
            } else if (btn === 'decrease') {
                value--
                if (value < 0) {
                    value = 0
                }
            }

            display.textContent = value
        }
    }
})
// let priceNew = document.querySelector(".price-btn").value
// let preview = document.querySelector(".prev")
// let foodName = document.querySelectorAll(".food-name")
// console.log(foodName)
let valueContent = 0
let smallest = document.querySelector(".small")
let food = document.querySelectorAll(".price")
food.forEach(food => {
    food.addEventListener("click", () => {
        smallest.textContent = valueContent
        valueContent++
    })

})

let svg = document.querySelector(".event")
let off = document.querySelector(".off")
let isOnline = false
svg.addEventListener("click", () => {
    if (isOnline == false) {
        isOnline = true
        off.classList.replace("off", "on")
    } else {
        isOnline = false
        off.classList.replace("on", "off")
    }
})


