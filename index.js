const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://letterboxd.com/director/david-lynch/';
const API_KEY = 'b8f921ba';

const getPostTitles = async () => {
	try {
		// Load David Lynch page
		const { data } = await axios.get(url);

		// Parse HTML with Cheerio
		const $ = cheerio.load(data);

    const $li = $(".poster-container");

    $li.each((i, el) => {
      console.log(el.attribs);
    })

		// Initialise empty data array
		// const postTitles = [];

		// // Iterate over all anchor links for the given selector and ....
		// $('div > p.title > a').each((_idx, el) => {
		// 	// .... extract for each the tag text and add it to the data array
		// 	const postTitle = $(el).text()
		// 	postTitles.push(postTitle)
		// });

		// Return the array with all titles
	} catch (error) {
		throw error;
	}
};

// getPostTitles();

const getMovie = async () => {
	const movie = fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b8f921ba&s=Blue Velvet&y=1986").then(res => res.json()).then(res => console.log(res));
	return movie;
}

getMovie();
