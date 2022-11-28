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

// 
