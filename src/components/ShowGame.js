import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGameInfo } from "../actions";
import PsIcon from "../assets/imgs/playstation-icon-white.png";
import XboxIcon from "../assets/imgs/xbox-icon-white.png";
import PcIcon from "../assets/imgs/pc-icon-white.png";
import SwitchIcon from "../assets/imgs/switch-icon-white.png";
import Gallery from "./Gallery"
import Additions from "./Additions"
import Grid from "@material-ui/core/Grid";
import GenreList from "./GenreList"
const ShowGame = (props) => {
  const { slugSearch } = props;
  useEffect(() => {
    const {
      getGameInfo,
      slugSearch,
      getGameScreenshots,
      getGameMovies,
      id,
    } = props;
    window.scrollTo(0, 0);
    getGameInfo(slugSearch);
  }, [slugSearch]);


  const {
    name,
    metacritic,
    screenshots,
    genres,
    background_image,
    parent_platforms,
    released,
    additions,
    series,
  } = props;

  const renderPlatforms = (parent_platforms) => {
    return parent_platforms.map((platform) => {
      let imgIcon;
      if (platform.platform.slug === "pc") imgIcon = PcIcon;
      else if (platform.platform.slug === "xbox") imgIcon = XboxIcon;
      else if (platform.platform.slug === "playstation") imgIcon = PsIcon;
      if (!imgIcon) return undefined;
      return (
        <div style={{ marginLeft: "0.5rem" }}>
          <img style={{ width: "20px", marginTop: "2px" }} src={imgIcon} />
        </div>
      );
    });
  };
  if (!parent_platforms) return " ";
  console.log(props);
  const releaseDate = new Date(released);
  const monthNames = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE",
  ];
  return (
    <div className="game-info">
      <div
        style={{
          position: "relative",
          background: "center top",
          backgroundSize: "100%",
          zIndex: "1",
          height: "700px",
          backgroundColor: "transparent",
          marginTop: "-49px",
          backgroundImage:
            "linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(" +
            background_image +
            ")",
        }}
      >
        <h1
          style={{
            paddingTop: "450px",
            marginLeft: "50px",
            marginBottom: "10px",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.8rem",
                color: "black",
                backgroundColor: "rgba(255,255,255,0.9)",
                padding: "7px",
                borderRadius: "10px",
              }}
            >
              {monthNames[releaseDate.getMonth()] +
                " " +
                releaseDate.getDate() +
                ", " +
                releaseDate.getFullYear()}
            </span>
          </div>
          {name}
        </h1>
        <div style={{ display: "flex", marginLeft: "50px" }}>
          {renderPlatforms(parent_platforms)}
        </div>
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "60px",
            fontSize: "2rem",
            border: metacritic ? "4px solid white" : "none",
            padding: "10px",
          }}
        >
          {metacritic}
        </div>
      </div>

      <div style={{margin: '0 50px'}}>
      <Grid item sm={12}>
      {screenshots ? <Gallery screenshots={screenshots.results}/> : " "}
      </Grid>
      </div>
      
     

     <br></br>
     <div style={{margin: '0 50px'}}>
      <Grid  item sm={12}>
      {additions ? <Additions title="DLCs y Extras" bgColor="#451e70" additions={additions.results} /> : " "}
      </Grid>
      <Grid  item sm={12}>
      {series ? <Additions title="Juegos relacionados" additions={series.results} /> : " "}
      </Grid>
      <Grid  item sm={12}>
      {genres ? <GenreList title="Juegos relacionados" additions={genres} /> : " "}
      </Grid>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state.GameInfo;
};

export default connect(mapStateToProps, {
  getGameInfo,
})(ShowGame);
