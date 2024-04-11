const addressController = require('./addressController');
const announceController = require('./announceController');
const commentController = require('./commentController');
const conversationController = require('./conversationController');
const conversationParticipantController = require('./conversationParticipantController');
const loginController = require('./loginController');
const mediaController = require('./mediaController');
const messageController = require('./messageController');
const plantController = require('./plantController');
const roleController = require('./roleController');
const speciesController = require('./speciesController');
const upkeepController = require('./upkeepController');
const upkeepStatusController = require('./upkeepStatusController');
const userController = require('./userController');

module.exports = {
    Address : addressController,
    Announce : announceController,
    Comment : commentController,
    Conversation : conversationController,
    ConversationParticipant : conversationParticipantController,
    Login : loginController,
    Media : mediaController,
    Message : messageController,
    Plant : plantController,
    Role : roleController,
    Species : speciesController,
    Upkeep : upkeepController,
    UpkeepStatus : upkeepStatusController,
    User : userController
};