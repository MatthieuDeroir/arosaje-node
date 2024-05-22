const WebSocket = require('ws');
const Conversation = require('../models').Conversation;
const ConversationParticipant = require('../models').ConversationParticipant;
const Message = require('../models').Message;

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Object to store connected users
const users = {};

// Event listener for when a client connects
wss.on('connection', (ws) => {
    ws.on('message', async (message) => {
        const parsedMessage = JSON.parse(message);

        // Handle registration
        if (parsedMessage.type === 'register') {
            console.log('User registered:', parsedMessage.userId);
            users[parsedMessage.userId] = ws;
            return;
        }

        // Handle messaging
        if (parsedMessage.type === 'message') {
            const targetUser = users[parsedMessage.targetUserId];
            if (targetUser) {
                console.log('Message sent:', parsedMessage);
                targetUser.send(JSON.stringify({
                    from: parsedMessage.userId,
                    message: parsedMessage.message
                }));

                // Create or retrieve conversation between users
                const [conversation, created] = await Conversation.findOrCreate({
                    where: { /* condition to identify the conversation */ }
                });

                // Add participants to conversation if needed
                const sender = await ConversationParticipant.findOrCreate({
                    where: { CONVERSATION_ID: conversation.ID, USER_ID: parsedMessage.userId }
                });
                const receiver = await ConversationParticipant.findOrCreate({
                    where: { CONVERSATION_ID: conversation.ID, USER_ID: parsedMessage.targetUserId }
                });

                // Store the message
                await Message.create({
                    CONVERSATION_PARTICIPANT_ID: sender[0].ID,
                    BODY: parsedMessage.message,
                    CREATED_AT: new Date(),
                    UPDATED_AT: new Date()
                });
            }
            return;
        }
    });

    ws.on('close', () => {
        // Clean up users object
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
