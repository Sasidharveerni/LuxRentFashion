import React from 'react';

import upArrow from '../assets/Icon arrow upward.png';
import gem from '../assets/Icon gem.png';
import diamond from '../assets/Icon diamond.png';
import star from '../assets/Icon star border.png';
import appIcon from '../assets/Icon apps.png';
import filterList from '../assets/Icon filter list.png';
import Footer from './Footer';
import ProductItem from './ProductItem';
import { NavLink } from 'react-router-dom';

function ProductSearchPage() {
    const headerImages = ['https://img.icons8.com/ios-glyphs/90/home.png', 'https://img.icons8.com/ios-filled/50/deodorant-spray.png', 'https://img.icons8.com/ios-filled/50/star--v1.png', 'https://img.icons8.com/ios-glyphs/30/womens-t-shirt.png', 'https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/external-headphone-network-and-communication-smashingstocks-glyph-smashing-stocks.png', 'https://img.icons8.com/ios-filled/50/diamond--v1.png', 'https://img.icons8.com/ios-filled/50/sale.png'];
    const headings = ['Home', 'New arrivals', 'Trending now', 'Clothing', 'Accessories', 'Jewelry', 'Sale'];

    const filterHeaders = ['Category filter', 'Show only', 'Elegance', 'Rental Options'];
    const filterImages = [upArrow, upArrow, gem, diamond];
    const subFilters = [
        ['Rent', 'Trial', 'Audio guide'],
        ['New arrivals', 'Discount', 'Pre-order', 'Available'],
        ['LuxRentFashion', 'High Fashion', 'Latest Arrivals', 'Premium Quality'],
        ['Luxury Experience', 'Exclusive Deals', 'Rent with Ease']
    ];
    const subCounts = [
        ['(10,448)', '(4,208)', '(901)'],
        ['(7,102)', '(4,200)', '(901)', '(1,301)'],
        ['(6,455)', 'Limited Stock', '(390)', '(1,301)'],
        ['(7,102)', '(4,200)', '(901)', '(1,301)']
    ];

    

    return (
        <>
            <div style={{ margin: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className='heading'>
                        LuxRentFashion
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <input
                                type='text'
                                placeholder='   Search for items'
                                name='search'
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.3)', marginRight: '1rem', height: '6vh', width: '20vw'  // Padding for the icon
                                    ,borderRadius: '10px'
                                }}
                            />
                        </div>
                        <div>
                            <button className='custom-button' style={{ width: '50px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" alt="search--v1" />
                            </button>
                        </div>
                    </div>
                     <NavLink to='/product/rent'>
                    <div>
                        <button className='team-btn' style={{ marginLeft: '10px' }}>View Cart</button>
                    </div>
                     </NavLink>

                     
                </div>

                <hr />

                <div className='headers'>
                    {headerImages.map((image, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                            <div>
                                <img width="30" height="30" src={image} alt={headings[index]} />
                            </div>
                            <div>
                                <p>{headings[index]}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <hr />
            </div>

            <div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '1rem' }}>

                    <img src={star} alt='' style={{ width: '2rem', height: '2rem' }} className='liners' />

                    <p className='liners'>Highly rated</p>

                    <p className='liners'>Best picks</p>

                    <p className='liners'>Fresh arrivals</p>

                    <p className='liners'>Discounted</p>


                    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginRight: '0.5rem' }} className='liners'>
                        <img src={appIcon} alt='' />
                        <img src={filterList} alt='' />
                        <input type='dropdown' placeholder='Sort by: Recommended' />
                    </div>
                </div>

            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ margin: '2rem' }}>
                    {filterHeaders.map((ele, index) => (
                        < >
                            <div className='filter-section' key={index}>
                                <p style={{ fontWeight: 'bolder' }}>{ele}</p>
                                <img src={filterImages[index]} alt="long-arrow-up" />
                            </div>
                            {subFilters[index].map((element1, index1) => (
                                <div className='filter-section' key={index1}>
                                    <div style={{ display: 'flex', marginBottom: '1rem' }}>
                                        <input type="checkbox" />
                                        <p>{element1}</p>
                                    </div>
                                    <div>{subCounts[index1][index]}</div>

                                </div>

                            ))}

                            <hr />

                        </>

                    ))}

                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', margin: '3rem' }}>
                    <ProductItem />
                </div>

            </div>

            <Footer />

        </>
    );
}

export default ProductSearchPage;