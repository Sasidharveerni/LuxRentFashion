import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtoCart, removeFromCart } from '../actions/image';
import { NavLink } from 'react-router-dom';

function ProductItem() {
  const productImages = [
    require('../assets/Image (5).png'),
    require('../assets/Image (6).png'),
    require('../assets/Image (7).png'),
    require('../assets/Image (8).png'),
    require('../assets/Image (9).png'),
    require('../assets/Image (10).png'),
    require('../assets/product-1.jpg'),
    require('../assets/product-2.jpg')
  ];
  const productDesc = ["Influencer's Style", "TrendSetter's pick", "Fashion freak", "Fab fashion", "Iconic collection", "Glamorous outfit", "Empower your look", "Wedding partywear"];
  const productCap = ["Exclusive Collection", "Casual wear", "Signature Look", "Stand-out", "Show the boss", "Amazing partner", "Maintain hype", "Cozy look"];
  const rentPrices = [300, 239, 450, 670, 893, 546, 789, 843];
  const discountPrices = [10, 20, 30, 40, 15, 25, 35, 45];

  const dispatch = useDispatch();

  const addImage = (imgUrl, price) => {
    dispatch(addtoCart(imgUrl, price));
  }

  const [cartItems, setCartItems] = useState([]);
  const [countMap, setCountMap] = useState({});

  const rentProducts = (img) => {
    setCartItems((prevCartItems) => [...prevCartItems, img]);
  }

  const removeItem = (img) => {
    dispatch(removeFromCart(img));
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item !== img));
  }

  const toggleCount = (imgUrl) => {
    setCountMap((prevCountMap) => ({
      ...prevCountMap,
      [imgUrl]: (prevCountMap[imgUrl] || 0) + 1
    }));
  };

  const decrementCount = (imgUrl) => {
    setCountMap((prevCountMap) => ({
      ...prevCountMap,
      [imgUrl]: Math.max((prevCountMap[imgUrl] || 0) - 1, 0)
    }));
  }

  const removeImage = (imgUrl) => {
    dispatch(removeFromCart(imgUrl));
    setCountMap((prevCountMap) => {
      const newCountMap = { ...prevCountMap };
      delete newCountMap[imgUrl];
      return newCountMap;
    });
  }

  return (
    <>
      {productImages.map((img, ind) => (
        <div key={ind} style={{ marginRight: '1rem', position: 'relative' }}>
          <div style={{ position: 'relative', display: 'inline-block', width: 'fit-content' }}>
            <img src={img} alt='' />
            <div className='outfit-opt-1' style={{ position: 'absolute', bottom: '0.5rem', left: '50%', transform: 'translateX(-50%)' }}>
              <button onClick={() => { decrementCount(img); removeImage(img); }} style={{ marginRight: '1rem' }}>
                -
              </button>
              {countMap[img] || 0}
              <button onClick={() => { toggleCount(img); addImage(img, rentPrices[ind]); }} style={{ marginLeft: '1rem' }}>
                +
              </button>
            </div>
          </div>
          <div className='custom-button' style={{ width: '3rem', position: 'absolute', top: '1rem', right: '1rem' }}>
            - {discountPrices[ind]}%
          </div>
          <p style={{ fontWeight: 'bolder' }}>{productDesc[ind]}</p>
          <p className='liners'>{productCap[ind]}</p>
          <p>From ₹ {rentPrices[ind]}</p>
          {!cartItems.includes(img) && countMap[img] === 0 && (
        <button className='team-btn' onClick={() => { addImage(img, rentPrices[ind]); rentProducts(img); }}>
          Rent Now
        </button>
      )}

          

          {
  (cartItems.includes(img) || (img in countMap && countMap[img] > 0)) ? (
    <>
      <button
        className="team-btn"
        style={{ width: '4rem', marginRight: '1rem' }}
        onClick={() => removeItem(img)}
      >
        Remove item
      </button>
      <NavLink to="/product/rent">
        <button className="team-btn" style={{ width: '3rem', marginRight: '1rem' }}>
          View Cart
        </button>
      </NavLink>
    </>
  ) : null
}
        </div>
      ))}
    </>
  )
}

export default ProductItem;
