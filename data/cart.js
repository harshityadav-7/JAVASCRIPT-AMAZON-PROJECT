export const cart=[];

export function addToCart(productId){
  let matchingItem;
    cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchingItem=cartItem;
      }
    });
    let quantity=parseInt(document.querySelector(`.js-quantity-selector-${productId}`).value);
    if(matchingItem){
      matchingItem.quantity+=quantity;
    }else{
      cart.push({
        productId:productId,
        quantity:quantity
      });
    }
}