import React from 'react'

export const Home = () => {
  return (
    <div className="flex  min-h-screen items-center justify-center ">
      <div className="grid grid-cols-1">
        <p className="text-4xl text-titleCustom ">
          ปฏิภาณ วิบูลย์ชาติ
        </p>
        <br/>
        <div className="place-self-center">
          <p className="text-1xl overflow-hidden border-r-4 border-r-black pr-1 whitespace-nowrap font-mono animate-typing">
            Frontend Developer
          </p>
        </div>
      </div>


    </div>
  )
}