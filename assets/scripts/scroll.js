

let newContent = document.querySelectorAll(".flex-item")
window.addEventListener("scroll", () => {
    newContent.forEach(allContent => {
        let windowScreenPosition = allContent.getBoundingClientRect().top
        let screenResolution = window.innerHeight / 5 * 4
        if (windowScreenPosition < screenResolution) {
            allContent.classList.add("active2")

        } else {
            allContent.classList.remove("active2")

        }
    })
})
let allImgContent = document.querySelectorAll(".two")
// console.log(allImgContent)
window.addEventListener("scroll", () => {
    allImgContent.forEach(images => {
        let windowScreenPosition = images.getBoundingClientRect().top
        let screenResolution = window.innerHeight / 5 * 4
        if (windowScreenPosition < screenResolution) {
            images.classList.add("two")
            images.style.transition = "2s all ease"
        } else {
            images.classList.remove("two")
            images.style.transition = "1s all ease"
        }
    })
})
let addr =document.querySelector(".addr")
let form = document.querySelector(".myform")
let inputs = document.querySelectorAll(".input")
let submitNow = document.querySelector(".submit-btn")
// console.log(form)
form.addEventListener("submit", (e) => {
    e.preventDefault()
    for (i = 0; i < inputs.length; i++) {
        let input = inputs[i].value
      
        // console.log(input)
        
    }
    submitNow.textContent = "submitted ✅"
})
let newIcon = document.querySelector(".icon")
let close = document.querySelector(".close")
let solid = document.querySelector(".fa-chevron-down")
// console.log(solid.style.transform= "rotate(_-180deg")
let isActive = false
newIcon.addEventListener("click", () => {
    if (isActive == false) {
        isActive = true
        solid.style.transform = "rotate(-180deg)"
        close.classList.replace("close", "open")
    } else {
        isActive = false
        close.classList.replace("open", "close")
        solid.style.transform = "rotate(0deg)"
    }
})
let selectMenu = document.querySelector(".choose")
// console.log(selectMenu)
let orderLocation = document.querySelectorAll(".location-price")
orderLocation.forEach(newLocation => {
    newLocation.addEventListener("click", () => {
        console.log(newLocation.textContent)
        selectMenu.innerHTML = newLocation.textContent

    })
})

// mobile nav 

let bar = document.querySelector(".fa-bars")
let hide = document.querySelector(".hide")
let seek = document.querySelector(".toggle-mobile-menu")
let body = document.querySelector("body")
// console.log(body)
let mark = document.querySelector(".fa-xmark")
// console.log(seek)
bar.addEventListener("click", () => {
    hide.classList.replace("hide", "seek");
    body.style.overflowY = "hidden"
})
mark.addEventListener("click", () => {
    seek.classList.replace("seek", "hide")
    body.style.overflowY = "scroll"
})

// 
let mobileNavList = document.querySelectorAll(".desktop-list")

// console.log(mobileNavList)

mobileNavList.forEach((navList) => {
    navList.addEventListener("click", () => {
        mobileNavList.forEach((e) => {
            // console.log(e)
            e.classList.remove("nav-active")
        })
        navList.classList.add("nav-active")
    })
})


// 

