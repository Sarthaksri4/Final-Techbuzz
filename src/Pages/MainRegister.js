import React, { useState, useRef } from "react";
import Footer from "../Components/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import "./Pages.css";
import axios from "axios";
import toast from "react-hot-toast";
import ReactLoading from "react-loading";

// Validation function
function registerValidate(values) {
  const errors = {};
  
  if (!values.name) {
    errors.name = 'Required';
  } else if (!/^[a-zA-Z\s]*$/i.test(values.name)) {
    errors.name = 'Invalid Username';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[a-zA-Z]{2,20}22\d{5,7}@akgec\.ac\.in$/gm.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.studentNumber) {
    errors.studentNumber = 'Required';
  } else if (
    !/^(22|21)(00|10|1[123]|15[34]|16[49]|31|40|15)([0-9]{3,8})$/i.test(values.studentNumber) &&
    !/^(22|21)(00|10|1[123]|15[34]|16[49]|31|40|154)([0-9]{4,8})$/i.test(values.studentNumber)
  ) {
    errors.studentNumber = 'Invalid student number';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^\d{10}$/i.test(values.phone)) {
    errors.phone = 'Phone number must be exactly 10 digits';
  }

  return errors;
}


function MainRegister() {
  const [captchavalue, setcaptcha_value] = useState('')
  const [formData, setFormData] = useState({
    name: "",
    studentNumber: "",
    branch: "",
    email: "",
    phone: "",
    gender: "",
    year: "",
    residence: "",
    section: "",
    recaptchaToken:captchavalue,

  });
  const validate_captcha = async(value) => {
    console.log('reacptcha', value);
    setcaptcha_value(value);

    await setFormData((prevFormData) => ({
      ...prevFormData,
      recaptchaToken: value,
    }));
  };

  const captcharef = useRef();

  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  

  const submitHandler = async (e) => {
    e.preventDefault();

    const errors = registerValidate(formData);

    if (Object.keys(errors).length > 0) {
      // Handle validation errors (e.g., display error messages, prevent submission)
      console.error('Validation errors:', errors);
      return;
    }
    console.log('Form Data:', formData);

    // Continue with API call if there are no validation errors

   // Example debugging
try {
  setLoading(true);
  console.log('Before axios post request:', formData);
  const response = await axios.post(
    "https://v2-ccc1.onrender.com/api/students/register",
    formData
  );
  console.log('After axios post request:', response.data);

  toast.success("Registration successful!");
} catch (error) {
  toast.error("Submission failed");
  console.error("Error submitting registration:", error);
} finally {
  setLoading(false);
}

    
  };

  return (
    <div>
    <div className="Header"></div>
    <div className="register-content">
      <div className="Transperent_card">
        <h1 className="h1_name_RegisterPage  text-white font-normal text-5xl text-center m-2">
          Register
        </h1>
        <form onSubmit={submitHandler}>
          <div className="Register_form flex justify-around items-top my-10">
            <section className="Left_register flex flex-col w-[25rem]">
              <label className="text-white">Name:</label>
              <input
                type="text"
                className="h-[2rem] rounded"
                name="name"
                value={formData.name}
                onChange={onChange}
              />

              <br></br>

              <label className="text-white">Gender:</label>
              <select
                name="gender"
                className="h-[2rem] rounded"
                value={formData.gender}
                onChange={onChange}
              >
                <option value="select">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <br></br>

              <label className="text-white">Student Number:</label>
              <input
                type="number"
                name="studentNumber"
                className="h-[2rem] rounded"
                value={formData.studentNumber}
                onChange={onChange}
              />

              <br></br>

              <label className="text-white">Year:</label>
              <select
                name="year"
                className="h-[2rem] rounded"
                value={formData.year}
                onChange={onChange}
              >
                <option value="select">Select</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
              </select>

              <br></br>

              <label className="text-white">Where Do You Live:</label>
              <select
                name="residence"
                className="h-[2rem] rounded"
                value={formData.residence}
                onChange={onChange}
              >
                <option value="select">Select</option>
                <option value="Hostler">Hostler</option>
                <option value="Dayscholar">Day Scholar</option>
              </select>
            </section>
            <section className="Right_register flex flex-col m-0 w-[25rem]">
              <label className="text-white">Branch:</label>
              <select
                name="branch"
                className="h-[2rem] rounded"
                value={formData.branch}
                onChange={onChange}
              >
                <option value="select">Select</option>
                <option value="CS">CS</option>
                <option value="CSE">CSE</option>
                <option value="CS/IT">CS/IT</option>
                <option value="IT">IT</option>
                <option value="EC">EC</option>
                <option value="Mechanical">Mechanical</option>
                <option value="EC">EC</option>
              </select>

              <br></br>

              <label className="text-white">Section:</label>
              <select
                name="section"
                className="h-[2rem] rounded"
                value={formData.section}
                onChange={onChange}
              >
                <option value="select">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>

              <br></br>
              <label className="text-white">Phone Number:</label>
              <input
                type="number"
                name="phone"
                className="h-[2rem] rounded"
                value={formData.phone}
                onChange={onChange}
              />

              <br></br>
              <label className="text-white">Email Address:</label>
              <input
                type="email"
                name="email"
                className="h-[2rem] rounded"
                value={formData.email}
                onChange={onChange}
              />
              <br></br>
              <ReCAPTCHA
                  ref={captcharef}
                  sitekey="6Lfiz1EmAAAAACQpOM3uze8O7znRdGWscGiNyJRT"
                  onChange={validate_captcha}
                />
            </section>
          </div>
          <div className="flex justify-center">
          <button className="Submit_Button bg-white w-[200px] h-[60px] rounded-lg text-xl">
  {loading ? (
    <ReactLoading type="spinningBubbles" color="#000" height={35} width={35} className="loader ml-20" />
  ) : (
    "Register Now!"
  )}
</button>
          </div>
        </form>
      </div>
    </div>
    <div className="footer_Registrypage">
      <Footer />
    </div>
  </div>
);
}

export default MainRegister;
