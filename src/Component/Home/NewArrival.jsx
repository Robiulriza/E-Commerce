import React from 'react'
import Playstation from '../../assets/Playstation.png'
import Hats from '../../assets/Hats.png'
import Speaker from '../../assets/Speaker.png'
import Perfume from '../../assets/Perfume.png'
import SecHead from './SecHead'
import Container from '../Common/Container'
import Items from '../Common/Items'


const NewArrival = () => {
    return (
        <div>
            <Container>
                <SecHead
                    title="Featured"
                    heading="New Arrival"
                />
                <div className='mt-15 flex gap-7.5'>
                    <div className='relative'>
                        <Items
                            img={Playstation}
                            title="PlayStation 5"
                            heading="Black and White version of the PS5 coming out on sale."
                        />

                    </div>
                    <div>
                        <div>
                            <div>
                                <div className='relative'>
                                    <div>

                                        <Items
                                            className="top-34.5! left-6!"
                                            img={Hats}
                                            title="Women’s Collections"
                                            heading="Featured woman collections that give you another vibe."
                                        />
                                    </div>

                                </div>
                                <div className='mt-8'>
                                    <div className='flex justify-between'>
                                        <div className='relative'>
                                            <Items
                                                className="top-43.75! left-6!"
                                                img={Speaker}
                                                title="Speakers"
                                                spacing="mb-2!"
                                                heading="Amazon wireless speakers"
                                                gaping="mb-2!"
                                            />

                                        </div>
                                        <div className='relative'>
                                            <Items
                                                className="top-43.75! left-6!"
                                                img={Perfume}
                                                title="Perfume"
                                                spacing="mb-2!"
                                                heading="GUCCI INTENSE OUD EDP"
                                                gaping="mb-2!"
                                            />

                                        </div>

                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </Container>
        </div>
    )
}

export default NewArrival
