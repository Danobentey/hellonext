"use client"
import { useEffect, useState } from "react"
import partner_logos from "../images/brands"

const PartnerCard = ({logo}) => {
  return (
    <div className=" rounded-lg inline-block min-w-64 border border-gray-800">
      <img style={{backgroundColor: '#161c12',borderRadius : '10px',width:'100%'}} src={logo.src} alt="logo" />
    </div>
  )
}
 
const Partners = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if ( scrollOffset > -500 & scrollOffset <= 24) {
        setScrollOffset(prev => prev - 0.4)
      } else if (scrollOffset <= -500) {
        setScrollOffset(1)
      }
      console.log(scrollOffset)
    }, 25)
  })

  return (
    <div className="flex gap-10" style={{transform: `translateX(${scrollOffset}%)`}}>
      {partner_logos.map((logo, id) => <PartnerCard key={id} logo={logo} /> )}
      {partner_logos.map((logo, id) => <PartnerCard key={id} logo={logo} /> )}
      {partner_logos.map((logo, id) => <PartnerCard key={id} logo={logo} /> )}
      {partner_logos.map((logo, id) => <PartnerCard key={id} logo={logo} /> )}
      {partner_logos.map((logo, id) => <PartnerCard key={id} logo={logo} /> )}
    </div>
  )
}

export default Partners
