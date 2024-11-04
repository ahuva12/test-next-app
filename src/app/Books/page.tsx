"use client";
import { useEffect, useState } from 'react';
import { getProducts } from '../../service/books';
import style from './books.module.css';
import { book } from '../api/books/db';

const Books = () => {
  const [products, setProducts] = useState<book[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data= await getProducts();
        setProducts(data); 
      } catch (err) {
        console.error('error fetching books: ', err)
      }
    };

    fetchProducts();
  }, []); 

  return (
    <div>
      <h1>Books</h1>
      <ul className={style.container}>
        {products.map((product:book) => (
          <li key={product.bookId} className={style.book}>
            <h2>{product.bookName}</h2>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
