import React,{useState,useEffect} from 'react'
import HalfMoon from './HalfMoon';
import Sun from './Sun'
const ModeSwitcher : React.FC <{changeMode:any}> = (props) => {

    const [displayMode, setDisplayMode] = useState('Light');

    ;
    
    const switchMode = () => {
        if( displayMode == 'Light'){
           
            setDisplayMode('Dark')
        }
       else if (displayMode == 'Dark'){
      
        setDisplayMode('Light')
       }
       props.changeMode(displayMode)
     };


    

    return (
        <div onClick={switchMode} className={`w-36 flex flex-row justify-between`}>
            {displayMode === 'Light' ?(<HalfMoon/>):(<Sun/>) }
            {displayMode === 'Light' ? (<h1 className='text-black'>Dark Mode</h1>):(<h1 className="text-white">Light Mode</h1>)}
        
        </div>
    )
}

export default ModeSwitcher
