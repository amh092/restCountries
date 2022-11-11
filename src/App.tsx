import React,{useState,useEffect} from 'react';
import Header from "./components/layout/header/Header"
import './App.css';
import Countries from './components/countries/Countries';
import { text } from 'body-parser';
import { Route, Routes } from 'react-router';
import CountryPage from './components/pages/CountryPage';
import { NavLink } from 'react-router-dom';

function App() {
  const [displayMode, setDisplayMode] = useState("Light");
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState("text-black");
  const [headerColor, setHeaderColor] = useState('bg-[#fff]')
  

  const setModeHandler = () => {
     if(displayMode === 'Light') {
      setDisplayMode('Dark')
      setTextColor("text-white")
      setHeaderColor('bg-[#2B3844]')
      document.body.classList.add('bg-[#202C36]')
      document.body.classList.remove('bg-[#f2f2f2]')
     }
     if (displayMode === 'Dark'){
      setTextColor("text-black")
      setHeaderColor('bg-[#f2f2f2]')
      document.body.classList.remove('bg-[#202C36]')
      document.body.classList.add('bg-[#f2f2f2]')
     setDisplayMode("Light")
     }
    
      
  }
  const goBack = () =>{
    
  }
  return (
    <div className="App">
      <Header headerStyle={`${headerColor} drop-shadow-md`} textStyle={textColor} name={'ahmed'} changMode={setModeHandler} displayMode={displayMode}/>
 
      <Routes>
        <Route path='/' element={
        <Countries countryBackgroundColor={headerColor} 
        searchInputBackgroundColor={headerColor +" "+textColor} 
        textColorForCountry={textColor} 
        dropDownBackgroundColor={headerColor+" "+textColor}/>}>
         </Route>
        <Route path='/country/:countryName' element={<CountryPage textColor={textColor} backgroundColor={headerColor}/>}>
       
        </Route>
      </Routes>
    </div>
  );
}

export default App;
