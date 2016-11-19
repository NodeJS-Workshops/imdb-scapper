/* globals module require */
"use strict";

const request = require("request");

module.exports = {
    get(url) {
        let promise = new Promise((resolve, reject) => {
            request(url, (err, response, body) => {
                if (err) {
                    reject(err);
                }

                resolve({
                    body,
                    response
                });
            });
        });

        return promise;
    }
};
