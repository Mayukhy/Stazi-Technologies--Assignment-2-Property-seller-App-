import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropertyCard from './PropertyCard'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { setShowLess, setShowMore } from '../Redux/propertySlice';
export default function Home() {
  const showMoreRef = useRef()
  const showLessRef = useRef()
  const dispatch = useDispatch()
  const { stateProperties, showmore } = useSelector((state) => state.property)

  return (
    <div className=' bg-purple-50 overflow-y-auto h-screen pt-12'>
      <div ref={showLessRef} className='max-w-[900px] animate-[slideup_0.5s] flex gap-3 flex-wrap mx-auto mt-3 md:px-0 px-6'>
        {stateProperties?.slice(0, stateProperties?.length - 3)?.map((item) => (
          <PropertyCard property={item} />
        ))}
      </div>
      {showmore &&
        <div className='max-w-[900px] flex gap-3 flex-wrap mx-auto mt-3 md:px-0 px-6'>
          {stateProperties?.slice(stateProperties?.length - 3, stateProperties?.length)?.map((item) => (
            <PropertyCard property={item} />
          ))}
        </div>}

      <br />
      {!showmore ? <button onClick={() => {
        //for showing extra 3 properties
        dispatch(setShowMore(true))
        setTimeout(() => {
          showMoreRef.current.scrollIntoView({ behavior: "smooth" })
        }, 100);

      }} className=' flex justify-center mx-auto rounded-3xl hover:border border-indigo-500 hover:text-slate-800 py-3 px-5 hover:bg-slate-50 transition-all duration-200 bg-indigo-600 text-slate-50 font-semibold'> <HourglassBottomIcon className=' mt-[0.5px] scale-75' />Show More
      </button> :
        <button ref={showMoreRef} onClick={() => {
          //for hiding extra 3 properties
          dispatch(setShowLess(false))
          showLessRef.current.scrollIntoView({ behavior: "smooth" })
        }} className=' flex justify-center mx-auto rounded-3xl hover:border border-indigo-500 hover:text-slate-800 py-3 px-5 hover:bg-slate-50 transition-all duration-200 bg-indigo-600 text-slate-50 font-semibold'> <HourglassBottomIcon className=' mt-[0.5px] scale-75' />Show Less
        </button>}
      <br />
      <br />
    </div>
  )
}
