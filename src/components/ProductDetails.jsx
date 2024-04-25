import React from 'react'
// import { useSelector } from 'react-redux';
import MidSection from './MidSection';
import Footer from './Footer'
import { NavLink } from 'react-router-dom';
import YourCart from './YourCart';

function ProductDetails() {
  // const addedImage = useSelector(state => state.imageReducer.img);
  // const quantity = useSelector(state => state.imageReducer.count);
  // const totalPrice = useSelector(state => state.imageReducer.prices);
  // const dispatch = useDispatch();

  const section = ['Formalwear', 'Casualwear', 'Accessories']


  // useEffect(() => {
  //   if (addedImage.length === 0 && quantity.length === 0) {
  //     const storedImages = JSON.parse(localStorage.getItem('addedImages')) || [];
  //     const storedQuantity = JSON.parse(localStorage.getItem('quantity')) || [];
  //     dispatch({ type: 'Initialize_from_storage', payload: { addedImages: storedImages, quantity: storedQuantity } });
  //   }
  // }, []);
  // let sum = 0

  // totalPrice.forEach(element => {
  //   sum += element;
  // });
  return (
    <>
      <div className='header'>
        <div className='home-header' style={{ marginBottom: '1rem' }}>
          <div>
            <h1>
              LuxRentStyle
            </h1>
          </div>
          <div>
            <NavLink to='/products'>
            <button className='normal-button'>Go back</button>
            </NavLink>
          </div>
        </div>

        <hr />

        {/* <div style={{ marginTop: '1rem', fontWeight: 'bolder' }}>My Cart</div>

        {addedImage.length > 0 && addedImage.map((imgUrl, ind) => (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '2rem', flexWrap: 'wrap' }}>

              <div>
                <img key={ind} src={imgUrl} alt='' style={{ margin: '1rem', width: '5rem' }} />
              </div>
              <div style={{ fontWeight: 'bolder', fontSize: '1.25em' }}>
                Quantity: {quantity[ind]}
              </div>
            </div>
          </>

        ))}


        <div className='home-header' style={{marginBottom: '1.5rem'}}>

          <div className='App' >Total Amount:  ₹ {sum}</div>
          <div>
            <NavLink to='/confirm/order'>
              <button className='custom-button'>Proceed to checkout</button>
            </NavLink>
          </div>
        </div> */}

<YourCart />

<div className='home-header' style={{marginBottom: '1.5rem'}}>

<div>
  <NavLink to='/confirm/order'>
    <button className='custom-button'>Proceed to checkout</button>
  </NavLink>
</div>
</div>

        


        <hr />

        <div className='home-header'>
          <h1>Complete the outfit</h1>
        </div>

        <div style={{ display: 'flex' }}>
          <div className='outfit-opt-1'>
            <button>
              Trending
            </button>
          </div>
          <div className='outfit-opt'>
            <button>
              Formalwear
            </button>
          </div>
          <div className='outfit-opt'>
            <button>

              Casualwear
            </button>
          </div>
          <div className='outfit-opt'>
            <button>
              Accessories
            </button>
          </div>
        </div>


        {section.map((item, ind) => (
          <MidSection key={ind} item={item} />
        ))}



      </div>

      <Footer />
    </>
  )
}

export default ProductDetails;
