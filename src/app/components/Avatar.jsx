import React, { useState } from 'react'


const Avatar = ({name}) => {
  const [showName, setshowName] = useState(true)
  return (
    <div className="w-[fit-content]">
      {showName && <span>{name}</span>}
      <img src={img} alt="avatat" className="rounded-full"  />
      
    </div>
  )
}

export default Avatar
