import React from 'react';
import LoginImage from '../../../assets/Image/Login/log.PNG'
import Logo from '../../../assets/Image/Logo/logo2.png'
import GoogleLogo from '../../../assets/Image/Login/icons8-google.svg'

const FigmaLogin = () => {
    return (
        <div className='mid-container h-[100vh] flex items-center justify-evenly'>
            <div className="login_image hidden md:w-1/2 md:block">
                <img src={LoginImage} alt="" />
            </div>
            <div className="login_form md:w-1/2">

                <img className='mx-auto' src={Logo} alt="" />
                <div class="text text-center mt-2">Nice to see you again</div>


                <form action="#">
                    <div className="flex w-2/3 mx-auto flex-col">
                        <label className='text-[#747474] text-sm font-medium ml-4 mb-2' for="email">Login</label>
                        <input className='py-3 px-5 bg-[#F2F2F2] rounded-md' type="email" name="email" id="" placeholder='Email or phone number' />
                    </div>
                    <div className="flex w-2/3 mx-auto flex-col mt-5">
                        <label className='text-[#747474] text-sm font-medium ml-4 mb-2' for="password">Password</label>
                        <input className='py-3 rounded-md bg-[#F2F2F2] px-5' type="password" name="password" id="" placeholder='Enter password' />
                    </div>

                    <div className='flex mt-[35px] w-2/3 mx-auto justify-between items-center'>

                        <div class="checkbpox_container w-1/3">
                            <input type="checkbox" />
                        </div>
                        <div className="flex remember_forget items-center justify-between w-2/3">
                            <span className='remember text-[14px]'>Remember Me</span>
                            <span className=' text-[14px] text-[#007AFF]'>Forget Password</span>
                        </div>
                    </div>
                    <div className="flex w-2/3 mx-auto flex-col">

                        <button className='btn bg-[#007AFF] my-[20px] border-0 text-white font-semibold text-[17px] hover:bg-transparent hover:border-[#007AFF] hover:border hover:text-[#007AFF]' type="submit">Sign In</button>

                        <div className="divider">or</div>
                        <button className='flex py-[4px] justify-center items-center border border-slate-600 rounded-lg hover:bg-[#333333] hover:text-white transition-all delay-75 ease-in-out'>
                            <img className='w-[40px]' src={GoogleLogo} alt="" />
                            <span className='font-semibold text-[17px] ml-3 '>Continue with google</span>
                        </button>
                    </div>

                </form>


            </div>
        </div>
    );
};

export default FigmaLogin;