import React, { useState } from "react";
import Episode from "./Episode";

function SelectedShowContainer(props) {
  const [selectedSeason, setSelectedSeason] = useState(1);

  function mapSeasons() {
    if (props.allEpisodes) {
      let seasons = [...new Set(props.allEpisodes.map((e) => e.season))];
      return seasons.map((s) => {
        return (
          <option value={s} key={s}>
            Season {s}
          </option>
        );
      });
    }
  }

  function mapEpisodes(selectedSeason) {
    const filteredEpisodes = props.allEpisodes.filter((e) => e.season === selectedSeason);
    return filteredEpisodes.map(e => {
      return (
        <Episode eachEpisode={e} key={e.id} />
      )
    });
  }

  function handleSelectionChange(e) {
    setSelectedSeason(Number(e.target.value));
  }

  const { selectedShow } = props;

  return (
    <div style={{ position: "static" }}>
      <h2>{selectedShow.name}</h2>
      <img src={selectedShow.image.medium} alt="" />
      <p dangerouslySetInnerHTML={{ __html: selectedShow.summary }}></p>
      <p>Premiered: {selectedShow.premiered}</p>
      <p>Status: {selectedShow.status}</p>
      <p>Average Rating: {selectedShow.rating.average}</p>
      <select style={{ display: "block" }} value={selectedSeason} onChange={handleSelectionChange}>
        {mapSeasons()}
      </select>
      {mapEpisodes(selectedSeason)}
    </div>
  );
}

export default SelectedShowContainer;

/*Array.prototype.unique = function () {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (!arr.includes(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};*/
