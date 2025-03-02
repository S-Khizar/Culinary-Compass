import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const GroceryDetails = () => {
  const { id } = useParams();
  const [grocerydata, setGroceryData] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_LINK}/api/product`);
        const groceryDetails = response.data.find((grocery) => String(grocery.id) === (id));
        if (groceryDetails) {
          setGroceryData(groceryDetails);
        } else {
          setError('Product not found');
        }

      } catch (err) {
        console.error('Grocery details error:', err);
        setError('Failed to fetch grocery details');
      }
    };

    fetchProduct();
  }, [id]);
  return (
    <div className='flex mb-5'>
      <div className='w-2/4  p-2 flex items-center justify-center'>
        <img src={grocerydata.image} alt={grocerydata.name} className='w-3/4'/>


      </div>
      <div className='w-2/4 px-10 py-2 flex flex-col gap-y-5'>
        <h1 className='text-3xl font-semibold'>{grocerydata.name}</h1>
        <p className='text-2xl'>{grocerydata.brand_name}</p>
        <p className='text-gray-400'>{grocerydata.description}</p>
        <p className='text-2xl'> <span className='font-extralight'>$</span> {grocerydata.price}</p>
        <div>
          <h2 className="font-semibold mb-1">Features:</h2>
          <ul className="list-disc list-inside">
            {grocerydata.features?.map((feat, index) => (
              <li key={index}>{feat}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-1">Details:</h2>
          <ul className="list-disc list-inside">
            {grocerydata.details?.map((deat, index) => (
              <li key={index}>{deat}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-1">No of review : {grocerydata.number_of_reviews} with  {grocerydata.review_stars} stars</h2>
          {
            grocerydata.reviews?.map((rev, index) => (
              <div key={index}>
                <h3 className='text-xl '>{rev.user}</h3>
                <p>{rev.review_text}</p>
                <p>the rating is {rev.rating}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default GroceryDetails
