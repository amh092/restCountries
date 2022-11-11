import React from 'react'



const FullCountry : React.FC <{ languages?:any; borders?:any; children?:any; nativeName?:string; countryName?: string, countryFlag?:string,topLevelDomain?:string; currencies?:string[]; countryRegion?:string, population?:number; capital?:string; textColorForCountry?:string ; countryBackgroundColor?:string ;subRegion?:string ;}> = (props) => {
 
  
    return (
       
       

            <div className={` flex xl:flex-row xl:w-[1440px] flex-col justify-around   w-[308px] h-[336px] mx-auto my-8 text-left rounded-b-md drop-shadow-md`}>
                <img className={'rounded-t-md h-[229px] w-[308px]'}  src={props.countryFlag} alt=""/>
               <div className={`px-4 ${props.countryBackgroundColor} xl:bg-transparent	 rounded-b-md p-2`}>
                <h1 className={`font-bold text-left ${props.textColorForCountry}`}>{props.countryName}</h1>
                <h1 className={`mt-8  text-left  ${props.textColorForCountry}`}>Native Name: {props.nativeName}</h1>
                <h1 className={`mt-4  text-left  ${props.textColorForCountry}`}>Population: {props.population} </h1>
                <h1 className={`mt-4  text-left  ${props.textColorForCountry}`}>Region: {props.countryRegion}</h1>
                <h1 className={`mt-4  text-left  ${props.textColorForCountry}`}>sub Region: {props.subRegion}</h1>
                <h1 className={`my-4  text-left  ${props.textColorForCountry}`}>Capital: {props.capital}</h1>
                <h1 className={`mt-14  text-left  ${props.textColorForCountry}`}>Top Level Domain: {props.topLevelDomain}</h1>

                    
                 <div>
                    <h1 className={props.textColorForCountry}>currencies</h1>
                          <ul className={`flex flex-row justify-start flex-start flex-wrap align-center w-[309px] text-center`}> {props.currencies}
                        </ul></div>
                    <div></div>
                    <div>
                    <h1 className={props.textColorForCountry}>languages</h1>
                          <ul className={`flex flex-row justify-start flex-start flex-wrap align-center w-[309px] text-center`}> {props.languages}
                        </ul></div>
                    <div>
                    <h1 className={props.textColorForCountry}>borders</h1>
                          <ul className={`flex flex-row justify-start flex-start flex-wrap align-center w-[309px] text-center`}> {props.borders}
                        </ul></div>
                 </div>
            
            </div>
           
     
    )
}

export default FullCountry
