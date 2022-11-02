const apiKey = '295c402138c0cc69ea8401f46eaf83c4';

const requests = {
	fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_network=213`,
	fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
};

export default requests;
