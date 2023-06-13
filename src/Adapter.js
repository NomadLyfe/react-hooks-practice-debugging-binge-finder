class Adapter {
  static getShows (setShows){
    fetch("http://api.tvmaze.com/shows")
    .then(res => res.json())
    .then((data) => setShows(data))
  }

   static getShowEpisodes (setSelectedShow, setEpisodes, show){
     fetch(`http://api.tvmaze.com/shows/${show.id}/episodes`)
     .then(res => res.json())
     .then((data) => {
      setSelectedShow(show);
      setEpisodes(data);
    })
   }
}

export default Adapter
