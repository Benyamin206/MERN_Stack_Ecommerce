import express from "express"
import authRouter from './routes/authRouter.js'
import dotenv from "dotenv"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"


const app = express()

const port = 3000

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))

dotenv.config()


app.use('/api/v1/auth', authRouter)

app.use(notFound)
app.use(errorHandler)


// const { MongoClient, ServerApiVersion } = require('mongodb');

// import { MongoClient, ServerApiVersion } from "mongodb"

// const uri = "mongodb+srv://benyaminsibarani2406:JIgP6ldWjJuxYIWh@cluster0.qpoml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

import mongoose from "mongoose";

// Gantilah dengan URI Atlas Anda
const uri = process.env.DATABASE

async function run() {
  try {
    // Menghubungkan ke MongoDB Atlas menggunakan Mongoose
    await mongoose.connect(uri);
    console.log("Connected to MongoDB Atlas!");

    // Memastikan koneksi berhasil dengan melakukan ping
    const admin = mongoose.connection.db.admin(); 
    await admin.ping();
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  } finally {
    // Menutup koneksi setelah operasi selesai
    await mongoose.disconnect();
  }
}

run().catch(console.dir);


app.listen(port, () => console.log(`Server up and run at ${port} port`))