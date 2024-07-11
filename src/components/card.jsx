import React from 'react'

export default function Card({data, position}) {
  return (
    <div className='card-container' style={{left:position + '%'}}>
      <div className='card-wrapper'>
        <div className='profile-image'>
          <img src={data.authorProfileImageUrl} />
        </div>
        <div className='content'>
          <div className='user-info'>
            {data.authorDisplayName}
          </div>
          <div className='commnets'>
            {`${data.textOriginal}`}
          </div>
        </div>
      </div>
    </div>
  )
}
