import React from 'react';
import { NavLink } from 'react-router-dom';
import OrderStatus from './OrderStatus';
import Status from './Status';
import Footer from './Footer'

const OrderPlaced = () => {
  return (
    <>
      <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '2rem' }}>
        <div className='header' style={{ marginBottom: '1rem' }}>
          <div className='home-header'>
            <h1>LuxRentStyle</h1>
          <div>
            <NavLink to='/products'>
              <button className='custom-button' style={{ padding: '0.5rem 1rem', fontSize: '1em' }}>Go back</button>
            </NavLink>
          </div>
          </div>
        </div>
        <div className='order' style={{ margin: '0 auto', maxWidth: '800px', textAlign: 'center', marginLeft: '10rem' }}>
          <h1 style={{ fontSize: '2em', marginBottom: '1rem' }}>Your order is on the way!</h1>
            <div className='order-status' style={{marginLeft: '10rem'}}>

            <OrderStatus />
            </div>

            <hr />

            <Status />
        </div>

      </div>
      <hr />

      <Footer />
    </>
  );
};

export default OrderPlaced;
