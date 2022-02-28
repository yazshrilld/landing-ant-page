import React, { useState } from 'react';
// import Logo from './../../assets/logo(1).png';
import LogoTriangle from "./../../assets/logo _triagle.png";
import { Link } from 'react-router-dom';

const Main = ({
    ...otherProps
}) => {
    return (
        <section>
            <div className='flex px-16 mt-8'>
                <div>
                    <h1 className="font-bold font-mono text-xl mx-1 sm:grid-cols-5">Six Days In Dubai</h1>
                    <div>
                        <ul>
                            <li className="flex items-center justify-center w-10 h-10">FEB</li>
                            <li className="flex items-center justify-center border-yellow-300 border-2 text-sm font-bold font-mono bg-opacity-50 bg-black text-yellow-300 w-10 h-10 rounded-full">15</li>
                            <li className="flex items-center justify-center  text-xs w-10 h-10">16</li>
                            <li className="flex items-center justify-center  text-xs w-10 h-10">17</li>
                            <li className="flex items-center justify-center  text-xs w-10 h-10">18</li>
                            <li className="flex items-center justify-center  text-xs w-10 h-10">19</li>
                            <li className="flex items-center justify-center  text-xs w-10 h-10">20</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className=' grid md:flex pl-40 flex items-center justify-center '>
                        <div className="mb-5 rounded-full w-10 h-10 grid items-center justify-center bg-white md:rounded-full w-20 h-20 p-2 flex items-center justify-center bg-white">
                            <img src={LogoTriangle} className="w-18 h-18 rounded-full" alt="logo_triangle" />
                        </div>
                        <div className="mb-3 md:ml-4 text-center border border-white">
                            <h1 className="head-t font-bold font-mono mb-5 px-6 text-5xl tracking-widest text-center">HILTON HOTEL</h1>
                            <h2 className="bg-white text-black text-xl pb-2">POWERED BY TRAVEL JINNI</h2>
                        </div>
                    </div>
                    <div className="div-w ml-40 text-center border-white border mt-2 pt-8 px-4 bg-gray-400 bg-opacity-10 blur-filter rounded-md">
                        <h1 className="text-5xl font-serif font-bold">Your Trip Awaits You!</h1>
                        <p className="text-sm pb-5">
                            We have taken some time to help plan your trip to make it a memmorable one.
                            <span className=''>Access your calender for even more things you can do on your trip.</span>
                        </p>
                        <button className="bg-yellow-300 w-full border-black border-2 text-black font-bold py-2 mb-5">ACCESS CALENDAR</button>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Main;
