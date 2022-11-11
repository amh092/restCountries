import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

import FullCountry from '../countries/FullCountry'
import { NavLink } from 'react-router-dom'

import { v4 as uuidv4 } from 'uuid';


const CountryPage : React.FC <{textColor: string, backgroundColor:string }> = (props) => {
    const params = useParams()
    const countryParam = params.countryName
    

     const [country, setCountry] = 
     useState<{flags?:any;  languages:any ; currencies?:any; borders:any[]; tld?:string; name?:any ;population?:number;region?:string; capital?:string ,subregion?:string; }>();

    const getCountryByName = async() => {
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryParam}?fullText=true`)

        const data = await res.json();
      setCountry(data[0])
      
       

        
    }

    useEffect(() => {
       getCountryByName()
    }, []);

    return (
        <div className={'mx-auto mt-4 h-full xl:w-[1440px] w-[375px]'}>
                 
        <NavLink to='/' className={`${props.textColor} p-2 rounded-md`}>Back</NavLink>
       
        <FullCountry  

        
        topLevelDomain={country?.tld} 
        countryBackgroundColor={props.backgroundColor} 
        textColorForCountry={props.textColor} 
        countryName={country?.name.common} 
        countryFlag={country?.flags.png} 
        countryRegion={country?.region} 
        capital={country?.capital} 
        subRegion={country?.subregion} 
        population={country?.population} 
       
        borders= {country?.borders  ===  undefined ? 
         (<h1 className={`${props.textColor}`}>no borders</h1>):(country?.borders.map((country)=>
            <li className={`${props.textColor} ${props.backgroundColor} shadow-md w-[50px] h-[28px] m-4` }
             key={uuidv4()}>{country}</li>))}

      />
  
        </div>
       
    )
}

export default CountryPage
