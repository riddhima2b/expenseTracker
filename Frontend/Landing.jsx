import React from 'react';
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen w-full bg-gradient-to-r from-blue-500 via-pink-500 to-green-500'>
      <div className='place-content-center p-20'>
        <h1 className='justify-center text-center text-5xl  font-semibold font-mono text-white text-shadow-lg'>Welcome to XtraMoney!</h1>
        <h3 className='p-12 justify-center text-center text-2xl font-mono text-amber-100 text-shadow-lg'>Scare your month-end worries away!</h3>

        <h6 className='p-12 justify-center text-center text-xl font-mono text-white text-shadow-lg'>Want to live life extra large even at the end of the month? Manage your money smartly with XtraMoney - a one stop solution to those nagging bills and complicit tills. </h6>
        <div className='flex justify-center'>
        <Link to="/LoginPage">
        <button className='text-center font-mono text-shadow-sm text-black bg-amber-100 p-4 rounded-2xl hover:bg-white'>Your calling to Money</button>
        </Link> </div>
        
      </div>  
     
      <footer className="fixed bottom-0 w-full p-4 text-center font-mono text-white bg-gradient-to-r from-blue-500 via-pink-500 to-green-500">Because Money matters ₹ </footer>
    </div>
    
    </>

  );
};

export default Landing;
