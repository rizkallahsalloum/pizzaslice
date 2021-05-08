import items from '../items.json';
import { addToCart } from './listCart';
import addGlobalEventListener from './utilities/addGlobalEventListener.js';
import formatCurrency from './utilities/formatCurrency.js';

const cardItemContainer = document.querySelector("[data-card-container]");

const cardItemTemplate = document.querySelector('#card-item-template');


const IMAGE_URL = "https://raw.githubusercontent.com/rizkallahsalloum/pizzaslice/master/src/img/menu/";

const itemNotificationAdded = document.querySelector('.item-notification');

// const homePopularSlices = document.querySelector('#popular-slices');


if(document.querySelector(".filter-list-items") != null && document.querySelector(".menu-slices") != null){

const sortBtn = document.querySelector(".filter-list-items").children;
const sortItem = document.querySelector(".menu-slices").children;

for(let i = 0; i < sortBtn.length; i++){
  sortBtn[i].addEventListener('click', function(){
      for(let j = 0; j< sortBtn.length; j++){
          sortBtn[j].classList.remove('current');
      }
      this.classList.add('current');
      const targetData = this.getAttribute('data-target');
      const category = items.map(d => d.category.toLowerCase());
      const bestSeller = items.map(name => name.bestSeller);


      for(let k = 0; k < sortItem.length; k++){
        sortItem[k].classList.remove('active');
        sortItem[k].classList.add('hidden');

        if(sortItem[k].getAttribute(items) === targetData || targetData === category[k] ){
          sortItem[k].classList.remove('hidden');
          sortItem[k].classList.add('active');
        }
        if(sortItem[k].getAttribute(items) === targetData || targetData ==="all"){
          sortItem[k].classList.remove('hidden');
          sortItem[k].classList.add('active');
        }
        if(sortItem[k].getAttribute(items) === targetData || targetData === bestSeller[k]){
          sortItem[k].classList.remove('hidden');
          sortItem[k].classList.add('active');
        }

    }

  });
}
}



export function setupStore(){
  addGlobalEventListener('click', '[data-add-to-cart-button]', (e) => {
    const id = e.target.closest('[data-card-item]').dataset.itemId
    addToCart(parseInt(id));
    setTimeout(function() {
      itemNotificationAdded.classList.add('item-notification-active');
      setTimeout(function() {
        itemNotificationAdded.classList.remove('item-notification-active');
      }, 2000);
    }, 100);
  })

  items.forEach(renderCardItem)
}



function renderCardItem(item){
  if (cardItemTemplate != null) {
  const cardItem = cardItemTemplate.content.cloneNode(true);

  const container = cardItem.querySelector("[data-card-item]")
  container.dataset.itemId = item.id

  const name = cardItem.querySelector("[data-name]")
  name.innerText = item.name

  const category = cardItem.querySelector("[data-category]")
  category.innerText = item.category

  const ingredients = cardItem.querySelector("[data-ingredients]")
  ingredients.innerText = item.ingredients;



  const weight = cardItem.querySelector("[data-weight]")
  weight.innerText = item.weight;

  const price = cardItem.querySelector("[data-price]")

  price.innerText = formatCurrency(item.priceCents / 100)

  const image = cardItem.querySelector("[data-image]")
  image.src= `${IMAGE_URL}/${item.image}`

  cardItemContainer.appendChild(cardItem);


  }
}


// homePopularSlices.append(JSON.stringify(result));

// I want to show this on the home page

// let result = items.filter(function(name) {

//   return name.bestSeller;
// });

// homePopularSlices = result.join();
// console.table(result);


