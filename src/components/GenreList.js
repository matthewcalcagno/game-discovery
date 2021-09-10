import React from "react";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';


const GenreList = (props) => {
  const {additions, title} = props
  console.log(additions)
  const additionsRender = additions.map(game => {
      return (
            <Grid key={game.id} item sm={3}>
               <Card className="card-item">
                <CardContent style={{backgroundSize: "100%", background: "  linear-gradient(rgba(0,0,0,2), rgba(0,0,0,0.7)), url('" +game.image_background + "') center top"}}>
                <div style={{textAlign: "center"}}><h2>{game.name}</h2></div>
                </CardContent>
            </Card>
              </Grid>
      )
  })


 if (additions.length < 1) return (
     <div style={{paddingTop: "15rem"}}></div>
 )
  return (
    <div>
        <h3 style={{fontSize: "2.5rem"}}>Géneros</h3>
        <Grid container>
        {additionsRender}
        </Grid>
    </div>
  )
  
};

export default GenreList;
