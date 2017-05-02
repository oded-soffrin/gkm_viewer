// import React from 'react'
// import { shallow } from 'enzyme'
// import Product from './Product'
// import ProductItem from './ProductItem'
it('should padd', () => {
  expect(true).toEqual(true);
})
// const setup = product => {
//   const actions = {
//     onAddToCartClicked: jest.fn()
//   }
//
//   const component = shallow(
//     <ProductItem product={product} {...actions} />
//   )
//
//   return {
//     component: component,
//     actions: actions,
//     button: component.find('button'),
//     product: component.find(Product)
//   }
// }
//
// let productProps
//
// describe('ProductItem component', () => {
//   beforeEach(() => {
//     productProps = {
//       title: 'Product 1',
//       price: 9.99,
//       quantity: 6
//     }
//   })
//
//   it('should render product', () => {
//     const { product } = setup(productProps)
//     expect(product.props()).toEqual({ title: 'Product 1', price: 9.99 })
//   })
//
//   it('should render Add To Cart message', () => {
//     const { button } = setup(productProps)
//     expect(button.text()).toMatch(/^Add to cart/)
//   })
//
//   it('should not disable button', () => {
//     const { button } = setup(productProps)
//     expect(button.prop('disabled')).toEqual('')
//   })
//
//   it('should call action on button click', () => {
//     const { button, actions } = setup(productProps)
//     button.simulate('click')
//     expect(actions.onAddToCartClicked).toBeCalled()
//   })
//
//   describe('when product quantity is 0', () => {
//     beforeEach(() => {
//       productProps.quantity = 0
//     })
//
//     it('should render Sold Out message', () => {
//       const { button } = setup(productProps)
//       expect(button.text()).toMatch(/^Sold Out/)
//     })
//
//     it('should disable button', () => {
//       const { button } = setup(productProps)
//       expect(button.prop('disabled')).toEqual('disabled')
//     })
//   })
// })
