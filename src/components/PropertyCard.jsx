import * as React from 'react';
import CardContent from '@mui/joy/CardContent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Card, CardMedia } from '@mui/material';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ApiIcon from '@mui/icons-material/Api';
import { useNavigate } from 'react-router-dom';
export default function PropertyCard({ property }) {
  const navigate = useNavigate()
  return (
    <Card
      onClick={() => navigate(`/property/${property?.id}`)}
      className='lg:hover:scale-105 hover:scale-100 cursor-pointer animate-[slideup_0.5s]' sx={{ width: { md: 290, xs: '100%' }, p: 1, borderRadius: '10px', position: 'relative', bgcolor: '#f7f5fa', transition: 'all 0.3s' }}>
      <button className=' absolute ml-2 mt-2.5 text-xs py-1.5 px-2 rounded-2xl hover:text-slate-100 hover:bg-indigo-500 transition-all duration-200 bg-slate-50 text-indigo-500 font-semibold'>For Rent</button>
      <button className=' absolute ml-2 mt-2 text-xs p-1 right-0 mr-4 rounded-2xl bg-slate-50  hover:text-red-100 hover:bg-indigo-500 transition-all duration-200 text-indigo-500 font-semibold'><FavoriteBorderIcon className='p-1' /></button>

      <CardMedia sx={{ height: { md: '200px', xs: '400px' }, borderRadius: '10px' }} title={property?.name} image={property?.image} />


      <CardContent sx={{ px: 0.5 }}>

        {/* Loaction and Name Part */}
        <div className=' flex mt-3'>
          <LocationOnRoundedIcon className=' mt-[-1.8px] ml-[-1px] text-pink-500 scale-75' />
          <p className=' mt-[2.5px] text-xs font-semibold'> {property?.location?.length > 36 ? property?.location?.slice(0, 36) + '...' : property?.location}</p>
        </div>
        <p className=' ml-1 font-semibold text-lg'>{property?.name}</p>

        {/* Features Part */}
        <div className='  mt-3 flex gap-6 mx-auto'>
          <div className=' flex flex-col text-xs font-semibold'>
            <LocationCityIcon className=' ml-[-3px] text-slate-600 scale-75' />
            {property?.room_No} Room
          </div>
          <div className=' flex flex-col text-xs ml-[-2px] font-semibold'>
            <BedIcon className=' ml-[-3px] text-slate-600 scale-75' />
            {property?.bed_No} Bed
          </div>
          <div className=' flex flex-col ml-2 text-xs font-semibold'>
            <BathtubIcon className=' ml-[-3px] text-slate-600 scale-75' />
            {property?.bathRoom_No} Bath
          </div>
          <div className=' flex flex-col text-xs ml-2 font-semibold'>
            <ApiIcon className=' ml-[-3px] text-slate-600 scale-75' />
            {property?.size} sft
          </div>
        </div>

        {/* pricing Part */}

        <div className=' mt-5 mb-4 flex justify-between'>
          <div className=' flex gap-1 my-auto'>
            <p className=' text-indigo-600 font-bold'>${property?.price}</p><span className=' mt-[5px] text-xs font-bold'> /month</span>
          </div>

          <button className=' border my-auto border-indigo-500 rounded-2xl text-xs px-3 font-bold text-indigo-700 hover:border-indigo-200 hover:bg-indigo-500 hover:text-slate-200 duration-200 transition-all py-2'>Read More</button>
        </div>

      </CardContent>
    </Card>
  );
}
