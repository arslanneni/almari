import React, { useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Layout from '../../src/app/layout'
import { almariService } from "../../services/customer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock ,faCity} from "@fortawesome/free-solid-svg-icons";

const Signup = () => {

	const initialState = 
	{
		FIRST_NAME:"",
		LAST_NAME:"",
		AGE:"",
		CITY:"",
		GENDER:"",
		EMAIL:"",
		PASSWORD:""
	}
	const [fields,setFields]=useState(initialState);

	const handleLogin = () => {
		window.location.href = "http://localhost:3000/Login";
	};

	const signupUser = async () => 
	{
		if(fields.FIRST_NAME==="" || fields.LAST_NAME==="" || fields.age==="" || fields.GENDER==="" || fields.CITY==="" || fields.EMAIL==="" || fields.PASSWORD==="")
		{
			toast.error("Please fill all the fields");
			return;
		}
		const payload = 
		{
			FIRSTNAME:fields.FIRST_NAME,
			LASTNAME:fields.LAST_NAME,
			AGE:+fields.AGE,
			CITY:fields.CITY,
			GENDER:fields.GENDER,
			EMAIL:fields.EMAIL,
			PASSWORD:fields.PASSWORD
		}
		const response = await almariService.signupCustomer(payload);

		if (response){
			if(response.status==="SUCCESS"){
				toast.success("Signup Successfull")
				handleLogin();
			  }
			  else{
				toast.error(response.message);
			  }
		}
	
	}
	const handleInput = (e) => 
	{
		const {name,value}=e.target;
	setFields((prev)=>(
		{
			...prev,
			[name]:value
		}))

	}
		const handleGenderChange = (e) => {
		setFields((prev) => ({
			...prev,
			GENDER: e.target.value,
		}));
	};

	const icons = {
		FIRST_NAME: faUser,
		LAST_NAME: faUser,
		AGE: faUser,
		CITY: faCity,
		EMAIL: faEnvelope,
		PASSWORD: faLock,
	  };
	  
	  const inputTypes = {
		FIRST_NAME: "text",
		LAST_NAME: "text",
		AGE: "number",
		CITY: "text",
		EMAIL: "email",
		PASSWORD: "password",
	  };
	  
	  const fieldLabels = {
		FIRST_NAME: "First Name",
		LAST_NAME: "Last Name",
		AGE: "Age",
		CITY: "City",
		EMAIL: "Email",
		PASSWORD: "Password",
	  };


	return (
		<section className="vh-100" style={{ backgroundColor: "#FFFF" }}>
		  <div className="container h-100">
			<div className="row d-flex justify-content-center align-items-center h-100">
			  <div className="col-lg-12 col-xl-11">
				<div className="card text-black" style={{ borderRadius: "25px" }}>
				  <div className="card-body p-md-5">
					<div className="row justify-content-center">
					  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
						<p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
						  Sign up
						</p>
	
						<form className="mx-1 mx-md-4">
						  {["FIRST_NAME", "LAST_NAME", "AGE", "CITY", "EMAIL", "PASSWORD"].map((fieldName) => (
							<div className="d-flex flex-row align-items-center mb-2" key={fieldName}>
							  <FontAwesomeIcon icon={icons[fieldName]} className="fa-lg mb-4 me-3 fa-fw" />
							  <div className="form-outline flex-fill mb-0">
								<input
								  name={fieldName}
								  onChange={handleInput}
								  type={inputTypes[fieldName]}
								  id={`form3Example${fieldName}c`}
								  className="form-control"
								/>
								<label className="form-label" htmlFor={`form3Example${fieldName}c`}>
								  {fieldLabels[fieldName]}
								</label>
							  </div>
							</div>
						  ))}
	
						  <div className="d-flex flex-row align-items-center mb-2">
							<div className="form-outline flex-fill mb-0">
							  <label className="form-label" htmlFor="form3Example4cd">
								Gender
							  </label>
							</div>
						  </div>
	
						  <div className="d-flex flex-row align-items-center mb-2">
							{["Male", "Female", "Other"].map((gender) => (
							  <div className="form-check form-check-inline" key={gender}>
								<input
								  className="form-check-input"
								  type="radio"
								  name="GENDER"
								  id={`${gender.toLowerCase()}Radio`}
								  value={gender}
								  onChange={handleGenderChange}
								/>
								<label className="form-check-label" htmlFor={`${gender.toLowerCase()}Radio`}>
								  {gender}
								</label>
							  </div>
							))}
						  </div>
	
						  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
							<button
							  type="button"
							  className="btn btn-primary btn-lg"
							  onClick={signupUser}
							>
							  Register
							</button>
						  </div>
						  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
							Already have an account?{" "}
							<a href="#" onClick={handleLogin} style={{ color: "#393f81" }}>
							  Login here
							</a>
						  </p>
						</form>
					  </div>
					  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
						<Image
						  src="/SignupImage.jpeg"
						  width={400}
						  height={400}
						  className="img-fluid"
						  alt="Sample image"
						/>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</section>
	);
};

export default Signup;
