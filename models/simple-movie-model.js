/* globals require module */
"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SimpleMovieSchema = new Schema({
    imdbId: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    }
});

//  /title/tt0067992/?ref_=adv_li_tt
function extractImdbIdFromUrl(url) {
    let index = url.indexOf("/?ref");

    return url.substring("/title/".length, index);
}

let SimpleMovie;

SimpleMovieSchema.statics.getSimpleMovieByNameAndUrl = (name, url) => {
    let imdbId = extractImdbIdFromUrl(url);

    return new SimpleMovie({
        imdbId,
        name
    });
};

SimpleMovieSchema.virtual.imdbUrl = function() {
    return `http://www.imdb.com/title/${this.imdbId}/?ref_=adv_li_tt`;
};


mongoose.model("SimpleMovie", SimpleMovieSchema);
SimpleMovie = mongoose.model("SimpleMovie");
module.exports = SimpleMovie;