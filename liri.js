
require("dotenv").config();
var keys = require("./key.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment");


//console.log(keys);

var spotify = new Spotify(keys.spotify);


if (process.argv[2] === "spotify-this-song") {

    spotify.search({ type: 'track', query: process.argv.slice(3).join(" ") }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 1));
        console.log(JSON.stringify(data.tracks.items[0].name, null, 1));
        console.log(JSON.stringify(data.tracks.items[0].external_urls.spotify, null, 1));
        console.log(JSON.stringify(data.tracks.items[0].album.name, null, 1));

    });

}

if (process.argv[2] === "movie-this") {
    var movieName = process.argv.slice(3).join(" ");
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function (response) {
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
     if (process.argv.slice(3).join(" ")===undefined){
        movieName="Mr. Nobody"
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        axios.get(queryUrl).then(
            function (response) {
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
}

if (process.argv[2] === "concert-this") {
    var artist = process.argv.slice(3).join(" ");
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function (response) {
            console.log(response.data.length);
            var data= response.data;
            for (var i=0; i<data.length; i++) {
            console.log(response.data[i].venue.name);
            console.log(response.data[i].venue.country);
            console.log(response.data[i].venue.region);
            console.log(response.data[i].venue.city);
            console.log(moment(response.data[i].datetime).format("MM/DD/YYYY"));
            }
        }
    )
}

if (process.argv[2] === "do-what-it-says") {
    var fs = require("fs");
    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }

        console.log(data);

        var dataArr = data.split(",");
        process.argv[0]="node";
        process.argv[1]="liri.js"
        process.argv[2]=dataArr[0];
        process.argv[3]=dataArr[1];
        console.log(process.argv.slice(3).join(" "));

        if (process.argv[2] === "spotify-this-song") {

            spotify.search({ type: 'track', query: process.argv.slice(3).join(" ") }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }
        
                console.log(JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 1));
                console.log(JSON.stringify(data.tracks.items[0].name, null, 1));
                console.log(JSON.stringify(data.tracks.items[0].external_urls.spotify, null, 1));
                console.log(JSON.stringify(data.tracks.items[0].album.name, null, 1));
        
            });
        
        }
        if (process.argv[2] === "concert-this") {
            var artist = process.argv.slice(3).join(" ");
            var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
            axios.get(queryUrl).then(
                function (response) {
                    console.log(response.data.length);
                    var data= response.data;
                    for (var i=0; i<data.length; i++) {
                    console.log(response.data[i].venue.name);
                    console.log(response.data[i].venue.country);
                    console.log(response.data[i].venue.region);
                    console.log(response.data[i].venue.city);
                    console.log(moment(response.data[i].datetime).format("MM/DD/YYYY"));
                    }
                }
            )
        }
 
if (process.argv[2] === "movie-this") {
    var movieName = process.argv.slice(3).join(" ");
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function (response) {
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
     if (process.argv.slice(3).join(" ")===undefined){
        movieName="Mr. Nobody"
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        axios.get(queryUrl).then(
            function (response) {
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
}
    });
}
