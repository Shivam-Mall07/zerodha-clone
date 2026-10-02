import React from 'react'

function Universe() {
    return (  
       <div className='container'>
        <div className='row text-center'>
            <h1>The Zerodha Universe</h1>
             <p>
            Extend your trading and investment experience even futher with futher with our partner platforms
            </p>
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/smallcaseLogo.png' style={{width:"180px"}} />
                <p className='text-small text-muted my mt-3 '>Thematic investment platfom</p>
            </div>
            <div className='col-4 p-3 mt-4'>
                <img src='media/images/streakLogo.png' style={{width:"180px"}} />
                <p className='text-small text-muted mt-3'>Thematic investment platfomr</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/sensibullLogo.svg' style={{width:"180px"}}/>
                <p className='text-small text-muted mt-3'>Thematic investment platfomr</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/zerodhaFundhouse.png'style={{width:"250px"}} />
                <p className='text-small text-muted mt-3'>Thematic investment platfomr</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/goldenpiLogo.png'style={{width:"180px"}} />
                <p className='text-small text-muted mt-3'>Thematic investment platfomr</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/dittoLogo.png'style={{width:"150px"}} />
                <p className='text-small text-muted mt-3'>Thematic investment platfomr</p>
            </div>
            <button className='p-2 btn btn-primary  mb-5 mt-4' style={{width:"15%", margin:" 0 auto"}}>Sign up Now</button>
        </div>
       </div>
    );
}

export default Universe;