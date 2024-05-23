const movieInfo = document.getElementById("movieInfo");
const movieTitleInput = document.getElementById("movieTitle");

async function fetchData(searchInput) {
  const encodedMovieTitle = encodeURIComponent(searchInput.value);
  const response = await fetch(
    `https://www.omdbapi.com/?t=${encodedMovieTitle}&apikey=258a2345#`
  );

  if (response.ok) {
    const data = response.json();
    return data;
  } else {
    throw new Error("Error fetching movie info.");
  }
}

function formatMovieinfo(movieData) {
  const formattedData = [];
  const movieTitleString = movieData.Title;
  const movieYear = movieData.Year;

  formattedData.push(`
        <p>
            ${movieTitleString}
        </p>
    `);

  return formattedData;
}

function displayMovieInfo(searchInput) {
  movieInfo.innerHTML = "Loading";
  fetchData(searchInput)
    .then((movieData) => {
      const formattedMovieDInfo = formatMovieinfo(movieData);
      movieInfo.innerHTML = formattedMovieDInfo;
    })
    .catch((error) => {
      console.error("Error:", error);
      movieInfo.innerHTML =
        "Failed to fetch bus arrival data. Please check the bus stop ID and try again.";
    });
}

function searchMovieTitle() {
  const userInput = movieTitleInput.value;
  displayMovieInfo(userInput);
}

//search "Guardians of the Galaxy Vol. 2"
