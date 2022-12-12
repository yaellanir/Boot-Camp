//! 1.1 Display all docuuments in restaurant collection
// db.restaurants.find()
//! 1.2 all rest with specific cuisines
// db.restaurants.find({type:"seafood"})
//! 1.3 only kosher
// db.restaurants.find({kosher:true})
//! 1.4 only specified cities
// db.restaurants.find({
//  "city": {"$in": ["holon", "bat yam"]}
// })
//! 1.5 rest by address
// db.restaurants.find({
//  "street": "kadman 14", "city": "holon"}
// })
//! 1.6 rest by coords
// db.restaurants.find({
//  "coordinates": [ '-4561', '2568' ]
// })
//! 1.7 asc order by name
// db.restaurants.find().sort({name: 1})
//! 1.8 asc order by city names
// db.restaurants.find().sort({city: 1})
//! 1.9 update a rests name
// db.restaurants.updateOne({
//  _id:ObjectId("6395eeb97187c101fc971dce")},
//  {$set: {name:"NAMAMAMA"}
// })
//! 1.10 add a new review
// db.restaurants.updateOne({
//  _id:ObjectId("6395eeb97187c101fc971dce")},
//  {$push: {reviews: "Yael likes it though"}
// })
//! 1.11 add a new review
// db.restaurants.updateOne({
//  {}, { $set : {"kosher": true}}
// })
//! 1.12 delete a rest
// db.restaurants.deleteOne({
//  _id:ObjectId("6395eeb97187c101fc971dce"
// })
//! 1.13 delete all rests
// db.restaurants.deleteMany({
//
// })

//! 2 forEach queries
//? 2.1 print each name
// db.restaurants.find().forEach((doc)=>console.log(doc.name))
//? 2.2 print each city
// db.restaurants.find().forEach((doc)=>console.log(doc.city))
//? 2.3 print each coords
// db.restaurants.find().forEach((doc)=>console.log(doc.coordinates))

//! 3 Advanced queries
//? 3.1 names start with specific letter
// db.restaurants.find({name: { $regex: /^b/}})
//? 3.2 doc count
// db.restaurants.countDocuments()
//? 3.3 rest with reviews from specific date
// db.restaurants.countDocuments()

db.restaurants.updateOne({ _id: ObjectId("6395fdda7187c101fc971dd3") },{reviews: {$set: [{ date: new Date(), score: 8 },{ date: new Date("2020-1-4"), score: 4 }]}});
