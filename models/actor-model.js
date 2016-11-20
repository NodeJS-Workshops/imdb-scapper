/* globals require module */
"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ActorsMovie = new Schema({
    imdbId: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    roleName: {
        required: true,
        type: String
    }
});

let ActorsSchema = new Schema({
    actorId: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    bio: {
        required: true,
        type: String
    },
    profileImage: String,
    filmography: [ActorsMovie]
});

//  /title/tt0067992/?ref_=adv_li_tt
// function extractActorIdFromUrl(url) {
//     let index = url.indexOf("?ref");

//     return url.substring("/title/".length, index - 1);
// }

let Actor;

// ActorsSchema.statics.getActorDetailsByNameAndUrl = (name, url) => {
//     let actorId = extractActorIdFromUrl(url);

//     return new Actor({
//         actorId,
//         name
//     });
// };

// ActorDetailsSchema.virtual.imdbUrl = function() {
//     return `http://www.imdb.com/title/${this.imdbId}/?ref_=adv_li_tt`;
// };


mongoose.model("Actor", ActorsSchema);
Actor = mongoose.model("Actor");
module.exports = Actor;