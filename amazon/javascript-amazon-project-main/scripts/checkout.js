import { cart, removeFromCart, totalitem } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatcurrency } from "./util/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";




const today= dayjs();
const deliverydate= today.add(7,'days');
deliverydate.format('dddd, MMMM D');

let cartSummaryHtml = '';
cart.forEach((cartItem)=>{
  const productId=cartItem.productId;
  let matchingProduct;

  products.forEach((product)=> { 
    if(product.id===productId){
      matchingProduct=product;
    }
  });

  cartSummaryHtml+=`<div class="cart-item-container 
    js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formatcurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-update-quantity-link" data-product-id="${matchingProduct.id}">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHtml;

document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click',() => {
      const productId= link.dataset.productId;
      removeFromCart(productId);
      const container= document.querySelector(`.js-cart-item-container-${productId}`);
      container.remove();
    });
  });

document.querySelector('.js-checkout-items').innerHTML= totalitem()+" items";

