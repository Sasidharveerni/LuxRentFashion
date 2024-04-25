import React from 'react';

const Status = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start',  justifyContent: 'space-between', marginTop: '2rem' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#EFEE17',
              borderRadius: '50%',
              marginRight: '8px',
            }}
          />
          <span style={{ fontWeight: 'bold' }}>Just a step away!</span>
        </div>
        <p style={{ marginLeft: '18px' }}>Getting your order ready.</p>

        <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#E1E3E7',
              borderRadius: '50%',
              marginRight: '8px',
            }}
          />
          <span>Ready for you!</span>
        </div>
        <p style={{ marginLeft: '18px' }}>Your order is en route to you.</p>

        <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#E1E3E7',
              borderRadius: '50%',
              marginRight: '8px',
            }}
          />
          <span>Delivered!</span>
        </div>
        <p style={{ marginLeft: '18px' }}>Order successfully delivered.</p>
      </div>

      {/* <div
        style={{
          backgroundColor: '#E1E3E7',
          color: '#333',
          padding: '16px',
          borderRadius: '8px',
          width: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '24px' }}>3 days</p>
        <p style={{ margin: 0 }}>to receiving your order</p>
        <hr />
        <p style={{ marginTop: '1rem', lineHeight: '1.4' }}>
          Your luxurious fashion piece is on its way! Keep track of your order here.
        </p>
        <button
          className='custom-button'
        >
          Close status
        </button>
      </div> */}
    </div>
  );
};

export default Status;