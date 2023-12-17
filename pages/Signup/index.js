import React, { useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Layout from '../../src/app/layout'
import { almariService } from "../../services/customer";
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
	return (
		<>
		<Layout>
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
												<div className="d-flex flex-row align-items-center mb-2">
													<i className="fas fa-user fa-lg me-3 fa-fw"></i>
													<div className="form-outline flex-fill mb-0">
														<input
														name="FIRST_NAME"
														onChange={handleInput}
															type="text"
															id="form3Example1c"
															className="form-control"
														/>
														<label className="form-label " for="form3Example1c">
															First Name
														</label>
													</div>
												</div>

												<div className="d-flex flex-row align-items-center mb-2">
													<i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
													<div className="form-outline flex-fill mb-0">
														<input
															type="text"
															name="LAST_NAME"
															onChange={handleInput}
															id="form3Example3c"
															className="form-control"
														/>
														<label className="form-label" for="form3Example3c">
															Last Name
														</label>
													</div>
												</div>

												<div className="d-flex flex-row align-items-center mb-2">
													<i className="fas fa-lock fa-lg me-3 fa-fw"></i>
													<div className="form-outline flex-fill mb-0">
														<input
															type="number"
															name="AGE"
															onChange={handleInput}
															id="form3Example4c"
															className="form-control"
														/>
														<label className="form-label" for="form3Example4c">
															Age
														</label>
													</div>
												</div>

												<div className="d-flex flex-row align-items-center mb-2">
													<i className="fas fa-key fa-lg me-3 fa-fw"></i>
													<div className="form-outline flex-fill mb-0">
														<input
															type="text"
															name="CITY"
															onChange={handleInput}
															id="form3Example4cd"
															className="form-control"
														/>
														<label className="form-label" for="form3Example4cd">
															City
														</label>
													</div>
												</div>
											
												<div className="d-flex flex-row align-items-center mb-2">
													<i className="fas fa-key fa-lg me-3 fa-fw"></i>
													<div className="form-outline flex-fill mb-0">
														<input
															type="email"
															name="EMAIL"
															onChange={handleInput}
															id="form3Example4cd"
															className="form-control"
														/>
														<label className="form-label" for="form3Example4cd">
															Email
														</label>
													</div>
												</div>
												<div className="d-flex flex-row align-items-center mb-2">
													<i className="fas fa-key fa-lg me-3 fa-fw"></i>
													<div className="form-outline flex-fill mb-0">
														<input
															type="password"
															name="PASSWORD"
															onChange={handleInput}
															id="form3Example4cd"
															className="form-control"
														/>
														<label className="form-label" for="form3Example4cd">
															Password
														</label>
													</div>
												</div>
												<div className="d-flex flex-row align-items-center mb-2">
													<i className="fas fa-key fa-lg me-3 fa-fw"></i>
													<div className="form-outline flex-fill mb-0">
														{/* <input
															type="text"
															name="GENDER"
															onChange={handleInput}
															id="form3Example4cd"
															className="form-control"
														/> */}
														<label className="form-label" for="form3Example4cd">
															Gender
														</label>
														
													</div>
													
												</div>
												<div className="d-flex flex-row align-items-center mb-2">
													<div className="form-check form-check-inline">
														<input
															className="form-check-input"
															type="radio"
															name="GENDER"
															id="maleRadio"
															value="Male"
															onChange={handleGenderChange}
														/>
														<label className="form-check-label" htmlFor="maleRadio">
															Male
														</label>
													</div>
													</div>
													<div className="d-flex flex-row align-items-center mb-2">
													<div className="form-check form-check-inline">
														<input
															className="form-check-input"
															type="radio"
															name="GENDER"
															id="femaleRadio"
															value="Male"
															onChange={handleGenderChange}
														/>
														<label className="form-check-label" htmlFor="femaleRadio">
															Female
														</label>
													</div>
													</div>
													<div className="d-flex flex-row align-items-center mb-2">
													<div className="form-check form-check-inline">
														<input
															className="form-check-input"
															type="radio"
															name="GENDER"
															id="otherradio"
															value="Male"
															onChange={handleGenderChange}
														/>
														<label className="form-check-label" htmlFor="otherradio">
															Other
														</label>
													</div>
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
												<p
													className="mb-5 pb-lg-2"
													style={{ color: "#393f81" }}
												>
													Already have an account?{" "}
													<a
														href="#"
														onClick={handleLogin}
														style={{ color: "#393f81" }}
													>
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
		</Layout>

	
		</>
	);
};

export default Signup;
