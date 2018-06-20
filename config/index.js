var configValues = require("./config");

module.exports = {
    getDBConnectionString: function() {
        return "mongodb://" + configValues.username + ":" + 
        configValues.passwd + "@ds263710.mlab.com:63710/nodetodoapplication"
    }
}