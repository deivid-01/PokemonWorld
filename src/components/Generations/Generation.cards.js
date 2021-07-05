import React from 'react'
import GenerationCard from './Generation.card';

function GenerationCards ({generations,openModal,setSelectedGeneration})
{
    return (
        <div className="container pokedex-grid"  >
            {
            generations.map((generation)=>(
                    <GenerationCard 
                        key={generation.id}
                        generation={generation}
                        openModal={openModal}
                        setSelectedGeneration={setSelectedGeneration}
                    />                
            ))
        }
       
    </div>)
}

export default GenerationCards;