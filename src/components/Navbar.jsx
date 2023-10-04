import React from 'react'
import propertyData from '../property.json'
import { useDispatch, useSelector } from 'react-redux'
import { setShowLess, setStateName, setStateProperties } from '../Redux/propertySlice'
import { useNavigate } from 'react-router-dom'
import EastIcon from '@mui/icons-material/East';
export default function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { stateName } = useSelector((state) => state.property)

  return (
    <div style={{ zIndex: 99 }} className='w-full px-4 py-2 bg-transparent backdrop-blur-md fixed '>
      <div className='max-w-[900px] mx-auto'>
        <div className='flex gap-1 justify-between '>
          <div className='flex gap-2'>
            {propertyData?.map((item, id) => (
              <button key={id}
                onClick={() => {
                  dispatch(setStateName(item?.state_Name))
                  dispatch(setStateProperties(item?.properties))
                  dispatch(setShowLess())
                  navigate('/')
                }}
                className={stateName !== item?.state_Name ? ' bg-indigo-100 w-[80px] hover:bg-indigo-500 hover:text-slate-100 rounded-2xl p-2 transition-all duration-200 text-xs font-semibold' : ' w-[80px] bg-indigo-600 hover:bg-indigo-600 text-slate-200 rounded-xl p-2 transition-all duration-200 text-xs font-semibold'}>{item?.state_Name}</button>
            ))}
          </div>
          <button className=' bg-indigo-100 w-[80px] hover:bg-indigo-500 border border-indigo-500 hover:text-slate-100 rounded-2xl p-2 transition-all duration-200 text-xs font-semibold flex gap-1 min-w-[110px] justify-center h-[33px] mr-2'>View All<EastIcon className=' scale-75 mt-[-3.5px]' /></button>
        </div>

      </div>
    </div>
  )
}
