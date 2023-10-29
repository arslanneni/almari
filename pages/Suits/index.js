import React,{useEffect,useState} from 'react'
import Papa from 'papaparse';
import ProductCard from '../../src/components/ProductCard'
import CardComponent from '../../src/components/CardComponent'
// import {scrappedDataService} from "../../services/dataFetching"

export default function Suits ()  {

	const [data, setData] = useState([]);
	const [cardData,setCardData]=useState([]);

	const prepareCardData=(data)=>{
		let productData=[];
		data.forEach((element,index) => {
			productData.push({
				image:element.image,
				title:element.title,
				description:element.description,
				price:element.Price,
			})
		}); 
		
console.log(productData)
		setCardData(productData);
	}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/SanaSafinaz.csv'); // Replace with the path to your CSV file
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onload = () => {
          const text = reader.result;
          // Convert CSV text to JSON
          const jsonData = convertCSVToJson(text);
          setData(jsonData);
		  prepareCardData(jsonData);
        };

        reader.readAsText(blob);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const convertCSVToJson = (csv) => {
    const parsedData = Papa.parse(csv, { header: true });
	console.log(parsedData.data)
    return parsedData.data;
  };

  return (
        <div>
            <h1>Welcome to the Card Component</h1>
            <CardComponent data={cardData} />
        </div>
    );
  
  
};