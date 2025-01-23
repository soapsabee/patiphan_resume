import React, { useEffect, useState, useRef } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import HomeIcon from '../../assets/icons/home.svg'
import UserIcon from '../../assets/icons/user.svg'
import PaperIcon from '../../assets/icons/paper.svg'
import BoxIcon from '../../assets/icons/box.svg'
import imgAvatar from '../../assets/images/img_profile.jpg'
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
    const location = useLocation()
    const refHome = useRef()
    const refAboutme = useRef()
    const refResume = useRef()
    const refPortfolio = useRef()
    const handleClickTab = (tab) => {

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
        let line = document.querySelector(".line")
        // line.style.height = e.target.offsetHeight + "px"
        if (line && isDesktopOrLaptop && refHome) line.style.top = refHome.current.getBoundingClientRect().top + 29 + "px"

        if (line == null && isTabletOrMobile) {
            handleCloseBar()
        }

        switch (tab) {
            case "/home":
                if (line && isDesktopOrLaptop && refHome) line.style.top = refHome.current.getBoundingClientRect().top + 29 + "px"
                setTitleMenu("หน้าแรก")
                break;
            case "/aboutme":
                if (line && isDesktopOrLaptop && refAboutme) line.style.top = refAboutme.current.getBoundingClientRect().top + 29 + "px"
                setTitleMenu("เกี่ยวกับผม")
                break;
            case "/file-document":
                if (line && isDesktopOrLaptop && refResume) line.style.top = refResume.current.getBoundingClientRect().top + 29 + "px"
                setTitleMenu("Resume PDF")
                break;
            case "/portfolio":
                if (line && isDesktopOrLaptop && refPortfolio) line.style.top = refPortfolio.current.getBoundingClientRect().top + 29 + "px"
                setTitleMenu("Portfolio")
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

    useEffect(() => {
        if (location.pathname) {
            handleSetTitleMenu(location.pathname)
        }
    }, [location.pathname, isDesktopOrLaptop])



    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                {
                    isDesktopOrLaptop &&
                    <>
                        <div className='fixed left-0 top-0 w-40 bg-white min-h-screen filter drop-shadow-lg '>
                            <div className='flex flex-col h-full'>
                                <div className="flex justify-center">
                                    <img src={imgAvatar} className={"h-64"}></img>
                                </div>
                                <div className="h-full bg-white text-center p-4">
                                    <p className="text-sm text-titleCustom"> ปฏิภาณ วิบูลย์ชาติ </p>
                                </div>
                                <div className="tab_box">
                                    <div ref={refHome} className="border-t border-blackCustom border-opacity-5 p-2 h-22">
                                        <div className="text-center cursor-pointer" onClick={(e) => handleClickTab("home")}>
                                            <HomeIcon className="h-6 w-full text-titleCustom " />
                                            <p className="text-sm ">หน้าแรก</p>
                                        </div>
                                    </div>
                                    <div ref={refAboutme} className="border-t border-blackCustom border-opacity-5 p-2 h-22" >
                                        <div className="text-center cursor-pointer" onClick={(e) => handleClickTab("aboutme")}>
                                            <UserIcon className="h-6 w-full text-titleCustom " />
                                            <p className="text-sm ">เกี่ยวกับผม</p>
                                        </div>
                                    </div>
                                    <div ref={refResume} className="border-t border-blackCustom border-opacity-5 p-2 h-22">
                                        <div className="text-center cursor-pointer" onClick={(e) => handleClickTab("resume")}>
                                            <PaperIcon className="h-6 w-full text-titleCustom" />
                                            <p className="text-sm ">Resume PDF</p>
                                        </div>
                                    </div>
                                    <div ref={refPortfolio} className="border-t border-blackCustom border-opacity-5 border-b p-2 h-22 ">
                                        <div className="text-center cursor-pointer" onClick={(e) => handleClickTab("portfolio")}>
                                            <BoxIcon className="h-6 w-full text-titleCustom" />
                                            <p className="text-sm ">Portfolio</p>
                                        </div>
                                    </div>
                                    <div className="">

                                    </div>
                                    <div className="line absolute w-14 h-1 bg-bgCustom rotate-90 transition-ally ease-out duration-500" style={{ left: "130px" }}></div>
                                    <div className="text-gray-400 text-xs absolute bottom-0 w-full text-center">
                                        v.0.02
                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className="ml-44">
                            <Outlet />
                        </div>
                    </>
                }
                {
                    isTabletOrMobile &&
                    <>
                        <div className='fixed bg-white w-screen filter drop-shadow-lg p-4 top-0 z-50'>
                            <div className="flex justify-between items-center">
                                <button onClick={() => handleOpenBar()}>
                                    <BarIcon className="w-10" />
                                </button>

                                <p className="text-lg ">{titleMenu}</p>

                                <div id="sideNav" className='ease-linear duration-150 -left-full fixed top-0 bg-white h-screen filter drop-shadow-lg '>

                                    <div className="tab_box ">
                                        <div className="border-t border-blackCustom border-opacity-5 p-2 h-22">
                                            <div className="flex justify-end" onClick={() => handleCloseBar()}>
                                                <div className="absolute bg-white rounded left-24 filter drop-shadow-lg">
                                                    <ChevronIcon className="h-8" />
                                                </div>
                                            </div>

                                            <div className="text-center cursor-pointer mt-14" onClick={(e) => {
                                                handleClickTab("home")
                                            }}>
                                                <HomeIcon className="h-6 w-full text-titleCustom " />
                                                <p className="text-sm ">หน้าแรก</p>
                                            </div>
                                            <div className="border-t border-blackCustom border-opacity-5 p-2 h-22" >
                                                <div className="text-center cursor-pointer" onClick={(e) => {
                                                    handleClickTab("aboutme")

                                                }}>
                                                    <UserIcon className="h-6 w-full text-titleCustom " />
                                                    <p className="text-sm ">เกี่ยวกับผม</p>
                                                </div>
                                            </div>
                                            <div className="border-t border-blackCustom border-opacity-5 p-2 h-22">
                                                <div className="text-center cursor-pointer" onClick={(e) => {
                                                    handleClickTab("resume")
                                                }}>
                                                    <PaperIcon className="h-6 w-full text-titleCustom" />
                                                    <p className="text-sm ">Resume PDF</p>
                                                </div>
                                            </div>
                                            <div className="border-t border-blackCustom border-opacity-5 p-2 h-22">
                                                <div className="text-center cursor-pointer" onClick={(e) => {
                                                    handleClickTab("portfolio")
                                                }}>
                                                    <BoxIcon className="h-6 w-full text-titleCustom" />
                                                    <p className="text-sm ">Portfolio</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="line absolute w-14 h-1 bg-bgCustom rotate-90 transition-ally ease-out duration-500" style={{ top: "110px", left: "150px" }}></div> */}
                                    </div>
                                    <div className="text-gray-400 text-xs absolute bottom-0 w-full text-center">
                                        v.0.02
                                    </div>

                                </div>


                                <div className="">
                                    <img src={imgAvatar} className="w-14 rounded-full"></img>
                                </div>
                            </div>
                        </div>
                        <div className="z-10" onClick={() => handleCloseBar()}>
                            <Outlet />
                        </div>
                    </>
                }
            </div>

        </>
    )
}
