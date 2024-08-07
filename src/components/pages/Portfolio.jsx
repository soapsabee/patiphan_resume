import React from 'react'
import hisImage from '../../assets/images/hisImage.jpg'
import lineV2Logo from '../../assets/images/lineoaV2.png'
import mortgageLogo from '../../assets/images/digitalMortgage.png'
import sisImage from '../../assets/images/Sis_connect.png'
import { tabletOrMobile } from '../helper/device'
import { useMediaQuery } from 'react-responsive'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
export const Portfolio = () => {
    const isTabletOrMobile = useMediaQuery({ query: tabletOrMobile })
    return (
        <div className={`mx-auto ${isTabletOrMobile && "mt-24"}`}>

            <div className="filter drop-shadow-lg bg-white p-10">
                <div className={`grid ${isTabletOrMobile ? "grid-cols-1" : "grid-cols-2"}`}>
                    <div className={`col-span-1 ${isTabletOrMobile ? "p-0" : "p-20"}`}>
                        <img loading='lazy' className={"rounded-lg"} src={lineV2Logo} ></img>
                    </div>
                    <div className="col-span-1">
                        <div className="h-full grid content-center">
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
                <div className={`grid ${isTabletOrMobile ? "grid-cols-1" : "grid-cols-2"} ${!isTabletOrMobile && "-mt-32"}`}>
                    <div className={`col-span-0 ${isTabletOrMobile && "order-2"}`}>
                        <div className="h-full grid content-center">
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
                    <div className={`col-span-1 ${isTabletOrMobile && "order-1"}`}>
                        <img loading='lazy' src={mortgageLogo} className="rounded-lg"></img>
                    </div>

                </div>

                <div className={`grid ${isTabletOrMobile ? "grid-cols-1 mt-28" : "grid-cols-2"} `}>

                    <div className="col-span-1">
                        <img loading='lazy' src={hisImage} className="rounded-lg w-11/12"></img>
                    </div>
                    <div className="col-span-0 ">
                        <div className="h-full grid content-center">
                            <p className="text-4xl">HIS (Panacia)</p>
                            <p className="text-2xl text-red-600">(เป็นผลิตภัณฑ์ของบริษัท Icon Framework พัฒนาร่วมกับทีมงาน)</p>
                            <br />
                            <p className='indent-7'>
                                Web Application ที่มีจุดมุ่งหมายเป็น System ที่มีฟังก์ชั่นครอบคลุมในการเป็นเครื่องมือสำหรับบุคลากรทางการแพทย์
                            </p>
                            <p>
                                ผมได้รับมอบหมาย ให้พัฒนา Module สำหรับเจ้าหน้าที่แอดมินบน HIS เพื่อให้เจ้าหน้าที่สามารถตั้งค่าหรือ เพิ่มข้อมูลสำหรับแพทย์และพยาบาล
                            </p>
                        </div>

                    </div>

                </div>

                <div className={`grid ${isTabletOrMobile ? "grid-cols-1 mt-24" : "grid-cols-2"} ${!isTabletOrMobile && "mt-36"}`}>

                    <div className={`col-span-1 ${isTabletOrMobile && "order-2"}`}>
                        <div className="h-full grid content-center">
                            <p className="text-4xl">SIS Connect</p>
                            <p className="text-2xl text-red-600">(เป็นโปรเจ็คจบนักศึกษา)</p>
                            <p>
                            repository: <a href='https://github.com/kornharem08/Chatbotv1.git' className='text-blue-600 hover:text-purple-600 '>github.com/kornharem08/Chatbotv1.git</a>
                            </p>
                            <p>
                            author : soapsabee 

                            </p>
                            <br />
                            <p className='indent-7'>
                                หุ่นยนต์โต้ตอบอัติโนมัติระบบสารสนเทศนักศึกษา (Chatbot) 
                                โปรเจคตัวนี้มีจุดประสงค์เพื่อทำหน้าที่แทนระบบ SIS หรือระบบสารสนเทศเดิมที่มีอยู่ของทางมหาวิทยาลัย
                                โดยจะหยิบเอาฟีเจอร์สำคัญมาแสดงผลในรูปแบบ Chatbot อาทิเช่น ฟีเจอร์แสดงตารางสอบ, แสดงผลเกรดการเรียน, แสดงตารางเวลาเข้าเรียน                      
                            </p>
                 
                        </div>

                    </div>

                    <div className={`col-span-1 ${isTabletOrMobile && "order-1"}`}>
                        <Zoom>
                        <img loading='lazy' src={sisImage} className="rounded-lg w-screen"></img>
                        </Zoom>
                    </div>


                </div>

            </div>


        </div>
    )
}
