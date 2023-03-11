import React from 'react'
import "./topsweet.css"
import bg from "../bg.png";

const TopSweet = () => {
  return (
    <div className='home'>
        <div>
          <div className='box'>
            <div className='left'>
              <img src={bg} alt="pic" />
            </div>
            <div className='right'>
            <div className='right topMargin'>
              <h2>Organgic Sweets</h2>
              <div className='socialIcon'>
              <i class="fas fa-birthday-cake"></i>
              <i class="fas fa-candy-cane"></i>
              <i class="fas fa-apple-alt"></i>
              </div>
              <p>Fresh locally grown Organgic Sweets. These sweets are farm to satisfaction</p>
              <button className='primary-btn'>
                Order
              </button>
            </div>
            </div>
          </div>
          </div>

    </div>
  )
}

export default TopSweet






// <div className='home'>
// <div className='container flex'>
//   <div className='left img'>
//     <img alt='pic' src={bg} />
//   </div>
// </div>
// <div className='right topMargin'>
//   <h2>Organgic Sweets</h2>
//   <div className='socialIcon'>
//   <i class="fas fa-birthday-cake"></i>
//   <i class="fas fa-candy-cane"></i>
//   <i class="fas fa-apple-alt"></i>
//  </div>
//  <p>Fresh locally grown Organgic Sweets. These sweets are farm to satisfaction</p>
//   <button className='primary-btn'>
//     Order
//   </button>
// </div>
// </div>