import React from 'react'

const Searchbar = ({searchfield, searchChange}) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 tc ba b--green bg-lightest-blue"
                type="search"
                placeholder="Search for robot..."
                onChange={searchChange}
            />
        </div>
    )
}

export default Searchbar