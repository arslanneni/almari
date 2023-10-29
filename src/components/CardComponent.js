// components/CardComponent.js
import React, { useState } from 'react';
import Image from 'next/image';
import PrimaryModal from '../components/productDetailModal'

export default function CardComponent({ data }) {
const [productDetailModal,setProductDetailModal]=useState(false);

	const viewProductDetails = (title,description,price,image) => 
	{
		setProductDetailModal(true)
		
	}
	return (
		<>
		<div className="card-container">
			{data.map((item, index) => (
				<div key={index} className="card">
					<div className="image-container">
						<Image src={item.image} alt={item.title} width={300} height={370} />
					</div>
					<h3>{item.title}</h3>
					<h6>{item.description}</h6>
					<h4>Price: {item.price}</h4>
					<button onClick={ ()=> viewProductDetails(item.title,item.description,item.price,item.image)} href={item.itemLink} className="view-item-link">
						View Item
					</button>
				</div>
			))}
			<style jsx>{`
				.card-container {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
				}
				.card {
					border: 1px solid #ddd;
					border-radius: 10px;
					padding: 20px;
					margin: 20px;
					width: 300px;
					display: flex;
					flex-direction: column;
					box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
					transition: 0.3s;
				}
				.card:hover {
					box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
				}
				.image-container {
					width: 100%;
					height: 300px;
					border-radius: 10px;
					overflow: hidden;
				}
				.card h4 {
					margin-top: 10px;
					color: #555;
				}
				.card h3 {
					margin: 20px 0 10px;
					font-size: 1.5em;
				}
				.card h6 {
					font-size: 16px;
					color: #777;
					margin-top: auto;
				}
				.card .view-item-link {
					width: 80%;
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
		</div>
		<PrimaryModal isOpenProp={productDetailModal}>
        <div style={{ margin: "1rem 15px 2rem 15px", padding: "1rem 12rem" }}>
          <div className="d-flex justify-content-center">{/* <img src="dist/img/cross-icon.svg" alt="delete icon" /> */}</div>
          <div className="d-flex justify-content-center mt-4">
            <h5 className="font-16">Product Details</h5>
          </div>
          
        </div>
      </PrimaryModal>
		</>
		
		
	);
}
