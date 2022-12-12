import { MongoClient } from "mongodb";
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blogDataBase";
import { ObjectId } from "bson";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  async (error, client) => {
    if (error) {
      return console.log("unable to connect to database");
    }
    const db = client.db(databaseName);
    // const myId = new ObjectID();

    // db.runCommand??
    // db.createCollection("blogs", {
    //   validator: {
    //     $jsonSchema: {
    //       bsonType: "object",
    //       required: [
    //         "title",
    //         "postTime",
    //         "numberOfLikes",
    //         "comments",
    //         "authorOfPost",
    //         "postContent",
    //       ],
    //       properties: {
    //         Title: {
    //           bsonType: "string",
    //           description: "this should be of type string and is required",
    //         },
    //         postTime: {
    //           bsonType: "timestamp",
    //           description: "this should be of type string and is required",
    //         },
    //         numberOfLikes: {
    //           bsonType: "int",
    //           description: "this should be of type int and is required",
    //         },
    //         comments: {
    //           bsonType: "array",
    //           description: "this should be of type array and is required",
    //         },
    //       },
    //       authorOfPost: {
    //         bsonType: "string",
    //         description: " this should be of type string and is required",
    //       },
    //       postContent: {
    //         bsonType: "string",
    //         description: " this should be of type string and is required",
    //       },
    //     },
    //   },
    // });

    // db.createCollection("comments", {
    //   validator: {
    //     $jsonSchema: {
    //       bsonType: "object",
    //       required: [
    //         "blogId",
    //         "postTime",
    //         "comment",
    //         "authorOfComment",
    //         "numberOfLikes",
    //       ],
    //       properties: {
    //         blogId: {
    //           bsonType: "objectId",
    //           description: "this should be of type string and is required",
    //         },
    //         postTime: {
    //           bsonType: "timestamp",
    //           description: "this should be of type string and is required",
    //         },
    //         comment: {
    //           bsonType: "string",
    //           description: "this should be of type string and is required",
    //         },
    //       },
    //       authorOfComment: {
    //         bsonType: "string",
    //         description: " this should be of type string and is required",
    //       },
    //       numberOfLikes: {
    //         bsonType: "int",
    //         description: " this should be of type int and is required",
    //       },
    //     },
    //   },
    // });

    const blog = await db.collection("blogs").insertOne({
      title: "title number 1",
      // postTime: new timeStamp(),
      numberOfLikes: 5,
      comments: [],
      authorOfPost: "yael lanir",
      postContent: "this is a a blog",
    });
    console.log(blog.insertedId);

    const { insertedId } = await db.collection("comments").insertOne({
      title: "comment",
      blogId: blog.insertedId,
      // postTime: timeStamp(),
      comment: "this is a comment",
      authorOfComment: "yitz",
      numberOfLikes: 15,
    });

    await db.collection("blogs").updateOne(
      {
        _id: ObjectId(blog.insertedId),
      },
      { $push: { comments: { _id: insertedId, comment: "hello" } } }
    );
  }
);
