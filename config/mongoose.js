/* globals require module */
"use strict";

const mongoose = require("mongoose");

module.exports = (connectionString) => {
    mongoose.connect(connectionString);
};
