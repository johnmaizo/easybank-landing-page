import React from 'react'

import currency from '../../../public/image-currency.jpg'
import restaurant from '../../../public/image-restaurant.jpg'
import plane from '../../../public/image-plane.jpg'
import confetti from '../../../public/image-confetti.jpg'

const Article = () => {
  return (
    <section className="article_module">
        <div className="container">
            <h2>Latest Articles</h2>
            <div className="flex_wrap">
                <div className="box">
                    <img src={currency} alt="Currency" />
                    <div className="text">
                        <h3>By Claire Robinson</h3>
                        <a href="#">Receive money in any currency with no fees</a>
                        <p>
                            The world is getting smaller and we’re becoming more mobile. So why should you be
                            forced to only receive money in a single …
                        </p>
                    </div>
                </div>

                <div className="box">
                    <img src={restaurant} alt="Restaurant" />
                    <div className="text">
                        <h3>By Wilson Hutton</h3>
                        <a href="#">Treat yourself without worrying about money</a>
                        <p>
                            Our simple budgeting feature allows you to separate out your spending and set
                            realistic limits each month. That means you …
                        </p>
                    </div>
                </div>

                <div className="box">
                    <img src={plane} alt="Plane" />
                    <div className="text">
                        <h3>By Wilson Hutton</h3>
                        <a href="#">Take your Easybank card wherever you go</a>
                        <p>
                            We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                            while you’re abroad. We’ll even show you …
                        </p>
                    </div>
                </div>

                <div className="box">
                    <img src={confetti} alt="Confetti" />
                    <div className="text">
                        <h3>By Claire Robinson</h3>
                        <a href="#">Our invite-only Beta accounts are now live!</a>
                        <p>
                            After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                            It’s easy to request an invite through the site ...
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Article