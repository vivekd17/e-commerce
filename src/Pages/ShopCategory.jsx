import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/filter_icon.png'
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="shop-category-main">
        <div className="shopcategory-index">
          <p>
            <span>Showing 1-16</span> out of 36 Products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
            } else {
              return null;
            }
          })}
        </div>
        
      </div>
    </div>
  )
}
export default ShopCategory;