// API
const API_KEY = "2727beea2b3d10e49d719a9ae80238bf"; // Replace with your actual API key
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

// DOM elements
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const popularBtn = document.getElementById("popular-btn");
const topRatedBtn = document.getElementById("top-rated-btn");
const moviesGrid = document.getElementById("movies");
const modal = document.getElementById("movie-details");
const closeBtn = document.querySelector(".close");

// current state
let currentMovies = [];

// initialize app
window.onload = function () {
  getPopularMovies();
  setupEventListeners();
};

// event Listeners
function setupEventListeners() {
  searchBtn.addEventListener("click", searchMovies);
  popularBtn.addEventListener("click", () => {
    popularBtn.classList.add("active");
    topRatedBtn.classList.remove("active");
    getPopularMovies();
  });
  topRatedBtn.addEventListener("click", () => {
    topRatedBtn.classList.add("active");
    popularBtn.classList.remove("active");
    getTopRatedMovies();
  });
  closeBtn.addEventListener("click", closeModal);

  // Close modal when clicking outside
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // search when enter key pressed
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchMovies();
    }
  });
}

// get popular movies
function getPopularMovies() {
  fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      currentMovies = data.results;
      displayMovies(currentMovies);
    })
    .catch((error) => console.error("Error:", error));
}

// get top-rated movies
function getTopRatedMovies() {
  fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      currentMovies = data.results;
      displayMovies(currentMovies);
    })
    .catch((error) => console.error("Error:", error));
}

// search for movies
function searchMovies() {
  const query = searchInput.value.trim();
  if (query === "") return;

  fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      currentMovies = data.results;
      displayMovies(currentMovies);
    })
    .catch((error) => console.error("Error:", error));
}

// display movies
function displayMovies(movies) {
  moviesGrid.innerHTML = "";

  if (movies.length === 0) {
    moviesGrid.innerHTML =
      '<p class="no-results">No movies found. Try a different search.</p>';
    return;
  }

  movies.forEach((movie) => {
    if (!movie.poster_path) return;

    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.innerHTML = `
            <img src="${IMG_URL}${movie.poster_path}" alt="${
      movie.title
    }" data-id="${movie.id}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p><i class="fas fa-star"></i> ${movie.vote_average.toFixed(
                  1
                )}</p>
            </div>
        `;

    movieCard.addEventListener("click", () => showMovieDetails(movie.id));
    moviesGrid.appendChild(movieCard);
  });
}

// show movie info
function showMovieDetails(movieId) {
  const movie = currentMovies.find((m) => m.id == movieId);

  if (!movie) return;

  document.getElementById("modal-title").textContent = movie.title;
  document.getElementById("modal-poster-img").src = IMG_URL + movie.poster_path;
  document.getElementById("modal-poster-img").alt = movie.title;
  document.getElementById("modal-overview").textContent =
    movie.overview || "No overview available.";

  // format release date
  const releaseDate = movie.release_date
    ? new Date(movie.release_date).toLocaleDateString()
    : "Unknown";
  document.getElementById(
    "modal-date"
  ).innerHTML = `<i class="far fa-calendar-alt"></i> ${releaseDate}`;

  document.getElementById(
    "modal-rating"
  ).innerHTML = `<i class="fas fa-star"></i> ${movie.vote_average.toFixed(1)}`;

  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

// close modal
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
}
