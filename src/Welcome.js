import React from 'react'
import {AiOutlineFileSearch} from 'react-icons/ai'
function Welcome() {
  return (
    <div className='welcome-main-div'>
      <div className='welcome-div'>
        <h1 className='hero-title'>Welcome to my table</h1>
        <input  type='text' placeholder='Search' className='search'/>
        <AiOutlineFileSearch className='search-icon' />
      </div>

    </div>
  )
}

export default Welcome