import React from "react";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";


const Additions = (props) => {
  const {additions, title, bgColor} = props
  console.log(additions)
  const additionsRender = additions.map(game => {
      return (
            <Grid key={game.id} item sm={3}>
                <Card
                  name={game.name}
                  image={game.background_image}
                  metacritic={game.metacritic}
                  key={game.id}
                  parent_platforms={game.parent_platforms}
                  slug={game.slug}
                  bgColor={bgColor}
                />
              </Grid>
      )
  })


 if (additions.length < 1) return (
     <div style={{paddingTop: "15rem"}}></div>
 )
  return (
    <div>
        <Grid container>  <h3 style={{fontSize: "2.5rem"}}>{title}</h3></Grid>
        <Grid container>
        {additionsRender}
        </Grid>
    </div>
  )
  
};

export default Additions;
