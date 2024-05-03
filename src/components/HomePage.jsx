import React, { useState } from 'react';
import '../App.css';
import Stock1Image from '../assets/Stock1.png';
import Stock2Image from '../assets/Stock2.png';
import MidSection from './MidSection';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';


function HomePage() {
    const section = ['How LuxRentFashion Works', 'Join LuxRentFashion Team', 'Download our app'];

    const [value, setValue] = useState('');

    const search = () => {
        localStorage.setItem("Searched-text",value)
    }


    return (
        <>
        <div className='header'>
            <div className='home-header'>

                <div>
                    <h1>
                        LUXURIOUS <br />
                        RENTALS
                    </h1>
                </div>
                <div className='home-btn'>
                    <button className='normal-button '>Sign in</button>
                    <button className='custom-button'>Sign up</button>
                </div>
            </div>

            {/*section-2*/}
            <div className='header-2'>
                <img src={Stock1Image} alt='stock-1' width={100} height={100} style={{ marginTop: '30px' }} />
                <h1 style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '3em' }}>Discover the finest rentals <br /> for your special occasions</h1>
                <img src={Stock2Image} alt='stock-2' width={100} height={100} style={{ float: 'right' }} />

                <div className='input-field' style={{ textAlign: 'center', marginTop: '30px', marginLeft: '30px' }}>
                    <div className='inputs'>
                    <input type='text'
                        placeholder='Search for items'
                        name='search'
                        style={{
                            border: '1px solid black', marginRight: '15px', height: '30px', paddingLeft: '20px', // Padding for the icon
                            backgroundImage: 'url("../assets/search-icon.png")', // URL of the icon image
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '5px center', // Position the icon 5px from the left and centered vertically
                            backgroundSize: '16px 16px', // Size of the icon}}
                        }}
                        value={value} 

                        onChange={(e) => setValue(e.target.value)}
                        
                        />
                    </div>

                    <button onClick={search} className='custom-button' style={{ width: '80px', height: '30px' }}>
                        <NavLink to="/products">Search</NavLink>
                    </button>
                </div>
            </div>
            <div style={{textAlign: 'center', margin: '3rem'}}>

            <button className='team-btn' style={{ width: '150px', height: '30px' }}>
                        <NavLink to="/products">Browse/Rent Products</NavLink>
                    </button>
            </div>
                        
            <section>
                {section.map((item, index) => (
                    <MidSection key={index} item={item} />
                ))}
            </section>

        </div>
        <Footer />
        </>
    )
}

export default HomePage