// components/CardComponent.js
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import CryptoJS from 'crypto-js';

export default function CardComponent({ data }) {
	const router = useRouter();

	const viewProductDetails = (title,description,price,image) => 
	{
		const encryptedTitle = CryptoJS.AES.encrypt(title, 'secret').toString();
		const encryptedDescription = CryptoJS.AES.encrypt(description, 'secret').toString();
		const encryptedPrice = CryptoJS.AES.encrypt(price.toString(), 'secret').toString();
		const encryptedImage=CryptoJS.AES.encrypt(image.toString(), 'secret').toString();

		router.push({
			pathname: '/productDetails',
			query: {
				title: encryptedTitle,
				description: encryptedDescription,
				price: encryptedPrice,
			},
		});
		
	}
	return (
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
	);
}
