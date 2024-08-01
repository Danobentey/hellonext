import React from 'react'

const styles = {
  fontFamily: "sans-serif",



}

const Productcard = ({icon, product_name, desc}) => {
  return (
    <div className="bg-black text-left p-9 flex flex-col gap-3 rounded-3xl" style={styles}>
      <img className="w-[70px] h-[70px] mb-4" src={icon} alt="icon" />
      <h2>{product_name}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default Productcard
