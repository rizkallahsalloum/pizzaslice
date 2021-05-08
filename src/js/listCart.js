
import items from '../items.json';
import addGlobalEventListener from './utilities/addGlobalEventListener.js';
import formatCurrency from './utilities/formatCurrency.js';


let listCart = [];
const IMAGE_URL = "https://raw.githubusercontent.com/rizkallahsalloum/pizzaslice/master/src/img/menu/";

const cartItemTemplate = document.querySelector('#cart-item-template');

const cartItemContainer = document.querySelector('[data-cart-items]');

const cartQuantity = document.querySelector('[data-cart-quantity]');
const cartTotal = document.querySelector('[data-cart-total]');

const cartBtn = document.getElementById("cartBtn");
const cartItems = document.getElementById("cartItems");
const SESSION_STORAGE_KEY = "SHOPPING_CART-cart"


export function setupListCart(){
  addGlobalEventListener("click", "[data-remove-from-cart-button]", (e) => {
    const id = parseInt(e.target.closest("[data-item]").dataset.itemId)
    removeFromCart(id)
  })

  listCart = loadCart()
  renderCart();

  //------------ was giving an error
  // cartBtn.addEventListener("click", () => [
  //   cartItemsWrapper.classList.toggle("hidden")
  // ])
}



function saveCart() {
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(listCart))
}

function loadCart() {
  const cart = sessionStorage.getItem(SESSION_STORAGE_KEY)
  return JSON.parse(cart) || []
}

export function addToCart(id){
  const existingItem = listCart.find(entry => entry.id === id)
  if(existingItem){
    existingItem.quantity++
  } else{
    listCart.push( { id: id, quantity: 1 } )
  }
  renderCart()
  saveCart()
}

function removeFromCart(id) {
  const existingItem = listCart.find(entry => entry.id === id)
  if (existingItem == null) return
  listCart = listCart.filter(entry => entry.id !== id)
  renderCart()
  saveCart()
}

function renderCart(){
  if (listCart.length === 0){
    hideCart()
    cartQuantity.innerText = '0';
  }else {
    showCart()
    renderCartItems()
  }
}

function hideCart(){
  cartItems.classList.add("hidden");


}
function showCart(){
  cartItems.classList.remove("hidden");

}

export function handleClickCart(){

  cartBtn.addEventListener("click", () => {
    cartItems.classList.toggle("cart-items-active");
    cartBtn.classList.toggle("cart-items-active");
  });
  }


function renderCartItems(){

  cartQuantity.innerText = listCart.length;

  const totalCents = listCart.reduce((sum, entry) => {
    const item = items.find(i => entry.id === i.id)
    return sum + item.priceCents * entry.quantity
  }, 0);

  cartTotal.innerText = formatCurrency(totalCents / 100)
  if (cartItemTemplate != null) {
  cartItemContainer.innerHTML = '';
  listCart.forEach(entry => {

    const item = items.find(i => entry.id === i.id)
    const cartItem = cartItemTemplate.content.cloneNode(true)

    const container = cartItem.querySelector("[data-item]")
  container.dataset.itemId = item.id

  const name = cartItem.querySelector("[data-name]")
  name.innerText = item.name


  const price = cartItem.querySelector("[data-price]")
  price.innerText = formatCurrency(item.priceCents * entry.quantity / 100)

  const image = cartItem.querySelector("[data-image]")
  image.src= `${IMAGE_URL}/${item.image}`

  if(entry.quantity > 1){
    const quantity = cartItem.querySelector("[data-quantity]")
    quantity.innerText = `Quantity: ${entry.quantity}`
    }
  cartItemContainer.appendChild(cartItem)
  })
}

}




