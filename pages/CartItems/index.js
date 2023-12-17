import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { almariService } from '../../services/customer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../src/app/layout';
import CardComponent from '../../src/components/CardComponent';
import AddToCartComponent from '../../src/components/AddToCartComponent'

const CartItems = () => {

	const [cartItems,setCartItems]=useState([]);

	useEffect(() => {
		import('bootstrap/dist/css/bootstrap.min.css');
		import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
		});
	}, []);
	
	useEffect(() => {
		getCartItems();
	}, []);
	
	const getCartItems = async () =>{
		const username=Cookies.get('user');
		const payload={
			username:username
		}
		const response=await almariService.getCartItems(payload);
		console.log(response)
		if(response)
		{
			if(response.status==="SUCCESS"){
				setCartItems(response.data);
			}
			else{
				toast.error("Error fetching cart items")
			}
		}
		else{
			toast.error("Error fetching cart items")
		}
	}

	return (
			<Layout>
			<div>
				<AddToCartComponent data={cartItems} />
			</div>
		</Layout>
	);
};

export default CartItems;