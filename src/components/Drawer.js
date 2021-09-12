import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import PsIcon from "../assets/imgs/playstation-icon-white.png"
import XboxIcon from "../assets/imgs/xbox-icon-white.png"
import PcIcon from  "../assets/imgs/pc-icon-white.png"
import BestYearIcon from  "../assets/imgs/best-year-icon-white.png"
import TrophyIcon from  "../assets/imgs/trophy-icon-white.png"
import {Link} from "react-router-dom"

const useStyles = makeStyles({
  list: {
    width: 250,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.6)',
    height: '100vh',
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <h3 style={{marginLeft: '20px', textDecoration: 'underline'}}>Los mejores</h3>
          <ListItem button key={'Lo mejor del año'}>
             <img  style={{width: "30px", padding: "1px", marginRight: "10px"}} src={TrophyIcon} />
            <Link to="/game-discovery/mejores-juegos-del-ano"><ListItemText primary={'Lo mejor del año'} /></Link>
          </ListItem>
          <ListItem button key={'Popular del año pasado'}>
             <img  style={{width: "30px", padding: "1px", marginRight: "10px"}} src={BestYearIcon} />
             <Link to="/game-discovery/mejores-juegos-del-ano-pasado"><ListItemText primary={'Popular del año pasado'} /></Link>
          </ListItem>
          <Divider />
        <h3 style={{marginLeft: '20px', textDecoration: 'underline'}}>Plataformas </h3>
          <ListItem button key={'Playstation'}>
             <img  style={{width: "30px", padding: "1px", marginRight: "10px"}} src={PsIcon} />
             <Link to="/game-discovery/juegos-para-playstation"><ListItemText primary={'Playstation'} /></Link>
          </ListItem>
          <ListItem button key={'Xbox'}>
             <img  style={{width: "30px", padding: "1px", marginRight: "10px"}} src={XboxIcon} />
             <Link to="/game-discovery/juegos-para-xbox"><ListItemText primary={'Xbox'} /></Link>
          </ListItem>
          <ListItem button key={'PC'}>
             <img  style={{width: "30px", padding: "1px", marginRight: "10px"}} src={PcIcon} />
             <Link to="/game-discovery/juegos-para-pc"><ListItemText primary={'PC'} /></Link>
          </ListItem>
          <Divider />
      </List>
     
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
