const cors = require('cors');

const app = require('express')();

const server = require('http').createServer(app);

const io = require("socket.io")(server);

app.use(cors());

app.get('/', (req,res) => res.json({message: 'its working'}));

io.on('connection', socket => {
    console.log("Socket conectado: ", socket.id);
    
    socket.on('sendClick', data => {
        console.log(data);
        
        socket.broadcast.emit('receiveClick', data)
    })
});

server.listen(3333);