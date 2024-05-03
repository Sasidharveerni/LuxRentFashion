import React from 'react'
import MailImg from '../assets/Icon envelope.png';
import PhoneImg from '../assets/Icon phone.png';
import MapImg from '../assets/Icon map.png';

function Footer() {
    return (
        <div className='footer'>
            <hr />
            <div className='container' style={{ marginLeft: '10px', justifyContent: 'space-between', marginTop: '40px' }}>
                <div style={{ marginTop: '30px' }}>
                    <p className='liners' style={{ fontWeight: 'bolder' }}>Stay Updated! Subscribe to our newsletter for exclusive offers!</p>
                </div>
                <div style={{ marginRight: '50px' }}>
                    <input
                        type='text'
                        placeholder='Enter your email address'
                        name='news-letter'
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)', width: '300px', marginRight: '10px', height: '30px', paddingLeft: '5px', // Padding for the icon

                        }}
                        className='footer-input'
                    />
                    <button className='custom-button' style={{ width: '100px', height: '30px' }}>Subscribe</button>
                </div>
            </div>
          
          
            <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '20px'}}>
                
                <h1 className='heading'>LuxRentFashion</h1>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <div style={{ marginRight: '10px' }}>
                        <img src={MailImg} alt='' />
                    </div>
                    <div style={{ marginRight: '10px' }}>
                        <img src={PhoneImg} alt='' />
                    </div>
                    <div style={{ marginRight: '10px' }}>
                        <img src={MapImg} alt="" />
                    </div>
                </div>

                <div className='footer-about' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>

                    <div>
                        <p className='liners' style={{fontWeight: 'bolder'}}>Help Center</p>
                        <p className='liners'>FAQs</p>
                        <p className='liners'>Support Team</p>
                        <p className='liners'>Style Guides</p>
                    </div>

                    <div>
                        <p className='liners' style={{fontWeight: 'bolder'}}>FAQs</p>
                        <p className='liners'>Privacy Policy</p>
                        <p className='liners'>Site Navigation</p>
                        <p className='liners'>Membership Plans</p>
                    </div>

                    <div>
                        <p className='liners' style={{fontWeight: 'bolder'}}>Contact Us</p>
                        <p className='liners'>sasidharveerni2@gmail.com</p>
                        <p className='liners'>+91 9390745523</p>
                    </div>
                </div>
                
                </div>
            
           
        </div>
    )
}

export default Footer