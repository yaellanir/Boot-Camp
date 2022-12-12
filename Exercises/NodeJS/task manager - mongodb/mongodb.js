// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectId;

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017/";
const databaseName = "task-manager";

const id = new ObjectId();
// console.log(id.id.length);
// console.log(id.toHexString());
// console.log(id.getTimeStamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  async (error, client) => {
    if (error) {
      return console.log("unable to connect to database");
    }
    // console.log('connected correctly!');
    const users = client.db(databaseName).collection("users");
    // console.log(db);

    const newUser = await users.insertOne({ name: "nemw" });
    console.log(newUser);
    //   {
    //     //  _id: id,
    //     name: "daniel",
    //     age: 38,
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("unable to insert user");
    //     }

    //     console.log(result.ops);
    //   }
    // );
   
      await users.insertMany([
        { name: "jen", age: 28 },
        { name: "gunther", age: 41 },
      ]);

    const tasks = client.db(databaseName).collection("tasks");
    const newTask = await tasks.insertMany(
      [
        { description: "clean the house", completed: true },
        { description: "renew inspection", completed: false },
        { description: "pot plants", completed: false },
      ]
    );
    console.log(newTask);
  }
);
