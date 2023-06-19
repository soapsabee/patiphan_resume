import React from 'react'
import gatewayLogo from '../../assets/images/gateway-bg.jpg'
import { tabletOrMobile } from '../helper/device'
import { useMediaQuery } from 'react-responsive'
export const Portfolio = () => {
    const isTabletOrMobile = useMediaQuery({ query: tabletOrMobile })

    return (
        <div class={`mx-auto h-full p-10 ${isTabletOrMobile && "mt-20"}`}>

            <div class="container w-500 h-full filter drop-shadow-lg bg-white p-10">
                <img src={gatewayLogo} class="w-80 rounded-lg"></img>
            </div>
        </div>
    )
}
