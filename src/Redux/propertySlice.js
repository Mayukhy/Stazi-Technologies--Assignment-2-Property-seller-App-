import { createSlice } from '@reduxjs/toolkit'
import propertyData from '../property.json'
const initialState = {
  stateProperties:propertyData[0]?.properties,
  //By the selected stateName user can see diff stateProperties
  stateName:'New York',
  showmore:false,
  mobilemenu:false
}

export const propertySlice = createSlice({
    //from react component by this name the states are called
  name: 'property',
  initialState,
  reducers: {
    setStateName: (state,action) => {
        state.stateName=action.payload
        },
    setStateProperties: (state,action) => {
        state.stateProperties=action.payload
        },
        setShowMore: (state) => {
          state.showmore=true
          },
          setShowLess: (state) => {
            state.showmore=false
            },
            setShowMobilemenu: (state) => {
              state.mobilemenu=true
              },
              setHideMobilemenue: (state) => {
                state.mobilemenu=false
                },

  },
})

// Action creators are generated for each case reducer function
export const {setStateName,setStateProperties,setShowLess,setShowMore,setHideMobilemenue,setShowMobilemenu} = propertySlice.actions

export default propertySlice.reducer