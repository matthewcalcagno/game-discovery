import React, { useEffect } from "react";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { getGames, loadMoreGames } from "../actions";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion"
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
    
    <div className="game-list" style={{ paddingTop: "2rem", margin: '50px' }}>
      <motion.div initial='hidden' animate='visible' variants={{
        hidden: {
          scale: .4,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .3
          }
        }
        
      }}>
        <h1 style={{fontSize: '50px'}}>{title}</h1>
      </motion.div>
      <div style={{ display: "flex" }}>
        <Grid container>
          {results.map((game) => {
            return (
              <Grid key={game.id} item xs={12} md={4} lg={3}>
                
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
