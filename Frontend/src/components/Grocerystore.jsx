import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice';
import { nanoid } from '@reduxjs/toolkit';

const Grocerystore = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const dispatch = useDispatch();
  const categories = [
    { id: 0, Categoryname: "All Categories" },
    { id: 1, Categoryname: "Dairy" },
    { id: 2, Categoryname: "Snacks" },
    { id: 3, Categoryname: "Cooking-essential" },
    { id: 4, Categoryname: "Beverages" },
    { id: 5, Categoryname: "Meat-poultry" },
  ];
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_LINK}/api/product`);
      setFilteredData(response.data);
    };
    fetchProducts();
  }, []);

  const handleCategoryClick = async (categoryName) => {
    try {
      if (categoryName === 'All Categories') {
        const filteredData = await axios.get(`${import.meta.env.VITE_BACKEND_LINK}/api/product`);
        setSelectedCategory('All Categories');
        setFilteredData(filteredData.data);
      } else {
        const filteredData = await axios.get(`${import.meta.env.VITE_BACKEND_LINK}/api/prod/product?category=${categoryName}`);
        setSelectedCategory(categoryName);
        setFilteredData(filteredData.data);
      }
    } catch (error) {
      console.log("error fetching product data", error)
    }
  };
  return (
    <div className='flex flex-col md:flex-row p-0'>
      <div className='w-full md:w-1/4 flex flex-col p-2 border-r'>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              className={`mb-4 md:mb-8 text-xl md:text-2xl cursor-pointer ${selectedCategory === category.Categoryname ? 'font-bold' : ''}`}
              onClick={() => handleCategoryClick(category.Categoryname)}
            >
              {category.Categoryname}
            </li>
          ))}
        </ul>


      </div>

      <div className='w-full md:w-3/4 min-h-screen'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-6'>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div key={`${item.id}-${index}`} className='flex flex-col border-2 p-5 rounded-md min-h-[400px] justify-between'>
                <div>
                  <img src={item.image} alt={item.name} className='w-36 mx-auto' />
                  <p className='text-xl md:text-2xl font-bold mt-2'>{item.name}</p>
                  <p className='text-lg'><span className='font-extralight'>Rs.</span> {Math.floor(item.price * 87)}</p>
                  <p className='text-sm text-gray-600'>{item.brand_name}</p>
                  <p className='text-sm text-gray-600'>{item.category}</p>
                </div>

                <div className='mt-auto'>
                  <Link to={`/grocerydetails/${item.id}`}>
                    <button className='w-full bg-blue-500 text-white rounded-md py-2 font-semibold mt-2'>View full info</button>
                  </Link>
                  <button
                    className='bg-red-600 w-full text-white rounded-md py-2 font-semibold mt-2'
                    onClick={() => dispatch(addToCart({ ...item, cartItemId: `${item.id}-${nanoid()}` }))}>
                    Add to cart
                  </button>
                </div>
              </div>

            ))
          ) : (
            <p className='text-xl col-span-full text-center'>No products found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Grocerystore;
