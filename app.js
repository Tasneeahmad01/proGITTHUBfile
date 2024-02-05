const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing"); 
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
let port=3000;
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
 

//
main()
.then(()=>{
 console.log("connected to DB");
})
.catch(err => {
console.log(err);
});
async function main(){
 await mongoose.connect(MONGO_URL);
}

// INDEX.EJS KA ROUTE//
app.set("view engine","ejs");
 app.set("views",path.join(__dirname,"views"));
 app.use(express.urlencoded({extended:true}));
 app.use(methodOverride("_method"));
 app.engine("ejs",ejsMate);
 app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    res.send("Hi,I am boy");
});

// INDEX ROUTE//
app.get("/listings",async (req,res)=>{
   const allListings = await Listing.find({});
   res.render("listings/index.ejs",{allListings});
});

// NEW ROUTE//
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
    });
// SHOW ROUTE//
app.get("/listings/:id",async(req,res)=>{
   let {id}=req.params;
   const listing = await Listing.findById(id); 
   res.render("listings/show.ejs",{listing});
});

// CREATE ROUTE//
app.post("/listings",async(req,res)=>{
const newListing = (req.body.listing);
await newListing;
res.redirect("/listings");
});

// EDIT ROUTE//
app.get("/listings/:id/edit",async(req,res)=>{
    let{ id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
});

//UPDATE ROUTE//
app.post("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  });

  //Delete Route
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  });
    // let deletedListing = await Listing.findByIdAndDelete(id);
    // console.log("deletedListing");
    // res.redirect("/listings");
  //});




// app.get("/testListing",async (req,res)=>{
// let sampleListing = new Listing({
//     title:"My New Villa",
//     description:"By the beach",
//     price:1200,
//     location:"Calangut,Goa",
//     country:"India",
// });
// await sampleListing.save();
// console.log("sample was saved");
// res.send("Successful");
// });
app.listen(port,()=>{
console.log("server is listening to port 3000");
});



