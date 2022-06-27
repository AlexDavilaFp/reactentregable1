import React from 'react';

const button1 = ({ changeCard , ShowColor }) => {

    return (
        <div className='CardButton'>
            <button onClick={changeCard} style = {{background: ShowColor , color:"white"}}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default button1;