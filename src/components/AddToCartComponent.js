
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import PrimaryModal from '../components/productDetailModal';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { almariService } from '../../services/customer';

export default function AddToCartComponent({ data }) {
  const initialState = {
    TITLE: '',
    IMAGE: '',
    PRICE: '',
    DESCRIPTION: '',
  };
  const [productDetailModal, setProductDetailModal] = useState(false);
  const [productDetails, setProductDetails] = useState(initialState);

  const viewProductDetails = (title, description, price, image) => {
    setProductDetailModal(true);

    setProductDetails({
      TITLE: title,
      IMAGE: image,
      PRICE: price,
      DESCRIPTION: description,
    });
  };

  const handleCloseModal = () => {
    setProductDetailModal(false);
  };

  const handleAddToCart = async () => {
    const username = Cookies.get('user');

    const payload = {
      TITLE: productDetails?.TITLE,
      PRICE: productDetails?.PRICE,
      IMAGE: productDetails?.IMAGE,
      ITEMLINK: productDetails?.ITEMLINK,
      DESCRIPTION: productDetails?.DESCRIPTION,
      SKUCODE: productDetails?.SKUCODE,
      USERNAME: username,
    };

    const response = await almariService.addToCart(payload);

    if (response) {
      if (response.status === 'SUCCESS') {
        toast.success('Added to cart');
        setProductDetailModal(false);
        return;
      } else {
        toast.error('Something went wrong');
        return;
      }
    }
  };

  return (
    <>
      <div className="card-container">
        {data.map((item, index) => (
          <div key={index} className="card">
            <div className="image-container">
              <Image src={item.IMAGE} alt={item.TITLE} width={200} height={200} />
            </div>
            <h4 className="item-price">Price: {item.PRICE}</h4>
            <button
              className="view-item-button"
              onClick={() => viewProductDetails(item.TITLE, item.DESCRIPTION, item.PRICE, item.IMAGE)}
            >
              View Item
            </button>
          </div>
        ))}
      </div>

      <PrimaryModal isOpenProp={productDetailModal}>
        <section className="w-screen">
          <div className="m-5 mx-auto max-w-screen-lg rounded-md border border-gray-100 text-gray-600 ">
            <div className="relative flex h-full flex-col text-gray-600 md:flex-row">
              <div className="absolute right-2 m-5 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>

              <div className="mx-auto flex items-center px-5 pt-1 md:p-8">
                <Image src={productDetails.IMAGE} alt="prodcutImage" width={400} height={400} />
              </div>
              <div className="relative p-8 md:w-4/6">
                <div className="flex flex-col mt-5 md:flex-row">
                  <h2 className="mb-2 text-2xl font-black">{productDetails.TITLE}</h2>
                </div>
                <div className="description-wrapper">
                  <p className="font-sans text-base tracking-normal">{productDetails.DESCRIPTION}</p>
                </div>
                <div className="flex flex-col md:flex-row md:items-end">
                  <p className="mt-6 text-4xl font-black">
                    {productDetails.PRICE}
                    <sup className="align-super text-sm">00</sup>
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row">
                  <button
                    onClick={handleCloseModal}
                    className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white"
                  >
                    Close
                  </button>
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

        .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .card {
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 20px;
          margin: 20px;
          width: 250px;
          height: 300px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
          transition: 0.3s;
        }
        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          transform: scale(1.05);
        }
        .image-container {
          width: 100%;
          height: 200px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          overflow: hidden;
        }
        .item-price {
          margin-top: 15px;
          font-size: 1.2rem;
          color: #333;
        }
        .view-item-button {
          margin-top: 10px;
          width: 100%;
          padding: 12px 0;
          background-color: #10b981;
          color: #ffffff;
          border: none;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.3s;
        }
        .view-item-button:hover {
          background-color: #059669;
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}
