const movieInfo = document.getElementById("movieInfo");
const movieTitleInput = document.getElementById("titleInput");

async function fetchData(searchInput) {
  const encodedMovieTitle = encodeURIComponent(searchInput);
  const response = await fetch(
    `https://www.omdbapi.com/?t=${encodedMovieTitle}&apikey=258a2345#`
  );

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Error fetching movie info.");
  }
}

function formatMovieinfo(movieData) {
  return `
        <p><strong>${movieData.Title} </strong></p>
        <img src= "${movieData.Poster}" alt="poster">
        <p>Director: ${movieData.Director}</p>
        <p>Rating: ${movieData.Ratings[0].Value}</p>
`;
}

function displayMovieInfo(searchInput) {
  movieInfo.innerHTML = "Loading";
  fetchData(searchInput)
    .then((movieData) => {
      const formattedMovieInfo = formatMovieinfo(movieData);
      movieInfo.innerHTML = formattedMovieInfo;
    })
    .catch((error) => {
      console.error("Error:", error);
      movieInfo.innerHTML = "Failed to fetch movie data.";
    });
}

function searchMovieTitle() {
  const userInput = movieTitleInput.value;
  displayMovieInfo(userInput);
}

//search "Guardians of the Galaxy Vol. 2"
