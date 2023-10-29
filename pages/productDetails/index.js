import React from 'react'
import '../../public/styles/productDetail.css';
import Head from 'next/head'; 
import CryptoJS from 'crypto-js';
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';

const productDetail = () => {
	const initialState = 
	{
		TITLE:"",
		DESCRIPTION:"",
		PRICE:"",
		IMAGE:""
	}
	const [productDetail,setProductDetail]=useState(initialState)
	const router = useRouter();
	const decryptQueryParameters = (encryptedText) => {
	
		const decryptedText = CryptoJS.AES.decrypt(encryptedText, 'secret').toString(CryptoJS.enc.Utf8);
		return decryptedText;
	  };
		
	  useEffect(() => {
		const { title, description, price,image } = router.query;
	
		if (title && description && price) {
		
		  const decryptedTitle = decryptQueryParameters(title);
		  const decryptedDescription = decryptQueryParameters(description);
		  const decryptedPrice = parseFloat(decryptQueryParameters(price));
		  const decryptedImage = image ? parseFloat(decryptQueryParameters(image)) : null;

	
		  setProductDetail({
			TITLE: decryptedTitle,
			DESCRIPTION: decryptedDescription,
			PRICE: decryptedPrice,
			IMAGE:decryptedImage
		  });
		}
	  }, [router.query]);
	    useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('/beechtree.csv'); // Replace with the path to your CSV file
    //     const blob = await response.blob();
    //     const reader = new FileReader();

    //     reader.onload = () => {
    //       const text = reader.result;
    //       // Convert CSV text to JSON
    //       const jsonData = convertCSVToJson(text);
    //       setData(jsonData);
	// 	  prepareCardData(jsonData);
    //     };

    //     reader.readAsText(blob);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

    fetchData();
  }, []);
  return (
   <>
   {JSON.stringify(productDetail)}
	<Head>
		<link
		  rel='stylesheet'
		  href='https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
		/>
		{/* Place the Bootstrap JavaScript link inside the Head component */}
		<script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js'></script>
	  </Head>
<div className="container">
	<div className="col-lg-8 border p-3 main-section bg-white">
		
		<div className="row m-0">
			<div className="col-lg-4 left-side-product-box pb-3">
				<img src="http://nicesnippets.com/demo/pd-image1.jpg" className="border p-3"/>
				<span className="sub-img">
					<img src="http://nicesnippets.com/demo/pd-image2.jpg" className="border p-2"/>
					<img src="http://nicesnippets.com/demo/pd-image3.jpg" className="border p-2"/>
					<img src="http://nicesnippets.com/demo/pd-image4.jpg" className="border p-2"/>
				</span>
			</div>
			<div className="col-lg-8">
				<div className="right-side-pro-detail border p-3 m-0">
					<div className="row">
						<div className="col-lg-12">
							<span>Who What Wear</span>
							<p className="m-0 p-0">{productDetail.TITLE}</p>
						</div>
						<div className="col-lg-12">
							<p className="m-0 p-0 price-pro">$30</p>
							<hr className="p-0 m-0"/>
						</div>
						<div className="col-lg-12 pt-2">
							<h5>Product Detail</h5>
							<span>{productDetail.DESCRIPTION}</span>
							<hr className="m-0 pt-2 mt-2"/>
						</div>
						<div className="col-lg-12">
							<p className="tag-section"><strong>Tag : </strong><a href="">Woman</a></p>
						</div>
						<div className="col-lg-12">
							<h6>Quantity :</h6>
							<input type="number" className="form-control text-center w-100" value="1"/>
						</div>
						<div className="col-lg-12 mt-3">
							<div className="row">
								<div className="col-lg-6 pb-2">
									<a href="#" className="btn btn-danger w-100">Add To Cart</a>
								</div>
								<div className="col-lg-6">
									<a href="#" className="btn btn-success w-100">Shop Now</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-lg-12 text-center pt-3">
				<h4>More Product</h4>
			</div>
		</div>
		<div className="row mt-3 p-0 text-center pro-box-section">
			<div className="col-lg-3 pb-2">
				<div className="pro-box border p-0 m-0">
					<img src="http://nicesnippets.com/demo/pd-b-image1.jpg"/>
				</div>
			</div>
			<div className="col-lg-3 pb-2">
				<div className="pro-box border p-0 m-0">
					<img src="http://nicesnippets.com/demo/pd-b-images2.jpg"/>
				</div>
			</div>
			<div className="col-lg-3 pb-2">
				<div className="pro-box border p-0 m-0">
					<img src="http://nicesnippets.com/demo/pd-b-images3.jpg"/>
				</div>
			</div>
			<div className="col-lg-3 pb-2">
				<div className="pro-box border p-0 m-0">
					<img src="http://nicesnippets.com/demo/pd-b-images4.jpg"/>
				</div>
			</div>
		</div>
	</div>
</div>
   </>
  )
}

export default productDetail