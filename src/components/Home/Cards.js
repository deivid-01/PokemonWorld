import React from "react";
import Card from "./Card"
import {Grid} from '@material-ui/core'
// className="container d-flex justify-content-center align-items-center"
function Cards({data}) {
   
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <Grid container direction="row"
                 justify="center"
                alignItems="stretch"
                spacing = {3}

>
            {
            data.map((card)=> (
                <Grid  item style={{display: 'flex',width:300}} key={card.id}>
                    <Card title={card.title}
                          image={card.image}
                          description={card.description}
                          url={card.url}
                    />
                  </Grid>
                ))
            }
            </Grid>
        </div>
    )
}

export default Cards;