import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import MultipleImageUpload from './components/ImageComponents/MultipleImageIUpload';
import SingleImageUpload from './components/ImageComponents/SingleImageUpload';
import IterateUplaod from './components/ImageComponents/IterateUpload';


function App() {
  return (
    <div className='container'>
      <div className="App">  
        {/* <MultipleImageUpload/>   */}
        <SingleImageUpload/>  
        {/* <IterateUplaod/> */}
      </div>  
    </div>
  );
}

export default App;
