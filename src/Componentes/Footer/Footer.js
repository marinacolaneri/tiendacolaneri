import React from 'react';

function Footer ({greeting = 'saludo'}) {
    return(
        <div>
            {greeting}
        </div>
    )
}
export default Footer;