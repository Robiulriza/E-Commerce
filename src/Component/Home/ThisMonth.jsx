import React from 'react'
import Container from '../Common/Container'
import SecHead from './SecHead'
import Card from '../Common/Card'
import Bag from '../../assets/Bag.png'
import Jacket from '../../assets/Jacket.png'
import Cooler from '../../assets/Cooler.png'
import Table from '../../assets/Table.png'
import Btn from '../Common/Btn'


const ThisMonth = () => {

  return (
    <div className='mt-38.5'>
            <Container className='relative'>
                <div className="flex items-end gap-22">
                    <SecHead
                    title="This Month"
                    heading="Flash Best Selling Products"
                    />
                </div>
                <div className='mt-10 flex justify-between'>
                        <div>
                            <Card
                                img={Jacket}
                                discounthidden="hidden"
                                product="The north coat"
                                disprice="260"
                                currentprice="360"
                                rating="5"
                                review="65"
                            />
                            </div>
                            <div>
                            <Card
                                img={Bag}
                                discounthidden="hidden"
                                product="Gucci duffle bag"
                                disprice="960"
                                currentprice="1160"
                                rating="5"
                                review="65"
                            />

                            </div>
                            <div>

                            <Card
                                img={Cooler}
                                discounthidden="hidden"
                                product="RGB liquid CPU Cooler"
                                disprice="160"
                                currentprice="170"
                                rating="5"
                                review="65"
                            />
                            </div>
                            <div>
                            <Card
                                img={Table}
                                discounthidden="hidden"
                                product="Small BookSelf"
                                disprice="$375"
                                
                                rating="5"
                                review="65"
                            />

                        </div>
                </div>
                <Btn className="block mx-auto mt-10 hover:bg-[#ff0000] mb-14.25 absolute top-3 right-3">View All</Btn>
            </Container>
        </div>
  )
}

export default ThisMonth
