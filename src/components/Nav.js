import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom"
import Drawer from './Drawer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'transparent'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="static">
        <Toolbar>
          <Drawer />
          <Typography variant="h6" className={classes.title}>
          <Link to="/game-discovery/"> <Button edge="start" color="white">GAME-DISCOVER</Button></Link>
          </Typography>
          <Link to="/game-discovery/"> <Button edge="start" color="white">Descubrimiento</Button></Link>
         
          <Link to="/game-discovery/nuevos-lanzamientos"> <Button edge="start" color="white">Próximos juegos</Button></Link>



        </Toolbar>
      </AppBar>
    </div>
  );
}