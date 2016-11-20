/* globals module setTimeout Promise */
"use strict";

module.exports.wait = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};