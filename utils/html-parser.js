/* globals module require Promise */
"use strict";

// jsdom - creates fake DOM tree
const jsdom = require("jsdom").jsdom;
const doc = jsdom();
const window = doc.defaultView;
const $ = require("jquery")(window);

module.exports.parseSimpleMovie = (selector, html) => {
    $("body").html(html);

    let items = [];

    $(selector).each((index, item) => {
        const $item = $(item);

        items.push({
            title: $item.html(),
            url: $item.attr("href")
        });
    });

    return Promise.resolve()
        .then(() => items);
};
