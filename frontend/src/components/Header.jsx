import React from 'react'
import '../css/header.css'

export default function Header() {
    return (
        <div className='header-container'>
            <div className="logo-container">
                <p id='logo'>Biz</p>
            </div>

            <div className="webInfo-container">
                <p id="webName">BizWiz</p>
                <p id="webSlogan">Grow Your Business</p>
            </div>

            <div className="more-container">
                <a href='#'><p id="learn_more">Learn More</p></a>
            </div>

        </div>
    )
}
