import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { almariService } from '../../services/customer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../src/app/layout';


const initialState={
	EMAIL:"",
	PASSWORD:""
}
const LoginPage = () => {

	const [loginState,setLoginState]=useState(initialState);

	useEffect(() => {
		import('bootstrap/dist/css/bootstrap.min.css');
		import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
		});
	}, []);
	
	const handleRegistration = () => 
	{
		window.location.href = 'http://localhost:3000/Signup';
	};
	
	const handleLogin = () => 
	{
		window.location.href = 'http://localhost:3000/';
	};
	
	const handleInputChange =(event)=>
	{
		setLoginState({
			...loginState,
			[event.target.name]: event.target.value,
		  });
	}

	const checkLogin = async ()=>
	{
		if(loginState.EMAIL==="" || loginState.PASSWORD===""){
			toast.error("Please fill all the fields");
			return;
		}

		const payload={
			EMAIL:loginState.EMAIL,
			PASSWORD:loginState.PASSWORD,
		}

		const response=await almariService.loginCustomer(payload);
		if(response)
		{
		
			if(response.status==="SUCCESS"){
				toast.success("Login Successfull");
				Cookies.set("user", loginState.EMAIL, { expires: 7 }); // Expires in 7 days
				handleLogin();
			  }
			  else{
				toast.error("Invalid Credentials")
			  }
		}
		else{
			toast.error("Login Failed")
		}
	}

	return (
		<Layout>
				<section className="vh-100" style={{ backgroundColor: '#FFFFFF' }}>
			<ToastContainer/>
			<div className="container py-5 h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col col-xl-10">
						<div className="card" style={{ borderRadius: '1rem' }}>
							<div className="row g-0">
								<div className="col-md-6 col-lg-5 d-none d-md-block">
									<Image
										src="/LoginImage.webp"
										alt="login form"
										className="img-fluid"
										width={500}
										height={500}
										style={{ borderRadius: '1rem 0 0 1rem' }}
									/>
								</div>
								<div className="col-md-6 col-lg-7 d-flex align-items-center">
									<div className="card-body p-4 p-lg-5 text-black">
										<form>

											<div className="d-flex align-items-center mb-3 pb-1">
												<i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
												<span className="h1 fw-bold mb-0">Login</span>
											</div>

											<h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
												Log into your account
											</h5>

											<div className="form-outline mb-4">
												<input
													type="email"
													id="userid"
													onChange={handleInputChange}
													name='EMAIL'
													value={loginState.EMAIL}
													className="form-control form-control-lg"
												/>
												<label className="form-label" htmlFor="userid">
												Email
												</label>
											</div>

											<div className="form-outline mb-4">
												<input
													type="password"
													id="form2Example27"
													onChange={handleInputChange}
													value={loginState.PASSWORD}
													name='PASSWORD'
													className="form-control form-control-lg"
												/>
												<label className="form-label" htmlFor="form2Example27">
													Password
												</label>
											</div>

											<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
										<button type="button" className="btn btn-primary btn-lg" onClick={checkLogin}>Login</button>
									</div>

											<a className="small text-muted" href="#!">
												Forgot password?
											</a>
											<p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
		Don't have an account?{' '}
		<a href="#" onClick={handleRegistration} style={{ color: '#393f81' }}>
		  Register here
		</a>
	  </p>
											<a href="#!" className="small text-muted">
												Terms of use.
											</a>
											<a href="#!" className="small text-muted">
												Privacy policy
											</a>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</Layout>
	
	);
};

export default LoginPage;
