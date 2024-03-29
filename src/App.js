import React, { useEffect } from "react";
import "./assets/css/style.css";
import Nav from "./components/Nav";
import ShowGame from "./components/ShowGame";
import ListPage from "./components/ListPage";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
const App = () => {
  return (
    <div>


       <Nav />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <AnimatePresence>
          <Switch>
            <Route
              path="/game-discovery/juego/:slug"
              exact
              component={(props) => (
                <ShowGame slugSearch={props.match.params.slug} />
              )}
            />
            <Route
              path="/game-discovery/"
              exact
              component={() => (
                <ListPage action="DISCOVER" title="Nuevo y de moda" />
              )}
            />
            <Route
              path="/game-discovery/juegos-para-pc"
              exact
              component={() => (
                <ListPage
                  action="PC_GAMES"
                  title="Encuentra tu nuevo juego de PC"
                />
              )}
            />
            <Route
              path="/game-discovery/nuevos-lanzamientos"
              exact
              component={() => (
                <ListPage
                  action="UPCOMING_GAMES"
                  title="Nuevos juegos que se lanzarán"
                />
              )}
            />
            <Route
              path="/game-discovery/mejores-juegos-del-ano"
              exact
              component={() => (
                <ListPage
                  action="BEST_YEAR"
                  title="Los mejores juegos del año"
                />
              )}
            />
            <Route
              path="/game-discovery/mejores-juegos-del-ano-pasado"
              exact
              component={() => (
                <ListPage
                  action="BEST_LAST_YEAR"
                  title="Los mejores juegos del año pasado"
                />
              )}
            />
            <Route
              path="/game-discovery/juegos-para-playstation"
              exact
              component={() => (
                <ListPage
                  action="PS_GAMES"
                  title="Encuentra tu nuevo juego para la Playstation"
                />
              )}
            />
            <Route
              path="/game-discovery/juegos-para-xbox"
              exact
              component={() => (
                <ListPage
                  action="XBOX_GAMES"
                  title="Encuentra tu nuevo juego para la Xbox"
                />
              )}
            />
          </Switch>
          </AnimatePresence>
          <ListPage />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
