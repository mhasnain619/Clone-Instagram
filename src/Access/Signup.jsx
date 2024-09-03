import React, { useState } from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };
    const [data, setData] = useState()
    function handleGetData(event) {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    console.log(data);


    function handleSetDatatoLocalHost() {
        localStorage.setItem('data', JSON.stringify(data));
    }

    return (
        <div className="flex h-screen min-h-full  justify-center bg-slate-100 px-6 py-12 lg:px-8">
            <div className='bg-white w-[500px] h-[500px] rounded-md'>
                <div>
                    <IoArrowBackCircleOutline onClick={handleClick} className='text-3xl mt-5 ml-12 text-indigo-600  cursor-pointer' />
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-start text-2xl font-bold leading-9 tracking-tight text-indigo-950">
                        Hi!
                    </h2>
                    <h5 className='font-bold text-stone-500'>Create New Account</h5>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <div className="mt-2">
                                <input
                                    onChange={handleGetData}
                                    id="name"
                                    placeholder="Name"
                                    name="name"
                                    type="text"
                                    required
                                    className="block w-full border-0 border-b-2 py-1.5 px-2 text-indigo-950 placeholder:text-gray-400 bg-transparent focus:bg-transparent focus:ring-0 focus:outline-none sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mt-2">
                                <input
                                    onChange={handleGetData}
                                    id="email"
                                    placeholder="example@gmail.com"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full border-0 border-b-2 py-1.5 px-2 text-indigo-950 placeholder:text-gray-400 bg-transparent focus:bg-transparent focus:ring-0 focus:outline-none sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 justify-between">
                            <div className="mt-2">
                                <input
                                    onChange={handleGetData}
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder='*****'
                                    required
                                    autoComplete="current-password"
                                    className="block w-full border-0 border-b-2 py-1.5 px-2 text-indigo-950 placeholder:text-gray-400 bg-transparent focus:bg-transparent focus:ring-0 focus:outline-none sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div>
                                <button
                                    onClick={handleSetDatatoLocalHost}
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    SIGN UP
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex justify-center items-center w-full  text-sm ">
                                    <a href="#" className="font-semibold text-center text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup
