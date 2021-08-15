if(process.env.NODE_ENV != "production"){
    //development enviorment
    require('dotenv').config();
}

module.exports = {
    APPLICATION_NAME:process.env.APPLICATION_NAME,
    PORT:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI,
    APPLICATION_NAME:process.env.APPLICATION_NAME,
    SECRETJWT:process.env.SECRETJWT,
    SWAGGER_PATH:'../config/swagger/'+process.env.SWAGGER_DOC+'.json'
}