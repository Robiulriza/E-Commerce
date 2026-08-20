
import Header from '../Component/Common/Header'
import Items from '../Component/Common/Items'
import Music from '../Component/Common/Music'
import NavBar from '../Component/Common/NavBar'
import Service from '../Component/Common/Service'
import Banner from '../Component/Home/Banner'
import Categories from '../Component/Home/Categories'
import FlashSales from '../Component/Home/FlashSales'
import Footer from '../Component/Home/Footer'
import NewArrival from '../Component/Home/NewArrival'
import OurProduct from '../Component/Home/OurProduct'
import OurServices from '../Component/Home/OurServices'
import ThisMonth from '../Component/Home/ThisMonth'


const Home = () => {
  return (
    <>
      <Header/>
      <NavBar/>
      <Banner/>
      <FlashSales/>
      <Categories/>
      <ThisMonth/>
      <Music/>
      <OurProduct/>
      <NewArrival/>
      <OurServices/>
      <Footer/>
    </>
  )
}

export default Home
