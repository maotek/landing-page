import React from 'react'
import Container from '../shared/Container'
import Title from '../shared/Title'

const logos = ["discord", "openai", "paypal", "slack", "spotify", "uber", "youtube"]

const Brands = () => {
  return (
    <section>
        <Container className="space-y-8 w-full">
            <div className='text-center max-w-3xl mx-auto'>
                <Title> Trusted by Industry Leaders</Title>
            </div>
            <div className='w-full flex items-center justify-center'>
            <div className='flex flex-row justify-center flex-wrap bg-box-bg rounded-3xl max-w-4xl'>
                {logos.map((logo, key) => (
                    <div key={key} className='p-4 sm:p-5 rounded-xl border-box-border group'>
                        <img src={`./assets/logos/${logo}.png`} width="100" height="60" alt={logo} className='h-7 w-auto sm:h-10 ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105'/>
                    </div>
                ))}
            </div>
            
            </div>
        </Container>
    </section>
  )
}

export default Brands