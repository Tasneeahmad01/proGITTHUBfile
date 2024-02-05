// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//     title:{
//         type:String,
//         required:true,
//     },
//     description:String,
//     image:{
//         type:String,
//         default:
//         "https://media.istockphoto.com/id/177429276/photo/lake-reflecting-the-singapore-city-skyline-at-night.jpg?s=612x612&w=0&k=20&c=i0PnNYY15lLfxXdbIz0iofmAgvWLpnpU1y_dZ7-4YEA=",
//         set:(v)=> 
//         v===""
//     ?"https://media.istockphoto.com/id/177429276/photo/lake-reflecting-the-singapore-city-skyline-at-night.jpg?s=612x612&w=0&k=20&c=i0PnNYY15lLfxXdbIz0iofmAgvWLpnpU1y_dZ7-4YEA=":v
//     },
//     price:Number,
//     location:String,
//     country:String,
// });
// const Listing = mongoose.model("Listing",listingSchema);
// module.exports = Listing;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: String,
    image: {
        type: String,
        set: (v) => 
        v === "" ?
        "https://unsplash.com/photos/blue-body-of-water-in-front-of-building-near-trees-during-nighttime-M7GddPqJowg"
        : v,
    },
    price: {
        type: Number,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true,
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;