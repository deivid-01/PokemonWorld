import React from "react";
import Card from "./Card"
// className="container d-flex justify-content-center align-items-center"
function Cards({data}) {
   
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
            {
            data.map((card)=> (
                    <div className='col-md-4' key={card.id}>
                    <Card title={card.title}
                          image={card.image}
                          description={card.description}
                          url={card.url}
                    />
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Cards;