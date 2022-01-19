import React from "react";

const Card = () => {
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow'>
            <h1>Robo Friend</h1>
            <img alt='robot' src='https://robohash.org/1?200x200' />
            <div>
                <h1>Firstname Lastname</h1>
                <p>email@email.com</p>
            </div>
        </div>
    )
}

export default Card