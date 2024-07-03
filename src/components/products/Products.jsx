import { AiFillDelete } from "react-icons/ai"; 
import axios from '../../api'
import { useState, useEffect, useReducer } from 'react'
import './Products.css'
import { AiOutlineLike, AiFillStar } from "react-icons/ai";

const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case 'add':
      return [...state, action.product]
    case 'remove':
      return state.filter(product => product.id !== action.id)
    default:
      return state
  }
}

const Products = () => {

  const initialState = [];

  const [state, dispatch] = useReducer(reducer, initialState);

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
    dispatch({ type: 'add', product })
  }

  const handleRemoveToCart = (id) => {
    console.log(id) 
    dispatch({ type: 'remove', id })
  }

  return (
    <>
      <div className='products'>
        {
          products.map(product => 
            <div className='product__card' key={product.id}>
              <img className='product__img' src={product.thumbnail} alt={product.title} />
              <div className='product__contant'>
                <h3 className='product__title'>{product.title}</h3>
                <p className='product__star'><AiFillStar /><span className="product__rating">{product.rating}</span></p>
                <p className='product__discount'>
                  {
                    product.price + 3 
                  }
                $</p>
                <p className='product__price'>{product.price}$</p>
                <button onClick={() => handleAddToCart(product)} className='product__like'><AiOutlineLike /></button>
              </div>
            </div>
          )
        }
      </div>
      <div className='products'>
        {
          state.map(product => 
            <div className='product__card' key={product.id}>
              <img className='product__img' src={product.thumbnail} alt={product.title} />
              <div className='product__contant'>
                <h3 className='product__title'>{product.title}</h3>
                <p className='product__star'><AiFillStar /><span className="product__rating">{product.rating}</span></p>
                <p className='product__discount'>
                  {
                    product.price + 3 
                  }
                $</p>
                <p className='product__price'>{product.price}$</p>
                <button onClick={() => handleRemoveToCart(product.id)} className='product__remove'><AiFillDelete /></button>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Products