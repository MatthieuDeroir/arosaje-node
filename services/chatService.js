/**
 * @module chatService
 * This module is used for handling chat requests.
 * It uses the chat model to interact with the database.
 * It is called by the websocket server.
 */

const Chat = require('../models/chat');
const User = require('../models/user');

/**
 * Registers a user with the websocket server.
 * @param {string} userId - The ID of the user to register.
 * @param {WebSocket} ws - The WebSocket connection for the user.
 */
const registerUser = (userId, ws) => {
    users[userId] = ws;
}

/**
 * Sends a message to a user.
 * @param {string} userId - The ID of the user sending the message.
 * @param {string} targetUserId - The ID of the user receiving the message.
 * @param {string} message - The message to send.
 */
const sendMessage = async (userId, targetUserId, message) => {
    try {
        // Check if the target user exists
         target,
         User = await User.findById(targetUserId);
        if (!targetUser) {
            return 'User not found';
        }
    
        // Create a new chat message
        const chat = new Chat({
            from: userId,
            to: targetUserId,
            message: message
        });

        // Save the chat message to the database
        await chat.save();

        // Send the message to the target user
        const targetUser = users[targetUserId];
        if (targetUser) {
            targetUser.send(JSON.stringify({
                from: userId,
                message: message
            }));
        }
        
        return 'Message sent';
    }
    catch (err) {
        return err.message;
    }
};

