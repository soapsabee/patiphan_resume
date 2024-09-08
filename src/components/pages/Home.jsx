import React from 'react'

export const Home = () => {
  return (
    <div id="aboutme" className="flex flex-wrap items-center h-3/5   justify-center md:space-x-10 pt-32 md:pt-52 ">

      <div className="bg-[url('./assets/images/img_profile.jpg')] bg-hero bg-no-repeat bg-cover bg-center   rounded-full h-64 w-64 border-2">
        {/* <img src={imgAvatar} className={"h-120 rounded-full border-2"}></img> */}
        
      </div>
      <div className="grid grid-cols-1 pt-6 md:pt-0">
        <p className="text-4xl text-titleCustom ">
          ปฏิภาณ วิบูลย์ชาติ
        </p>
        <br />
        <div className="place-self-center">
          <p className="text-1xl overflow-hidden border-r-4 border-r-white pr-1 text-white whitespace-nowrap font-mono animate-typing">
            Frontend Developer
          </p>
         
        </div>
        <br/>
        <div>
                    <div >
                        <p className="text-sm text-gray-400">patiphan.soap@gmail.com</p>
                        <p className="text-sm text-gray-400">062-053-1717</p>
                    </div>
                </div>
      </div>


    </div>

  )
}