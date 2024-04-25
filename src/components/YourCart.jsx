import React from 'react'
import { useSelector } from 'react-redux';


function YourCart() {
    const addedImage = useSelector(state => state.imageReducer.img);
  const quantity = useSelector(state => state.imageReducer.count);
  const totalPrice = useSelector(state => state.imageReducer.prices);

  let sum = 0

  totalPrice.forEach(element => {
    sum += element;
  });

  return (
    <>
<div style={{ marginTop: '1rem', fontWeight: 'bolder' }}>My Cart</div>

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
          
        </div>

    </>
  )
}

export default YourCart