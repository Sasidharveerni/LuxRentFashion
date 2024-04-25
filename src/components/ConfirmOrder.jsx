import React from 'react'
import YourCart from './YourCart'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addAddress } from '../actions/address';

function ConfirmOrder() {

  const dispatch = useDispatch();



  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const address = {
        street: formData.get('street'),
        city: formData.get('city'),
        country: formData.get('country')
    };
    dispatch(addAddress(`${address.city}, ${address.country}`))
    // console.log(`${address.city}, ${address.country}`);
    // Dispatch an action to save the address to Redux
};


  return (
    <>

      <div style={{ margin: '3rem' }}>

        <div className='App'>
          Confirm your order
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <YourCart />
        </div>

        <hr />

        <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.25em', fontWeight: 'bold' }}>Enter Your Address</h1>
          <form onSubmit={handleSubmit}>

          <div>
            <input
              type='text'
              placeholder='Street'
              name='street'
              className='input-1'
            />

          </div>

          <div>
            <input
              type='text'
              placeholder='City'
              name='city'
              className='input-1'
              required
            />
          </div>

          <div>
            <input
              type='text'
              placeholder='Country'
              name='country'
              className='input-1'
              required
            />
          </div>

          <div>
            <button className='custom-button'  style={{ width: '8rem', height: '2rem', marginTop: '1rem' }}>Save address</button>
          </div>
          </form>

        </div>


        <hr />

        <div style={{ marginTop: '2rem' }}>
          <h1 style={{ fontSize: '1.25em', fontWeight: 'bold' }}>Select Payment Option</h1>

          <div>
            <input
              type="radio"
              id="card"
              name="paymentOption"
              value="card"

            />
            <label htmlFor="card">Card</label>
          </div>
          <div>
            <input
              type="radio"
              id="paypal_upi"
              name="paymentOption"
              value="paypal_upi"

            />
            <label htmlFor="paypal_upi">PayPal/UPI</label>
          </div>
          <div>
            <input
              type="radio"
              id="cash_on_delivery"
              name="paymentOption"
              value="cash_on_delivery"
              required
            />
            <label htmlFor="cash_on_delivery">Cash on Delivery</label>
          </div>

        </div>

        <NavLink to='/order/placed'>

          <button className='custom-button' style={{ width: '8rem', height: '2rem' }}>Place Order</button>
        </NavLink>

      </div>



    </>
  )
}

export default ConfirmOrder