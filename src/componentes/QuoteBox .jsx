import React from 'react';
import quotes from '../quotes.json'

const QuoteBox = ({ ShowQuotes , ShowColor }) => {

    return (
        <div className='QuoteBox'>
            <i className="fa-solid fa-quote-left" style={{ fontSize: "40px", padding: "0 10px" , color:ShowColor}} ></i>
            <div style={{ paddingRight: "20px" , color:ShowColor }}>{quotes[ShowQuotes].quote}</div>
            <div className='CardAuthor' style={{ color:ShowColor }} >{quotes[ShowQuotes].author}</div>
        </div>

    );
};

export default QuoteBox;