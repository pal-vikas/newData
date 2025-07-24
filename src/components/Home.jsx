import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Profile from './Profile';

function Home() {

  const [product, setProduct] = useState([]);

  useEffect(()=>{
      axios.get('https://dummyjson.com/products/category/smartphones')
      .then((res)=>{
                 setProduct(res.data.products)
                 console.log(res.data.products)
      })
      .catch((error)=>{
        console.error(error);
      })
  }, [])

  return (
    <div>
          <div className="">
          {
                 product.map(product =><Profile key={product.id} id={product.id} brand={product.brand} img={product.images} title={product.title}/>) 
          }
          </div>

       
    </div>
  )
}

export default Home
