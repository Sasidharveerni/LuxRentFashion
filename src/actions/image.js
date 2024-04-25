export const addtoCart = (productImg, price) => ({
    type: 'Add_to_cart',
    payload: { img: productImg, price },
  });
  
  export const removeFromCart = (imgUrl) => ({
    type: 'Remove_from_cart',
    payload: imgUrl,
  });