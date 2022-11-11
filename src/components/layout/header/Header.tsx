import React,{useState} from 'react'
import ModeSwitcher from './ModeSwitcher'


const Header : React.FC <{name :string; displayMode:string ;changMode:any ;headerStyle:string; textStyle:string}>=  (props) => {
    // everything should be wrapped with hooks 
    const [displayMode, setDisplayMode] = useState("Light");
    const [backgroundColor, setBackgroundColor] = useState("");
    const setModeHandler = () => {
      
        setDisplayMode(() => {
          return displayMode;
         
        });
        props.changMode(displayMode)
      };
    return (
        <div className={props.headerStyle}>
            <div className={` ${backgroundColor} xl:w-[1440px]  w-[359px] mx-auto flex flex-row justify-between items-center h-[80px] shadow-[0px 2px 4px rgba(0, 0, 0, 0.0562443)]`}> 
          
       <h1 className={props.textStyle}>Where in the world?</h1>
       <ModeSwitcher  changeMode={setModeHandler}/>
       </div>
        </div>
    )
}

export default Header
