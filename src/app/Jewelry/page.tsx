"use client";

import { useEffect, useState } from 'react';
import { getProducts } from '../../service/jewelry';
import style from './jewelry.module.css'

interface rating {
    rate: number;
    count: Number;
}

export interface jewel {
    id: number;
    title: string;
    price: number;
    description: string;
    category: String;
    image: string;
    raging: rating
  }

const Jewelry = () => {
  const [products, setProducts] = useState<jewel[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data); 
      } catch (err) {
        console.error('error fetching jewelry: ', err)
      }
    };

    fetchProducts();
  }, []); 

  return (
    <div>
      <h1>Jewelry</h1>
      <ul className={style.container}>
        {products.map((product:jewel) => (
          <li key={product.id} className={style.jewelry}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jewelry;
