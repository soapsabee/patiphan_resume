import React from 'react'
import gatewayLogo from '../../assets/images/gateway-bg.jpg'
import lineV2Logo from '../../assets/images/lineoaV2.png'
import mortgageLogo from '../../assets/images/digitalMortgage.png'
import { tabletOrMobile } from '../helper/device'
import { useMediaQuery } from 'react-responsive'
export const Portfolio = () => {
    const isTabletOrMobile = useMediaQuery({ query: tabletOrMobile })

    return (
        <div class={`mx-auto ${isTabletOrMobile && "mt-24"}`}>

            <div class="filter drop-shadow-lg bg-white p-10">
                <div class={`grid ${isTabletOrMobile ? "grid-cols-1" : "grid-cols-2"}`}>
                    <div class={`col-span-1 ${isTabletOrMobile ? "p-0" : "p-20"}`}>
                        <img src={lineV2Logo} class="rounded-lg"></img>
                    </div>
                    <div class="col-span-1">
                        <div class="h-full grid content-center">
                            <p className="text-4xl">Line OA Customer Portal</p>
                            <p className="text-2xl text-red-600">(เป็นผลิตภัณฑ์ของบริษัท Icon Framework พัฒนาร่วมกับทีมงาน)</p>
                            <br />
                            <p className='indent-7'>
                                Web Application ที่มีเมนูให้เข้าใช้งานได้ผ่าน Line Application
                            </p>
                            <p>
                                เป็นเครื่องมือรวบรวมเมนูอำนวยความสะดวกให้กับลูกบ้านที่อยู่อาศัยในโครงการ
                                อย่างเช่น เมนูค่าใช้จ่ายที่ให้ลูกบ้านโอนค่าใช้จ่ายๆต่างๆแบบออนไลน์ได้อย่างสะดวกสบาย , เมนูแจ้งเตือนพัสดุที่จะแจ้งพัสดุใหม่ที่ส่งถึงลูกบ้าน , การจองส่วนกลางผ่านมือถือด้วยตนเอง, การแจ้งซ่อม และอื่นๆ
                            </p>
                        </div>

                    </div>
                </div>
                <div class={`grid ${isTabletOrMobile ? "grid-cols-1" : "grid-cols-2"} ${!isTabletOrMobile && "-mt-40"}`}>
                <div class="col-span-1 ">
                        <img src={mortgageLogo} class="rounded-lg"></img>
                    </div>
                    <div class="col-span-0">
                        <div class="h-full grid content-center">
                            <p className="text-4xl">Line OA Digital Mortgage</p>
                            <p className="text-2xl text-red-600">(เป็นผลิตภัณฑ์ของบริษัท Icon Framework พัฒนาร่วมกับทีมงาน)</p>
                            <br />
                            <p className='indent-7'>
                                Web Application ที่มีเมนูให้เข้าใช้งานได้ผ่าน Line Application เช่นเดียวกัน
                            </p>
                            <p>
                                เป็นเครื่องมือที่จะทำให้การขอสินเชื่อเป็นเรื่องง่าย และสามารถทำได้ด้วยตนเองที่ใดก็ได้
                                ผู้ใช้งานสามารถที่จะตรวจสอบเครดิตบูโรของตัวเองได้ และสามารถติดตามความเคลื่อนไหวของสถานะการขอสินเชื่อของตนเองได้อย่างง่ายดาย
                            </p>
                        </div>

                    </div>
                </div>
               
            </div>


        </div>
    )
}
