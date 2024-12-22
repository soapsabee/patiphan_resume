import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
export const Portfolio = () => {
    return (
        <>
            <section class="p-20" id="portfolio">
                <div class="lg:container mx-auto">
                    <h2 class="text-center text-4xl font-bold pb-10 text-titleCustom">Portfolio</h2>

                    <div className='w-100 flex flex-row justify-center'>
                        <div className='p-4 items-center justify-center  rounded-xl group sm:flex space-x-6 bg-white bg-opacity-10 shadow-xl hover:rounded-2xl w-[50%] h-[500px] p-5'>
                            <div className='flex flex-row'>
                                <div>
                                    <Zoom>

                                        <div role='img' className="bg-[url('./assets/images/lineoav2.png')] bg-hero bg-no-repeat bg-contain bg-center   h-64 w-64">

                                        </div>
                                    </Zoom>
                                </div>

                                <div>
                                    <p className="text-4xl text-titleCustom">Line OA Customer Portal</p>
                                    <p className="text-2xl text-red-400">(It is a product of Icon Framework, developed in collaboration with the team.)</p>
                                <br />
                                <p className='indent-7 break-word text-gray-400'>
                                A web application with a menu accessible via the LINE application serves as a tool to gather convenience menus for residents in a residential project. For example, it includes a menu for expenses that allows residents to conveniently transfer various payments online, a package notification menu to alert residents of new deliveries, the ability to book shared facilities via mobile, a maintenance request system, and more.
                                </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='w-100 flex flex-row justify-center mt-10'>
                        <div className='p-4 items-center justify-center  rounded-xl group sm:flex space-x-6 bg-white bg-opacity-10 shadow-xl hover:rounded-2xl w-[50%] h-[500px] p-5'>
                            <div className='flex flex-row'>
                                <div>
                                    <Zoom>

                                    <div role="img" className="bg-[url('./assets/images/digitalMortgage.png')] bg-hero bg-no-repeat bg-contain bg-center  h-64 w-64">

                                        </div>
                                    </Zoom>
                                </div>

                                <div>
                                <p className="text-4xl text-titleCustom">Line OA Digital Mortgage</p>
                                    <p className="text-2xl text-red-400">(It is a product of Icon Framework, developed in collaboration with the team.)</p>
                                <br />
                                <p className='indent-7 break-word text-gray-400'>
                                A web application with a menu accessible via the LINE application serves as a tool to simplify the loan application process, allowing users to apply on their own from anywhere. Users can check their credit bureau status and easily track the progress of their loan application.                                </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='w-100 flex flex-row justify-center mt-10'>
                        <div className='p-4 items-center justify-center  rounded-xl group sm:flex space-x-6 bg-white bg-opacity-10 shadow-xl hover:rounded-2xl w-[50%] h-[500px] p-5'>
                            <div className='flex flex-row'>
                                <div className='ml-10 mr-10'>
                                    <Zoom>

                                    <div role='img' className="bg-[url('./assets/images/developerPortal.png')] bg-hero bg-no-repeat bg-contain bg-center  h-64 w-64">

                                        </div>
                                    </Zoom>
                                </div>

                                <div > 
                                <p className="text-4xl text-titleCustom">Developer Portal</p>
                                    <p className="text-2xl text-red-400">(It is a product of Icon Framework, developed in collaboration with the team.)</p>
                                <br />
                                <p className='indent-7 break-word text-gray-400'>
                                A web application designed to support real estate sales serves as a tool for developers to input customer information, ensuring that property transactions are managed within the system.                               
                                </p>
                                 </div>
                            </div>
                        </div>
                        
                    </div>
            
                </div>
            </section>
        </>
        // <div className={`mx-auto ${isTabletOrMobile && "mt-24"}`}>

        //     <div className="filter  p-10">

        //         <FadeComponent>
        //             <div className={`grid ${isTabletOrMobile ? "grid-cols-1" : "grid-cols-2"} `}>

        //                 <div className={`col-span-1 ${isTabletOrMobile ? "p-0" : "p-20"}`}>
        //                     <img loading='lazy' className={"rounded-lg"} src={lineV2Logo} ></img>
        //                 </div>

        //                 <div className="col-span-1">
        //                     <div className="h-full grid content-center">
        //                         <p className="text-4xl">Line OA Customer Portal</p>
        //                         <p className="text-2xl text-red-600">(เป็นผลิตภัณฑ์ของบริษัท Icon Framework พัฒนาร่วมกับทีมงาน)</p>
        //                         <br />
        //                         <p className='indent-7'>
        //                             Web Application ที่มีเมนูให้เข้าใช้งานได้ผ่าน Line Application
        //                         </p>
        //                         <p>
        //                             เป็นเครื่องมือรวบรวมเมนูอำนวยความสะดวกให้กับลูกบ้านที่อยู่อาศัยในโครงการ
        //                             อย่างเช่น เมนูค่าใช้จ่ายที่ให้ลูกบ้านโอนค่าใช้จ่ายๆต่างๆแบบออนไลน์ได้อย่างสะดวกสบาย , เมนูแจ้งเตือนพัสดุที่จะแจ้งพัสดุใหม่ที่ส่งถึงลูกบ้าน , การจองส่วนกลางผ่านมือถือด้วยตนเอง, การแจ้งซ่อม และอื่นๆ
        //                         </p>
        //                     </div>

        //                 </div>

        //             </div>
        //             </FadeComponent>
        //             <FadeComponent>

        //             <div className={`grid ${isTabletOrMobile ? "grid-cols-1" : "grid-cols-2"} ${!isTabletOrMobile && "-mt-32"} `}>
        //                 <div className={`col-span-0 ${isTabletOrMobile && "order-2"}`}>
        //                     <div className="h-full grid content-center">
        //                         <p className="text-4xl">Line OA Digital Mortgage</p>
        //                         <p className="text-2xl text-red-600">(เป็นผลิตภัณฑ์ของบริษัท Icon Framework พัฒนาร่วมกับทีมงาน)</p>
        //                         <br />
        //                         <p className='indent-7'>
        //                             Web Application ที่มีเมนูให้เข้าใช้งานได้ผ่าน Line Application เช่นเดียวกัน
        //                         </p>
        //                         <p>
        //                             เป็นเครื่องมือที่จะทำให้การขอสินเชื่อเป็นเรื่องง่าย และสามารถทำได้ด้วยตนเองที่ใดก็ได้
        //                             ผู้ใช้งานสามารถที่จะตรวจสอบเครดิตบูโรของตัวเองได้ และสามารถติดตามความเคลื่อนไหวของสถานะการขอสินเชื่อของตนเองได้อย่างง่ายดาย
        //                         </p>
        //                     </div>

        //                 </div>
        //                 <div className={`col-span-1 ${isTabletOrMobile && "order-1"}`}>
        //                     <img loading='lazy' src={mortgageLogo} className="rounded-lg"></img>
        //                 </div>

        //             </div>
        //             </FadeComponent>
        //             <FadeComponent>
        //             <div className={`grid ${isTabletOrMobile ? "grid-cols-1 mt-28" : "grid-cols-2"} `}>

        //                 <div className="col-span-1">
        //                     <img loading='lazy' src={hisImage} className="rounded-lg w-11/12"></img>
        //                 </div>
        //                 <div className="col-span-0 ">
        //                     <div className="h-full grid content-center">
        //                         <p className="text-4xl">HIS (Panacia)</p>
        //                         <p className="text-2xl text-red-600">(เป็นผลิตภัณฑ์ของบริษัท Icon Framework พัฒนาร่วมกับทีมงาน)</p>
        //                         <br />
        //                         <p className='indent-7'>
        //                             Web Application ที่มีจุดมุ่งหมายเป็น System ที่มีฟังก์ชั่นครอบคลุมในการเป็นเครื่องมือสำหรับบุคลากรทางการแพทย์
        //                         </p>
        //                         <p>
        //                             ผมได้รับมอบหมาย ให้พัฒนา Module สำหรับเจ้าหน้าที่แอดมินบน HIS เพื่อให้เจ้าหน้าที่สามารถตั้งค่าหรือ เพิ่มข้อมูลสำหรับแพทย์และพยาบาล
        //                         </p>
        //                     </div>

        //                 </div>

        //             </div>
        //             </FadeComponent>
        //             <FadeComponent>

        //             <div className={`grid ${isTabletOrMobile ? "grid-cols-1 mt-24" : "grid-cols-2"} ${!isTabletOrMobile && "mt-36"}`}>

        //                 <div className={`col-span-1 ${isTabletOrMobile && "order-2"}`}>
        //                     <div className="h-full grid content-center">
        //                         <p className="text-4xl">SIS Connect</p>
        //                         <p className="text-2xl text-red-600">(เป็นโปรเจ็คจบนักศึกษา)</p>
        //                         <p>
        //                             repository: <a href='https://github.com/kornharem08/Chatbotv1.git' className='text-blue-600 hover:text-purple-600 '>github.com/kornharem08/Chatbotv1.git</a>
        //                         </p>
        //                         <p>
        //                             author : soapsabee

        //                         </p>
        //                         <br />
        //                         <p className='indent-7'>
        //                             หุ่นยนต์โต้ตอบอัติโนมัติระบบสารสนเทศนักศึกษา (Chatbot)
        //                             โปรเจคตัวนี้มีจุดประสงค์เพื่อทำหน้าที่แทนระบบ SIS หรือระบบสารสนเทศเดิมที่มีอยู่ของทางมหาวิทยาลัย
        //                             โดยจะหยิบเอาฟีเจอร์สำคัญมาแสดงผลในรูปแบบ Chatbot อาทิเช่น ฟีเจอร์แสดงตารางสอบ, แสดงผลเกรดการเรียน, แสดงตารางเวลาเข้าเรียน
        //                         </p>

        //                     </div>

        //                 </div>

        //                 <div className={`col-span-1 ${isTabletOrMobile && "order-1"}`}>
        //                     <Zoom>
        //                         <img loading='lazy' src={sisImage} className="rounded-lg w-screen"></img>
        //                     </Zoom>
        //                 </div>


        //             </div>
        //             </FadeComponent>

        //     </div>


        // </div>
    )
}
