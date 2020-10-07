const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let random = new Schema(
    {
        random_num: {
            type: Number
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("random", random);
