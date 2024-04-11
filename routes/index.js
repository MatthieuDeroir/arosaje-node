const addressRoutes = require('./addressRoutes');
const announceRoutes = require('./announceRoutes');
const commentRoutes = require('./commentRoutes');
const conversationParticipantRoutes = require('./conversationParticipantRoutes');
const conversationRoutes = require('./conversationRoutes');
const loginRoutes = require('./loginRoutes'); 
const mediaRoutes = require('./mediaRoutes');   
const messageRoutes = require('./messageRoutes');
const plantRoutes = require('./plantRoutes');
const roleRoutes = require('./roleRoutes');
const speciesRoutes = require('./speciesRoutes');
const upkeepRoutes = require('./upkeepRoutes');
const upkeepStatusRoutes = require('./upkeepStatusRoutes');
const userRoutes = require('./userRoutes');


module.exports = {
    Address: addressRoutes,
    Announce: announceRoutes,
    Comment: commentRoutes,
    ConversationParticipant: conversationParticipantRoutes,
    Conversation: conversationRoutes,
    Login: loginRoutes,
    Media: mediaRoutes,
    Message: messageRoutes,
    Plant: plantRoutes,
    Role: roleRoutes,
    Species: speciesRoutes,
    Upkeep: upkeepRoutes,
    UpkeepStatus: upkeepStatusRoutes,
    User: userRoutes
};