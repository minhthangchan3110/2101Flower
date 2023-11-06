import React,{useState, useEffect} from 'react'
import '../Style/home.css'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import Helmet from '../components/Helmet/Helmet'
import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'
import counterImg from '../assets/images/hero-img.png'
import Clock from '../components/UI/Clock'
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [tulipProducts, setTulipProducts] = useState([])
  const [bibiProducts, setBibiProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])
  const [lotusProducts, setLotusProducts] = useState([])
  const [hydrangeasProducts, setHydrangeasProducts] = useState([])
  useEffect(()=>{
    const filteredTrendingProduct = products.filter(item=> item.category === 'rose');
    setTrendingProducts(filteredTrendingProduct)
    const filteredBestSalesProduct = products.filter(item=> item.category === 'sunflower');
    setBestSalesProducts(filteredBestSalesProduct)
    const filteredTulipProduct = products.filter(item=> item.category === 'tulip');
    setTulipProducts(filteredTulipProduct)
    const filteredBibiProduct = products.filter(item=> item.category === 'bibi');
    setBibiProducts(filteredBibiProduct)
    const filteredPopularProduct = products.filter(item=> item.category === 'gerbera');
    setPopularProducts(filteredPopularProduct)
    const filteredLotusProduct = products.filter(item=> item.category === 'lotus');
    setLotusProducts(filteredLotusProduct)
    const filteredHydrangeasProduct = products.filter(item=> item.category === 'hydrangeas');
    setHydrangeasProducts(filteredHydrangeasProduct)
  },[])
  const year = new Date().getFullYear();
  return <Helmet title={"Home"}>
    <section className='hero_section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero_content">
              <p className='hero_subtitle'>The most beautiful flowers in {year}</p>
              <h2>Where every petal tells a story </h2>
              <p>Here at 2101Flowers, we are committed to offering only the finest floral arrangements and gifts, backed by service that is friendly and prompt. Because all of our customers are important, our professional staff is dedicated to making your experience a pleasant one...</p>
              <motion.button whileTap={{scale:1.2}} className='buy_btn'><Link to='/shop' style={{textDecoration:'none',color:'#fff'}}>SHOP NOW</Link></motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero_img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services/>
    <section className='trending_products'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title'>Trending Products</h2>
          </Col>
          <ProductsList data={trendingProducts}/>
        </Row>
      </Container>
    </section>
    <section className="best_sales">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title'>Best Sales</h2>
          </Col>
          <ProductsList data={bestSalesProducts}/>
          <ProductsList data={lotusProducts}/>
          <ProductsList data={popularProducts}/>
        </Row>
      </Container>
    </section>
    <section className="timer_count">
      <Container>
        <Row>
          <Col lg='6' md='12' className='count_down-col'>
          <div className="clock_top-content">
            <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
            <h3 className='text-white fs-5 mb-3'>Free Shipping in Viet Nam</h3>
          </div>
            <Clock/>
            <motion.button whileTap={{scale:1.2}} className='buy_btn store_btn'><Link to='/shop'>Visit Store</Link></motion.button>
          </Col>
          <Col lg='6' md='12' className='text-end counter_img'> 
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="new_arrivals">
      <Container>
        <Row>
          <Col lg="12" className='text-center mb-5'>
            <h2 className="section_title">New Arrivals</h2>
          </Col>
          <ProductsList data={tulipProducts}/>
          <ProductsList data={bibiProducts}/>
          <ProductsList data={hydrangeasProducts}/>
        </Row>
      </Container>
    </section>
    <section className="popular_category">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className="section_title">Popular in Category</h2>
          </Col>
          <ProductsList data={popularProducts}/>
          <ProductsList data={lotusProducts}/>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home
