import React, { useEffect } from "react";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { getGames, loadMoreGames } from "../actions";
import { Waypoint } from "react-waypoint";
const ListPage = (props) => {
  useEffect(() => {
    const { getGames, action } = props;
    console.log(action);
    window.scrollTo(0, 0);
    getGames(action);
  }, []);

  const { results } = props;
  if (results == undefined) return " ";
  console.log(props);

  const loadGames = () => {
    const { loadMoreGames, next } = props;
    if (next)  loadMoreGames(next);
   
  };
  const { title } = props;

  return (
    <div className="game-list" style={{ paddingTop: "2rem" }}>
      <h1>{title}</h1>
      <div style={{ display: "flex" }}>
        <Grid container>
          {results.map((game) => {
            return (
              <Grid key={game.id} item sm={3}>
                <Card
                  name={game.name}
                  image={game.background_image}
                  metacritic={game.metacritic}
                  key={game.id}
                  parent_platforms={game.parent_platforms}
                  slug={game.slug}
                />
              </Grid>
            );
          })}
          <Waypoint onEnter={loadGames} />
        </Grid>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state.GameList;
};

export default connect(mapStateToProps, { getGames, loadMoreGames })(ListPage);
