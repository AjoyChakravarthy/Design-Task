import React from 'react'
import './Features.css'
import { featuresData } from '../../data/features'
import Card from '../Card/Card'

function Features() {
    return (
        <div className='features'>
            {featuresData.map(feature => (
                <Card
                    key={feature.id}
                    image={feature.image}
                    description={feature.description}
                />
            ))}
        </div>
    )
}

export default Features
