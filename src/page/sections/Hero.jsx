import React from 'react'

import mockup from '../../../public/image-mockups.png'

const Hero = () => {
  return (
    <>
        <section className="hero_module">
            <div className="grid_wrap">
                <div className="container">
                    <h1>Next generation digital banking</h1>
                    <p>
                        Take your financial life online. Your Easybank account will be a one-stop-shop
                        for spending, saving, budgeting, investing, and much more.
                    </p>
                    <button className="req_inv" >Request Invite</button>
                </div>
                <div className="parent">
                    <div className="image"></div>
                    <img src={mockup} alt="" aria-hidden className='mockup' />
                </div>
            </div>
            {/* <div className="container relative"><img src={mockup} alt="" className="desktop" aria-hidden /></div> */}
        </section>
    </>
    
  )
}

export default Hero