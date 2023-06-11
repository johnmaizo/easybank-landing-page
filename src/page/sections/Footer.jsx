import React from 'react'

import logo from '../../assets/logo-footer.svg'

const Footer = () => {
    const nav = ['About Us', 'Contacts', 'Blog', 'Careers', 'Support', 'Privacy Policy']

  return (
    <footer>
        <div className="container">

            <div className="flex_wrap">
                <div className="left_side">
                    <a href="#"><img src={logo} alt="easybank" /></a>
                
                    <nav className='icons'>
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-square-facebook"></i></a></li>
                            <li className='youtube'><a href="#"><i className="fa-brands fa-youtube nav_youtube"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-pinterest"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </nav>
                </div>
                <nav className='links'>
                    <ul>
                        {nav.map((text, index) => (
                            <li key={index}><a href="#">{text}</a></li>
                        ))}
                    </ul>
                </nav>
                <div className="right_side">
                    <button className='req_inv'>Request Invite</button>
                    <p>&copy; Easybank. All Rights Reserved</p>
                </div>
            </div>

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://www.frontendmentor.io/profile/johnmaizo" target='_blank'>John Robert Maizo</a>.
            </div>
        </div>
    </footer>
  )
}

export default Footer