import React from 'react'
import CocLogo from '../../assets/images/PSU_CoC_ENG.png'
import longArrow from '../../assets/images/right-arrow.png'
import { tabletOrMobile, mobileOnly } from '../helper/device'
import { useMediaQuery } from 'react-responsive'
export const AboutMe = () => {

    const isTabletOrMobile = useMediaQuery({ query: tabletOrMobile })
    const isMobile = useMediaQuery({ query: mobileOnly })
    const calculateAge = () => Math.floor((new Date() - new Date('1997-10-28').getTime()) / 3.15576e+10)

    return (
        <div className={`mx-auto p-10 ${isTabletOrMobile && "mt-20"}`}>

            <div className="container w-500 h-full filter drop-shadow-lg bg-white p-10">

                <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 ">
                    <div className="grid gap-4">
                        <div className="col-span-2">
                            <p className="text-4xl max-sm:text-2xl text-titleCustom"> ปฏิภาณ วิบูลย์ชาติ</p>
                        </div>
                        {
                            isMobile ? <div className="col-start-1 col-span-1 ">
                                <p className="text-lg text-titleCustom"> ข้อมูลส่วนตัว</p>
                                <p className="text-sm mt-2"> ชื่อจริง นาย ปฏิภาณ วิบูลย์ชาติ </p>
                                <p className="text-sm ">ชื่อเล่น แจ็ค อายุ {calculateAge()} ปี</p>
                                <p className="text-sm ">จบการศึกษาในสาขา วิศวกรรมซอฟต์แวร์</p>
                                <p className="text-sm "> วิทยาลัยการจัดการคอมพิวเตอร์</p>
                                <p className="text-sm ">มหาวิทยาลัยสงขลานครินทร์ วิทยาเขต ภูเก็ต</p>
                            </div>
                                :
                                <div className="col-start-1 col-span-1 ">
                                    <p className="text-lg text-titleCustom"> ข้อมูลส่วนตัว</p>
                                    <p className="text-sm mt-2"> ชื่อจริง นาย ปฏิภาณ วิบูลย์ชาติ ชื่อเล่น แจ็ค อายุ {calculateAge()} ปี </p>
                                    <p className="text-sm ">จบการศึกษาในสาขา วิศวกรรมซอฟต์แวร์ วิทยาลัยการจัดการคอมพิวเตอร์
                                    </p>
                                    <p className="text-sm ">
                                        มหาวิทยาลัยสงขลานครินทร์ วิทยาเขต ภูเก็ต
                                    </p>
                                </div>
                        }

                        <div className="col-start-1 w-80 max-sm:w-52">
                            <img src={CocLogo}></img>
                        </div>

                        <div className="grid grid-cols-2 col-start-1 w-52 gap-1">
                            <p className="text-lg col-span-2 text-titleCustom">ทักษะทางสาขา</p>
                            <div className=" p-1 text-center bg-gray-400 text-white">
                                <p>HTML</p>
                            </div>
                            <div className="p-1 text-center bg-red-400 text-white">
                                <p>javascript</p>
                            </div>
                            <div className="p-1 text-center bg-blue-400 text-white">
                                <p>React.js</p>
                            </div>
                            <div className="p-1 text-center bg-green-400 text-white">
                                <p>Node.js</p>
                            </div>
                            <div className="col-span-2 p-1 text-center bg-yellow-400 text-white">
                                <p>Git Command</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div className="col-start-2 max-sm:col-start-1">
                            <p className="text-lg text-titleCustom">ประสบการณ์</p>
                            <p className="text-sm">
                                บริษัท Icon Framework Co.,Ltd
                            </p>
                            <p className="text-sm">
                                ตําแหน่ง - FrontEnd Developer
                            </p>
                            <p className="text-sm">
                                ( React, Nodejs, C# , Line API )
                            </p>
                            <br />
                            <div className="rounded-lg w-20 h-1 bg-bgCustom">
                                <i className="
                            absolute 
                            border-bgCustom
                            border-t-2
                            border-b-0
                            border-r-2
                            border-l-0 
                            inline-block 
                            p-1
                            transform rotate-45 translate-x-20 -translate-y-1 " style={{
                                    }}></i>
                                <p style={{
                                    position: "absolute",
                                    transform: "translate(110px, -10px)"
                                }}> 2 ปี 11 เดือน</p>

                            </div>

                        </div>

                        <div className="col-start-2 col-end-3 col-span-1 max-sm:col-start-1">
                            <p className="text-lg text-titleCustom">สรุปลักษณะของงานที่เคยทำ</p>
                            <p className="text-sm">
                                งานของผมคือรับผิดชอบพัฒนา Web Application ตาม UI/UX Design โดยให้สามารถเข้าใช้งานได้ผ่าน Line Richmenu ( Line API ) และพัฒนา Web App CRUD ทั่วไป
                            </p>
                            <p className="text-sm">

                            </p>
                            <p className="text-sm">
                                UI Framework ที่เคยใช้งานได้แก่ MUI , Antd, Tailwind css,
                                มีประสบการณ์พัฒนาในฝั่ง back-end เล็กน้อย
                            </p>
                        </div>


                        <div className="col-start-2 max-sm:col-start-1">
                            <p className="text-lg text-titleCustom">ติดต่อ</p>
                            <p className="text-sm">patiphan.soap@gmail.com</p>
                            <p className="text-sm">062-053-1717</p>

                        </div>
                    </div>



                </div>



            </div>

        </div >
    )
}
