import React, { PropTypes } from 'react'

const ProductsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <button onClick={() => { console.info('All items') }} >All Items</button>
    <button onClick={() => { console.info('Coming up twitter listings') }} >Coming up twitter listings</button>

    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
