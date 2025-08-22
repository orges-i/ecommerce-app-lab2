import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="border border-gray-400">  
      <div className="flex flex-col sm:flex-row">
        
        {/* Hero ana majt */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 text-[#414141]">
          <div>
            
            {/* Top Line/divider + Text */}
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">MË TË SHITURAT TONA</p>
            </div>

            {/* Heading main */}
            <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
              Ardhjet më të reja
            </h1>

            {/* Shop Now + Line/divider */}
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base">BLI TANI</p>
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            </div>

          </div>
        </div>

        {/* Hero ana djathte (Image) */}
        <img className="w-full sm:w-1/2" src={assets.hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
