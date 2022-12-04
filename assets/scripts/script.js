let content = document.querySelector(".image")
// console.log(content)
window.addEventListener("scroll", () => {
    let contentPosition = content.getBoundingClientRect().top
    let screenPosition = window.innerHeight / 5 * 4
    if (contentPosition < screenPosition) {
        // console.log("active")
        content.classList.add("active")
    } else {
        // console.log("please help me")
        content.classList.remove("active")
        content.style.transition = "2s all ease"
    }
})
// order quantity (add)
let plus = document.querySelectorAll(".fa-plus")
// let minusNew = document.querySelectorAll(".fa-minus")
let input = document.querySelectorAll("input")

plus.forEach((newPlus) => {
    if (newPlus.classList.contains("first")) {
        newPlus.addEventListener("click", () => {
            input.forEach((display) => {
                if (display.classList.contains("perry")) {
                    console.log(display.value++)
                }
            })
        })
    }
    if (newPlus.classList.contains("second")) {
        newPlus.addEventListener("click", () => {
            input.forEach((display) => {
                if (display.classList.contains("fried")) {
                    console.log(display.value++)
                 
                }
            })
        })
    }
    if (newPlus.classList.contains("third")) {
        newPlus.addEventListener("click", () => {
            input.forEach((display) => {
                if (display.classList.contains("pizza")) {
                    console.log(display.value++)
                }
            })
        })
    }
    else if (newPlus.classList.contains("fourth")) {
        newPlus.addEventListener("click", () => {
            input.forEach((display) => {
                if (display.classList.contains("avocado")) {
                    console.log(display.value++)
                }
            })
        })
    }
    else if (newPlus.classList.contains("fifth")) {
        newPlus.addEventListener("click", () => {
            input.forEach((display) => {
                if (display.classList.contains("pepsi")) {
                    console.log(display.value++)
                }
            })
        })
    }
    else if (newPlus.classList.contains("sixth")) {
        newPlus.addEventListener("click", () => {
            input.forEach((display) => {
                if (display.classList.contains("coke")) {
                    console.log(display.value++)
                }
            })
        })
    }
    else if (newPlus.classList.contains("seventh")) {
        newPlus.addEventListener("click", () => {
            input.forEach((display) => {
                if (display.classList.contains("meat")) {
                    console.log(display.value++)
                }
            })
        })
    }
    else if (newPlus.classList.contains("eighth")) {
        newPlus.addEventListener("click", () => {
            input.forEach((display) => {
                if (display.classList.contains("cali")) {
                    console.log(display.value++)
                }
            })
        })
    }
    else if (newPlus.classList.contains("nine")) {
        newPlus.addEventListener("click", () => {
            input.forEach((display) => {
                if (display.classList.contains("curry")) {
                    console.log(display.value++)
                }
            })
        })
    }
    else if (newPlus.classList.contains("ten")) {
        newPlus.addEventListener("click", () => {
            input.forEach((display) => {
                if (display.classList.contains("salmon")) {
                    console.log(display.value++)
                }
            })
        })
    }
    else if (newPlus.classList.contains("eleven")) {
        newPlus.addEventListener("click", () => {
            input.forEach((display) => {
                if (display.classList.contains("white")) {
                    console.log(display.value++)
                }
            })
        })
    }
    else if (newPlus.classList.contains("twelve")) {
        newPlus.addEventListener("click", () => {
            input.forEach((display) => {
                if (display.classList.contains("fried-rice")) {
                    console.log(display.value++)
                }
            })
        })
    }
    else if (newPlus.classList.contains("thirteen")) {
        newPlus.addEventListener("click", () => {
            input.forEach((display) => {
                if (display.classList.contains("jollof-rice")) {
                    console.log(display.value++)
                }
            })
        })
    }
    else if (newPlus.classList.contains("fourteen")) {
        newPlus.addEventListener("click", () => {
            input.forEach((display) => {
                if (display.classList.contains("spag")) {
                    console.log(display.value++)
                }
            })
        })
    }
})



