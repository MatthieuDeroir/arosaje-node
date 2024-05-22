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

// First, create the tables that don't have any dependencies
RoleModel.sync()
.then(() => UserModel.sync())
.then(() => UpkeepStatusModel.sync())
.then(() => UpkeepModel.sync())
.then(() => SpeciesModel.sync())
.then(() => PlantModel.sync())
.then(() => MediaModel.sync())
.then(() => MessageModel.sync())
// Then, create the tables that depend on the ones created above
.then(() => AnnounceModel.sync())
.then(() => CommentModel.sync())
.then(() => ConversationModel.sync())
.then(() => ConversationParticipantModel.sync())
.catch((error) => {
    console.error('Error syncing models:', error);
});
// Define relationships


// User has one Address
UserModel.belongsTo(AddressModel, { foreignKey: 'ADDRESS_ID' });
AddressModel.hasOne(UserModel, { foreignKey: 'ADDRESS_ID' });

// User has one Login
UserModel.belongsTo(LoginModel, { foreignKey: 'LOGIN_ID' });
LoginModel.hasOne(UserModel, { foreignKey: 'LOGIN_ID' });

// User has one Role
UserModel.belongsTo(RoleModel, { foreignKey: 'ROLE_ID' });
RoleModel.hasMany(UserModel, { foreignKey: 'ROLE_ID' });

// User has one Profile Picture
UserModel.belongsTo(MediaModel, { foreignKey: 'PROFILE_PICTURE_ID' });
MediaModel.hasOne(UserModel, { foreignKey: 'PROFILE_PICTURE_ID' });


// User has many Media, PLants and Upkeeps
UserModel.hasMany(MediaModel, { foreignKey: 'USER_ID' });
MediaModel.belongsTo(UserModel, { foreignKey: 'USER_ID' });
UserModel.hasMany(PlantModel, { foreignKey: 'OWNER_ID' });
PlantModel.belongsTo(UserModel, { foreignKey: 'OWNER_ID' });
UserModel.hasMany(UpkeepModel, { foreignKey: 'USER_ID' });
UpkeepModel.belongsTo(UserModel, { foreignKey: 'USER_ID' });


// Plant has one Species
PlantModel.belongsTo(SpeciesModel, { foreignKey: 'SPECIES_ID' });
SpeciesModel.hasMany(PlantModel, { foreignKey: 'SPECIES_ID' });

// Plant has many Upkeeps
UpkeepModel.belongsTo(PlantModel, { foreignKey: 'PLANT_ID' });
PlantModel.hasMany(UpkeepModel, { foreignKey: 'PLANT_ID' });


// Upkeep has one UpkeepStatus
UpkeepModel.belongsTo(UpkeepStatusModel, { foreignKey: 'UPKEEP_STATUS_ID' });
UpkeepStatusModel.hasMany(UpkeepModel, { foreignKey: 'UPKEEP_STATUS_ID' });

// Announce has one User
// AnnounceModel.belongsTo(UserModel, { foreignKey: 'ANNOUNCER_ID' });


CommentModel.belongsTo(UserModel, { foreignKey: 'USER_ID' });


ConversationModel.hasMany(ConversationParticipantModel, { foreignKey: 'CONVERSATION_ID' });
ConversationParticipantModel.belongsTo(ConversationModel, { foreignKey: 'CONVERSATION_ID' });

MessageModel.belongsTo(ConversationParticipantModel, { foreignKey: 'CONVERSATION_PARTICIPANT_ID' });
ConversationParticipantModel.hasMany(MessageModel, { foreignKey: 'CONVERSATION_PARTICIPANT_ID' });













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
