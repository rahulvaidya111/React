import React from 'react';
import './App.css';
import Header from './Header';




const App = () => {
    return(
        <>
        <Header/>
        <div style={{height:'500px',width:'500px',backgroundColor:'skyblue',textAlign:'center'}}>
        <h1>Urbonmonkey</h1>
        <h1>monkey funny</h1>
        </div>
        <div className='secondDiv'>
        </div>
        </>
        
        
        
    )
}

export default App;