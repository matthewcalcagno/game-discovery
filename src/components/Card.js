import React from "react"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PsIcon from "../assets/imgs/playstation-icon-white.png"
import XboxIcon from "../assets/imgs/xbox-icon-white.png"
import PcIcon from  "../assets/imgs/pc-icon-white.png"
import {Link} from "react-router-dom"

const CardComponent = props => {
  const colorScore = (score) => {
   if (score > 74) return "metacritic-good"
   if (score > 49 && score < 75) return "metacritic-meh "
   else if (!score) return " metacritic-none"
   return "metacritic-bad"
  }
  const {name,image, metacritic, parent_platforms, slug, bgColor} = props
 
  const renderPlatforms = parent_platforms => {
   return parent_platforms.map( platform => {
     let imgIcon
     if (platform.platform.slug === "pc") imgIcon = PcIcon
     else if (platform.platform.slug === "xbox") imgIcon = XboxIcon
     else if (platform.platform.slug === "playstation") imgIcon = PsIcon
    if (!imgIcon) return undefined
     return (
       <div style={{ marginLeft: "0.5rem"}}>
                <img style={{width: "15px", marginTop: "2px"}} src={imgIcon} />
       </div>
     )
   })
  }
    return (
      <Link to={"/game-discovery/juego/"+slug} >
        <Card className="card-item">
          <CardMedia
            className="card-media"
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent style={{backgroundColor: bgColor || " "}}>
            <div className="metacritic-card">{renderPlatforms(parent_platforms)}<span className={colorScore(metacritic)}>{metacritic}</span></div>
           <h2>{name}</h2>
          </CardContent>
      </Card>
      </Link>
    )
}

export default CardComponent