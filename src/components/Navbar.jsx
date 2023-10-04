import React from 'react'
import propertyData from '../property.json'
import { useDispatch, useSelector } from 'react-redux'
import { setHideMobilemenue, setShowLess, setShowMobilemenu, setStateName, setStateProperties } from '../Redux/propertySlice'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import EastIcon from '@mui/icons-material/East';
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { stateName, mobilemenu } = useSelector((state) => state.property)

  //Fucntion for changing the State name to show diff properties
  const handelState = (item) => {
    dispatch(setStateName(item?.state_Name))
    dispatch(setStateProperties(item?.properties))
    dispatch(setShowLess())
    setTimeout(() => {
      dispatch(setHideMobilemenue())
    }, 350);
    navigate('/')
  }

  return (
    <>
      {/* mobile menu */}
      {mobilemenu && <div style={{ zIndex: 999, background: 'linear-gradient(0deg, rgba(180,189,201,0.6279761904761905) 0%, rgba(112,108,126,0.48792016806722693) 100%)' }} className='fixed backdrop-blur-md animate-[slideleft_0.6s] h-screen w-2/3'>

        {/* mobile menu close icon */}
        <div onClick={() => dispatch(setHideMobilemenue())} className=' my-auto bg-indigo-100 h-[33px] absolute mr-2 mt-2 right-0 w-[33px] rounded-full border border-indigo-500'>
          <CloseIcon className=' mt-[3px] ml-1 animate-[spin_0.7s]' />
        </div>
        <div className='md:hidden flex flex-col my-auto left-0 p-3 mt-7 gap-4'>
          {propertyData?.map((item, id) => (
            <button key={id}
              onClick={() => handelState(item)}
              className={stateName !== item?.state_Name ? ' bg-indigo-100 w-[120px] hover:bg-indigo-500 hover:text-slate-100 rounded-3xl p-3 transition-all duration-200 text-base font-semibold' : ' w-[150px] bg-indigo-600 hover:bg-indigo-600 text-slate-200 rounded-3xl p-3 transition-all duration-200 text-lg font-semibold'}>{item?.state_Name}</button>
          ))}
        </div>
      </div>
      }
      <div style={{ zIndex: 99 }} className='w-full bg-transparent backdrop-blur-md fixed '>
        <div className='max-w-[900px] px-4 py-2 mx-auto'>
          <div className='flex gap-1 justify-between '>

            {/* desktop menu */}
            <div className='md:flex hidden gap-2'>
              {propertyData?.map((item, id) => (
                <button key={id}
                  onClick={() => handelState(item)}
                  className={stateName !== item?.state_Name ? ' bg-indigo-100 w-[80px] hover:bg-indigo-500 hover:text-slate-100 rounded-2xl p-2 transition-all duration-200 text-xs font-semibold' : ' w-[80px] bg-indigo-600 hover:bg-indigo-600 text-slate-200 rounded-xl p-2 transition-all duration-200 text-xs font-semibold'}>{item?.state_Name}</button>
              ))}
            </div>

            {/* mobile hamburger menu */}
            <div className=' my-auto md:hidden flex bg-indigo-100 h-[33px] rounded-full border border-indigo-500'>
              <IconButton aria-label="" onClick={() => dispatch(setShowMobilemenu())}>
                <MenuIcon className='animate-[spin_0.6s]' />
              </IconButton>

            </div>

            <button className=' bg-indigo-100 w-[80px] hover:bg-indigo-500 border border-indigo-500 hover:text-slate-100 rounded-2xl p-2 transition-all duration-200 text-xs font-semibold flex gap-1 min-w-[110px] justify-center h-[33px] mr-2'>View All<EastIcon className=' scale-75 mt-[-3.5px]' /></button>
          </div>

        </div>
      </div>
    </>
  )
}
