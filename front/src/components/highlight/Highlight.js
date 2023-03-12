import React from 'react'
import "./highlight.css"

const Highlight = () => {
  return (
    <section>
      <div className='highlights'>
        <div className='services'>
          <div className='heading'>
            <h3>Fan Favorites</h3>
            <h2>Voting on and backed by order demand</h2>
          </div>

          <div className='contain grid topMargin'>
            <div className='boxes'>
              <div className='imgs'>
                <img alt="pic" src="https://images.pexels.com/photos/239578/pexels-photo-239578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
              <div className='text'>
                <h3>Text value</h3>
              </div>
            </div>
            <div className='boxes'>
              <div className='imgs'>
                <img alt="pic" src="https://images.pexels.com/photos/1289363/pexels-photo-1289363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
            <div className='boxes'>
              <div className='img'>
                <img alt="pic" src="https://images.pexels.com/photos/1289363/pexels-photo-1289363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
            <div className='boxes'>
              <div className='img'>
                <img alt="pic" src="https://images.pexels.com/photos/1289363/pexels-photo-1289363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}

export default Highlight