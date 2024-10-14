'use client'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'

import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'
import { FiltersProvider } from './context/filters.jsx'


export default function Page() {

  return (
    <FiltersProvider>

  <PrincipalRoot/>
  </FiltersProvider>
  )
  }


  
  export const PrincipalRoot = () => {
    const { filterProducts } = useFilters()

    const filteredProducts = filterProducts(initialProducts)
    return (
  
      <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      
    </CartProvider>
      
    )
  }
  