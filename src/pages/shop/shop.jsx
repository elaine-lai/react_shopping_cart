import React from 'react'
import { PRODUCTS } from "../../products"
import { Product } from "./product"
import "./shop.css"

export const Shop = () => {
  return (
    <div className="shopProducts">
      <div className="shopTitle">
        <h3>Shop Coffee</h3>
      </div>
      
      <div className='products'>
        {PRODUCTS.map((product) => 
          <Product key={product.id} data={product}/> 
        )}
      </div>
    </div>
  )
}

