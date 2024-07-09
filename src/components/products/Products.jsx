import axios from '../../api';
import { useState, useEffect, useContext } from 'react';
import AppContext from '../../context/store';
import './Products.css';
import { AiOutlineLike, AiFillStar } from "react-icons/ai";

const Products = () => {
  const [state, dispatch] = useContext(AppContext);
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadData(){
      try{
        const response = await axios("/products");
        setProducts(response.data.products)
      }
      catch(error){
        console.log(error);
      }
    }
    
    loadData()
  }, [])

  const handleAddToCart = (product) => {
    let storedProducts = JSON.parse(localStorage.getItem('favouriteProducts')) || [];
    
    // Mahsulot ro'yxatta borliginini tekshirish
    if (!storedProducts.some(p => p.id === product.id)) {
      storedProducts.push(product);
      localStorage.setItem('favouriteProducts', JSON.stringify(storedProducts));
      dispatch({ type: 'ADD_TO_THE_FAVOURITE_LIST', favourites: [product] });
    }
  };

  return (
    <div className='products'>
      {products.map(product => 
        <div className='product__card' key={product.id}>
          <img className='product__img' src={product.thumbnail} alt={product.title} />
          <div className='product__content'>
            <h3 className='product__title'>{product.title}</h3>
            <p className='product__star'><AiFillStar /><span className="product__rating">{product.rating}</span></p>
            <p className='product__discount'>{product.price + 3}$</p>
            <p className='product__price'>{product.price}$</p>
            <button onClick={() => handleAddToCart(product)} className='product__like'><AiOutlineLike /></button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products;
