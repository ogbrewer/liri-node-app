require("dotenv").config();
var keys = require("./key.js");
var Spotify = require('node-spotify-api');
var axios = require("axios")
//console.log(keys);

var spotify = new Spotify(keys.spotify);


if (process.argv[2] === "spotify-this-song") {


    spotify.search({ type: 'track', query: process.argv[3] }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(JSON.stringify(data, null, 2));
    });

}

if (process.argv[2] === "movie-this") {
    var movieName = process.argv[3];
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then( 
    function(response) {
        console.log(response.data.Title);
        console.log(response.data.Year);
        console.log(response.data.imdbRating);
        console.log(response.data.Ratings[1].Value);
        console.log(response.data.Language);
        console.log(response.data.Plot);
        console.log(response.data.Country);
        console.log(response.data.Actors);

      }
    );
}

if (process.argv[2] === "concert-this") {
    var artist = process.argv[3];
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryUrl).then( 
    function(response) {
        console.log(response.data);
       

      }
    );
}