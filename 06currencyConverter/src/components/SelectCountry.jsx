import React from 'react'
import { Autocomplete, Grid, TextField, Skeleton } from '@mui/material'
import useAxios from '../hooks/useAxios'

const SelectCountry = (props) => {
    const [data, loaded, error  ] = useAxios("https://restcountries.com/v3.1/all")
    const {value, setValue, label} = props; // destructuring props


    if (loaded){
        return (<Grid item xs={12} md={3}>
            <Skeleton variant='rounded' height={60}/>
        </Grid>)
    }
    if (error){
        return "something went wrong!"
    }
    console.log(data)
    const dataFilter = data.filter((item)=> item.currencies)
    console.log(dataFilter) 
    const dataCountries = dataFilter.map((item)=> {
        return `${item.flag} ${Object.keys(item.currencies)[0]} - ${item.name.common}`
    }) 
    console.log(dataCountries)  
  return (
      <Grid item xs={12} md={3}>
        <Autocomplete 
        value={value}
        disableClearable
        onChange={(event, newValue)=> setValue(newValue)}
        options={dataCountries} 
        renderInput={(params) => <TextField {...params} label={label}/>}/>
      </Grid>
  )
}

export default SelectCountry
