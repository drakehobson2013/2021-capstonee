import React from 'react';
import Drake from './Drake.jpg';
import Kiah from './Kiah.jpg';
import Aarika from '.Aarika.jpg/'


const about = () => {
    return (
        <div className= 'container'>
            <h3>About Us</h3>
            <h4> <em> Meet the Team!</em></h4>

            <div className= 'post-container'>
            <img src={Drake} alt="Drake"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quae eius sunt eveniet. Repudiandae, earum veritatis doloremque unde ad dolor!</p>
            <img src={Kiah} alt="Kiah" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis facilis distinctio esse quasi incidunt quisquam explicabo quas maiores quod voluptatibus!</p>
            <img src={Aarika} alt="Aarika" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae soluta magnam nesciunt harum illum quisquam aut suscipit ab maiores.</p>
            <img src={Ron} alt="Ron" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cumque quia accusantium vitae aliquam perspiciatis itaque vel quae dolore autem.</p>

            </div>
            
        </div>
    )
}

export default about