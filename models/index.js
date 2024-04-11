const AddressModel = require('./addressModel');
const AnnounceModel = require('./announceModel');
const CommentModel = require('./commentModel');
const ConversationModel = require('./conversationModel');
const ConversationParticipantModel = require('./conversationParticipantModel');
const LoginModel = require('./loginModel');
const MediaModel = require('./mediaModel');
const MessageModel = require('./messageModel');
const PlantModel = require('./plantModel');
const RoleModel = require('./roleModel');
const SpeciesModel = require('./speciesModel');
const UpkeepModel = require('./upkeepModel');
const UpkeepStatusModel = require('./upkeepStatusModel');
const UserModel = require('./userModel');

module.exports = {
    Address : AddressModel,
    Announce : AnnounceModel,
    Comment : CommentModel,
    Conversation : ConversationModel,
    ConversationParticipant : ConversationParticipantModel,
    Login : LoginModel,
    Media : MediaModel,
    Message : MessageModel,
    Plant : PlantModel,
    Role : RoleModel,
    Species : SpeciesModel,    
    Upkeep : UpkeepModel,
    UpkeepStatus : UpkeepStatusModel,
    User : UserModel
};
// Path: models/addressModel.js
