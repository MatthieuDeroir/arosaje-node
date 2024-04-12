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


// Define relationships

// Announce
AnnounceModel.hasOne(UserModel, {
    foreignKey: 'ANNOUNCER_ID',
    as: 'Announcer'
});
UserModel.hasMany(AnnounceModel, {
    foreignKey: 'ANNOUNCER_ID',
    as: 'Announces'
});
AnnounceModel.hasOne(UpkeepModel, {
    foreignKey: 'UPKEEP_ID',
    as: 'Upkeep'
});
UpkeepModel.hasMany(AnnounceModel, {
    foreignKey: 'UPKEEP_ID',
    as: 'Announces'
});

// Comment
CommentModel.hasOne(UserModel, {
    foreignKey: 'USER_ID',
    as: 'User'
});
UserModel.hasMany(CommentModel, {
    foreignKey: 'USER_ID',
    as: 'Comments'
});

// ConversationParticipant
ConversationParticipantModel.hasOne(UserModel, {
    foreignKey: 'USER_ID',
    as: 'User'
});
UserModel.hasMany(ConversationParticipantModel, {
    foreignKey: 'USER_ID',
    as: 'ConversationParticipants'
});
ConversationParticipantModel.hasOne(ConversationModel, {
    foreignKey: 'CONVERSATION_ID',
    as: 'Conversation'
});
ConversationModel.hasMany(ConversationParticipantModel, {
    foreignKey: 'CONVERSATION_ID',
    as: 'ConversationParticipants'
});

// Media
MediaModel.hasOne(UserModel, {
    foreignKey: 'USER_ID',
    as: 'User'
});
UserModel.hasMany(MediaModel, {
    foreignKey: 'USER_ID',
    as: 'Medias'
});

// Message
MessageModel.hasOne(UserModel, {
    foreignKey: 'USER_ID',
    as: 'User'
});
UserModel.hasMany(MessageModel, {
    foreignKey: 'USER_ID',
    as: 'Messages'
});

// Plant
PlantModel.hasOne(SpeciesModel, {
    foreignKey: 'SPECIES_ID',
    as: 'Species'
});
SpeciesModel.hasMany(PlantModel, {
    foreignKey: 'SPECIES_ID',
    as: 'Plants'
});
PlantModel.hasOne(UserModel, {
    foreignKey: 'OWNER_ID',
    as: 'User'
});
UserModel.hasMany(PlantModel, {
    foreignKey: 'OWNER_ID',
    as: 'Plants'
});

// Role
RoleModel.hasOne(UserModel, {
    foreignKey: 'ROLE_ID',
    as: 'User'
});


// User
UserModel.hasOne(LoginModel, {
    foreignKey: 'LOGIN_ID',
    as: 'Login'
  });
LoginModel.belongsTo(UserModel, {
    foreignKey: 'LOGIN_ID',
    as: 'User'
});


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
