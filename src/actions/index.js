import api from "../helpers/api";
export const getGames = (action) => {
  let url;
  switch (action) {
    case "PC_GAMES":
      url =
        "/games?ordering=-added&parent_platforms=4&page=1&page_size=20&ordering=-popularity";
      break;

    case "PS_GAMES":
      url =
        "/games?ordering=-added&platforms=18,187&page=1&page_size=20&ordering=-popularrity";
      break;

    case "XBOX_GAMES":
      url =
        "/games?ordering=-added&platforms=1,186&page=1&page_size=20&ordering=-popularity";
      break;
    case "SWITCH_GAMES":
      url =
        "/games?ordering=-added&parent_platforms=7&page=18&page_size=20&ordering=-popularity";
      break;
    case "UPCOMING_GAMES":
      url =
        "/games/lists/recent-games-future?platforms=4,18,187,186,7&discover=true&ordering=-popularity&page_size=20&page=1";
      break;
    case "BEST_YEAR":
      url =
        "/games/lists/greatest?discover=true&platforms=4,18,187,186,7&ordering=-popularity&page_size=20&page=1";
      break;

    case "BEST_LAST_YEAR":
      url =
        "/games/lists/greatest?year=2019&discover=true&platforms=4,18,187,186,7&ordering=-popularity&page_size=20&page=1";
      break;

    case "GENEROS":
      url = "/games?ordering=-popularity&genres=RPG&page=1&page_size=40&filter=true";
      break;

    default:
      url =
        "/games/lists/recent-games-past?discover=true&platforms=4,18,187,186,7&ordering=-popularity&page=1&page_size=20";
  }
  return (dispatch) => {
    api.get(url).then((res) => {
      dispatch({
        type: "GET_GAMES",
        payload: res.data,
      });
    });
  };
};

export const loadMoreGames = (url) => {
  return (dispatch) => {
    api.get(url).then((res) => {
      dispatch({
        type: "GET_MORE_GAMES",
        payload: res.data,
      });
    });
  };
};

export const getGameInfo = (slug) => {
  return (dispatch) => {
    api
      .get("/games/" + slug)
      .then((res) => {
        dispatch({
          type: "SET_GAME_INFO",
          payload: res.data,
        });
        return res.data.id;
      })
      .then((slug) => {
        api
          .get(
            "/games/" +
              slug +
              "/screenshots?page=1&page_size=12&with_deleted=false"
          )
          .then((res) => {
            dispatch({
              type: "SET_GAME_INFO_SS",
              payload: res.data,
            });
          });
          return slug;
      }).then( res => {
        api.get("/games/" + res + "/additions").then(res => {
          dispatch({
            type: "SET_GAME_INFO_ADDITIONS",
            payload: res.data,
          })
        })
        return slug
      }).then( res => {
        api.get("/games/" + res + "/achievements").then(res => {
          dispatch({
            type: "SET_GAME_INFO_TROPHIES",
            payload: res.data,
          })
        })
        return slug
      }).then( res => {
        api.get("/games/" + res + "/game-series").then(res => {
          dispatch({
            type: "SET_GAME_INFO_SERIES",
            payload: res.data,
          })
        })
      })
      .then((slug) => {
        api.get("/games/" + slug + "/movies").then((res) => {
          ;
        });
      });
  };
};
