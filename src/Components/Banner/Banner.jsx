import React from 'react';
import bannerImg from '../../assets/vector1.png';

const Banner = ({ inProgressValue, bannerDisplayValues, ResolvedValue }) => {
    bannerDisplayValues()
    return (

        <div className='sm:flex sm:flex-row flex-col justify-center gap-10 my-10 sm:mx-0 mx-10'>
            <div className='bg-gradient-to-r from-[#632EEE] to-[#9F62F2] flex justify-between rounded-xl sm:mb-0 mb-5'>
                <img className='w-1/3' src={bannerImg} alt="" />

                <div className=' flex flex-col sm:gap-y-5 justify-center items-center '>
                    <h1 className='text-white sm:text-2xl text-base '>In-Progress</h1>
                    <p className='text-white font-bold sm:text-6xl text-3xl'>{inProgressValue}</p>
                </div>
                <img className='rotate-180 scale-y-[-1] sm:w-auto w-1/3' src={bannerImg} alt="" />
            </div>
            <div className='bg-gradient-to-r from-[#54CF68] to-[#00827A] flex justify-between rounded-xl'>
                <img className='w-1/3' src={bannerImg} alt="" />

                <div className='flex flex-col sm:gap-y-5 justify-center items-center '>
                    <h1 className='text-white  sm:text-2xl text-base'>Resolved</h1>
                    <p className='text-white font-bold sm:text-6xl text-3xl'>{ResolvedValue}</p>
                </div>
                <img className='rotate-180 scale-y-[-1] sm:w-auto w-1/3' src={bannerImg} alt="" />
            </div>
        </div>

    );
};

export default Banner;