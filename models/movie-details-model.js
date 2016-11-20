/* globals require module */
"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CurrentMovieActor = new Schema({
    actorId: {
        required: true,
        type: String
    },
    roleName: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    imageUrl: String
});

let MovieDetailsSchema = new Schema({
    imdbId: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    imageUrl: {
        required: true,
        type: String
    },
    trailerUrl: String,
    description: String,
    genres: [String],
    releaseDate: Date,
    actors: [CurrentMovieActor]
});

//  /title/tt1211837/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2495768522&pf_rd_r=1CS87QBS7W60MRC6JFS0&pf_rd_s=right-7&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_t0
function extractImdbIdFromUrl(url) {
    let index = url.indexOf("/?pf_rd_m");

    return url.substring("/title/".length, index);
}

let MovieDetails;

MovieDetailsSchema.statics.getMovieDetails = (title, imageUrl, trailerUrl, description, genres, releaseDate, url) => {
    let imdbId = extractImdbIdFromUrl(url);

    return new MovieDetails({
        imdbId,
        title,
        imageUrl,
        trailerUrl,
        description,
        genres,
        releaseDate
    });
};

mongoose.model("MovieDetails", MovieDetailsSchema);
MovieDetails = mongoose.model("MovieDetails");
module.exports = MovieDetails;