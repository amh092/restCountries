import React,{useState,useEffect,useRef, HTMLInputTypeAttribute} from 'react'
import Country from './Country'
import { v4 as uuidv4 } from 'uuid';
const Countries :React.FC <{searchInputBackgroundColor:string ; dropDownBackgroundColor:string; textColorForCountry:string; countryBackgroundColor:string}> =(props) => {
    
  
  const [region, setRegion] = useState('')
  const [country, setCountry] = useState('')
  const [searchMode, setSearchMode] = useState('all countries')
  const [countries, setCountries] = useState<{flags:any; name:any ;population:number;region:string; capital:string}[]>([]);

  const formValue = (event: React.ChangeEvent<HTMLSelectElement>) => {

    setRegion(event.target.value)
    setSearchMode('by region')
}
  const formCountry = (event: React.ChangeEvent<HTMLInputElement>) => {

    setCountry(event.target.value)
    setSearchMode('by country')
}
  
    const regionRef = React.useRef<HTMLSelectElement>(null);
    const countryRef= React.useRef<HTMLInputElement>(null)
     

    const  getAllCountries  =  async ()   => {
        const response = await fetch(`https://restcountries.com/v3.1/all`)
        const data = await response.json() 
        setCountries(data)
     }

     const getCountriesByRegion = async() => {
         const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
         const data = await res.json();
         setCountries(data)
         
     }
     const getCountryByName = async(country:string) => {
         const res = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)


         const data = await res.json();
         setCountries(data)
         
     }
    
     useEffect(() => {
         if(searchMode == 'all countries'){
        getAllCountries();}
        else if(searchMode == "by region") {
        getCountriesByRegion()}
     
        else if(searchMode == "by country") {
        getCountryByName(country.trim())}
     }
     , [region,country]);
     
   return (

   
    <div className={'mx-auto mt-4 h-full md:w-[1440px] w-[375px]'}>
         <div className={'flex md:flex-row flex-col justify-center md:justify-between '}>

         <input className={`drop-shadow-md md:w-[480px] w-[343px]  rounded-md h-[56px] p-8 md:mt-0 ${props.searchInputBackgroundColor} `} placeholder={'search for a country....'} type="text" onBlur={formCountry} ref={countryRef}/>

         <form className={'drop-shadow-md mt-8'}>
             
                <select ref={regionRef} className={`md:w-[200px] md:h-[56px] p-4 ${props.dropDownBackgroundColor}`}  name="region"  onChange={formValue} defaultValue={'Filter By Region'}  >
                    <option  value="Filter By Region" disabled>Filter By Region</option>
                    <option  value='asia'>Asia </option>
                    <option value="europe">Europe</option>
                    <option value='africa'>Africa</option>
                    <option value='Americas'>Americas</option>
                    <option value='Oceania'>Oceania</option>
                
                </select>
        </form>
         </div>
        <div className={'flex flex-row flex-wrap md:w-[1440px] mx-auto justify-around items-center w-[375px] grow-2'}>

 { countries.length > 0 && countries.map((country) => <Country countryBackgroundColor={props.countryBackgroundColor} textColorForCountry={props.textColorForCountry}  key={uuidv4()} capital={country.capital} countryRegion={country.region}  countryFlag={country.flags.png} population={country.population} countryName={country.name.common}/>)}
        </div>
    </div>
   )
   
}

export default Countries
