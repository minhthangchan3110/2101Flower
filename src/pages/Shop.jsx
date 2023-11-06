import React, { useState } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container, Col, Row } from 'reactstrap'
import '../Style/shop.css'

import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList'
const Shop = () => {
  const [productsData, setProductData] = useState(products);

  const handleFilter = e => {
    const filterValue = e.target.value;
    if (filterValue === 'rose'){
      const filteredProducts = products.filter(
        (item) => item.category === 'rose'
      );
      setProductData(filteredProducts)
    }
    if (filterValue === 'sunflower'){
      const filteredProducts = products.filter(
        (item) => item.category === 'sunflower'
      );
      setProductData(filteredProducts)
    }
    if (filterValue === 'tulip'){
      const filteredProducts = products.filter(
        (item) => item.category === 'tulip'
      );
      setProductData(filteredProducts)
    }
    if (filterValue === 'bibi'){
      const filteredProducts = products.filter(
        (item) => item.category === 'bibi'
      );
      setProductData(filteredProducts)
    }
    if (filterValue === 'gerbera'){
      const filteredProducts = products.filter(
        (item) => item.category === 'gerbera'
      );
      setProductData(filteredProducts)
    }
    if (filterValue === 'lotus'){
      const filteredProducts = products.filter(
        (item) => item.category === 'lotus'
      );
      setProductData(filteredProducts)
    }
    if (filterValue === 'hydrangeas'){
      const filteredProducts = products.filter(
        (item) => item.category === 'hydrangeas'
      );
      setProductData(filteredProducts)
    }
  }

  const handleSearch = e => {
    const searchTerm = e.target.value
    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setProductData(searchedProducts)
  
  }

  return (
    <Helmet title='Shop'>
      <CommonSection title='Products'/>

      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className="filter_widget">
                <select name="" id="" onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="rose">Rose</option>
                  <option value="sunflower">Sunflower</option>
                  <option value="tulip">Tulip</option>
                  <option value="bibi">Bibi</option>
                  <option value="gerbera">Gerbera</option>
                  <option value="lotus">Lotus</option>
                  <option value="hydrangeas">Hydrangeas</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
              <div className="filter_widget">
                <select name="" id="">
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="search_box">
                <input type="text" placeholder='Search' onChange={handleSearch} />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0? <h1 className='text-center fs-4'>No products are found!</h1> : <ProductsList data={productsData}/>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop
