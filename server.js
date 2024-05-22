const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./database/sequelize');
const Routes = require("./routes/index");
const WebsocketServer = require('./sockets/websocket');



const express = require('express');
const app = express();
const port = 4000;

// sequelize.sync({ force: false });


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


app.use('/api/addresses', Routes.Address);
app.use('/api/announces', Routes.Announce);
app.use('/api/auths', Routes.Auth);
app.use('/api/comments', Routes.Comment);
app.use('/api/conversations', Routes.Conversation);
app.use('/api/logins', Routes.Login);
app.use('/api/medias', Routes.Media);
app.use('/api/messages', Routes.Message);
app.use('/api/plants', Routes.Plant);
app.use('/api/roles', Routes.Role);
app.use('/api/species', Routes.Species);
app.use('/api/upkeeps', Routes.Upkeep);
app.use('/api/upkeepStatus', Routes.UpkeepStatus);
app.use('/api/users', Routes.User);
