const axios = require('axios');
const cheerio = require('cheerio');

const wsop = 'https://www.25kfantasy.com/players/';

const players = [
  {
    name: 'Alex',
    draftedPlayers: [
      {
        playerName: 'Bryce Yockey',
        score: 0
      },
      {
        playerName: 'Maxx Coleman',
        score: 0
      },
      {
        playerName: 'Dan Zack',
        score: 0
      },
      {
        playerName: 'John Hennigan',
        score: 0
      },
      {
        playerName: 'Sean Winter',
        score: 0
      },
      {
        playerName: 'Jason Koon',
        score: 0,
      },
      {
        playerName: 'Brian Hastings',
        score: 0
      },
      {
        playerName: 'Sergio Aido',
        score: 0
      },
      {
        playerName: 'Aleksejs Ponakovs',
        score: 0
      }
    ]
  }
];

const getPlayers = async () => {
	try {
		const { data } = await axios.get(wsop);

		// Parse data with Cheerio
		const $ = cheerio.load(data);

		const $anchors = $("a");
		
		$anchors.each((index, value) => {
			if ($(value).attr('href').includes('/players/player-profile/')){
				console.log($(value).text());
			}
		})
	} catch (error) {
		throw error;
	}
};

const getScores = async () => {

	players.forEach((player => {
		player.draftedPlayers.forEach(draftee => {
			const query = draftee.playerName.toLowerCase().split(" ").join("-");
			const playerURL = `https://www.25kfantasy.com/players/player-profile/${query}/`;
			try {
				const { data } = await axios.get(playerURL);
				const $ = cheerio.load(data);
		
				const $td = $('tr').find('td');
		
				$td.each((index, value) => {
					if (index === 2){
						console.log($(value).text());
					}
				});
				
			} catch (error) {
				throw error;
			}
		})
	}));



	
}


// getPlayers();

getScores('Viktor Blom');












// const getMovie = async () => {
// 	const movie = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b8f921ba&s=Blue Velvet&y=1986").
// 		then(res => res.json()).
// 		then(res => 
// 			console.log(res.Search[0])
// 		);
// 	return movie;
// }

// var movies = getMovie();

