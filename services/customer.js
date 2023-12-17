
export const almariService={
	loginCustomer
}

const almariURL='http://localhost:3009/';

async function loginCustomer(params)
{
	let apiUrl=`${almariURL}almari/login`
	const postOptions = {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify({
		  params
		}),
	  };
	  
	  try {
		const data = await fetchData(apiUrl, postOptions);
		return data;
	  } catch (error) {
		console.error('Error posting data:', error);
	  }
}

async function fetchData(url, options = {}) {
	try {
	  const response = await fetch(url, options);
  
	  if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	  }
  
	  const data = await response.json();
	  return data;
	} catch (error) {
	  console.error('Error during fetch:', error);
	  throw error; 
	}
  }