export let cart= JSON.parse(localStorage.getItem('cart'));
if(!cart){
  cart=[{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
  }];
}

function saveToStroage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId,numtoadd) {
  let matchingItem;
  cart.forEach((cartitem)=>{
    if(productId === cartitem.productId){
      matchingItem=cartitem;
    }
  });
  if(matchingItem){
    matchingItem.quantity+=numtoadd;
  }else{
  cart.push({
    productId: productId,
    quantity: numtoadd
  });
  }
  saveToStroage();
};

export function removeFromCart(productId){
  const newCart= [];
  cart.forEach((cartitem)=> {
    if(cartitem.productId !== productId){
      newCart.push(cartitem);
    }
  });

  cart= newCart;
  saveToStroage();
}


export function totalitem(){
  let itemquantity=0;
  cart.forEach((item)=> {
    itemquantity += item.quantity;
  });
  return itemquantity;
}