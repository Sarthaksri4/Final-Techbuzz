import React from 'react'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import About_Design from '../assets/AboutPage_design.svg'
import RegisterPage from '../assets/RegisterPage.svg'
import './Pages.css'

const Register = () => {
  return (
    <div>
       <div className='Header'></div>
       <div className='register-content'>
        <Card />
        <div className="WhiteCard_Register">
          <img src={About_Design} alt="Rohit" className="Left_design"/>
          <img src={About_Design} alt="Rohit" className="Right_design"/>
          <img src={RegisterPage} alt="Rohit" className="Register_design"/>
          <form action='/register/mainregister'>
           <button className='button_register bg-[black] rounded-[10px] absolute left-[36.5%] top-[70%] w-[300px] h-[64px] font-poppins text-white font-normal text-2xl'>Register Now!</button>
          </form>
        </div>
        </div>
       <div className='footer_facultypage'><Footer /></div>
    </div>
  )
}

export default Register