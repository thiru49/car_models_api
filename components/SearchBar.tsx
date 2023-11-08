'use client'
import { useState } from 'react'
import { SearchManufacture } from '.'

const SearchBar = () => {
     const [manfacturer, setManfacturer] = useState('')
     const handleSearch = ()=>{

     }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
       <div className='searchbar__item'>
          <SearchManufacture
          manfacturer={manfacturer}
          setManfacturer={setManfacturer}/>
       </div>
    </form>
  )
}

export default SearchBar