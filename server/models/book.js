/*File name:book.js*/
/*Name : Kyeongbin Noh*/
/*StudentID: 301130132*/
/*Date : OCT 22*/

let mongoose = require('mongoose');

//create a model class
let bookModel = mongoose.Schema({
    name:String,
    phoneNumber:Number,
    email:String,
},
{
    collection:"books"
});

module.exports = mongoose.model('Book',bookModel);