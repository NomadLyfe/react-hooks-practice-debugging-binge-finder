import React from "react";
import { Grid } from "semantic-ui-react";
import TVShow from "./TVShow";

function TVShowList(props) {
  function mapAllShows() {
    if (props.searchTerm) {
      const filteredShows = props.shows.filter(s => s.name.toLowerCase().includes(props.searchTerm.toLowerCase()));
      return filteredShows.map(s => {
        return (
          <TVShow show={s} key={s.id} selectShow={props.selectShow} />
        )
      })
    } else {
      return props.shows.map((s) => (
        <TVShow show={s} key={s.id} selectShow={props.selectShow} />
      ));
    }
  }

  return (
    <div className="TVShowList">
      <Grid>{mapAllShows()}</Grid>
    </div>
  );
}

export default TVShowList;
