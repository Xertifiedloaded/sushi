

let newContent = document.querySelectorAll(".flex-item")
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let middle = document.querySelector(".middle")
console.log(right)
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