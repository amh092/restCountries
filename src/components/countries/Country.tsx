import React from 'react'
import { NavLink,useNavigate} from 'react-router-dom'



const Country : React.FC <{ countryName: string, countryFlag:string, countryRegion:string, population:number; capital:string; textColorForCountry:string ; countryBackgroundColor?:string ;subRegion?:string}> = (props) => {
 
  
    return (
       
        <NavLink to={`/country/${props.countryName}`}>

            <div className={`w-[264px] h-[336px] mx-auto my-8 text-left rounded-b-md drop-shadow-md`}>
                <img className={'rounded-t-md h-[160px] w-[264px]'}  src={props.countryFlag} alt=""/>
               <div className={`px-4 ${props.countryBackgroundColor} rounded-b-md p-2`}>
                <h1 className={`font-bold text-left ${props.textColorForCountry}`}>{props.countryName}</h1>
                <h1 className={`text-left  ${props.textColorForCountry}`}>Population: {props.population} </h1>
                <h1 className={`my-8  text-left  ${props.textColorForCountry}`}>Region: {props.countryRegion}</h1>
                <h1 className={`my-8  text-left  ${props.textColorForCountry}`}>Capital: {props.capital}</h1>
                 </div>
            
            </div>
           
        </NavLink> 
    )
}

export default Country
