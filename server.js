const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./database/sequelize');
const Routes = require("./routes/index");
const WebsocketServer = require('./sockets/websocket');



const express = require('express');
const app = express();
const port = 4000;

sequelize.sync({ force: false });


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    }
);


app.use('/api/address', Routes.Address);
app.use('/api/announce', Routes.Announce);
app.use('/api/auth', Routes.Auth);
app.use('/api/comment', Routes.Comment);
app.use('/api/conversationParticipant', Routes.ConversationParticipant);
app.use('/api/conversation', Routes.Conversation);
app.use('/api/login', Routes.Login);
app.use('/api/media', Routes.Media);
app.use('/api/message', Routes.Message);
app.use('/api/plant', Routes.Plant);
app.use('/api/role', Routes.Role);
app.use('/api/species', Routes.Species);
app.use('/api/upkeep', Routes.Upkeep);
app.use('/api/upkeepStatus', Routes.UpkeepStatus);
app.use('/api/user', Routes.User);
