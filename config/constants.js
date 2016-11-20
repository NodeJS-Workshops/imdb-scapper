/* globals module */
"use strict";

const _ = require("lodash");

module.exports = {
    connectionString: "mongodb://localhost/moviesDb",
    genres: ["action", "sci-fi", "fantasy", "horror", "comedy"],
    pagesCount: 20,
    delayTime: 1000,
    asyncPagesCount: 15,
    moviesListUrl: _.template("http://www.imdb.com/search/title?genres=<%= genre %>&title_type=feature&sort=moviemeter,asc&page=<%= pageNum %>&view=simple&ref_=adv_nxt"),
    movieDetailsUrl: _.template("http://www.imdb.com/title/<%= imdbId %>/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2495768522&pf_rd_r=1CS87QBS7W60MRC6JFS0&pf_rd_s=right-7&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_t0"),
    actorDetailsUrl: _.template("http://www.imdb.com/name/<%= actorId %>/?ref_=nv_sr_2")
};