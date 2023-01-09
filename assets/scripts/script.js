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






const productEle = document.querySelector(".card-child")
const cartEle = document.querySelector(".cart-element")
let subTotal = document.querySelector(".sub-total")
function renderProducts() {
    products.forEach((product) => {
        productEle.innerHTML += `
                           <div class="food-container">
                                <div class="food-img" onclick="addToCart(${product.id})">
                                    <img class="food-image" src=${product.imgsrc}>
                                </div>
                                <div class="the-two">
                                    <div class="food-name">
                                     ${product.name}
                                    </div>
                                    <div class="price-icon">
                                        <button class="price-btn" value="10.00">$${product.price}.00</button>
                                    </div>
                                </div>
                            </div>
        `
    })
}
renderProducts()

// cart array
cart = []
// add to cart
function addToCart(id) {
    // check if i already have the product
    if (cart.some((item) => item.id === id)) {
        alert("product already in cart")
    } else {
        const item = products.find((product) => product.id === id)
        // console.log(item)
        // i push the cart to item
        cart.push({
            ...item, numberOfUnits: 1
        })
        console.log(cart)
    }
    // update the cart
    updateCart()
}
// render car items
function updateCart() {
    showCartItems()
    showTotal()
}
// calculate total and show sub total
function showTotal() {
    let totalPrice, totalItems = 0
    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    })
    subTotal.innerHTML = `sub-total (${totalItems}items) :${totalPrice}`
}
function showCartItems() {
    cartEle.innerHTML = ""
    cart.forEach((item) => {
        // clear cart elements
        cartEle.innerHTML += `
    <div class="cart-cont">
     <div class="cart-img-cont">
       <img class="cart-img" src=${item.imgsrc}>
     </div>
     <div class="cart-name">
        ${item.name}
       </div>
       <div class="cart-price">
    ${item.price}.00
       </div>
<div class="units">
    <div class="minus" >-</div>
     <p>${item.numberOfUnits}</p>
     <div class="plus" id="plus" onclick="numberOfUnits('plus',${item.id})">+</div>
</div>

   
        `
    })
}


// change number of units of an item
function changeNumberOfUnit(action, id) {
    cart = cart.map(() => {
        let numberOfUnits = item.numberOfUnits
        if (item.id === id) {
            if (action === "minus")
                numberOfUnits--
        } else if (action === plus) {
            numberOfUnits--
        }
        return {
            ...item,
            numberOfUnits,
        }
    })
    updateCart()
}


function whatsApp() {
    let myOrder = document.querySelector(".order").value
    let myName = document.querySelector(".fullname").value
    let myAddress = document.querySelector(".my-address").value
    let myPhone = document.querySelector(".my-phone").value
    let whatsAppUrl = "https://wa.me/2348168043011?text="
        + "Name of the Buyer:" + " " + myName + "%0a"
        + "-----------------------------" + "%0a"
        + "Your Number:" + " " + myPhone + "%0a"
        + "----------------------------" + "%0a"
        + "Your Full Address" + " " + myAddress + "%0a"
        + "-----------------------------" + "%0a"
        + "Order" + myOrder + "%0a"
    window.open(whatsAppUrl, '_blank').focus()
}