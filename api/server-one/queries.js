

const Schema = require("../model/schema");
class MyClass {
    // create(data, callbak) {
    //     console.log('create method...', data);
    //     const note = new Schema({
    //         random_num: data.random_number || Math.random(),
    //     });
    //     note.save()
    //         .then(results => {
    //             callbak(null, results);
    //         }).catch(err => {
    //             callbak(err);
    //         });
    // }

    getAll(callbak) {
        Schema.find()
            .then(notes => {
                callbak(null, notes);
            }).catch(err => {
                callbak(err);
            });
    }
}

module.exports = new MyClass();
