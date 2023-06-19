import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import HomeIcon from '../../assets/icons/home.svg'
import UserIcon from '../../assets/icons/user.svg'
import PaperIcon from '../../assets/icons/paper.svg'
import BoxIcon from '../../assets/icons/box.svg'
import imgAvatar from '../../assets/images/img_avatar.png'
import BarIcon from '../../assets/icons/bars.svg'
import ChevronIcon from '../../assets/icons/chevron-left.svg'
import { desktopOrLaptop, tabletOrMobile } from '../helper/device'
import { useMediaQuery } from 'react-responsive'
export const Layout = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: desktopOrLaptop
    })
    const isTabletOrMobile = useMediaQuery({ query: tabletOrMobile })
    const [titleMenu, setTitleMenu] = useState("")
    const navigate = useNavigate()
    const handleClickTab = (tab, topStyle) => {
        let line = document.querySelector(".line")
        // line.style.height = e.target.offsetHeight + "px"
        if (line !== null) {
            line.style.top = topStyle
        }
        if (line == null) {
            handleCloseBar()
            handleSetTitleMenu(tab)
        }
        switch (tab) {
            case "home":
                // line.style.top = "220px"
                navigate("/home")
                break;
            case "aboutme":
                // line.style.top = "280px"
                navigate("/aboutme")
                break;
            case "resume":
                // line.style.top = "340px"
                navigate("/file-document")
                break;
            case "portfolio":
                // line.style.top = "400px"
                navigate("/portfolio")
                break;
            default:
        }

    }

    const handleSetTitleMenu = (tab) => {
        switch (tab) {
            case "home":
                // line.style.top = "220px"
                setTitleMenu("หน้าแรก")
                break;
            case "aboutme":
                // line.style.top = "280px"
                setTitleMenu("เกี่ยวกับผม")
                break;
            case "resume":
                // line.style.top = "340px"
                setTitleMenu("Resume PDF")
                break;
            case "portfolio":
                // line.style.top = "400px"
                navigate("Portfolio")
                break;
            default:
        }
    }

    const handleOpenBar = () => {
        document.getElementById("sideNav").style.left = "0";
    }

    const handleCloseBar = () => {
        document.getElementById("sideNav").style.left = "-100%";
    }

    return (
        <>
            <div class="bg-gray-50 w-screen h-screen">
                {
                    isDesktopOrLaptop &&
                    <>
                        <div class='fixed left-0 top-0 w-40 bg-white h-screen filter drop-shadow-lg'>
                            <div>
                                <div class="ml-5 mr-5 mt-5">
                                    <img src={imgAvatar} class="w-full object-contain min-h-0 h-full"></img>
                                </div>
                                <div class="h-full bg-white text-center p-4">
                                    <p class="text-sm text-titleCustom"> ปฏิภาณ วิบูลย์ชาติ </p>
                                </div>
                                <div class="tab_box">
                                    <div class="border-t border-blackCustom border-opacity-5 p-2 h-22">
                                        <div class="text-center cursor-pointer" onClick={(e) => handleClickTab("home", "220px")}>
                                            <HomeIcon class="h-6 w-full text-titleCustom " />
                                            <p class="text-sm ">หน้าแรก</p>
                                        </div>
                                    </div>
                                    <div class="border-t border-blackCustom border-opacity-5 p-2 h-22" >
                                        <div class="text-center cursor-pointer" onClick={(e) => handleClickTab("aboutme", "280px")}>
                                            <UserIcon class="h-6 w-full text-titleCustom " />
                                            <p class="text-sm ">เกี่ยวกับผม</p>
                                        </div>
                                    </div>
                                    <div class="border-t border-blackCustom border-opacity-5 p-2 h-22">
                                        <div class="text-center cursor-pointer" onClick={(e) => handleClickTab("resume", "340px")}>
                                            <PaperIcon class="h-6 w-full text-titleCustom" />
                                            <p class="text-sm ">Resume PDF</p>
                                        </div>
                                    </div>
                                    <div class="border-t border-blackCustom border-opacity-5 border-b p-2 h-22">
                                        <div class="text-center cursor-pointer" onClick={(e) => handleClickTab("portfolio", "400px")}>
                                            <BoxIcon class="h-6 w-full text-titleCustom" />
                                            <p class="text-sm ">Portfolio</p>
                                        </div>
                                    </div>
                                    <div class="line absolute w-14 h-1 bg-bgCustom rotate-90 transition-ally ease-out duration-500" style={{ top: "220px", left: "130px" }}></div>
                                </div>


                            </div>
                        </div>
                        <div class="relative  ml-44">
                            <Outlet />
                        </div>
                    </>
                }

                {
                    isTabletOrMobile &&
                    <>
                        <div class='fixed bg-white w-screen filter drop-shadow-lg p-4 top-0 z-50'>
                            <div class="flex justify-between items-center">
                                <button onClick={() => handleOpenBar()}>
                                    <BarIcon class="w-10" />
                                </button>

                                <p class="text-lg ">{titleMenu}</p>

                                <div id="sideNav" class='ease-linear duration-150 -left-full fixed top-0 bg-white h-screen filter drop-shadow-lg '>

                                    <div class="tab_box ">
                                        <div class="border-t border-blackCustom border-opacity-5 p-2 h-22">
                                            <div class="flex justify-end" onClick={() => handleCloseBar()}>
                                                <div class="absolute bg-white rounded left-24 filter drop-shadow-lg">
                                                    <ChevronIcon class="h-8" />
                                                </div>
                                            </div>

                                            <div class="text-center cursor-pointer mt-14" onClick={(e) => {
                                                handleClickTab("home")
                                            }}>
                                                <HomeIcon class="h-6 w-full text-titleCustom " />
                                                <p class="text-sm ">หน้าแรก</p>
                                            </div>
                                            <div class="border-t border-blackCustom border-opacity-5 p-2 h-22" >
                                                <div class="text-center cursor-pointer" onClick={(e) => {
                                                    handleClickTab("aboutme")

                                                }}>
                                                    <UserIcon class="h-6 w-full text-titleCustom " />
                                                    <p class="text-sm ">เกี่ยวกับผม</p>
                                                </div>
                                            </div>
                                            <div class="border-t border-blackCustom border-opacity-5 p-2 h-22">
                                                <div class="text-center cursor-pointer" onClick={(e) => {
                                                    handleClickTab("resume")
                                                }}>
                                                    <PaperIcon class="h-6 w-full text-titleCustom" />
                                                    <p class="text-sm ">Resume PDF</p>
                                                </div>
                                            </div>
                                            <div class="border-t border-blackCustom border-opacity-5 p-2 h-22">
                                                <div class="text-center cursor-pointer" onClick={(e) => {
                                                    handleClickTab("portfolio")
                                                }}>
                                                    <BoxIcon class="h-6 w-full text-titleCustom" />
                                                    <p class="text-sm ">Portfolio</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div class="line absolute w-14 h-1 bg-bgCustom rotate-90 transition-ally ease-out duration-500" style={{ top: "110px", left: "150px" }}></div> */}
                                    </div>


                                </div>


                                <div class="">
                                    <img src={imgAvatar} class="w-14 rounded-full"></img>
                                </div>
                            </div>
                        </div>
                        <div class="relative z-10" onClick={() => handleCloseBar()}>
                            <Outlet />
                        </div>
                    </>


                }


            </div>

        </>
    )
}
