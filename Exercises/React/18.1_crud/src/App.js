import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [genre, setGenre] = useState("");
  const [valid, setValid] = useState({
    valid: true,
    msg: null,
  });

  let newInput;
  useEffect(() => {
    console.log([playlist]);
  }, [playlist]);
  useEffect(() => {
    async function getDataFromApi() {
      try {
        const { data } = await axios.get(
          "https://6374a94848dfab73a4e4fc2d.mockapi.io/musicPlaylist"
        );
        // console.log(data);
        const fixedData = data.map((playlistItem) =>
          restructuredObj(playlistItem)
        );
        // console.log(fixedData);
        setPlaylist(fixedData);
      } catch (error) {
        console.log(error);
      }
    }
    getDataFromApi();
  }, []);

  const restructuredObj = (playlistItem) => {
    return {
      first: `${playlistItem.first} ${playlistItem.last}`,
      id: playlistItem.id,
      img: playlistItem.image,
      genre: playlistItem.musicGenre,
      releaseDate: playlistItem.releaseDate,
    };
  };
  useEffect(() => {
    if (!firstName || !genre) {
      setValid({ valid: false, msg: "All Inputs Must Be Filled" });
      // setTimeout(() => {
      //   setValid({ valid: true, msg: "" });
      // }, 1500);
    } else {
      setValid({ valid: true, msg: "" });
    }
  }, [firstName, genre]);

  const handleInput = (event) => {
    if (event.target.value === "") {
      return;
    }
    let newInput = event.target.value;
    console.log(newInput);
    setFirstName(newInput);
  };

  const handleInputAdd = (event) => {
    if (!valid.valid) {
      return;
    }
    axios
      .post("https://6374a94848dfab73a4e4fc2d.mockapi.io/musicPlaylist", {
        first: firstName,
        last: "",
        musicGenre: genre,
      })
      .then((res) => {
        setPlaylist([...playlist, restructuredObj(res.data)]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setFirstName("");
    setGenre("");
  };

  const handleEdit = (id) => {
    if (!firstName && !genre) {
      return;
    }
    const payload = {};
    if (firstName) {
      payload.first = firstName;
    }
    if (genre) {
      payload.musicGenre = genre;
    }
    axios
      .put(
        `https://6374a94848dfab73a4e4fc2d.mockapi.io/musicPlaylist/${id}`,
        payload
      )
      .then((res) => {
        setPlaylist((prev) => {
          //! writing setPlaylist([...playlist, res.data]) did edit the
          //! existing playlist item, rather added a new updated version at the end
          return prev.map((playlistItem) =>
            playlistItem.id === id ? res.data : playlistItem
          );
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setFirstName("");
  };

  const handleDelete = (id, index) => {
    axios
      .delete(`https://6374a94848dfab73a4e4fc2d.mockapi.io/musicPlaylist/${id}`)
      .then((res) => console.log(res));

    const newPlaylist = [...playlist];
    newPlaylist.splice(index, 1);
    console.log(newPlaylist);
    setPlaylist(newPlaylist);
  };

  return (
    <div className="App">
      <div className="playlist-container">
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          className="inputField"
          placeholder="name"
        />
        <input
          type="text"
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
          className="inputField"
          placeholder="genre"
        />
        {!valid.valid && <p className="inputError">{valid.msg}</p>}
        <button className="buttonGetData" onClick={handleInputAdd}>
          Add Artist
        </button>
        <ul>
          {playlist.map(({ id, first: name, img, releaseDate, genre }, i) => {
            // console.log(playlistItem);

            return (
              <li key={id} id={id} className="listItem">
                <img style={{ height: "50px" }} src={img} alt="" />
                <h4>
                  {/* {inputValue} */}
                  {name}
                </h4>
                <h5>{genre}</h5>
                <h5>{releaseDate}</h5>
                <button data-id={id} onClick={() => handleEdit(id)}>
                  Edit Song
                </button>
                <button onClick={() => handleDelete(id, i)}>Delete Song</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
