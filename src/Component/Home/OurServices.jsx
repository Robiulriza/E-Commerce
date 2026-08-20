import React from 'react'
import Delivery from '../../assets/Delivery.png'
import Support from '../../assets/Support.png'
import Security from '../../assets/Security.png'
import Container from '../Common/Container'
import Service from '../Common/Service'



const OurServices = () => {
  return (
    <div className='mt-34 mb-55'>
      <Container>
        <div className='flex items-center justify-between'>
        <div>
        <Service
        img={Delivery}
        title="FREE AND FAST DELIVERY"
        heading="Free delivery for all orders over $140"
        />
        </div>
        <div>
        <Service
        img={Support}
        title="24/7 CUSTOMER SERVICE"
        heading="Friendly 24/7 customer support"
        />
        </div>
        <div>
        <Service
        img={Security}
        title="MONEY BACK GUARANTEE"
        heading="We return money within 30 days"
        />
        </div>

        </div>
      </Container>
    </div>
  )
}

export default OurServices
