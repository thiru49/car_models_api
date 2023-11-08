import { CarCard, CustomFIlter, Hero, SearchBar } from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const allCars = await fetchCars();
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">    
     <Hero/>
     <div className='mt-12 padding-x padding-y max-width' id='discover'>
         <div className='home__text-container'>
           <h2 className='text-4xl text-extrabold'>Car Catalogue</h2>
           <p>Expolre the cars you might like</p>
         </div>
         <div className='home__filters'>
          <SearchBar/>
               {/* <div className='home__filter-container'>
               <CustomFIlter title='fluel'/>
               <CustomFIlter title='year'/>
               </div> */}
         </div>
         {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
                {allCars?.map((car)=>(
                  <CarCard car={car}/>
                ))}
            </div>
          </section>
         ):(
          <div className='home__error-container'>

          </div>
         )}
     </div>

    </main>
  )
}
