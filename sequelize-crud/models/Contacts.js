const moment = require('moment');

module.exports = function(sequelize, DataTypes){
    const Contacts = sequelize.define('Contacts',
    {
        id: {type : DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        name: {type : DataTypes.STRING},
        address: {type : DataTypes.STRING},
        position: {type : DataTypes.TEXT}
    });
    
    Contacts.prototype.dateFormat = (date) => (
        moment(date).format('YYYY / MM / DD')
    );
    
    return Contacts;
}