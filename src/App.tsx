import React from 'react';
import logo from './logo.svg';
import Header from './component/header';
import './App.css';
import Silde from './component/silde';
import Footer from './component/footer';
import { IProducts } from './interface/product';
import Product from './component/product';

function App() {
  const products: IProducts[] =[
    {
      "id": 1,
      "name": "Gym Weight",
      "image": "http://127.0.0.1:5500/assets/img/feature_prod_01.jpg",
      "price": 0
    },
    {
      "id": 2,
      "name": "Cloud Nike Shoes",
      "image": "http://127.0.0.1:5500/assets/img/feature_prod_02.jpg",
      "price": 0
    },
    {
      "id": 3,
      "name": "Summer Addides Shoes",
      "image": "http://127.0.0.1:5500/assets/img/feature_prod_03.jpg",
      "price": 0
    }
    

  ]
  return (
    <>
      <Header title='Zay'/>
      <Silde/>
      <Product products={products}/>
      <Footer/>
      </>
  );
}

export default App;
