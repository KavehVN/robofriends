import React from 'react';


const searchbox = ({ searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue' 
                type="search" 
                placeholder="Seach Robots" 
                onChange={searchChange}
            />
        </div>
    );
}

export default searchbox;