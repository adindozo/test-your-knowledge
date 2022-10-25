// first reference required modules
const path = require('path');
const express = require('express');

// listen for socket communication on port 3000
const io = require('socket.io')(3000, {
    cors: {
        origin: ['http://localhost:8080']
    }
});


// create an express app
const app = express();

// tell node to use json and HTTP header features in body-parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// handle requests for static resources
app.use('/static', express.static(path.join(__dirname,'public')));
// map client request for socket.io file
app.use('/socket.io', express.static(path.join(__dirname, 
    '/node_modules/socket.io/client-dist/')));




io.on('connection', socket => {
    console.log('new connection made with client='+socket.id);

    // client has sent a new user has joined message
    socket.on('username', msg => {
        console.log('username: ' + msg);
        // attach passed username with this communication socket
        socket.username = msg;
        // broadcast message to all connected clients
        const obj = { message: "Has joined", user: msg };
        socket.broadcast.emit('user joined', obj);
    });    

   // client has sent a chat message ... broadcast it
   socket.on('chat from client', msg => {
    console.log('message received from ' + socket.username);   
    io.emit('chat from server', 
              { user: socket.username, message: msg } );
    });

});


// Use express to listen to port
let port = 8080;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});
