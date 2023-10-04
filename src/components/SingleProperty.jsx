import React from 'react'
import CardContent from '@mui/joy/CardContent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Card } from '@mui/material';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ApiIcon from '@mui/icons-material/Api';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import PropertyTabs from './PropertyTabs';
export default function SingleProperty() {
    const { stateProperties } = useSelector(state => state.property)
    const { id } = useParams()
    const propertyDetail = stateProperties?.find((item) => item?.id === id)
    console.log("Details", propertyDetail)
    return (
        <div style={{ backgroundImage: `url(${propertyDetail?.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className=' overflow-y-auto h-screen pt-10 relative'>
            <div className=' backdrop-blur-md fixed w-screen h-screen' style={{ background: 'linear-gradient(0deg, rgba(199,201,204,0.2190126050420168) 0%, rgba(187,184,190,0.26102941176470584) 100%)' }}></div>
            <div className='max-w-[1200px] md:px-5 px-2 animate-[slideup_0.5s] flex gap-3 flex-wrap mx-auto mt-5'>
                <Card
                    className='animate-[slideup_0.5s]' sx={{ width: '100%', px: 1, pt: 1, borderRadius: '10px', position: 'relative', bgcolor: 'transparent', transition: 'all 0.3s', boxShadow: 'none' }}>
                    <div className=' flex lg:flex-row flex-col gap-2'>

                        <div className=' relative'>
                            <button className=' absolute ml-5 mb-5 bottom-0 text-lg py-1.5 px-4 rounded-3xl hover:text-slate-100 hover:bg-indigo-500 transition-all duration-200 bg-slate-50 text-indigo-500 font-semibold'>For Rent</button>
                            <button className=' my-auto absolute bottom-0  mb-5 text-lg py-1.5 px-[9px] right-0 mr-6 rounded-[50%] bg-slate-50  hover:text-red-100 hover:bg-indigo-500 transition-all duration-200 text-indigo-500 font-semibold'><FavoriteBorderIcon /></button>
                            <img className=' w-full lg:w-[600px] md:h-[550px] h-auto object-cover sm:w-full rounded-lg' src={propertyDetail?.image} alt="" />

                        </div>

                        <CardContent className=' h-[550px]' sx={{ px: 2, pt: 2, background: 'linear-gradient(0deg, rgba(56,100,163,0.571953781512605) 0%, rgba(133,121,179,0.5439425770308124) 100%)', borderRadius: '10px', position: 'relative' }}>

                            {/* Loaction and Name Part */}
                            <div className=' flex mt-4 w-full'>
                                <LocationOnRoundedIcon className=' ml-[-1px] mt-1 text-pink-400 scale-125' />
                                <p className=' ml-2 text-lg text-slate-200 '> {propertyDetail?.location}</p>
                            </div>
                            <p className=' ml-1 mt-3 font-bold text-red-100 xl:text-3xl lg:text-2xl text-2xl'>{propertyDetail?.name}</p>
                            <br />
                            {/* Features Part */}
                            <div className='  mt-3 ml-1 flex gap-10'>
                                <div className=' flex flex-col text-base text-green-100  font-semibold'>
                                    <LocationCityIcon className=' ml-[1px] text-slate-100 scale-125' />
                                    {propertyDetail?.room_No} Room
                                </div>
                                <div className=' flex flex-col text-base ml-[-2px] text-lime-100 font-semibold'>
                                    <BedIcon className=' ml-[1px] text-slate-100 scale-125' />
                                    {propertyDetail?.bed_No} Bed
                                </div>
                                <div className=' flex flex-col ml-2 text-base text-amber-200 font-semibold'>
                                    <BathtubIcon className=' ml-[1px] text-slate-100 scale-125' />
                                    {propertyDetail?.bathRoom_No} Bath
                                </div>
                                <div className=' flex flex-col text-base ml-2 text-rose-100 font-semibold'>
                                    <ApiIcon className=' ml-[1px] text-slate-100 scale-125' />
                                    {propertyDetail?.size} sft
                                </div>
                            </div>

                            <br />
                            <div></div>
                            <PropertyTabs stateProperties={propertyDetail} />

                            {/* pricing Part */}

                            <div className=' mt-5 mb-4 flex justify-between'>
                                <div className=' flex gap-1 my-auto'>
                                    <p className=' text-orange-200 text-2xl font-bold'>${propertyDetail?.price}</p><span className=' text-white mt-[8px] text-sm font-bold'> /month</span>
                                </div>

                                <button className=' border my-auto border-indigo-100 rounded-3xl text-lg px-5 font-bold text-indigo-100 hover:border-indigo-600 hover:bg-indigo-700 hover:text-slate-200 duration-200 transition-all py-2'>Rent Now</button>
                            </div>

                        </CardContent>
                    </div>
                </Card>


            </div>
            <br />
        </div>
    )
}
