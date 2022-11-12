import React,{useEffect,useState, ReactComponentElement,useRef,useCallback} from 'react'
import { NavLink, Navigate} from 'react-router-dom'
import CountryPage from './../pages/CountryPage'
import { Link } from 'react-router-dom';


const Country : React.FC <{ countryName: string, countryFlag:string, countryRegion:string, population:number; capital:string; textColorForCountry:string ; countryBackgroundColor?:string ;subRegion?:string}> = (props) => {
    const [isSending, setIsSending] = useState(false);
    const isMounted = useRef(true)

    useEffect(() => {
        return () => {
          isMounted.current = false
        }
      }, [])
    
  const sendRequest = useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return
    // update state
    setIsSending(true)
    // send the actual request
    Navigate(`country/${props.countryName}` as never)
    // once the request is sent, update state again
    if (isMounted.current) // only update if we are still mounted
      setIsSending(false)
  }, [isSending])
   
  
    
 
   

    return (
       
        
         
            <div onClick={sendRequest} className={`w-[264px] h-[336px] mx-auto my-8 text-left rounded-b-md drop-shadow-md`}>
                <img className={'rounded-t-md h-[160px] w-[264px]'}  src={props.countryFlag} alt=""/>
               <div className={`px-4 ${props.countryBackgroundColor} rounded-b-md p-2`}>
                <h1 className={`font-bold text-left ${props.textColorForCountry}`}>{props.countryName}</h1>
                <h1 className={`text-left  ${props.textColorForCountry}`}>Population: {props.population} </h1>
                <h1 className={`my-8  text-left  ${props.textColorForCountry}`}>Region: {props.countryRegion}</h1>
                <h1 className={`my-8  text-left  ${props.textColorForCountry}`}>Capital: {props.capital}</h1>
                 </div>
            
            </div>
          
      
    )
}

export default Country
