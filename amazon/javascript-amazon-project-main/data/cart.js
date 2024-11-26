export const cart=[];

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
}