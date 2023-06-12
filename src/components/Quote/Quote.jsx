import React, { useEffect, useState } from 'react'
import './quote.css'
import 'animate.css'
import QuoteData from '../../data/quote'
import { ReactComponent as QuoteIcon } from './quote-left.svg'
const Quote = () => {
    const quoteLength = QuoteData.length;
    const [activeQuote, setActiveQuote] = useState(0);
    const [isIncrementing, setIsIncrementing] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsIncrementing(true);
            // Update the counter every 2 seconds
            setActiveQuote(prevCount => (prevCount + 1) % (quoteLength + 0));
        }, 5000);

        console.log(interval)
        return () => {
            clearInterval(interval);
        };
    }, []);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsIncrementing(false);
        }, 1000);
        // Transition duration (milliseconds)

        return () => {
            clearTimeout(timeout);
        };
    }, [activeQuote]);

    return (
        <section className="blockquote_section-wrapper">
            <section className='blockquote_section'>
                <div className="blockquote_content">
                    <span className='quote_icon-left'>
                        <QuoteIcon />
                    </span>
                    <span className='quote_icon-right'>
                        <QuoteIcon />
                    </span>
                    <p >
                        <span className={isIncrementing ? 'increment animate__animated  animate__fadeInUp' : ''}>{QuoteData[activeQuote].quote}</span>
                    </p>
                    <h6 >
                        <span className={isIncrementing ? 'increment animate__animated  animate__fadeInUp' : ''}>{QuoteData[activeQuote].author}</span>
                    </h6>
                </div>
            </section>
        </section>
    )
}

export default Quote