import React from 'react'

import online from '../../assets/icon-online.svg'
import budgeting from '../../assets/icon-budgeting.svg'
import onboarding from '../../assets/icon-onboarding.svg'
import api from '../../assets/icon-api.svg'

import Article from './Article.jsx'

const Main = () => {
  return (
    <>
        <section className="why_choose_module">
            <div className="container">
                <h2>Why choose Easybank?</h2>
                <p>
                    We leverage Open Banking to turn your bank account into your financial hub. Control
                    your finances like never before.
                </p>

                <div className="flex_wrap">
                    <div className="box">
                        <img src={online} alt="Online Banking Icon"/>
                        <h3>Online Banking</h3>
                        <p>
                            Our modern web and mobile applications allow you to keep track of your finances 
                            wherever you are in the world.
                        </p>
                    </div>
                    
                    <div className="box">
                        <img src={budgeting} alt="Simple Budgeting Icon"/>
                        <h3>Simple Budgeting</h3>
                        <p>
                            See exactly where your money goes each month. Receive notifications when you’re 
                            close to hitting your limits.
                        </p>
                    </div>
                    
                    <div className="box">
                        <img src={onboarding} alt="Fast Onboarding Icon"/>
                        <h3>Fast Onboarding</h3>
                        <p>
                            We don’t do branches. Open your account in minutes online and start taking control 
                            of your finances right away.
                        </p>
                    </div>
                    
                    <div className="box">
                        <img src={api} alt="Open API Icon"/>
                        <h3>Open API</h3>
                        <p>
                            Manage your savings, investments, pension, and much more from one account. Tracking 
                            your money has never been easier.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <Article />
    </>
  )
}

export default Main