import AppContext from '../../context/store';
import { useContext, useEffect, useState } from 'react';
import { AiFillStar, AiFillDelete } from "react-icons/ai";

const Favourite = () => {
  const [state, dispatch] = useContext(AppContext);
  const [storedProducts, setStoredProducts] = useState([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('favouriteProducts')) || [];
    setStoredProducts(products);
  }, []);

  const handleRemoveFromCart = (id) => {
    const updatedProducts = storedProducts.filter(product => product.id !== id);
    setStoredProducts(updatedProducts);
    localStorage.setItem('favouriteProducts', JSON.stringify(updatedProducts));
    dispatch({ type: 'REMOVE_FROM_THE_FAVOURITE_LIST', id });
  };

  return (
    <div className='products'>
      {storedProducts.map(product => 
        <div className='product__card' key={product.id}>
          <img className='product__img' src={product.thumbnail} alt={product.title} />
          <div className='product__content'>
            <h3 className='product__title'>{product.title}</h3>
            <p className='product__star'><AiFillStar /><span className="product__rating">{product.rating}</span></p>
            <p className='product__discount'>{product.price + 3}$</p>
            <p className='product__price'>{product.price}$</p>
            <button onClick={() => handleRemoveFromCart(product.id)} className='product__remove'><AiFillDelete /></button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Favourite;