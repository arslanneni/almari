// components/CardComponent.js
import React, { useState } from 'react';
import Image from 'next/image';
import PrimaryModal from '../components/productDetailModal';

export default function CardComponent({ data }) {
	const initialState=
	{
		TITLE:"",
		IMAGE:"",
		PRICE:"",
		DESCRIPTION:""
	}
  const [productDetailModal, setProductDetailModal] = useState(false);
  const [productDetails,setProductDetails]=useState(initialState);
  

  const viewProductDetails = (title, description, price, image) => {
	setProductDetailModal(true);
	
	setProductDetails(
		{
			TITLE:title,
			IMAGE:image,
			PRICE:price,
			DESCRIPTION:description
			
		})
	
  };
  const handleCloseModal = () => 
  {
  	setProductDetailModal(false);
  }

  return (
	<>
	  <div className="card-container">
		{data.map((item, index) => (
		  <div key={index} className="card">
			<div className="image-container">
			  <Image src={item.image} alt={item.title} width={200} height={200} />
			</div>
			<h4>Price: {item.price}</h4>
			<button
			  onClick={() => viewProductDetails(item.title, item.description, item.price, item.image)}
			  href={item.itemLink}
			  className="view-item-link"
			>
			  View Item
			</button>
		  </div>
		))}
	  </div>
	  <style jsx>{`
		.card-container {
		  display: flex;
		  flex-wrap: wrap;
		  justify-content: center;
		}
		h4 {
			margin-top: 20px;
			font-size: 20px;
			font-weight: bold;
		  }
		.card {
		  border: 1px solid #ddd;
		  border-radius: 10px;
		  padding: 20px;
		  margin: 20px;
		  width: 250px;
		  height: 300px; 
		  display: flex;
		  flex-direction: column;
		  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		  transition: 0.3s;
		}
		.card:hover {
		  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
		  transform: scale(1.05); /* Add a smooth scale effect on hover */
		}
		.image-container {
		  width: 100%;
		  height: 200px;
		  border-radius: 10px;
		  overflow: hidden;
		}
		.card h4 {
		  margin-top: 10px;
		  color: #555;
		}
		.view-item-link {
		  width: 50%;
		  text-align: center;
		  padding: 10px 0;
		  background-color: #4caf50;
		  color: white;
		  text-decoration: none;
		  border-radius: 5px;
		  display: block;
		  margin: 20px auto 0;
		}
	  `}</style>
	<PrimaryModal isOpenProp={productDetailModal}>
  <section className="w-screen">
    <div className="m-5 mx-auto max-w-screen-lg rounded-md border border-gray-100 text-gray-600 shadow-md">
      <div className="relative flex h-full flex-col text-gray-600 md:flex-row">
		<div className="absolute right-2  m-5 cursor-pointer">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 text-gray-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={3}
				d="M6 18L18 6M6 6l12 12"
				
				/>
			</svg>
		</div>

        <div className="mx-auto flex items-center px-5 pt-1 md:p-8">
          <Image src={productDetails.IMAGE} alt={"prodcutImage"} width={400} height={400} />
        </div>
        <div className="relative p-8 md:w-4/6">
          <div className="flex flex-col mt-5 md:flex-row">
            <h2 className="mb-2 text-2xl font-black">{productDetails.TITLE}</h2>
            {/* <span className="ml-2 text-xs uppercase">Tailwind</span> */}
          </div>
          <div className="description-wrapper">
            <p className="font-sans text-base tracking-normal">{productDetails.DESCRIPTION}</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end">
            <p className="mt-6 text-4xl font-black">{productDetails.PRICE}<sup className="align-super text-sm">00</sup></p>
            {/* <span className="ml-2 text-xs uppercase">258 Sales</span> */}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row">
            <button className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-emerald-400 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Buy now
            </button>
            <button onClick={handleCloseModal} className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white">Close</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</PrimaryModal>

<style jsx>{`
  .description-wrapper {
    max-height: 150px; /* Set a maximum height for the description */
    overflow: wrap;
  }
  /* Add ellipsis for overflow text if needed */
  .description-wrapper p {
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;
  }
`}</style>
	</>
  );
}
