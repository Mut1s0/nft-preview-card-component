import NFT from "./images/image-equilibrium.jpg";
import ETH from "./images/icon-ethereum.svg";
import Clock from "./images/icon-clock.svg";
import Avatar from "./images/image-avatar.png";
import View from "./images/icon-view.svg";
import React from 'react'

function NFTCard() {

    return(

        <main className="h-screen md:h-[78.5rem] flex justify-center items-center lg:py-[50px]">

            <div className="container w-[470px] max-w-[90%] lg:h-[full] flex flex-col p-9 rounded-[20px]">

                <div className="w-full containerOverlay">

                    <img src={NFT} alt="NFT" className="w-[100%] rounded-[15px] relative z-20" />

                    <div className="overlay flex justify-center items-center">

                        <img src={View} alt="" />

                    </div>

                </div>

                <div>

                    <h1 className="text-[21px] sm:text-[35px] py-4 hover:cursor-pointer">Equilibrium #3429</h1>

                    <p className="text-[16px] sm:text-[26px]">Our Equilibrium collection promotes balance and calm.</p>

                    <div className="content flex justify-between items-center py-6">

                        <div className="flex items-center justify-start gap-2 sm:gap-3">

                            <img src={ETH} alt="ETH" className="w-[15px] sm:w-[20px]" />

                            <p className="text-[12px] sm:text-[15px] md:text-[20px]">0.041 ETH</p>

                        </div>

                        <div className="flex items-center justify-end gap-2 sm:gap-3">

                            <img src={Clock} alt="CLOCK" className="w-[23px] sm:w-[30px]" />

                            <p className="text-[12px] sm:text-[15px] md:text-[23px]">3 days left</p>

                        </div>

                    </div>

                    <div className="footer flex justify-start items-center gap-7 pt-7">

                        <img src={Avatar} alt="" className="border-2 rounded-full w-[40px] md:w-[50px]" />

                        <p className="text-[16px] sm:text-[20px] md:text-[23px] hover:cursor-pointer">Creation of <span>Jules Wyvern</span></p>

                    </div>

                </div>

            </div>

        </main>
    )
}

export default NFTCard
