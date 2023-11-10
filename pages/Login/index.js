import React, { useEffect } from 'react';
import Image from 'next/image';


const LoginPage = () => {


	useEffect(() => {
	
		import('bootstrap/dist/css/bootstrap.min.css');

		import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
			
		
		});
	}, []);
	
	const handleRegistration = () => 
	{
		window.location.href = 'http://localhost:3000/Signup';
	}

	

	return (
		<section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
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
												<span className="h1 fw-bold mb-0">Logo</span>
											</div>

											<h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
												Sign into your account
											</h5>

											<div className="form-outline mb-4">
												<input
													type="email"
													id="form2Example17"
													className="form-control form-control-lg"
												/>
												<label className="form-label" htmlFor="form2Example17">
													Email address
												</label>
											</div>

											<div className="form-outline mb-4">
												<input
													type="password"
													id="form2Example27"
													className="form-control form-control-lg"
												/>
												<label className="form-label" htmlFor="form2Example27">
													Password
												</label>
											</div>

											<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
										<button type="button" className="btn btn-primary btn-lg">Login</button>
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
	);
};

export default LoginPage;