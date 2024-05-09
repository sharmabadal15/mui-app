import React from 'react'

const icon = 'instagram-icon.svg';

function InstagramIcon() {

    return (
        <a 
            href="https://www.instagram.com/waconomads/" 
            target="_blank" 
            rel="noopener noreferrer">
            <img src={icon} alt="Instagram WACO" className='mr-auto' />
        </a>
    )
}

export default InstagramIcon