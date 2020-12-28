import React from "react"
import {Drawer, List, ListItem, ListItemText} from "@material-ui/core"
import {Link} from "react-router-dom"
import PsIcon from "../assets/imgs/playstation-icon-white.png"
import XboxIcon from "../assets/imgs/xbox-icon-white.png"
import PcIcon from  "../assets/imgs/pc-icon-white.png"
import SwitchIcon from  "../assets/imgs/switch-icon-white.png"
import CalendarIcon from  "../assets/imgs/calendar-icon-white.png"
import BestYearIcon from  "../assets/imgs/best-year-icon-white.png"
import TrophyIcon from  "../assets/imgs/trophy-icon-white.png"
import StarIcon from  "../assets/imgs/star-icon-white.png"

const DrawerComponent = () => {

    return (
        
        <Drawer
        className="nav-drawer"
        variant="persistent"
        anchor="left"
        open={true}
        >
              <ListItem>
                    <ListItemText className="nav-title">Game Discovery<hr></hr></ListItemText>
                </ListItem>
            <List>
                <ListItem>
                    <ListItemText className="nav-title">Tendencias</ListItemText>
                </ListItem>
                <ListItem button>
                <div ><img  style={{width: "30px", padding: "1px", marginRight: "10px"}} src={StarIcon} /> </div> <Link to="/game-discovery/"><ListItemText className="nav-subtitle">Descubrimiento</ListItemText></Link>
                </ListItem>
                <ListItem button>
                <div ><img  style={{width: "30px", padding: "1px", marginRight: "10px"}} src={CalendarIcon} /> </div>  <Link to="/game-discovery/nuevos-lanzamientos"> <ListItemText className="nav-subtitle">Próximos juegos</ListItemText> </Link> 
                </ListItem>
 
                <ListItem>
                    <ListItemText className="nav-title">Los mejores</ListItemText>
                </ListItem>
                <ListItem button>
                <div ><img  style={{width: "30px", padding: "1px", marginRight: "10px"}} src={TrophyIcon} /> </div> <Link to="/game-discovery/mejores-juegos-del-ano">   <ListItemText className="nav-subtitle">Lo mejor del año</ListItemText></Link>
                </ListItem>
                <ListItem button>
                <div ><img  style={{width: "30px", padding: "1px", marginRight: "10px"}} src={BestYearIcon} /> </div>  <Link to="/game-discovery/mejores-juegos-del-ano-pasado"> <ListItemText className="nav-subtitle">Popular del año pasado</ListItemText> </Link>
                </ListItem>
                <ListItem>
                    <ListItemText className="nav-title">Géneros de juego</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText className="nav-title">Plataformas</ListItemText>
                </ListItem>
                <ListItem button>
                <div ><img  style={{width: "30px", padding: "1px", marginRight: "10px"}} src={PcIcon} /> </div> <Link to="/game-discovery/juegos-para-pc"><ListItemText className="nav-subtitle">PC</ListItemText></Link>
                </ListItem>
                <ListItem button>
                <div ><img  style={{width: "30px", padding: "1px", marginRight: "10px"}} src={PsIcon} /> </div> <Link to="/game-discovery/juegos-para-playstation"> <ListItemText className="nav-subtitle">  Playstation  </ListItemText>   </Link>             </ListItem>
                <ListItem button>
                <div ><img  style={{width: "30px", padding: "1px", marginRight: "10px"}} src={XboxIcon} /> </div> <Link to="/game-discovery/juegos-para-xbox"> <ListItemText className="nav-subtitle">  Xbox</ListItemText> </Link>
                </ListItem>
                <ListItem button>
                <div ><img  style={{width: "30px", padding: "1px", marginRight: "10px"}} src={SwitchIcon} /> </div> <ListItemText className="nav-subtitle">  Switch</ListItemText>

                </ListItem>
                
            </List>

        </Drawer>
    )
}

export default DrawerComponent