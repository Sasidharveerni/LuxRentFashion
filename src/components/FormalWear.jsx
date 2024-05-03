import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtoCart, removeFromCart } from '../actions/image';


function FormalWear({ imgUrl, formalHeadings, formalDesc, formalPrice }) {
    const [count, setCount] = useState(0);

    const toggleCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrementCount = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    }

    

    const dispatch = useDispatch();
    const addImage = (imgUrl, price) => {
        dispatch(addtoCart(imgUrl, price))
    }

    const removeImage = (imgUrl) => {
        dispatch(removeFromCart(imgUrl))
    }


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', marginBottom: '1rem' }}>
                <div className='formal-product'>
                    <p style={{ fontWeight: 'bolder' }}>{formalHeadings}</p>
                    <p className='liners'>{formalDesc}</p>
                    <div style={{ display: 'flex', marginTop: '1rem' }}>
                        <p>₹ {formalPrice}</p>

                        <div className='outfit-opt-1 trending' style={{ margin: '0', marginLeft: '1rem' }}>
                            <button>Trending</button>
                        </div>


                    </div>
                </div>

                <div style={{ position: 'relative', display: 'inline-block', width: 'fit-content' }}>
                    <img src={imgUrl} alt='' />
                    <div className='outfit-opt-1' style={{position: 'absolute', bottom: '0.5rem', left: '50%', transform: 'translateX(-50%)'}}>
                        <button onClick={() => {decrementCount(); removeImage(imgUrl);}} style={{ marginRight: '1rem' }}>
                            -
                        </button>
                        {count}
                        <button onClick={() => {toggleCount(); addImage(imgUrl, formalPrice);}} style={{ marginLeft: '1rem' }}>
                            +
                        </button>
                    </div>
                </div>



            </div>
            <hr />
            
        </>
    );
}

export default FormalWear;
