// components/CardComponent.js
import React from 'react';
import Image from "next/image";

export default function CardComponent  ({ data })  {
    return (
        
        <div className="card-container">
            {data.map((item, index) => (
                <div key={index} className="card">
                    <div className="image-container">
                        <Image 
                            src={item.image} 
                            alt={item.title} 
                            width={300}
                            height={370} 
                        />
                    </div>
                    <h3>
                        {item.title}
                    </h3>
                    <h6>
                        {item.description}
                    </h6>
                    <h4>
                        Price: {item.price}
                    </h4>
                    <a href={item.itemLink} className="view-item-link">View Item</a>
                </div>
            ))}
            <style jsx>{`
                .card-container {
                    display: flex;
                    flex-wrap: wrap;
                }
                .card {
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    padding: 10px;
                    margin: 10px;
                    width: 300px;
                    display: flex;
                    flex-direction: column;
                }
                .image-container {
                    width: 100%;
                    height: 300px;
                }
                .image-container img {
                    object-fit: cover;
                    border-radius: 5px;
                    width: 100%;
                    height: 100%;
                }
                .card h4 {
                    margin-top: 10px;
                    position: relative;
                    bottom: 0;
                 
                    
                }
                .card h3 {
                    margin: 110px 0 5px;
                }
                .card h6 {
                    font-size: 14px;
                    color: #555;
                    align-self: center;
                    margin-top: auto;
                }
                .card .view-item-link {
                  width:90%;
                  text-align:center;
                    padding: 5px 10px;
                    background-color: #4CAF50;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    display: inline-block;
                    margin: 10px 0px;
                    align-self: center;
                    margin-top: auto;
                }
            `}</style>
        </div>
    );
};
