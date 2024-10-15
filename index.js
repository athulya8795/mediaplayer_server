//import json server
const jsonserver = require('json-server')

//create server
const mediaPlayerServer = jsonserver.create() // it returns server

//import db.json file 
const router = jsonserver.router("db.json")

//create middleware to convert the json format / ability to control break request respose cycle
const middleware = jsonserver.defaults()  // Returns middlewares used by JSON Server.

//set port for the server
const PORT = 3000 || process.env.PORT

//server use middleware
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//listen()
mediaPlayerServer.listen(PORT,()=>{             // listen request
    console.log(`server running successfully at the port number ${PORT}`);
})