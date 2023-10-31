const songs = [
    {
      id: 1,
      name: "Despacito",
      artist: "Luis Fonsi ft. Daddy Yankee",
    },
    {
      id: 2,
      name: "Shape of You",
      artist: "Ed Sheeran",
    },
    {
      id: 3,
      name: "Blinding Lights",
      artist: "The Weeknd",
    },
  ];
  
  const getSongs = () => {

    return songs;
  };
  
  const getSong = (id) => {
    const song = songs.find((c) => c.id === id);
    return song;
  };
  
  const createSong = (song) => {
    const newSong = {
      id: songs.length + 1,
      name: song.name || "",
      artist: song.artist || "",
    };
  
    songs.push(newSong);

    return {status: 201, message: 'Song Created'};
  };
  
  const updateSong = (id, newSong) => {
    const currentSong = songs.find((c) => c.id === id);
    
    if (!!currentSong) {
        currentSong.artist = newSong.artist || "";
        currentSong.name = newSong.name || "";

        return {status: 200, message: 'Song Updated'};
    } else {

        return {status: 500, error: 'Something Went Wrong'};
    }
  };
  
  const deleteSong = (id) => {
    const index = songs.findIndex((c) => c.id === id);
  
    if (index === -1) {
      return {status: 500, error: 'Something Went Wrong'};
    } else {
        songs.splice(index, 1);
      return{status: 200, message: 'Song Deleted'};
    }
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default {
    getSongs,
    getSong,
    createSong,
    updateSong,
    deleteSong,
  };