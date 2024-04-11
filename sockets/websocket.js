const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Object to store connected users
const users = {};

// Event listener for when a client connects
wss.on('connection', (ws) => {
    // Event listener for when a message is received from a client
    ws.on('message', (message) => {
        const parsedMessage = JSON.parse(message);

        // If the message has a type of 'register', register the user
        if (parsedMessage.type === 'register') {
            console.log('User registered:', parsedMessage.userId);
            users[parsedMessage.userId] = ws;
            return;
        }

        // If the message has a type of 'message', send it to the specified user
        if (parsedMessage.type === 'message') {
            const targetUser = users[parsedMessage.targetUserId];
            if (targetUser) {
                console.log('Message sent:', parsedMessage);
                targetUser.send(JSON.stringify({
                    from: parsedMessage.userId,
                    message: parsedMessage.message
                }));
            }
            return;
        }
    });

    // Event listener for when a client disconnects
    ws.on('close', () => {
        // Remove the user from the users object
        for (let userId in users) {
            if (users[userId] === ws) {
                delete users[userId];
                break;
            }
        }
    });
});

console.log('WebSocket server is running on port 8080');

module.exports = wss;