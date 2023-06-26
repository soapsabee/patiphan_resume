import React from 'react'
import gatewayLogo from '../../assets/images/gateway-bg.jpg'
import lineV2Logo from '../../assets/images/lineoaV2.png'
import { tabletOrMobile } from '../helper/device'
import { useMediaQuery } from 'react-responsive'
export const Portfolio = () => {
    const isTabletOrMobile = useMediaQuery({ query: tabletOrMobile })

    return (
        <div class={`mx-auto h-full p-10 ${isTabletOrMobile && "mt-20"}`}>

            <div class="container w-500 h-full filter drop-shadow-lg bg-white p-10">
                <div class="grid grid-cols-2">
                    <div class="col-span-1">
                        <img src={lineV2Logo} class="w-96 rounded-lg"></img>

                    </div>
                    <div class="col-span-1">
                            <p className="text-4xl">Line OA Customer Portal</p>
                            <br/>
                            <p className='indent-7'>
                                Web Application ที่มีเมนูให้เข้าใช้งานได้ผ่าน Line Application 
                            </p>
                            <p>
                            เป็นเครื่องมือรวบรวมเมนูอำนวยความสะดวกให้กับลูกบ้านที่อยู่อาศัยในโครงการ
                            อย่างเช่น เมนูค่าใช้จ่ายที่ให้ลูกบ้านโอนค่าใช้จ่ายๆต่างๆแบบออนไลน์ได้อย่างสะดวกสบาย , เมนูแจ้งเตือนพัสดุที่จะแจ้งพัสดุใหม่ที่ส่งถึงลูกบ้าน , การจองส่วนกลางผ่านมือถือด้วยตนเอง, การแจ้งซ่อม และอื่นๆ
                            </p>
                    </div>
                </div>

                <img src={gatewayLogo} class="w-96 rounded-lg"></img>


            </div>


        </div>
    )
}
