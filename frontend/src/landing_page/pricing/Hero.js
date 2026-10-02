import React from 'react'

function Hero() {
    return (  
          <div className='container'>
            <div className='row text-center p-4 mt-5 border-bottom'>
               <h1>Pricing</h1>
               <h3 className='text-muted fs-5 mt-3'>Free equity investments and ₹flat 20 traday and F&O trades</h3>
                </div>

            <div className='row text-center p-4 mt-5 '>
               <div className='col-4 p-4'>
                    <img src='media/images/pricingEquity.svg' />
                    <h1 className='fs-3'>Free Equity Delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹
            0 brokerage.</p>
               </div>
               <div className='col-4 p-4'>
                    <img src='media/images/intradayTrades.svg' />
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted'> Flat Rs. 20 or 0.03% (whichever is lower)<br/>  per executed order on
            intraday trades <br/> across equity, currency, and commodity<br/>  trades.</p>
               </div>
               <div className='col-4 p-4'>
                    <img src='media/images/pricingEquity.svg' />
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='text-muted'> All direct mutual fund investments are<br/>  absolutely free — ₹ 0
            commissions & DP charges.</p>
               </div>
            </div>
        </div>
    );
}

export default Hero;