import React, { PropTypes } from 'react'

const Product = ({ price, quantity, title, images }) => (
  <div>


    {images ? <img src={images[0].url_75x75} /> : ''}

    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  images: PropTypes.array
}

export default Product
