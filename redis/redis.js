const redis= require("redis");
require("dotenv").config();

const client = redis.createClient({
    url:process.env.redisURL
  })
  
    client.on("error", (err) => console.log(err, "ERROR in REDIS"));
  
     client.on("ready",()=>{
         console.log("connected to redis")
     });


     


     module.exports={
         client
     }