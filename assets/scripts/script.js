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

// SHOW ALL MY PRODUCT/RENDER
const productEle = document.querySelector(".card-child")
const cartEle = document.querySelector(".cart-element")
let subTotal = document.querySelector(".sub-total")
let total = document.querySelector(".total-item")
let displayTotal = document.querySelector(".displayNumber")
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
// ADD TO CART
function addToCart(id) {
    //   CHECK IF ITEM ALREADY IN CART
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
    updateCart()
}
//SHOW CART ITEMS
function updateCart() {
    showCartItems()
    showTotal()
}
//CALCULATE TOTAL AND SUB-TOTAL
function showTotal() {
    let totalPrice = 0;
    let totalItems = 0;
    cart.forEach((item) => {
        totalPrice += item.numberOfUnits * item.price;
        console.log(item.numberOfUnits * item.price)
        totalItems += item.numberOfUnits;
        subTotal.innerHTML = `sub-total (${totalItems}items):$${totalPrice.toFixed(2)}`
        displayTotal.innerHTML = totalItems
    })


}
function showCartItems() {
    cartEle.innerHTML = ""
    cart.forEach((item) => {
        // clear cart elements
        cartEle.innerHTML += `
    <div class="cart-cont">
        <div class="cart-img-cont" onclick="deleteItemFromCart(${item.id})">
           <img class="cart-img" src=${item.imgsrc}>
        </div>
        <div class="cart-name">
          ${item.name}
        </div>
        <div class="cart-price">
          ${item.price}.00     
    </div>
    <div class="units">
    <div class="minus" onclick="changeNumberOfUnits('minus',${item.id})">-</div>
       <p>${item.numberOfUnits}</p>
       <div class="plus" id="plus" onclick="changeNumberOfUnits('plus',${item.id})">+</div>
    </div>
   
        `
    })
}
// REMOVE ITEM FROM CART/DELETE
function deleteItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id)
    // update the changes in UserInterface
    updateCart()
}
// CHANGE NUMBER OF UNITS OF AN ITEM
function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
        console.log(item)
        let numberOfUnits = item.numberOfUnits
        if (item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--
            } else if (action === "plus" && numberOfUnits < item.itemInStock) {
                numberOfUnits++
            }
        }
        return {
            ...item,
            numberOfUnits,
        }
    })
    updateCart()
}
let footer = document.querySelector(".footer-svg")
let off = document.querySelector(".off")
let isClick = false
footer.addEventListener("click", () => {
    if (isClick == false) {
        isClick = true
        console.log("hi")
        off.classList.replace("off", "on")
    } else {
        isClick = false
        off.classList.replace("on", "off")
        console.log("eeya")
    }
})

// SEND ORDER THROUGH WHATSAPP
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