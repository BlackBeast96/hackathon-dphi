import React, { useState } from 'react'
import Filter from './filter'
import { Autocomplete, TextField } from "@mui/material"
import Filter_Chip from './filter_chip'
import { useSelector, useDispatch } from 'react-redux'
import { Filters } from "../Redux/Admin_Panel"
import Sort from './sort'
function Search() {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.Admin.hackathon_data;
  })
  const SearchingData = []
  data.map(elem => SearchingData.push(elem.title))

  function handleChange(e) {
    const filter_val = e.target.innerHTML
    dispatch(Filters(filter_val))
    if (data.length < 5) {
      dispatch(Filters("All"))
    }

  }

  const [cheapval, setcheapval] = useState([])
  function handleclick(e) {
    var newcheapval = cheapval.filter((elem) => {
      return elem != e.target.innerHTML
    })
    setcheapval(newcheapval)
  }

  function handlefilterchange(e) {
    var filter = e.target.value;
    switch (filter) {
      case "All":
        dispatch(Filters("All"))
        setcheapval(["Upcoming", "Active", "Past"])
        break;
      case "Upcoming":
        dispatch(Filters("All"))
        dispatch(Filters("Upcoming"))
        setcheapval(["Upcoming"])
        break;
      case "Active":
        dispatch(Filters("All"))
        dispatch(Filters("Active"))
        setcheapval(["Active"])

        break;
      case "Past":
        dispatch(Filters("All"))
        dispatch(Filters("Past"))
        setcheapval(["Past"])
        break;
      case "Easy":
        dispatch(Filters("All"))
        dispatch(Filters("Easy"))
        setcheapval(["Easy"])
        break;
      case "Medium":
        dispatch(Filters("All"))
        dispatch(Filters("Medium"))
        setcheapval(["Medium"])
        break;
      case "Hard":
        dispatch(Filters("All"))
        dispatch(Filters("Hard"))
        setcheapval(["Hard"])
        break;
      default:
        dispatch(Filters("All"))
    }

  }


  return (
    <div className='grid justify-center bg-[#03384d]  pt-20 pb-20 text-white'>
      <h1 className='text-3xl font-bold text-center'>Explore Challenges</h1>
      <div className='flex mt-10 '>
        <Autocomplete
          size='small'
          disablePortal
          onChange={handleChange}
          id="combo-box-demo"
          options={SearchingData}
          sx={{ width: "60vw", borderRadius: 3, }}
          renderInput={(params) => <TextField {...params}
            color="success"
            variant='filled'
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            label="Search" />}
        />
        <Filter change={handlefilterchange} />
      </div>
      <div className='grid grid-cols-3 md:ml-10'>
        {
          cheapval.map((elem, index) => {
            return <Filter_Chip situation={elem} key={index} click={handleclick} />
          })
        }
      </div>

      <Sort />

    </div>
  )
}

export default Search