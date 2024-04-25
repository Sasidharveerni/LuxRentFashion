import React, { useState } from 'react';
import '../App.css';
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image.png';
import Image3 from '../assets/Image3.png';

import TeamImg from '../assets/Image (1).png';
import TeamImg2 from '../assets/Image (2).png';
import TeamImg3 from '../assets/Image (3).png';

import DownloadImg from '../assets/Image (4).png'
import FormalWear from './FormalWear';

import formalImg1 from '../assets/formal-1.jpg';
import formalImg2 from '../assets/formal-2.jpg'
import formalImg3 from '../assets/formal-3.jpg'
import formalImg4 from '../assets/formal-4.jpg'


import casualImg1 from '../assets/casualwear-1.jpg';
import casualImg2 from '../assets/casualwear-2.jpg';
import casualImg3 from '../assets/casualwear-3.jpg';
import casualImg4 from '../assets/casualwear-4.jpg';


import accesoryImg1 from '../assets/accessories-1.jpg'
import accesoryImg2 from '../assets/accessories-2.jpg'
import accesoryImg3 from '../assets/accessories-3.jpg'
import accesoryImg4 from '../assets/accessories-4.jpg'
import { NavLink } from 'react-router-dom';





function MidSection({ item }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const formalImg = [formalImg1, formalImg2, formalImg3, formalImg4];
    const formalHeadings = ['Casual women suite', 'Casual striped shirt', 'Sizziling sky-blue blazer', 'Modern brick red suite'];
    const formalDesc = ['perfect for instant meetings', 'Stand-out with this elegant shirt', 'Wear like a king', 'Aesthetic wears'];
    const formalPrice = [450, 650, 357, 567];

    const casualImg = [casualImg1, casualImg2, casualImg3, casualImg4];
    const casualHeadings = ["Comfort Meets Style: Chinos for Every Occasion",  "Classic Elegance: The White Shirt Collection", "Effortlessly Chic: Brown Shirts for Women",  "Casual Cool: Check Shirts for a Laid-Back Look"]
    const casualDesc = ["Versatile and comfortable, our chinos are designed to take you from work to weekend in style.", "A wardrobe essential, our white shirts offer timeless style", "Add a touch of warmth to your wardrobe with our collection", "Stay on-trend with our range of check shirts, perfect for a relaxed and stylish ensemble."]
    const casualPrice = [340, 450, 564, 389]

    const accesoryImg = [accesoryImg1, accesoryImg2, accesoryImg3, accesoryImg4];
    const accesoryHeadings = ["Travel in Style: Backpacks and Shoes Combo", "Accessorize with Elegance: Watches and Cooling Glasses", "Sporty Chic: Caps and Watches Combo",  "Sophisticated Glamour: Luxury Handbags"]
    const accesoryDesc = [ "Pair your favorite shoes with a matching backpack for a coordinated and fashionable travel look.", "Stay cool and stylish with our collection of watches and cooling glasses, perfect for any occasion.", "Add a sporty touch to your outfit with a stylish cap paired with a classic watch for a trendy look.", "Elevate your style with our exquisite collection of luxury handbags, designed to make a statement."]
    const accesoryPrice = [489, 567, 478, 387]


    const contentMap = {
        'How LuxRentFashion Works': (
            <div style={{ display: 'flex', marginTop: '20px' }}>
                <div className='working-div'>
                    <img src={Image1} alt='' width={150} height={150} />
                    <h1 style={{ fontSize: '1.25em', fontWeight: 'bolder', display: 'inline-block' }}>Select your dream</h1>
                    <p className='liners'>Enter your details. Find your perfect luxury piece, or check availability near you.</p>
                </div>
                <div className='working-div'>
                    <img src={Image2} alt='' width={150} height={150} />
                    <h1 style={{ fontSize: '1.25em', fontWeight: 'bolder', display: 'inline-block' }}>Add to cart</h1>
                    <p className='liners'>Choose your favorite item. You're a step closer to the ultimate luxury experience.</p>
                </div>
                <div className='working-div'>
                    <img src={Image3} alt='' width={150} height={150} />
                    <h1 style={{ fontSize: '1.25em', fontWeight: 'bolder', display: 'inline-block' }}>Track your order</h1>
                    <p className='liners'>Review rental details. Sit back and await your exquisite piece!</p>
                </div>
            </div>
        ),
        'Join LuxRentFashion Team': (
            <>
            <div className='container'>
                <div>
                    <img src={TeamImg} alt='' width={200} height={100} />
                </div>
                <div>
                    <h1 className='heading'>Become a Stylist</h1>
                    <p className='liners'>Earn by styling clients with premium fashion. All you need is ur flair and passion.</p>
                    <NavLink to='/stylewithus'>

                    <button className='team-btn'>Style With Us</button>
                    </NavLink>
                </div>

            </div>
            <hr />
            <div className='container'>
            <div>
                <img src={TeamImg2} alt='' width={200} height={100} />
            </div>
            <div>
                <h1 className='heading'>Become a Collobarotor</h1>
                <p className='liners'>LuxRentFashion supports designers with online exposure, promotions, and more.</p>
                
                <button className='team-btn'>Collobarate With Us</button>
            </div>

        </div>

        <hr />

        <div className='container'>
                <div>
                    <img src={TeamImg3} alt='' width={200} height={100} />
                </div>
                <div>
                    <h1 className='heading'>Join the team</h1>
                    <p className='liners'>Contribute to an elite service in luxury fashion delivery with smooth and elegant.</p>
                    <button className='team-btn'>Join Us</button>
                </div>

            </div>
        </>
        ),
        'Download our app': (
            <div className='container' style={{marginTop: '30px'}}>
                <div>
                    <h1 className='heading'>Rent effortlessly!</h1>
                    <p className='liners'>Experience luxury at your doorstep with LuxRentFashion. Explore a variety of high-end collections from top designers.</p>
                    <button className='custom-button' style={{width: '100px', height: '30px'}}>Download</button>
                </div>
                <div>
                    <img src={DownloadImg} alt='' width={200} height={100}/>
                </div>
                <hr />
            </div>
        ),

        'Formalwear' : (
            <>
            
            {formalImg.map((imgUrl, ind) => (

                <FormalWear key={ind} imgUrl={imgUrl} formalHeadings={formalHeadings[ind]} formalDesc = {formalDesc[ind]} formalPrice={formalPrice[ind]}/>
            ))}
            </>
        ),

        'Casualwear' : (
            <>
              {casualImg.map((imgUrl, ind) => (
                <FormalWear key={ind} imgUrl={imgUrl} formalHeadings={casualHeadings[ind]} formalDesc={casualDesc[ind]} formalPrice={casualPrice[ind]} />
              ))}
              
            </>
        ),
        'Accessories' : (
            <>
            {accesoryImg.map((imgUrl, ind) => (
                <FormalWear key={ind} imgUrl={imgUrl} formalHeadings={accesoryHeadings[ind]} formalDesc={accesoryDesc[ind]} formalPrice={accesoryPrice[ind]} />
              ))}
            </>
        )

    };

    return (
        <>
            <div style={{ marginTop: '150px' }}>
                <hr style={{ marginBottom: '20px', opacity: '0.2' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className='heading'>
                        <button id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover" onClick={toggleDropdown}>
                            {item}
                        </button>
                    </div>
                    <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                        style={{ transform: isDropdownOpen ? 'rotate(270deg)' : 'rotate(0)', float: 'right' }}
                    >
                        <path
                            stroke="currentColor"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </div>
            </div>
            <hr style={{ marginTop: '20px', opacity: '0.2' }} />
            {!isDropdownOpen && contentMap[item]}
          
        </>
    );
}

export default MidSection;
